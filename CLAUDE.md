# Academic Brain

Vault para construir una base de conocimiento académico personal. Conecta papers, artículos periodísticos y conceptos a través de palabras clave compartidas.

## Estructura del vault

| Carpeta | Contenido |
|---|---|
| `sources/inbox/` | PDFs nuevos subidos a GitHub, pendientes de ingest |
| `sources/pdfs/` | PDFs procesados con nombre canónico — rastreados por git |
| `notes/papers/` | Notas de papers académicos procesados |
| `notes/articles/` | Notas de artículos periodísticos procesados |
| `notes/books/` | Notas de libros procesados |
| `concepts/` | Una página por keyword/concepto (construye el grafo) |
| `keywords.md` | Taxonomía canónica de palabras clave — fuente de verdad |
| `docs/` | Visualizador web del grafo (GitHub Pages) |

## Visualizador web (GitHub Pages)

El vault tiene su propio visualizador interactivo en `docs/`, servido por GitHub Pages — no requiere Obsidian.

- `docs/index.html` — visualizador autónomo (grafo SVG + JS vanilla, sin dependencias externas): toggles por tipo, buscador, explorador de conceptos y panel de detalle con enlaces al `.md` original.
- `docs/build.mjs` — script Node (sin dependencias) que lee las notas, conceptos y `keywords.md` y genera `docs/graph-data.js`.
- `docs/graph-data.js` — datos del grafo (generado; no editar a mano).

**Regla:** después de cualquier cambio en notas, conceptos o keywords, ejecutar `node docs/build.mjs` y commitear `docs/graph-data.js`. El comando `/ingest` ya hace esto en su paso 10.

## Dónde poner los PDFs

**Flujo principal:** subir PDFs a `sources/inbox/` en GitHub → escribir `/ingest` → Claude los procesa, los mueve a `sources/pdfs/` con nombre canónico y crea la nota.

**Alternativas:**
- Subir al chat de Claude Code: Claude lo lee y lo copia a `sources/pdfs/` directamente
- Pegar texto o dar URL: Claude procesa sin PDF local

**Al hacer `/ingest` con PDFs en `sources/inbox/`:**
1. Claude lee todos los archivos en `sources/inbox/`
2. Los procesa (extrae metadatos, redacta resumen, asigna keywords)
3. Mueve cada PDF a `sources/pdfs/apellido-año-slug.pdf` (nombre canónico)
4. Elimina el archivo original de `sources/inbox/`
5. Crea las notas, actualiza conceptos, commite todo

Convención de nombres canónicos: `apellido-primer-autor + año + slug-corto.pdf`  
Ejemplo: `kestin2025-tutoria-ia-supera-activo.pdf`

## Principio filosófico del vault

**Las conexiones deben emerger solas, nunca ser forzadas.**

El propósito del vault es descubrir conexiones genuinas entre ideas. Esto significa:

- **Nunca** asignar una keyword a una nota solo porque "conecta" con notas existentes o con el tema dominante del vault
- **Nunca** estirar el significado de una keyword para que un paper encaje en el grafo
- Asignar únicamente las keywords que describen con precisión el contenido real de la nota
- Si un paper de biología molecular no tiene relación con IA o educación, sus keywords serán de biología molecular — y eso es correcto
- Las conexiones que aparecen entre nodos distintos son valiosas *porque* surgieron del contenido, no de una decisión editorial
- Un nodo aislado o poco conectado es perfectamente válido; no es un problema a corregir

## Regla fundamental: gestión de keywords

**Siempre leer `keywords.md` antes de asignar cualquier keyword.**

- Usar solo keywords que existan en `keywords.md`, O proponer nuevas
- Nunca crear dos keywords que signifiquen lo mismo (ej: "ML" vs "machine learning")
- Si existe un quasi-duplicado, usar la forma canónica de `keywords.md`
- Al agregar una keyword nueva: añadirla a `keywords.md` con definición corta
- Después de asignar keywords a una nota, actualizar la página de concepto en `concepts/`

## Formato de notas

### Papers académicos → `notes/papers/YYYY-MM-DD_slug-del-titulo.md`

```yaml
---
title: 
authors: []
year: 
journal: 
url: 
doi: 
pdf_local:          # ruta local en Obsidian, ej: sources/pdfs/apellido2024.pdf
type: paper
keywords: []
date_added: 
---
```

```markdown
# Título del paper

## Resumen
(2-4 párrafos)

## Contribuciones principales
- 

## Metodología
(breve descripción)

## Hallazgos clave
- 

## Limitaciones
- 

## Notas relacionadas
(enlaces wiki a páginas de conceptos y otras notas)
```

### Artículos periodísticos → `notes/articles/YYYY-MM-DD_slug-del-titulo.md`

```yaml
---
title: 
author: 
publication: 
date: 
url: 
type: article
keywords: []
date_added: 
---
```

```markdown
# Título del artículo

## Resumen
(1-2 párrafos)

## Puntos clave
- 

## Contexto
(por qué importa, qué conecta)

## Notas relacionadas
(enlaces wiki a páginas de conceptos y otras notas)
```

### Libros → `notes/books/YYYY-MM-DD_slug-del-titulo.md`

```yaml
---
title: 
authors: []
year: 
publisher: 
url: 
isbn: 
pdf_local:          # ruta local al epub/pdf en Obsidian
type: book
keywords: []
date_added: 
---
```

```markdown
# Título del libro

## Resumen
(3-5 párrafos: tesis central, estructura, argumentos, relevancia)

## Ideas principales por capítulo
- **Cap. X — "Título":** ...

## Argumentos centrales
- 

## Limitaciones
- 

## Notas relacionadas
(enlaces wiki a páginas de conceptos y otras notas)
```

## Formato de páginas de concepto → `concepts/KEYWORD-SLUG.md`

```yaml
---
type: concept
keyword: 
aliases: []
---
```

```markdown
# Nombre del concepto

Definición corta (copiada de keywords.md).

## Notas que usan este concepto
- [[notes/papers/...]]
- [[notes/articles/...]]
```

## Flujo de trabajo: ingestar un paper o artículo

1. Leer el contenido (URL, PDF, o texto pegado)
2. Determinar tipo: `paper` o `article`
3. Leer `keywords.md` para ver keywords disponibles
4. Extraer todos los metadatos
5. Escribir la nota con resumen y secciones estructuradas
6. Asignar keywords de `keywords.md` (5-12 por nota)
7. Para keywords nuevas necesarias:
   - Verificar que no exista quasi-duplicado en `keywords.md`
   - Si existe quasi-duplicado → usar la forma canónica
   - Si es genuinamente nueva → añadir a `keywords.md` con definición
8. Crear o actualizar páginas de concepto en `concepts/` para cada keyword asignada
9. Commitear todos los cambios con mensaje descriptivo

## Convenciones

- Nombres de archivo: `YYYY-MM-DD_slug-corto.md` (sin tildes, sin espacios)
- Slug del keyword en `concepts/`: minúsculas con guiones (ej: `machine-learning.md`)
- Los wiki-links siguen el formato Obsidian: `[[ruta/al/archivo]]`
- Fecha: formato ISO 8601 (`YYYY-MM-DD`)
