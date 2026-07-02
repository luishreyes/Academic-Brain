#!/usr/bin/env node
// Generador de datos de boletines para el lector en docs/noticias.html.
//
// Lee los archivos .md de Noticias/ y Noticias-Biotec/, los convierte a HTML
// (parser mínimo: encabezados, negrita, cursiva, código, enlaces, citas,
// listas, líneas horizontales) y escribe docs/noticias-data.js.
//
// Uso:  node docs/build-noticias.mjs
// No tiene dependencias: solo Node (fs/path).

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const DOCS = dirname(fileURLToPath(import.meta.url));
const ROOT = join(DOCS, "..");

const COLLECTIONS = [
  { dir: "Noticias", label: "IA en educación e ingeniería" },
  { dir: "Noticias-Biotec", label: "Investigación en biotecnología" },
];

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// --- Formato inline: negrita, cursiva, código, enlaces --------------------
function inlineMd(raw, collectionDir) {
  let text = escapeHtml(raw);

  // Enlaces markdown [texto](url). Si el destino es un .md relativo (otro
  // boletín de la misma colección), se convierte en navegación interna.
  text = text.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
    if (/^[\w.-]+\.md$/.test(url)) {
      const id = `${collectionDir}/${basename(url, ".md")}`;
      return `<a href="#${id}" class="internal-link" data-goto="${id}">${label}</a>`;
    }
    return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
  });

  // Negrita y cursiva (orden importa: ** antes que *)
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // URLs sueltas (no envueltas ya en un <a>)
  text = text.replace(
    /(^|[^"'>])(https?:\/\/[^\s<]+)/g,
    (_, pre, url) => `${pre}<a href="${url}" target="_blank" rel="noopener">${url}</a>`
  );

  return text;
}

function isReferenceLine(plain) {
  return /^[A-ZÀ-Ý][\wÀ-ÿ'’.-]+(,|\s)\s?[A-ZÀ-Ý]\./.test(plain) && /\(\d{4}\)/.test(plain);
}

// --- Conversión de markdown a HTML ----------------------------------------
function mdToHtml(body, collectionDir) {
  const lines = body.split("\n");
  const out = [];
  let i = 0;
  let firstH1Skipped = false;

  const flushParagraph = (buf) => {
    if (!buf.length) return;
    const joined = buf.join(" ").trim();
    if (!joined) return;
    const cls = isReferenceLine(joined) ? ' class="ref-line"' : "";
    out.push(`<p${cls}>${inlineMd(joined, collectionDir)}</p>`);
  };

  let paraBuf = [];

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      flushParagraph(paraBuf);
      paraBuf = [];
      i++;
      continue;
    }

    if (trimmed === "---") {
      flushParagraph(paraBuf);
      paraBuf = [];
      out.push("<hr>");
      i++;
      continue;
    }

    if (/^#\s+/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      if (!firstH1Skipped) {
        firstH1Skipped = true; // el H1 se muestra aparte como título; no se duplica
      } else {
        out.push(`<h1>${inlineMd(trimmed.replace(/^#\s+/, ""), collectionDir)}</h1>`);
      }
      i++;
      continue;
    }

    if (/^##\s+/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      out.push(`<h2>${inlineMd(trimmed.replace(/^##\s+/, ""), collectionDir)}</h2>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      const quoteLines = [];
      while (i < lines.length && /^>\s?/.test(lines[i].trim())) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      out.push(`<blockquote><p>${inlineMd(quoteLines.join(" "), collectionDir)}</p></blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      const items = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      const allRefs = items.every((it) => isReferenceLine(it));
      const cls = allRefs ? ' class="ref-list"' : "";
      out.push(
        `<ul${cls}>` +
          items.map((it) => `<li>${inlineMd(it, collectionDir)}</li>`).join("") +
          `</ul>`
      );
      continue;
    }

    // línea de texto normal: acumula en el párrafo actual
    paraBuf.push(trimmed);
    i++;
  }
  flushParagraph(paraBuf);

  return out.join("\n");
}

function extractTitle(text) {
  const m = text.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

function extractDate(filename, text) {
  const m = filename.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (m) return `${m[1]}-${m[2]}-${m[3]}`;
  return null;
}

function formatDateLabel(iso) {
  if (!iso) return "";
  const [y, mo, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[mo - 1]} de ${y}`;
}

// --- Recolección por colección --------------------------------------------
const collections = [];

for (const { dir, label } of COLLECTIONS) {
  const folder = join(ROOT, dir);
  if (!existsSync(folder)) continue;

  const entries = [];
  for (const file of readdirSync(folder)) {
    if (extname(file) !== ".md") continue; // ignora README.md igual (extensión coincide, se filtra abajo)
    if (file.toLowerCase() === "readme.md") continue;

    const full = join(folder, file);
    const text = readFileSync(full, "utf8");
    const id = `${dir}/${basename(file, ".md")}`;
    const date = extractDate(file, text);
    const title = extractTitle(text) || basename(file, ".md");
    const html = mdToHtml(text, dir);

    entries.push({ id, date, dateLabel: formatDateLabel(date), title, html });
  }

  entries.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  collections.push({ dir, label, entries });
}

const totalEntries = collections.reduce((n, c) => n + c.entries.length, 0);

const payload = { generated: null, collections };

const out =
  "// Archivo generado automáticamente por docs/build-noticias.mjs — no editar a mano.\n" +
  "window.__NOTICIAS__ = " +
  JSON.stringify(payload, null, 2) +
  ";\n";

writeFileSync(join(DOCS, "noticias-data.js"), out);
console.log(
  `noticias-data.js generado: ${totalEntries} entradas en ${collections.length} colecciones ` +
    `(${collections.map((c) => `${c.dir}: ${c.entries.length}`).join(", ")}).`
);
