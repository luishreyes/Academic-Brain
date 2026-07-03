# 02 · Ingesta y notas

Ingestar es el acto central del sistema: tomar una fuente (paper, artículo o
libro) y convertirla en una nota estructurada, con metadatos, resumen, keywords
y conexiones. Lo hace el comando `/ingest`.

## Las cuatro formas de entrar una fuente

1. **PDF en el inbox (flujo principal).** Suba uno o varios PDFs a
   `sources/inbox/` (arrastrándolos en GitHub o en su editor), luego escriba
   `/ingest` sin argumentos. Claude los procesa todos, los mueve a
   `sources/pdfs/` con nombre canónico y borra el original del inbox.
2. **Una URL.** `/ingest https://…` — Claude busca el contenido y lo procesa.
   (Si la URL está bloqueada por el proxy, súbala como PDF al inbox.)
3. **Un PDF subido al chat.** Claude lo lee y lo copia a `sources/pdfs/`.
4. **Texto pegado.** Pegue el texto y Claude lo procesa sin PDF.

## Qué hace `/ingest`, paso a paso

1. Obtiene el contenido.
2. Clasifica: `paper`, `article` o `book`.
3. **Lee `keywords.md` completo** (la taxonomía es la fuente de verdad).
4. Extrae metadatos (título, autores, año, revista, DOI/URL…).
5. Redacta el resumen (2–4 párrafos para papers; 1–2 para artículos; 3–5 para
   libros).
6. Asigna 5–12 keywords, respetando la filosofía anti-sesgo (`guia 01`).
7. Si hay keywords nuevas y genuinas, las añade a `keywords.md` con definición.
8. Crea la nota en `notes/papers|articles|books/AAAA-MM-DD_slug.md`.
9. Crea o actualiza la página de cada concepto en `concepts/`.
10. Mueve el PDF del inbox a `sources/pdfs/apellido-año-slug.pdf`.
11. Regenera el grafo: `node docs/build.mjs`.
12. Commitea todo junto con mensaje `ingest: [título corto] — [tipo]`.

El detalle exacto vive en `.claude/commands/ingest.md`. Puede editarlo para
ajustar el flujo a su gusto.

## Nombre canónico de los PDFs

`apellido-primer-autor + año + slug-corto.pdf`
Ejemplo: `kestin2025-tutoria-ia-supera-activo.pdf`

Mantener el nombre canónico evita duplicados y hace rastreable qué PDF
corresponde a qué nota (vía el campo `pdf_local` del frontmatter).

## Anatomía de una nota

Cada nota es un `.md` con dos partes:

- **Frontmatter YAML** (entre `---`): los metadatos que el visualizador lee para
  construir el grafo. El campo `keywords: []` es el que genera las aristas.
- **Cuerpo Markdown**: título, resumen y secciones según el tipo. La sección
  final **"Notas relacionadas"** lleva wiki-links `[[concepts/...]]` a cada
  concepto asignado.

Las plantillas exactas están en `templates/` y el formato canónico en `CLAUDE.md`.

## Convenciones que importan

- **Nombre de archivo:** `AAAA-MM-DD_slug-corto.md`, sin tildes ni espacios.
- **Idioma:** escriba el resumen y los comentarios en el idioma de su vault;
  conserve los metadatos (título, autores, revista) en el idioma original de la
  fuente.
- **Fechas:** ISO 8601 (`AAAA-MM-DD`).
- **Una fuente ya en el vault:** si un PDF ya fue procesado, no lo reprocese.
  Ante un posible duplicado, compare por DOI/título (o por hash del archivo) antes
  de crear nada.

## Ingestar varias fuentes a la vez

Puede pasarle varios PDFs al inbox y correr `/ingest` una sola vez. Para lotes
grandes, y sobre todo para **evitar que las keywords de una fuente sesguen las de
otra**, conviene lanzar un subagente por fuente. Eso se explica en
`guias/04-sintesis-multiagente.md`.
