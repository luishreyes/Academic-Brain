---
description: Procesa un paper académico, artículo o libro y lo agrega al segundo cerebro con resumen, metadatos, keywords y conexiones.
---

Procesa la fuente proporcionada y agrégala al vault.

**Entrada:** $ARGUMENTS (URL, ruta de archivo, texto pegado, o vacío para revisar `sources/inbox/`)

> Si le pasan varias fuentes a la vez y quiere evitar sesgos de keyword
> (que una fuente "contagie" las keywords de otra), lance **un subagente
> independiente por fuente**. Cada uno juzga su fuente solo por su contenido.
> El orquestador reconcilia al final: keywords.md, páginas de concepto,
> movimiento de PDFs y regeneración del grafo en un solo paso. Ver
> `guias/04-sintesis-multiagente.md`.

## Pasos

### 1. Obtener el contenido

**Sin argumento, o argumento vago ("el nuevo pdf", "los pdfs", "organiza"):**
- Listar `sources/inbox/` (`ls sources/inbox/`).
- Si hay PDFs, procesarlos todos (uno por uno), pasos 2–11 para cada uno.
- Si está vacío, pedir que suban PDFs ahí.

**URL:** usar WebFetch para el contenido completo.
**Ruta de archivo:** leerlo con Read o pdfminer según el tipo.
**PDF subido al chat:** leerlo con pdfminer, copiarlo a `sources/pdfs/apellido-año-slug.pdf`.
**Texto pegado:** procesarlo directamente.

### 2. Clasificar el tipo
`paper` (publicación académica con abstract/metodología/referencias),
`article` (periodístico, ensayo, divulgación) o `book` (libro).

### 3. Extraer metadatos
- **paper:** title, authors[], year, journal/conference, url, doi
- **article:** title, author, publication, date, url
- **book:** title, authors[], year, publisher, url, isbn

### 4. Leer la taxonomía COMPLETA
Leer `keywords.md` entero. Es la fuente de verdad de las keywords.

### 5. Redactar el resumen
- **paper:** 2–4 párrafos (qué problema resuelve, cómo, hallazgos, impacto)
- **article:** 1–2 párrafos (qué reporta, contexto, relevancia)
- **book:** 3–5 párrafos (tesis, estructura, argumentos, relevancia)

### 6. Seleccionar keywords (5–12 por nota)
- Preferir keywords ya existentes en `keywords.md`.
- Para cada candidata nueva: si existe un quasi-duplicado en `keywords.md`
  (mismo concepto, otra forma), usar la forma canónica. Si es genuinamente
  nueva, agregarla a `keywords.md` con una definición corta.
- **Regla de oro (ver `guias/01-filosofia-antisesgo.md`):** asigne solo las
  keywords que describen el contenido *real* de la fuente. Nunca fuerce una
  keyword para "conectar" con otras notas, ni la omita porque el tema es nuevo
  en el vault. Un nodo aislado es válido.

### 7. Crear la nota
`notes/papers/AAAA-MM-DD_slug.md`, `notes/articles/...` o `notes/books/...`,
con el formato exacto de `CLAUDE.md`. Slug corto (3–5 palabras), sin tildes ni
espacios (guiones).

### 8. Actualizar keywords.md
Agregar cada keyword nueva en su sección alfabética con definición.

### 9. Crear/actualizar páginas de concepto
Para cada keyword asignada: si `concepts/slug.md` no existe, crearlo (formato de
`CLAUDE.md`). Si existe, agregar el enlace a la nueva nota bajo "Notas que usan
este concepto".

### 10. Mover el PDF (si vino de `sources/inbox/`)
`mv sources/inbox/original.pdf sources/pdfs/apellido-año-slug.pdf` e incluir esa
ruta en el frontmatter `pdf_local:`.

### 11. Regenerar el grafo
`node docs/build.mjs` para actualizar `docs/graph-data.js`.

### 12. Confirmar y commitear
Mostrar: archivo creado, keywords asignadas, keywords nuevas. Commitear todo
(incluido `docs/graph-data.js`) con mensaje `ingest: [título corto] — [tipo]`.

## Casos especiales
- **Sin acceso a URL:** pedir que suban el PDF a `sources/inbox/`.
- **Varios PDFs:** procesar cada uno; commitear al final todos juntos.
- **Idioma:** resumen y comentarios en el idioma del vault; metadatos (title,
  authors, journal) en el idioma original de la fuente.
- **Keywords:** siempre en el mismo idioma, para mantener la coherencia del grafo.
