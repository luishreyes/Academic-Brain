#!/usr/bin/env node
// Generador de datos de boletines para el lector-revista en docs/noticias.html.
//
// Lee los archivos .md de Noticias/ y Noticias-Biotec/ y escribe docs/noticias-data.js.
//
// Además del markdown corriente (encabezados, negrita, cursiva, código, enlaces,
// citas, listas, reglas), entiende la gramática editorial del formato revista
// descrita en docs/formato-boletin.md:
//
//   - Frontmatter YAML ligero: edicion, kicker, titulo, bajada, pigmento,
//     etiquetas, lectura, portada.
//   - Bloques cercados: ```cifras```, ```cita```, ```nota```, ```figura```,
//     ```datos```.
//   - Numeración automática de las secciones `##`.
//   - La sección final "Hilo abierto..." se compone como colofón en campo tinta.
//
// Todo es retrocompatible: un boletín sin frontmatter ni bloques se sigue
// renderizando, y la cabecera de revista se deriva del propio archivo.
//
// Uso:  node docs/build-noticias.mjs
// No tiene dependencias: solo Node (fs/path).

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const DOCS = dirname(fileURLToPath(import.meta.url));
const ROOT = join(DOCS, "..");

const COLLECTIONS = [
  {
    dir: "Noticias",
    label: "IA en educación e ingeniería",
    kicker: "Cuaderno de campo",
    pigmento: "vermellon",
  },
  {
    dir: "Noticias-Biotec",
    label: "Investigación en biotecnología",
    kicker: "Cuaderno de laboratorio",
    pigmento: "ultramar",
  },
];

const PIGMENTOS = {
  vermellon: "var(--pigment-vermilion)",
  vermellón: "var(--pigment-vermilion)",
  ultramar: "var(--pigment-ultramarine)",
  azufre: "var(--pigment-sulphur)",
  pino: "var(--pigment-pine)",
  arcilla: "var(--pigment-clay)",
};

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

const ROMANOS = [
  "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
  "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX",
];

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function pad2(n) {
  return String(n).padStart(2, "0");
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

  // Wiki-links del vault: [[notes/papers/...]] → texto con estilo de archivo
  text = text.replace(/\[\[([^\]]+)\]\]/g, (_, target) => {
    const leaf = target.split("/").pop();
    return `<span class="wikilink" title="${escapeHtml(target)}">${escapeHtml(leaf)}</span>`;
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
  const sinTags = plain.replace(/<[^>]+>/g, "");
  const conAutor = /^[A-ZÀ-Ý][\wÀ-ÿ'’.-]+(,|\s)\s?[A-ZÀ-Ý]\./.test(sinTags);
  const conAnio = /\(\d{4}\)/.test(sinTags);
  const conDoi = /doi\.org|arxiv\.org|biorxiv\.org|chemrxiv\.org/.test(sinTags);
  return (conAutor && conAnio) || (conAnio && conDoi);
}

// --- Frontmatter YAML ligero ----------------------------------------------
// Solo pares clave: valor, y listas [a, b, c]. Suficiente para la cabecera.
function parseFrontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  for (const line of m[1].split("\n")) {
    const mm = line.match(/^([a-zA-ZñáéíóúÁÉÍÓÚ_][\w-]*)\s*:\s*(.*)$/);
    if (!mm) continue;
    let v = mm[2].trim().replace(/^["']|["']$/g, "");
    if (/^\[.*\]$/.test(v)) {
      v = v
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    }
    meta[mm[1]] = v;
  }
  return { meta, body: text.slice(m[0].length) };
}

// --- Bloques cercados: gramática editorial --------------------------------

// ```cifras``` — una o varias cifras separadas por línea en blanco.
// Cada cifra son hasta tres líneas: valor, rótulo, nota.
function renderCifras(raw) {
  const grupos = raw
    .split(/\n\s*\n/)
    .map((g) => g.split("\n").map((l) => l.trim()).filter(Boolean))
    .filter((g) => g.length);
  if (!grupos.length) return "";

  const celdas = grupos
    .map((g) => {
      const [valorCrudo, rotulo = "", nota = ""] = g;
      // Separa la unidad: "86,8 %" / "12x" / "3 min" / "156 000". El espacio
      // fino de millar pertenece al número, no a la unidad.
      const mv = valorCrudo.match(/^([\d.,]+(?:[  ]\d{3})*)\s*(.*)$/);
      const valor = mv ? mv[1] : valorCrudo;
      const unidad = mv ? mv[2] : "";
      return (
        `<div class="stat">` +
        `<div class="stat-val">${escapeHtml(valor)}` +
        (unidad ? `<span class="stat-unit">${escapeHtml(unidad)}</span>` : "") +
        `</div>` +
        (rotulo ? `<div class="stat-lab">${escapeHtml(rotulo)}</div>` : "") +
        (nota ? `<div class="stat-note">${escapeHtml(nota)}</div>` : "") +
        `</div>`
      );
    })
    .join("");

  return `<div class="stat-row" data-n="${grupos.length}">${celdas}</div>`;
}

// ```cita``` — párrafo de cita y, tras línea en blanco, la atribución.
function renderCita(raw, collectionDir) {
  const partes = raw.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  if (!partes.length) return "";
  const texto = partes[0].replace(/\n/g, " ");
  const attr = partes[1] ? partes[1].replace(/\n/g, " ") : "";
  return (
    `<figure class="pullquote">` +
    `<div class="pq-mark" aria-hidden="true">&ldquo;</div>` +
    `<blockquote>${inlineMd(texto, collectionDir)}</blockquote>` +
    (attr ? `<figcaption>${inlineMd(attr, collectionDir)}</figcaption>` : "") +
    `</figure>`
  );
}

// ```nota``` — primera línea es el rótulo, el resto es el cuerpo.
function renderNota(raw, collectionDir) {
  const lineas = raw.split("\n");
  const rotulo = (lineas.shift() || "").trim();
  const cuerpo = lineas.join(" ").trim();
  return (
    `<aside class="callout">` +
    (rotulo ? `<div class="callout-kicker">${escapeHtml(rotulo)}</div>` : "") +
    (cuerpo ? `<p>${inlineMd(cuerpo, collectionDir)}</p>` : "") +
    `</aside>`
  );
}

// Lee un bloque de pares "clave: valor" (usado por figura y datos).
function parseKV(raw) {
  const kv = {};
  const items = [];
  for (const line of raw.split("\n")) {
    const t = line.trim();
    if (!t) continue;
    const li = t.match(/^-\s*(.+?)\s*:\s*([^:]+)$/);
    if (li) {
      items.push({ rotulo: li[1], valores: li[2].split(/\s*\|\s*/).map((s) => s.trim()) });
      continue;
    }
    const mm = t.match(/^([a-zA-ZñáéíóúÁÉÍÓÚ_][\w-]*)\s*:\s*(.*)$/);
    if (mm) kv[mm[1]] = mm[2].trim().replace(/^["']|["']$/g, "");
  }
  return { kv, items };
}

// ```figura``` — imagen con leyenda de sala. Sin src (o con src ausente en
// disco) cae al marco de semitono declarado, nunca a una imagen genérica.
function renderFigura(raw, collectionDir) {
  const { kv } = parseKV(raw);
  const ratio = (kv.ratio || "4/3").replace("/", " / ");
  const existe = kv.src && existsSync(join(DOCS, kv.src));
  // El sistema pide imagen desaturada y cálida; "gris" es el tratamiento por
  // defecto para figuras de paper, que llegan en colores de software.
  const trat = (kv.tratamiento || "gris").toLowerCase();
  const clsTrat = trat === "color" ? "" : ` trat-${escapeHtml(trat)}`;
  const cuerpo = existe
    ? `<img class="fig-img${clsTrat}" src="${escapeHtml(kv.src)}" alt="${escapeHtml(kv.alt || kv.pie || "")}" loading="lazy">`
    : `<div class="fig-placeholder"><span>${escapeHtml(kv.pendiente || "Figura pendiente")}</span></div>`;

  const pie = [];
  if (kv.indice) pie.push(`<span class="fig-index">${escapeHtml(kv.indice)}</span>`);
  const textoPie = [kv.pie, kv.fuente].filter(Boolean).join(" · ");
  if (textoPie) pie.push(`<span>${inlineMd(textoPie, collectionDir)}</span>`);

  return (
    `<figure class="figura">` +
    `<div class="fig-frame" style="aspect-ratio:${escapeHtml(ratio)}">${cuerpo}</div>` +
    (pie.length ? `<figcaption>${pie.join("")}</figcaption>` : "") +
    `</figure>`
  );
}

// --- Gráficos SVG en el lenguaje de la marca ------------------------------
// Sin degradados, sin relleno suave: pigmento plano, reglas de 1 y 2px,
// números en monoespaciada. Se generan aquí para no depender de red ni de
// librerías en el navegador.

const CHART_W = 640;

function svgWrap(inner, alto, titulo, nota, collectionDir) {
  return (
    `<figure class="grafico">` +
    (titulo ? `<figcaption class="graf-title">${inlineMd(titulo, collectionDir)}</figcaption>` : "") +
    `<svg viewBox="0 0 ${CHART_W} ${alto}" role="img" preserveAspectRatio="xMidYMid meet">${inner}</svg>` +
    (nota ? `<figcaption class="graf-note">${inlineMd(nota, collectionDir)}</figcaption>` : "") +
    `</figure>`
  );
}

function numeroES(v) {
  return String(v).replace(".", ",");
}

// tipo: barras / comparacion — barras horizontales, una o dos series.
function chartBarras(kv, items, collectionDir) {
  const series = (kv.series || "").split(/\s*\|\s*/).filter(Boolean);
  const dobles = items.some((it) => it.valores.length > 1);
  const nums = items.flatMap((it) => it.valores.map((v) => parseFloat(v.replace(",", "."))));
  const max = Math.max(...nums.filter((n) => !isNaN(n)), 0) || 1;
  const escala = kv.max ? parseFloat(kv.max.replace(",", ".")) : max * 1.08;

  const filaAlto = dobles ? 54 : 38;
  const top = dobles && series.length ? 26 : 6;
  const alto = top + items.length * filaAlto + 16;
  const labW = 178;
  const barW = CHART_W - labW - 62;

  const out = [];

  if (dobles && series.length) {
    let x = labW;
    series.forEach((s, i) => {
      out.push(
        `<rect x="${x}" y="4" width="10" height="10" fill="${i === 0 ? "var(--pig)" : "var(--ink-700)"}"/>`,
        `<text x="${x + 16}" y="13" class="sv-lab">${escapeHtml(s)}</text>`
      );
      // Archivo en versalitas con tracking: ~8.6px por carácter a 11px
      x += 36 + s.length * 8.6;
    });
  }

  items.forEach((it, i) => {
    const y0 = top + i * filaAlto;
    out.push(
      `<text x="${labW - 12}" y="${y0 + (dobles ? 20 : 16)}" class="sv-cat" text-anchor="end">${escapeHtml(it.rotulo)}</text>`
    );
    it.valores.forEach((vRaw, j) => {
      const v = parseFloat(vRaw.replace(",", "."));
      if (isNaN(v)) return;
      const w = Math.max(1, (v / escala) * barW);
      const y = y0 + (dobles ? j * 17 + 6 : 4);
      const h = dobles ? 13 : 18;
      out.push(
        `<rect x="${labW}" y="${y}" width="${w.toFixed(1)}" height="${h}" fill="${j === 0 ? "var(--pig)" : "var(--ink-700)"}"/>`,
        `<text x="${labW + w + 8}" y="${y + h - (dobles ? 3 : 5)}" class="sv-num">${escapeHtml(numeroES(vRaw))}${escapeHtml(kv.unidad || "")}</text>`
      );
    });
  });

  out.push(`<line x1="${labW}" y1="0" x2="${labW}" y2="${alto - 12}" class="sv-axis"/>`);
  return svgWrap(out.join(""), alto, kv.titulo, kv.nota, collectionDir);
}

// tipo: serie — línea con puntos, un valor por rótulo.
function chartSerie(kv, items, collectionDir) {
  const alto = 260;
  const padL = 52, padR = 22, padT = 18, padB = 42;
  const nums = items.map((it) => parseFloat(String(it.valores[0]).replace(",", ".")));
  const max = kv.max ? parseFloat(kv.max.replace(",", ".")) : Math.max(...nums) * 1.1;
  const min = kv.min ? parseFloat(kv.min.replace(",", ".")) : 0;
  const w = CHART_W - padL - padR;
  const h = alto - padT - padB;
  const px = (i) => padL + (items.length === 1 ? w / 2 : (i / (items.length - 1)) * w);
  const py = (v) => padT + h - ((v - min) / (max - min || 1)) * h;

  const out = [];
  // reglas horizontales tenues, cuatro divisiones
  for (let g = 0; g <= 4; g++) {
    const v = min + ((max - min) * g) / 4;
    const y = py(v);
    out.push(
      `<line x1="${padL}" y1="${y.toFixed(1)}" x2="${CHART_W - padR}" y2="${y.toFixed(1)}" class="sv-grid"/>`,
      `<text x="${padL - 10}" y="${(y + 4).toFixed(1)}" class="sv-num" text-anchor="end">${numeroES(Math.round(v * 10) / 10)}</text>`
    );
  }

  const d = nums.map((v, i) => `${i ? "L" : "M"}${px(i).toFixed(1)},${py(v).toFixed(1)}`).join(" ");
  out.push(`<path d="${d}" fill="none" stroke="var(--pig)" stroke-width="2"/>`);
  nums.forEach((v, i) => {
    out.push(
      `<rect x="${(px(i) - 3.5).toFixed(1)}" y="${(py(v) - 3.5).toFixed(1)}" width="7" height="7" fill="var(--pig)"/>`,
      `<text x="${px(i).toFixed(1)}" y="${alto - 16}" class="sv-cat" text-anchor="middle">${escapeHtml(items[i].rotulo)}</text>`
    );
  });
  out.push(`<line x1="${padL}" y1="${padT + h}" x2="${CHART_W - padR}" y2="${padT + h}" class="sv-axis"/>`);
  return svgWrap(out.join(""), alto, kv.titulo, kv.nota, collectionDir);
}

function renderDatos(raw, collectionDir) {
  const { kv, items } = parseKV(raw);
  if (!items.length) return "";
  const tipo = (kv.tipo || "barras").toLowerCase();
  if (tipo === "serie" || tipo === "linea" || tipo === "línea") {
    return chartSerie(kv, items, collectionDir);
  }
  return chartBarras(kv, items, collectionDir);
}

function renderBloque(tipo, raw, collectionDir) {
  switch (tipo) {
    case "cifra":
    case "cifras":
      return renderCifras(raw);
    case "cita":
      return renderCita(raw, collectionDir);
    case "nota":
      return renderNota(raw, collectionDir);
    case "figura":
      return renderFigura(raw, collectionDir);
    case "datos":
      return renderDatos(raw, collectionDir);
    default:
      return `<pre class="code-block"><code>${escapeHtml(raw)}</code></pre>`;
  }
}

// --- Conversión de markdown a HTML ----------------------------------------
function mdToHtml(body, collectionDir) {
  const lines = body.split("\n");
  const out = [];
  let i = 0;
  let firstH1Skipped = false;
  let deckTomado = false;
  let seccion = 0;
  let deck = null;
  const indice = [];

  const flushParagraph = (buf) => {
    if (!buf.length) return;
    const joined = buf.join(" ").trim();
    if (!joined) return;

    // El primer bloque de texto entre el H1 y la primera sección es la bajada
    // del boletín: se extrae para la cabecera y no se repite en el cuerpo.
    // Los boletines lo escriben de tres formas (cursiva completa, arranque en
    // negrita o cita), y las tres valen.
    if (!deckTomado && seccion === 0 && firstH1Skipped) {
      let d = joined.trim();
      if (/^\*[^*][\s\S]*\*$/.test(d) && !/\*/.test(d.slice(1, -1))) {
        d = d.slice(1, -1).trim(); // cursiva envolvente: la quita el estilo
      }
      deck = inlineMd(d, collectionDir);
      deckTomado = true;
      return;
    }

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

    // Bloque cercado ```tipo
    const fence = trimmed.match(/^```(\w*)\s*$/);
    if (fence) {
      flushParagraph(paraBuf);
      paraBuf = [];
      const tipo = (fence[1] || "").toLowerCase();
      const buf = [];
      i++;
      while (i < lines.length && !/^```\s*$/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      i++; // cierra el cercado
      out.push(renderBloque(tipo, buf.join("\n"), collectionDir));
      continue;
    }

    if (trimmed === "---" || trimmed === "***") {
      flushParagraph(paraBuf);
      paraBuf = [];
      out.push('<hr class="rule-hair">');
      i++;
      continue;
    }

    if (/^#\s+/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      if (!firstH1Skipped) {
        firstH1Skipped = true; // el H1 se muestra en la cabecera; no se duplica
      } else {
        out.push(`<h1>${inlineMd(trimmed.replace(/^#\s+/, ""), collectionDir)}</h1>`);
      }
      i++;
      continue;
    }

    if (/^##\s+/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      const titulo = trimmed.replace(/^##\s+/, "");
      seccion++;
      const slug = `s${seccion}`;
      indice.push({ n: pad2(seccion), titulo: titulo.replace(/<[^>]+>/g, ""), slug });
      const colofon = /^hilo abierto/i.test(titulo) ? " colofon" : "";
      out.push(
        `<h2 id="${slug}" class="sec${colofon}">` +
          `<span class="sec-n">${pad2(seccion)}</span>` +
          `<span class="sec-t">${inlineMd(titulo, collectionDir)}</span>` +
          `<span class="sec-rule"></span>` +
        `</h2>`
      );
      i++;
      continue;
    }

    if (/^###\s+/.test(trimmed)) {
      flushParagraph(paraBuf);
      paraBuf = [];
      out.push(`<h3>${inlineMd(trimmed.replace(/^###\s+/, ""), collectionDir)}</h3>`);
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
      const citado = quoteLines.join(" ").trim();
      if (!deckTomado && seccion === 0 && firstH1Skipped) {
        deck = inlineMd(citado, collectionDir);
        deckTomado = true;
        continue;
      }
      out.push(`<blockquote><p>${inlineMd(citado, collectionDir)}</p></blockquote>`);
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

  return { html: out.join("\n"), deck, indice };
}

function extractTitle(text) {
  const m = text.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : null;
}

function extractDate(filename) {
  const m = filename.match(/^(\d{4})-(\d{2})-(\d{2})/);
  return m ? `${m[1]}-${m[2]}-${m[3]}` : null;
}

function formatDateLabel(iso) {
  if (!iso) return "";
  const [y, mo, d] = iso.split("-").map(Number);
  return `${d} de ${MESES[mo - 1]} de ${y}`;
}

// Título de portada: la fecha ya vive en la cabecera, así que se poda el
// arrastre redundante en cualquiera de sus tres separadores habituales.
function podarFecha(raw) {
  if (!raw) return "";
  return raw
    .replace(/\s*[—–,·-]\s*\d{1,2}\s+de\s+\w+\s+de\s+\d{4}\s*$/i, "")
    .trim();
}

// Secciones de andamiaje: sirven al método, no son el titular del número.
const SECCIONES_SERVICIO =
  /^(memoria del vault|estado del hilo|memoria del vault y estado del hilo|cruce con el vault|hilo abierto|nota metodológ|qué no |lo que no )/i;

// Un titular repetido número tras número mata la portada. Si el H1 es el
// genérico "Boletín de investigación", se toma como titular la primera
// sección con contenido real, que es donde vive la noticia de la semana.
function tituloPortada(h1, indice) {
  const base = podarFecha(h1);
  const generico = /^bolet[íi]n de investigaci[óo]n/i.test(base);
  if (!generico) return base;
  const cabeza = (indice || []).find((s) => !SECCIONES_SERVICIO.test(s.titulo));
  return cabeza ? podarFecha(cabeza.titulo) : base;
}

function contarPalabras(text) {
  return (text.match(/[\wÀ-ÿ'’-]+/g) || []).length;
}

// --- Recolección por colección --------------------------------------------
const collections = [];

for (const { dir, label, kicker, pigmento } of COLLECTIONS) {
  const folder = join(ROOT, dir);
  if (!existsSync(folder)) continue;

  const entries = [];
  for (const file of readdirSync(folder)) {
    if (extname(file) !== ".md") continue;
    if (file.toLowerCase() === "readme.md") continue;

    const full = join(folder, file);
    const text = readFileSync(full, "utf8");
    const { meta, body } = parseFrontmatter(text);

    const id = `${dir}/${basename(file, ".md")}`;
    const date = meta.fecha || extractDate(file);
    const tituloCrudo = meta.titulo || extractTitle(body) || basename(file, ".md");
    const { html, deck, indice } = mdToHtml(body, dir);

    const palabras = contarPalabras(body);
    const pig = meta.pigmento && PIGMENTOS[meta.pigmento.toLowerCase()]
      ? meta.pigmento.toLowerCase()
      : pigmento;

    entries.push({
      id,
      date,
      dateLabel: formatDateLabel(date),
      title: meta.portada || tituloPortada(tituloCrudo, indice),
      titleFull: tituloCrudo,
      kicker: meta.kicker || kicker,
      deck: meta.bajada || deck || "",
      etiquetas: Array.isArray(meta.etiquetas) ? meta.etiquetas : [],
      pigmento: pig,
      pigmentoVar: PIGMENTOS[pig],
      lectura: meta.lectura ? Number(meta.lectura) : Math.max(1, Math.round(palabras / 200)),
      palabras,
      edicionDeclarada: meta.edicion ? Number(meta.edicion) : null,
      indice,
      html,
    });
  }

  // Orden ascendente para numerar ediciones, descendente para mostrar.
  entries.sort((a, b) => (a.date || "").localeCompare(b.date || ""));
  entries.forEach((e, i) => {
    const n = e.edicionDeclarada || i + 1;
    e.edicion = n;
    e.edicionRomana = ROMANOS[n] || String(n);
  });
  entries.reverse();

  collections.push({ dir, label, kicker, pigmento, pigmentoVar: PIGMENTOS[pigmento], entries });
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
