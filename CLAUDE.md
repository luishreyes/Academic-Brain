# Academic Brain

Vault para construir una base de conocimiento académico personal. Conecta papers, artículos periodísticos y conceptos a través de palabras clave compartidas.

## Estructura del vault

| Carpeta | Contenido |
|---|---|
| `inbox/` | Archivos pendientes de procesar |
| `notes/papers/` | Notas de papers académicos procesados |
| `notes/articles/` | Notas de artículos periodísticos procesados |
| `concepts/` | Una página por keyword/concepto (construye el grafo) |
| `keywords.md` | Taxonomía canónica de palabras clave — fuente de verdad |
| `sources/pdfs/` | PDFs originales (solo local, ignorado por git) |
| `docs/` | Visualizador web del grafo (GitHub Pages) |

## Visualizador web (GitHub Pages)

El vault tiene su propio visualizador interactivo en `docs/`, servido por GitHub Pages — no requiere Obsidian.

- `docs/index.html` — visualizador autónomo (grafo SVG + JS vanilla, sin dependencias externas): toggles por tipo, buscador, explorador de conceptos y panel de detalle con enlaces al `.md` original.
- `docs/build.mjs` — script Node (sin dependencias) que lee las notas, conceptos y `keywords.md` y genera `docs/graph-data.js`.
- `docs/graph-data.js` — datos del grafo (generado; no editar a mano).

**Regla:** después de cualquier cambio en notas, conceptos o keywords, ejecutar `node docs/build.mjs` y commitear `docs/graph-data.js`. El comando `/ingest` ya hace esto en su paso 10.

## Dónde poner los PDFs

Hay tres formas equivalentes de procesar un paper en PDF:

1. **Subir el PDF directamente en el chat de Claude Code** — la más rápida; Claude lo lee y crea la nota, el PDF no queda en el repo
2. **Copiarlo a `inbox/`** — útil si el PDF ya está en el repo; Claude lo lee con `Read`
3. **Guardarlo en `sources/pdfs/` localmente** — para tenerlo vinculado en Obsidian; esta carpeta está en `.gitignore` así que no pesa en git

Cuando el PDF viene del chat, incluir en el frontmatter `pdf_local: sources/pdfs/nombre.pdf` para que el usuario sepa dónde guardarlo localmente en Obsidian.

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
