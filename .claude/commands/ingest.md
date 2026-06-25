---
description: Procesa un paper académico o artículo periodístico y lo agrega al Academic Brain vault con resumen, metadatos y keywords.
---

Procesa el paper o artículo proporcionado y agrégalo al vault.

**Entrada:** $ARGUMENTS (URL, ruta de archivo, texto pegado, o vacío para revisar sources/inbox/)

## Pasos a seguir

### 1. Obtener el contenido

**Si no se proporciona argumento, o el argumento es vago (ej: "el nuevo pdf", "los pdfs", "organiza"):**
- Listar `sources/inbox/` con Bash (`ls sources/inbox/`) para encontrar PDFs pendientes
- Si hay PDFs: procesarlos todos (uno por uno si son varios), siguiendo los pasos 2-11 para cada uno
- Si `sources/inbox/` está vacío: pedir al usuario que suba PDFs ahí

**Si es una URL:** usar WebFetch para obtener el contenido completo

**Si es una ruta de archivo:** leerlo con Read o pdfminer según el tipo

**Si el usuario subió un PDF directamente en el chat:** leerlo con pdfminer, luego copiarlo a `sources/pdfs/APELLIDO-AÑO-slug.pdf` con Bash (`cp /root/.claude/uploads/.../archivo.pdf sources/pdfs/nombre-canonico.pdf`)

**Si es texto pegado:** procesarlo directamente

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

### 10. Mover el PDF a sources/pdfs/ (si vino de sources/inbox/)
Si el PDF estaba en `sources/inbox/`: moverlo a `sources/pdfs/apellido-año-slug.pdf` con Bash:
`mv sources/inbox/archivo-original.pdf sources/pdfs/nombre-canonico.pdf`

### 11. Regenerar los datos del visualizador
Ejecutar `node docs/build.mjs` para regenerar `docs/graph-data.js` con la
nueva nota, sus conceptos y conexiones. Esto mantiene el visualizador web
(GitHub Pages) sincronizado con el vault.

### 12. Confirmar y commitear
Mostrar al usuario:
- Nombre del archivo creado
- Lista de keywords asignadas
- Keywords nuevas añadidas a la taxonomía (si las hay)

Commitear todos los archivos modificados —incluyendo `docs/graph-data.js`—
con mensaje: `ingest: [título corto] — [tipo]`

## Manejo de casos especiales

- **Sin acceso a URL:** Pedir al usuario que suba el PDF a `sources/inbox/` en GitHub
- **PDF en sources/inbox/:** Leerlo con pdfminer, moverlo a `sources/pdfs/` con nombre canónico
- **PDF subido en el chat:** Leer con pdfminer, copiar a `sources/pdfs/nombre-canonico.pdf`, incluir esa ruta en el frontmatter `pdf_local:`
- **PDF ya en sources/pdfs/:** Leerlo con pdfminer directamente desde esa ruta
- **Varios PDFs en sources/inbox/:** Procesar cada uno en secuencia, commitear al final todos juntos
- **Idioma:** El resumen y los comentarios van en español; los metadatos (title, authors, journal) se conservan en el idioma original del documento
- **Keywords:** Siempre en español para mantener coherencia del grafo
