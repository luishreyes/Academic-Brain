---
description: Procesa un paper académico o artículo periodístico y lo agrega al Academic Brain vault con resumen, metadatos y keywords.
---

Procesa el paper o artículo proporcionado y agrégalo al vault.

**Entrada:** $ARGUMENTS (URL, ruta de archivo, o texto pegado directamente)

## Pasos a seguir

### 1. Obtener el contenido
- Si es una URL: usar WebFetch para obtener el contenido completo
- Si es un archivo en `inbox/`: leerlo con Read
- Si el usuario subió un PDF directamente en el chat: Claude recibe el contenido del PDF; en el frontmatter poner `pdf_local: sources/pdfs/APELLIDO-AÑO.pdf` como sugerencia para que el usuario lo guarde localmente
- Si es texto pegado: procesarlo directamente

### 2. Clasificar el tipo
Determinar si es:
- `paper`: publicación académica con abstract, metodología, referencias
- `article`: artículo periodístico, ensayo, o divulgación

### 3. Extraer metadatos
**Para papers:**
- title, authors (lista), year, journal/conference, url, doi

**Para artículos:**
- title, author, publication (medio), date, url

### 4. Leer la taxonomía de keywords
Leer `keywords.md` COMPLETAMENTE. Esta es la fuente de verdad.

### 5. Redactar el resumen
**Papers:** 2-4 párrafos cubriendo: qué problema resuelve, cómo, hallazgos principales, impacto
**Artículos:** 1-2 párrafos cubriendo: qué reporta, contexto, relevancia

### 6. Seleccionar keywords (5-12 por nota)
- Usar preferentemente keywords ya en `keywords.md`
- Para cada keyword candidata nueva:
  - Buscar en `keywords.md` si existe un quasi-duplicado (mismo concepto, distinta forma)
  - Si existe quasi-duplicado → usar la forma canónica ya registrada
  - Si es genuinamente nueva → agregarla a `keywords.md` con definición corta

### 7. Crear la nota
Archivo: `notes/papers/YYYY-MM-DD_slug.md` o `notes/articles/YYYY-MM-DD_slug.md`

Usar el formato exacto definido en `CLAUDE.md`. El slug debe ser corto (3-5 palabras), sin tildes, sin espacios (usar guiones).

### 8. Actualizar keywords.md si hay keywords nuevas
Agregar cada keyword nueva en la sección alfabética correcta con su definición.

### 9. Crear/actualizar páginas de concepto
Para cada keyword asignada a la nota:
- Si `concepts/KEYWORD-SLUG.md` no existe → crearlo con el formato de CLAUDE.md
- Si ya existe → agregar un enlace a la nueva nota en "Notas que usan este concepto"

### 10. Confirmar y commitear
Mostrar al usuario:
- Nombre del archivo creado
- Lista de keywords asignadas
- Keywords nuevas añadidas a la taxonomía (si las hay)

Commitear todos los archivos modificados con mensaje: `ingest: [título corto] — [tipo]`

## Manejo de casos especiales

- **Sin acceso a URL:** Pedir al usuario que pegue el texto o lo suba a `inbox/`
- **PDF subido en el chat:** Claude lo lee directamente; agregar en el frontmatter `pdf_local: sources/pdfs/apellido2024.pdf` y decirle al usuario que guarde el archivo ahí localmente en Obsidian para vincularlo
- **PDF en inbox/:** Leerlo con Read
- **Idioma:** El resumen y los comentarios van en español; los metadatos (title, authors, journal) se conservan en el idioma original del documento
- **Keywords:** Siempre en español para mantener coherencia del grafo
