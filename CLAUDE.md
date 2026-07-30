# Academic Brain

Vault para construir una base de conocimiento académico personal. Conecta papers, artículos periodísticos y conceptos a través de palabras clave compartidas.

## Estructura del vault

| Carpeta | Contenido |
|---|---|
| — | **Los PDFs ya no viven en el repo.** Están en `Brain/biblioteca` en Google Drive; la nota guarda `pdf_ref` + `sha256`, no el binario. Ver `decisions/0002` en el hub `agentic-os`. |
| `notes/papers/` | Notas de papers académicos procesados |
| `notes/articles/` | Notas de artículos periodísticos procesados |
| `notes/books/` | Notas de libros procesados |
| `concepts/` | Una página por keyword/concepto (construye el grafo) |
| `keywords.md` | Taxonomía canónica de palabras clave — fuente de verdad |
| `docs/` | Visualizador web del grafo y lector de boletines (GitHub Pages) |
| `Noticias/` | Boletines semanales de IA en educación e ingeniería |
| `Noticias-Biotec/` | Boletines semanales de investigación en biotecnología |
| `rutinas/` | Prompts versionados de las dos Rutinas semanales |
| `tools/` | Utilidades del vault (backlinks derivados, extracción de figuras) |

## Visualizador web (GitHub Pages)

El vault tiene su propio visualizador interactivo en `docs/`, servido por GitHub Pages — no requiere Obsidian.

- `docs/index.html` — visualizador autónomo (grafo SVG + JS vanilla, sin dependencias externas): toggles por tipo, buscador, explorador de conceptos y panel de detalle con enlaces al `.md` original.
- `docs/build.mjs` — script Node (sin dependencias) que lee las notas, conceptos y `keywords.md` y genera `docs/graph-data.js`.
- `docs/graph-data.js` — datos del grafo (generado; no editar a mano).

**Regla:** después de cualquier cambio en notas, conceptos o keywords, ejecutar `node docs/build.mjs` y commitear `docs/graph-data.js`. El comando `/ingest` ya hace esto en su paso 10.

## Boletines (formato revista)

Los boletines semanales se leen en `docs/noticias.html`, compuestos como revista según el sistema editorial "Comunicaciones Luis H": papel hueso, tinta densa, un pigmento plano por colección, la regla como elemento estructural.

- `docs/formato-boletin.md` — **especificación del formato.** Frontmatter, bloques `cifras`, `cita`, `nota`, `figura` y `datos`, y reglas de estilo. Leerlo antes de escribir un boletín.
- `docs/revista.css` — tokens y composición del lector.
- `docs/build-noticias.mjs` — genera `docs/noticias-data.js` desde `Noticias/` y `Noticias-Biotec/`.
- `docs/figuras/` — imágenes referenciadas por los bloques `figura`, con su nota de licencia.
- `tools/extraer-figuras.py` — saca figuras de un PDF del vault hacia `docs/figuras/`.

## Backlinks de las páginas de concepto

La sección `## Notas que usan este concepto` **se deriva**, no se escribe. La
fuente de verdad es el campo `keywords:` del frontmatter de cada nota.

```bash
python3 tools/regenerar-backlinks.py           # aplica los cambios
python3 tools/regenerar-backlinks.py --check   # no escribe; exit 1 si hay deriva
```

**Regla:** después de crear o editar notas, correr el regenerador antes de
`node docs/build.mjs`. Mantener la lista a mano fue lo que produjo 39 backlinks
faltantes y 1 obsoleto acumulados en 586 notas.

**Regla:** después de escribir o editar un boletín, ejecutar `node docs/build-noticias.mjs` y commitear `docs/noticias-data.js` junto al `.md`.

**Limitación del entorno:** la política de red responde 403 a `arxiv.org`, `biorxiv.org`, `chemrxiv.org`, `ncbi.nlm.nih.gov` y `api.crossref.org`. No se pueden descargar figuras ni verificar DOI contra fuente primaria por HTTP; queda WebSearch y los conectores de PubMed y Scholar Gateway.

## Dónde poner los PDFs

**En `Brain/biblioteca` de Google Drive** (ID `1oH8Gux01JgenFMID2QYj1HUc1dN8Z_Qm`).
No en el repo: git guarda cada versión completa de un binario y no la suelta
nunca. El repo guarda la referencia; Drive guarda el archivo.

**Flujo:** sueltas el PDF en esa carpeta → escribes `/ingest` → Claude lo lee por
el conector MCP, redacta la nota y commitea.

**Es una sola carpeta.** No hay `inbox/` ni `procesados/`: el conector MCP no
puede mover archivos, y de todas formas el registro de qué está ingerido no es
dónde está el archivo sino si existe una nota que lo referencie. Lo pendiente es
la diferencia entre lo que hay en Drive y los `pdf_ref` de las notas.

**Alternativas:** pegar texto o dar una URL (Claude procesa sin PDF), o subir el
PDF al chat (Claude lo lee, pero el archivo hay que subirlo a Drive aparte —
escribir en Drive requiere una credencial OAuth que el conector no incluye).

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

**Los keywords son independientes de las conexiones que generan.**

Los keywords describen el contenido del paper. Punto. Si ese keyword conecta con otras notas o no, es irrelevante al momento de asignarlo. Errores a evitar:

- **No subasignar** keywords porque un paper es de un dominio nuevo sin notas existentes — eso también es forzar (en la dirección opuesta)
- **No sobreasignar** keywords genéricos para "conectar" un paper a temas que no cubre
- La pregunta correcta siempre es: *¿este paper trata genuinamente este tema?* — no *¿este keyword conecta con otras notas?*
- Un paper puede tener 8 keywords que no generen ninguna conexión nueva, y eso es perfectamente correcto

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
pdf_ref:            # nombre canónico, SIN ruta, ej: apellido_2024_slug.pdf
sha256:             # hash del PDF — verifica que es el archivo que la nota describe
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
pdf_ref:            # nombre canónico, SIN ruta\nsha256:             # hash del archivo
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

## Qué dice la literatura

(opcional — ver más abajo)

## Notas que usan este concepto
- [[notes/papers/...]]
- [[notes/articles/...]]
```

### La sección "Qué dice la literatura"

Es una síntesis narrativa —no una lista de resúmenes por paper— de lo que
las notas del vault dicen colectivamente sobre el concepto: convergencias
entre estudios, tensiones o contradicciones, hallazgos que se citan unos a
otros, matices que solo aparecen al leerlos en conjunto. Se escribe citando
autores y cifras concretas, en prosa, no como viñetas.

Es una sección **opcional y de esfuerzo alto** — no se genera automáticamente
en cada `/ingest`. Se escribe (o reescribe) a mano, leyendo todas las notas
que usan el concepto, cuando tenga sentido hacerlo: al crear un concepto con
ya varias notas, o cuando una nueva nota cambia sustancialmente lo que dice
el conjunto. Un concepto sin esta sección es perfectamente válido — mejor
omitirla que forzar una síntesis pobre solo por completar la plantilla.

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

## Estilo de escritura (prosa que Claude redacta: correos, documentos, síntesis, respuestas de chat)

Aplicar SIEMPRE estas reglas al redactar prosa para el usuario. No aplican a
citas textuales de fuentes, a código, ni a nombres propios con guion (p. ej.
`CD-AIF`, `two-lane`).

**Sin rayas ni guiones para frases parentéticas**
- Nunca usar raya (—) ni guion (–) para encerrar una frase explicativa.
- Reemplazar por comas, punto y seguido, dos puntos, o reestructurar la oración.
- Mal: "Los estudiantes llegan —moldeados por las herramientas de su generación— listos para aprender."
- Bien: "Los estudiantes llegan moldeados por las herramientas de su generación, listos para aprender."
- Bien: "Los estudiantes llegan listos para aprender. Las herramientas de su generación los han moldeado."

**Evitar construcciones "de X a Y" ("from X to Y")**
- El patrón suena formulaico y sobreusado. Evitar "de X a Y", "que va de X a Y", "todo, de X a Y".
- Evitar también patrones emparentados: "ya sea X o Y", "tanto X como Y", "no solo X sino también Y".
- Mal: "de memorizar fórmulas a entender principios."
- Bien: "memorizar fórmulas y entender principios."

**Escribir con variedad natural**
- Variar la estructura de las oraciones y las transiciones.
- No repetir construcciones paralelas en oraciones consecutivas.
- Alternar formas de conectar ideas: a veces dos puntos, a veces punto y seguido, a veces una conjunción.
- Leer la frase en voz alta. Si suena a texto escrito por una IA, reescribirla.

**Frases prohibidas**
- "de [sustantivo] a [sustantivo]" ("from X to Y")
- "todo, de X a Y" ("everything from X to Y")
- "que va de X a Y" ("ranging from X to Y")
- "no solo X sino también Y" ("not only X but also Y")
- Cualquier raya usada a mitad de oración para aclarar.
