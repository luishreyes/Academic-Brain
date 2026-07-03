# Segundo Cerebro — instrucciones del proyecto

> **[EDITE ESTO]** Este archivo le dice a Claude Code cómo comportarse en su
> repositorio. Es la pieza central del sistema: defina aquí de qué trata su
> segundo cerebro y ajuste las reglas a su dominio. El resto del kit
> (comando `/ingest`, visualizador, rutinas) se apoya en lo que diga aquí.

Vault para construir una base de conocimiento personal sobre **[SU TEMA]**.
Conecta papers, artículos y libros a través de keywords/conceptos compartidos,
de modo que las conexiones entre ideas **emerjan solas**.

## Estructura del vault

| Carpeta | Contenido |
|---|---|
| `sources/inbox/` | PDFs nuevos, pendientes de procesar (`/ingest`) |
| `sources/pdfs/` | PDFs procesados con nombre canónico — rastreados por git |
| `notes/papers/` | Notas de papers académicos |
| `notes/articles/` | Notas de artículos periodísticos / divulgación |
| `notes/books/` | Notas de libros |
| `concepts/` | Una página por keyword/concepto (construye el grafo) |
| `keywords.md` | Taxonomía canónica de keywords — fuente de verdad |
| `Boletines/` | Boletines/digests semanales (opcional, ver rutinas) |
| `docs/` | Visualizador web del grafo y lector de boletines (GitHub Pages) |

## Principio filosófico del vault (lo más importante)

**Las conexiones deben emerger solas, nunca ser forzadas.**

El propósito del vault es descubrir conexiones genuinas entre ideas:

- **Nunca** asignar una keyword a una nota solo porque "conecta" con notas
  existentes o con el tema dominante del vault.
- **Nunca** estirar el significado de una keyword para que una fuente encaje.
- Asignar únicamente las keywords que describen con precisión el contenido real.
- Si una fuente de un dominio ajeno no se relaciona con el tema central, sus
  keywords serán de su propio dominio — y eso es correcto.
- Un nodo aislado o poco conectado es perfectamente válido; no es un problema.

**Los keywords son independientes de las conexiones que generan.** La pregunta
correcta siempre es *¿esta fuente trata genuinamente este tema?* — nunca *¿este
keyword conecta con otras notas?*. No subasignar por ser un dominio nuevo, ni
sobreasignar para "conectar". (Detalle en `guias/01-filosofia-antisesgo.md`.)

## Regla fundamental: gestión de keywords

**Siempre leer `keywords.md` completo antes de asignar cualquier keyword.**

- Usar solo keywords que existan en `keywords.md`, o proponer nuevas.
- Nunca crear dos keywords que signifiquen lo mismo (ej: "ML" vs "machine learning").
- Si existe un quasi-duplicado, usar la forma canónica de `keywords.md`.
- Al agregar una keyword nueva: añadirla a `keywords.md` con definición corta.
- Tras asignar keywords a una nota, crear/actualizar su página en `concepts/`.

## Formato de notas

### Papers → `notes/papers/AAAA-MM-DD_slug-del-titulo.md`

```yaml
---
title:
authors: []
year:
journal:
url:
doi:
pdf_local:          # ruta local, ej: sources/pdfs/apellido2024.pdf
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
(breve)

## Hallazgos clave
-

## Limitaciones
-

## Notas relacionadas
(enlaces wiki a páginas de concepto y otras notas)
```

### Artículos → `notes/articles/AAAA-MM-DD_slug.md`

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
```

### Libros → `notes/books/AAAA-MM-DD_slug.md`

```yaml
---
title:
authors: []
year:
publisher:
url:
isbn:
pdf_local:
type: book
keywords: []
date_added:
---
```

```markdown
# Título del libro

## Resumen
(3-5 párrafos: tesis, estructura, argumentos, relevancia)

## Ideas principales por capítulo
- **Cap. X — "Título":** ...

## Argumentos centrales
-

## Limitaciones
-

## Notas relacionadas
```

## Formato de páginas de concepto → `concepts/keyword-slug.md`

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

## Qué dice la literatura

(síntesis incremental — ver más abajo)

## Notas que usan este concepto
- [[notes/papers/...]]
- [[notes/articles/...]]
```

### La sección "Qué dice la literatura"

Síntesis narrativa **en prosa** (no lista de resúmenes) de lo que las notas del
vault dicen colectivamente sobre el concepto: convergencias, tensiones,
hallazgos que se citan, matices que solo aparecen al leer las notas en conjunto.
Se escribe citando autores y cifras concretas.

**En un vault que se construye desde cero, esta sección no es opcional: es una
práctica incremental.** Lo doloroso es retrofitearla al final, sobre conceptos
que ya acumularon decenas de notas — eso es lo que hace que en vaults viejos
parezca "de esfuerzo alto". Si en cambio la escribe temprano y la mantiene al
día, el trabajo se reparte y cada paso es corto. Nunca enfrenta un concepto con
muchas fuentes sin sintetizar.

Cuándo escribir o actualizar:

- Un concepto llega a su **2ª o 3ª nota** → escriba la primera síntesis.
- Entra una nota nueva a un concepto que **ya tiene síntesis** → **refínela**
  (ajuste la prosa existente para incorporar lo nuevo; no la reescriba desde
  cero). Refinar es barato aunque el concepto crezca.
- Un concepto con **una sola nota** → todavía no; no hay conjunto que sintetizar.

`/ingest` mantiene esto al día automáticamente (ver `.claude/commands/ingest.md`).

**La única válvula que sigue siendo opcional es la honestidad** (heredada de
`guias/01-filosofia-antisesgo.md`): si las notas de un concepto genuinamente no
dicen mucho en conjunto, dígalo en pocas líneas; si comparten keyword pero
abordan cosas distintas, esa es la síntesis. Corto y honesto siempre le gana a
inflado. No fuerce convergencia donde no la hay.

(Para sembrar la síntesis de un lote de conceptos con subagentes en paralelo —al
arrancar, o en una auditoría periódica— ver `guias/04-sintesis-multiagente.md`.)

## Flujo de trabajo: ingestar una fuente

1. Leer el contenido (URL, PDF o texto).
2. Determinar tipo: `paper`, `article` o `book`.
3. Leer `keywords.md` para ver las keywords disponibles.
4. Extraer metadatos.
5. Escribir la nota con resumen y secciones estructuradas.
6. Asignar 5–12 keywords (preferir existentes; nuevas solo si no hay duplicado).
7. Para keywords nuevas: verificar quasi-duplicados; si es nueva, añadirla a
   `keywords.md` con definición.
8. Crear/actualizar páginas de concepto en `concepts/`.
9. Regenerar el grafo: `node docs/build.mjs`.
10. Commitear todo con mensaje descriptivo.

El comando `/ingest` automatiza este flujo. Ver `.claude/commands/ingest.md`.

## Convenciones

- Nombres de archivo: `AAAA-MM-DD_slug-corto.md` (sin tildes, sin espacios).
- Slug de keyword en `concepts/`: minúsculas con guiones (ej: `machine-learning.md`).
- Wiki-links formato Obsidian: `[[ruta/al/archivo]]`.
- Fecha: ISO 8601 (`AAAA-MM-DD`).
- Tras cualquier cambio en notas/conceptos/keywords: `node docs/build.mjs` y
  commitear `docs/graph-data.js`.
