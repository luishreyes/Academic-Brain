#!/usr/bin/env node
// Generador de datos del grafo para el visualizador del Academic Brain.
//
// Lee las notas (notes/papers, notes/articles), las páginas de concepto
// (concepts/) y la taxonomía (keywords.md), y escribe docs/graph-data.js
// con los nodos y aristas que consume docs/index.html.
//
// Uso:  node docs/build.mjs
// No tiene dependencias: solo Node (fs/path).

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

const DOCS = dirname(fileURLToPath(import.meta.url));
const ROOT = join(DOCS, "..");

// --- Parser mínimo de frontmatter YAML (subconjunto que usamos) ---------
// Soporta: scalars con/sin comillas, arrays inline [a, b], arrays en bloque
// (líneas "  - item"), y valores vacíos.
function parseFrontmatter(text) {
  if (!text.startsWith("---")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 3);
  if (end === -1) return { data: {}, body: text };
  const raw = text.slice(text.indexOf("\n") + 1, end);
  const body = text.slice(end + 4);
  const lines = raw.split("\n");
  const data = {};
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const m = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let value = m[2].trim();
    if (value === "" || value === "[]") {
      // Puede ser array en bloque debajo, o valor realmente vacío.
      const items = [];
      while (i + 1 < lines.length && /^\s*-\s+/.test(lines[i + 1])) {
        items.push(stripQuotes(lines[++i].replace(/^\s*-\s+/, "").trim()));
      }
      data[key] = items.length ? items : (value === "[]" ? [] : "");
    } else if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => stripQuotes(s.trim()))
        .filter((s) => s.length);
    } else {
      data[key] = stripQuotes(value);
    }
  }
  return { data, body };
}

function stripQuotes(s) {
  if (s.length >= 2 && ((s[0] === '"' && s.at(-1) === '"') || (s[0] === "'" && s.at(-1) === "'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function listMd(dir) {
  const full = join(ROOT, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((f) => ({ rel: `${dir}/${f}`, abs: join(full, f) }));
}

function noteId(rel) {
  return rel.replace(/\.md$/, "");
}

// Cuerpo de la nota listo para leer en el panel: quita el título H1 inicial
// (ya se muestra en la cabecera del detalle) y recorta espacios.
function noteContent(body) {
  return body.replace(/^\s+/, "").replace(/^#\s+[^\n]*\n+/, "").trim();
}

// --- Definiciones canónicas desde keywords.md (fallback de definición) ---
function parseKeywords() {
  const defs = {};
  const path = join(ROOT, "keywords.md");
  if (!existsSync(path)) return defs;
  const text = readFileSync(path, "utf8");
  for (const line of text.split("\n")) {
    // Formato: **keyword** — Definición. _Aliases: ..._
    const m = line.match(/^\*\*([^*]+)\*\*\s*[—-]\s*(.*)$/);
    if (!m) continue;
    const key = m[1].trim();
    let def = m[2].trim();
    def = def.replace(/_Aliases:[^_]*_\s*$/, "").trim();
    defs[key] = def;
  }
  return defs;
}

// --- Construcción del grafo ----------------------------------------------
const keywordDefs = parseKeywords();
const nodes = [];
const links = [];
const nodeIndex = new Map(); // id -> node

function addNode(node) {
  if (nodeIndex.has(node.id)) return nodeIndex.get(node.id);
  nodeIndex.set(node.id, node);
  nodes.push(node);
  return node;
}

// Conceptos (uno por archivo en concepts/)
const conceptByKeyword = new Map(); // keyword -> concept node id
for (const { rel, abs } of listMd("concepts")) {
  const { data, body } = parseFrontmatter(readFileSync(abs, "utf8"));
  const keyword = data.keyword || basename(rel, ".md");
  const id = noteId(rel);
  // Definición: primer párrafo del cuerpo tras el título "#".
  const defMatch = body.replace(/^#[^\n]*\n/m, "").trim().split("\n\n")[0] || "";
  const node = addNode({
    id,
    kind: "concept",
    label: keyword.replace(/-/g, " "),
    keyword,
    aliases: data.aliases || [],
    definition: (defMatch || keywordDefs[keyword] || "").trim(),
    path: rel,
    content: noteContent(body),
  });
  conceptByKeyword.set(keyword, node.id);
}

// Notas (papers y artículos)
for (const dir of ["notes/papers", "notes/articles"]) {
  for (const { rel, abs } of listMd(dir)) {
    const { data, body } = parseFrontmatter(readFileSync(abs, "utf8"));
    const id = noteId(rel);
    const kind = data.type === "paper" ? "paper" : "article";
    const authors = data.authors || (data.author ? [data.author] : []);
    addNode({
      id,
      kind,
      label: data.title || basename(rel, ".md"),
      authors,
      year: data.year || (data.date ? String(data.date).slice(0, 4) : ""),
      venue: data.journal || data.publication || "",
      url: data.url || (data.doi ? `https://doi.org/${data.doi}` : ""),
      doi: data.doi || "",
      keywords: data.keywords || [],
      date: data.date_added || data.date || "",
      path: rel,
      pdf_local: data.pdf_local || "",
      content: noteContent(body),
    });

    // Aristas nota -> concepto (por cada keyword del frontmatter)
    for (const kw of data.keywords || []) {
      let conceptId = conceptByKeyword.get(kw);
      if (!conceptId) {
        // Keyword sin página de concepto: creamos un nodo mínimo.
        const cn = addNode({
          id: `concepts/${kw}`,
          kind: "concept",
          label: kw.replace(/-/g, " "),
          keyword: kw,
          aliases: [],
          definition: keywordDefs[kw] || "",
          path: null,
        });
        conceptByKeyword.set(kw, cn.id);
        conceptId = cn.id;
      }
      links.push({ source: id, target: conceptId, kind: "keyword" });
    }

    // Aristas nota -> nota (wiki-links explícitos a otras notas en el cuerpo)
    const wikiLinks = [...body.matchAll(/\[\[(notes\/[^\]|#]+)/g)].map((mm) =>
      mm[1].trim()
    );
    for (const target of new Set(wikiLinks)) {
      const targetId = target.replace(/\.md$/, "");
      if (targetId !== id) {
        links.push({ source: id, target: targetId, kind: "related" });
      }
    }
  }
}

// Grado de cada concepto (nº de notas que lo usan) para dimensionar nodos.
const degree = new Map();
for (const l of links) {
  if (l.kind === "keyword") {
    degree.set(l.target, (degree.get(l.target) || 0) + 1);
  }
}
for (const n of nodes) {
  if (n.kind === "concept") n.degree = degree.get(n.id) || 0;
}

const counts = {
  papers: nodes.filter((n) => n.kind === "paper").length,
  articles: nodes.filter((n) => n.kind === "article").length,
  concepts: nodes.filter((n) => n.kind === "concept").length,
};

const payload = {
  generated: null, // se deja null para no romper la reproducibilidad del build
  counts,
  nodes,
  links,
};

const out =
  "// Archivo generado automáticamente por docs/build.mjs — no editar a mano.\n" +
  "window.__ACADEMIC_BRAIN__ = " +
  JSON.stringify(payload, null, 2) +
  ";\n";

writeFileSync(join(DOCS, "graph-data.js"), out);
console.log(
  `graph-data.js generado: ${counts.papers} papers, ${counts.articles} artículos, ${counts.concepts} conceptos, ${links.length} aristas.`
);
