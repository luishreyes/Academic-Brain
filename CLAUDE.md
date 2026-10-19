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

**Regla:** los boletines de `Noticias/` y `Noticias-Biotec/` van siempre a `main`,
nunca a una rama de trabajo. El lector publicado en `docs/noticias.html` se sirve de
`main`, así que un boletín que se queda en una rama no existe para el lector. Si la
sesión trae una rama de desarrollo asignada, commitear ahí y además empujar a `main`
con `git push origin HEAD:main`; el avance es de fast-forward mientras nadie más
escriba. Esto ya pasó: tres boletines quedaron represados en una rama y el lector
estuvo dos semanas atrasado.

**Limitación del entorno:** la política de red responde 403 al CONNECT hacia
prácticamente todo host académico. **No pregunte por el estado del proxy, pregunte
por el host.** El endpoint `curl -sS "$HTTPS_PROXY/__agentproxy/status"` informa
`bundleCoversEveryHost: true` y una lista vacía de fallos mientras los hosts siguen
cerrados; medido así el 2026-09-28 y otra vez el 2026-10-19, cuando `arxiv.org`,
`biorxiv.org`, `chemrxiv.org`, `doi.org` y hasta `pubmed.ncbi.nlm.nih.gov`
devolvieron los cinco código `000`. La única prueba fiable es
`curl -sS -o /dev/null -w "%{http_code}" --max-time 12 "https://<host>/"` sobre el
host concreto. Lista bloqueada conocida: además de `arxiv.org`,
`biorxiv.org`, `chemrxiv.org`, `ncbi.nlm.nih.gov` y `api.crossref.org`, están
bloqueados `onlinelibrary.wiley.com`, `sciencedirect.com`, `ieeexplore.ieee.org`,
`link.springer.com`, `pubs.acs.org`, `pubs.rsc.org`, `journals.aps.org`,
`tandfonline.com`, `dl.acm.org`, `api.openalex.org`, `api.semanticscholar.org`,
`europepmc.org`, `doaj.org`, `osf.io`, `api.datacite.org` y `huggingface.co`.

**Actualización del 2026-08-10: el bloqueo se amplió y `WebFetch` dejó de servir.**
Los cuatro agentes de la octava edición reportaron 403 también en `frontiersin.org`,
`nature.com`, `mdpi.com` y en todos los espejos habituales de preprints
(`alphaxiv.org`, `emergentmind.com`, `r.jina.ai`, `papers.cool`, `synthical.com`,
`arxiv-sanity-lite.com`, `escholarship.org`). `WebFetch` falló en **todos** los
intentos de esa sesión, incluidos dominios de acceso abierto que antes respondían.
Dese por hecho que no hay forma de abrir una página primaria y planee la
verificación en consecuencia.

**Mapa de legibilidad por sello, medido el 2026-10-05.** Ninguna página primaria
se abre, pero el buscador indexa unas y no otras, y eso decide si una fecha de
publicación se puede verificar.

| Sello | Estado | Cómo leerlo |
|---|---|---|
| Frontiers | legible solo para **verificar**, no para barrer | **Corregido el 2026-10-12:** la línea del encabezado del PDF está indexada, pero solo se recupera cuando la consulta **lleva el DOI**: `"DOI 10.3389/frai.2026.1863666"` devuelve `TYPE Original Research PUBLISHED 13 July 2026 DOI ...`. Con la frase del encabezado más palabras de tema, el resumidor descarta las comillas y responde temáticamente: nueve consultas cubriendo los siete días de una ventana no devolvieron un solo artículo nuevo. Sirve para comprobar la fecha de un DOI que ya se tiene |
| MDPI | legible hacia atrás, ciego en la quincena corriente | hasta principios de septiembre devuelve las líneas Recibido/Revisado/Aceptado/Publicado intactas. Para las dos últimas semanas, dieciocho consultas por volumen, prefijo de DOI, URL de número y frase del encabezado devolvieron solo convocatorias y números viejos. Cuente con un rezago de unas dos semanas |
| Elsevier | inútil para fechas **por buscador**; PubMed sí las da | el buscador devuelve título e identificador, nunca la fecha de publicación en línea. **Corregido el 2026-10-12:** para revistas biomédicas indexadas, el conector de PubMed entrega esa fecha de primera mano. Pruebe PubMed antes de declararla inobtenible |
| Taylor & Francis | no confiable **por buscador**; PubMed sí la da | lo reciente aparece como volumen 0 número 0 y el resumidor rellena el hueco inventando. La prohibición de publicar fechas de T&F vale para la vía del buscador. **Corregido el 2026-10-12:** por PubMed sí es publicable (así se fechó Hart, `10.1080/0142159X.2026.2743049`, el 8 de octubre) |
| IEEE | ciego | un resultado negativo aquí es evidencia débil, dígalo así |
| Springer | ciego al texto completo, legible en el listado | **Añadido el 2026-10-12:** los listados de revista sí están indexados con fecha y número de artículo (`Research Open access 06 October 2026 Article: 62`). Sirve para establecer que un artículo existe y cuándo salió, nunca para leer resultados |

`doi.org` y `api.crossref.org` responden 403 al CONNECT, así que ningún DOI se
puede resolver directamente para comprobarlo.

No se pueden descargar figuras ni verificar DOI contra fuente primaria por HTTP.
Quedan operativos WebSearch y el conector de PubMed, que sigue siendo la fuente
más firme del entorno.

**ALERTA DEL 2026-10-12: el conector de Scholar Gateway agotó su cuota y no vuelve
hasta el 1 de noviembre de 2026.** No es el corpus congelado ni el catálogo parcial
descritos abajo: el payload responde `"type": "free_tier_limit_reached"` con
`query_as_executed: null` y `result_count: 0`, es decir, **la búsqueda no se ejecuta**.
Verificado por dos agentes independientes el mismo día, con tres y una consulta
respectivamente. Las ediciones del 12, 19 y 26 de octubre no tienen vía retrospectiva a
Wiley. Lección de uso: las ~27 consultas idénticas del 2026-10-05, disparadas solo para
medir la frescura, probablemente ayudaron a consumir la cuota. **Mida la frescura con una
consulta, no con veintisiete, y presupuestelas cuando el conector vuelva.** Sustituto
verificado: WebSearch con `allowed_domains` a `onlinelibrary.wiley.com`, que alcanzó nueve
artículos nuevos de *European Journal of Education*. Dos correcciones de catálogo medidas
por esa vía: *Engineering Reports* y *Decision Sciences Journal of Innovative Education*
están **vacías** del tema, y *Systems Engineering* tiene un solo artículo; el rendimiento
real está en *European Journal of Education*, *Review of Education*, *British Educational
Research Journal* y *Expert Systems*. **El conector de Scholar Gateway dejó de estar congelado.**
Su payload declaraba `latest 2026-05-28` y `Last corpus update: May 2026` el
2026-08-31; el 2026-09-07 declara actualización de septiembre de 2026 y devolvió
artículos fechados hasta el 27 de agosto, verificado en nueve consultas
independientes. Compruebe la frescura en cada sesión en lugar de asumirla.

**Su límite real no es la fecha, es el sello: solo indexa Wiley.** Los más de
doscientos resultados revisados el 2026-09-07 salen todos de
`onlinelibrary.wiley.com`. Eso explica por qué *Computers & Education*
(Elsevier), *IEEE Transactions on Education*, *European Journal of Engineering
Education* (Taylor & Francis) y *Learning and Instruction* (Elsevier) no
aparecieron en doce ediciones del boletín. Durante tres semanas se atribuyó
a un corpus congelado lo que era un catálogo parcial.

**Corrección del 2026-10-05: el catálogo es Wiley entero, no cinco revistas.**
Durante tres ediciones este archivo afirmó que cubría solo *Journal of
Engineering Education*, *Computer Applications in Engineering Education*,
*BJET*, *JCAL* y *Educational Measurement: Issues and Practice*. Veintisiete
consultas devolvieron además *European Journal of Education*, *Journal of
Educational Measurement*, *British Educational Research Journal*, *Review of
Education*, *TESOL Quarterly*, *Expert Systems*, *Systems Engineering*,
*Engineering Reports*, *Decision Sciences Journal of Innovative Education*,
*Computer Graphics Forum*, *INCOSE International Symposium*, *AIChE Journal* y
*Applied Cognitive Psychology*. *European Journal of Education* es un sitio de
volumen alto en este tema y se venía desaprovechando. Las exclusiones sí se
sostienen: ni Elsevier, ni IEEE, ni Taylor & Francis.

**Y su rezago de ingesta es de diez a catorce días.** El 2026-10-05 la etiqueta
declaró «September 2026» en veintisiete consultas idénticas y el techo real de
publicación fue el 24 de septiembre. La etiqueta no sobreafirma el mes, lo cumple
hasta el día 24; lo que no hace es alcanzar la semana corriente. Para una rutina
semanal es fuente retrospectiva, no de actualidad.

**Úselo primero, no último, en toda pregunta retrospectiva:** el 2026-08-31
encontró un paper del *Journal of Engineering Education* que siete búsquedas web
distintas no encontraron, y el 2026-09-07 encontró en *Computer Applications in
Engineering Education* el estudio de transferencia que el boletín llevaba once
ediciones buscando.

Ojo también con el resumidor de WebSearch: alucina fechas de
envío de preprints. Contrastar la fecha contra el identificador de arXiv, cuyos
cuatro primeros dígitos son año y mes (`2607` = julio de 2026).

**No calcule la fecha de un preprint: léala. El divisor está jubilado desde el
2026-10-12.** El repositorio `ehijano/rss_fetch` archiva el RSS diario de arXiv por
categoría con **la fecha en el nombre del archivo** (`rss_data/cs.CY/2026-10-08_cs.CY.xml`),
y cada entrada trae identificador, título, autores, tipo de anuncio y **resumen completo**.
`git clone --depth 1` lo baja entero (unos 6 GB) a través del proxy en unos cinco minutos.
Esa es hoy la forma correcta de fechar y de barrer arXiv, y da fecha de primera mano.

Cualquier divisor da resultados falsos, por dos razones que ninguna constante absorbe.
El identificador ordena **envíos**, no anuncios, y entre uno y otro pasan uno o dos días.
Y el ritmo varía demasiado: del 1 al 4 de octubre de 2026 se consumieron unos 2.290
identificadores (~570 por día, por el fin de semana), y el 6 de octubre saltó unos 3.100
de golpe. No hay anuncios sábado ni domingo (arXiv declara `skipDays`). Bandas medidas de
primera mano en octubre de 2026, contiguas y sin solape: 5 oct `2610.02293`–`2610.03695`;
6 oct `2610.03720`–`2610.06830`; 7 oct `2610.06889`–`2610.08781`; 8 oct
`2610.08794`–`2610.10533`; 9 oct `2610.10550`–`2610.12455`; 12 oct
`2610.12545`–`2610.13912`.

**Y alucina URLs:** el 2026-08-31 inventó un repositorio de GitHub que la API de
GitHub desmiente. La API de GitHub sí responde y sirve para comprobar si un
repositorio existe de verdad.

**`git clone` atraviesa el proxy, y es hoy la mejor vía para datos
depositados.** Verificado el 2026-10-05: el depósito `obastani/GenAICanHarmLearning`
devolvió 404 en todos sus archivos de datos por `raw.githubusercontent.com` y la
API de GitHub respondió con bloqueo de sesión, de modo que por las dos vías
documentadas era inaccesible. `git clone --depth 1` lo trajo entero, igual que el
paquete de la KAUST de 549 MB y 6.039 archivos. El clon además explica esos 404:
los nombres de carpeta que un README escribe con espacios suelen llevar guion bajo
en el disco. Orden de preferencia para datos depositados: `git clone`, luego
`raw.githubusercontent.com`, luego la API.

**Para encontrar preprints de la semana corriente, búsqueda de código, no
WebSearch.** El 2026-10-05 ninguna consulta web encontró un solo preprint dentro
de la ventana de siete días, porque el índice web va una o dos semanas atrás.
Todos los candidatos salieron de `search_code` sobre digestos curados en markdown
(por ejemplo `edtechdev/aied`, en `content/en/articles/*.md`), que llevan citación
completa con identificador, autores y síntesis, e iban indexados hasta
`2610.015xx`. Úselos como generador de pistas y verifique cada identificador y
título después.

**La búsqueda de repositorios de GitHub es frágil de una forma que engaña, medido el
2026-10-12.** Solo encuentra con frases cortas que coincidan con el nombre o la
descripción (`"replication package" education AI` funcionó; `"generative AI" students
experiment in:description` también). Al agregar calificadores como `created:>2026-01-01`,
o al encadenar cuatro o cinco términos, devuelve **cero resultados en lugar de resultados
parciales**. Un cero ahí no es evidencia de nada. `search_code` sobre contenidos de CSV
resultó casi inútil.

**Y el resumidor inventa edades relativas, no solo fechas.** El 2026-10-12 marcó como «0
días» y «11 días» artículos que eran del 23 de abril, el 3 de septiembre y el 30 de
septiembre. Ninguna edad relativa suya es utilizable; exija la fecha absoluta y verifíquela.

**Señal de alerta sobre paquetes de replicación.** El 2026-10-12 apareció un repositorio
con toda la apariencia de un paquete completo (veinte scripts en R y Python, instrumentos,
figuras, carpeta `data/`) cuyos «datos crudos» eran **sintéticos**, reconstruidos a partir
de momentos publicados, con el DOI de Zenodo literalmente en `10.5281/zenodo.placeholder`.
Antes de calcular sobre un depósito, lea el README entero y los nombres de archivo, y
reproduzca primero alguna cifra que el autor ya publique: si no cuadra, no calcule nada
nuevo encima.

`search_repositories` y `search_code` consultan todo GitHub aunque
`get_file_contents` esté restringido al repo de la sesión, y sirven para dos
cosas distintas. La primera devuelve el objeto completo del API, con fechas de
creación y de último empuje, que el resumidor no puede inventar. La segunda
verifica **contenido**, no solo existencia: el 2026-09-07 el resumidor dio dos
listas distintas y ambas parcialmente falsas de las ocho directrices de Baltes,
y solo los nombres de archivo del repositorio fuente resolvieron el desacuerdo.

## Dónde poner los PDFs

**En `Brain/inbox` de Google Drive** (ID `1f-TJelDlaedTk5UVQaSZOx_YGAJ-HwBN`).
No en el repo: git guarda cada versión completa de un binario y no la suelta
nunca. El repo guarda la referencia; Drive guarda el archivo.

**Flujo:** sueltas cualquier cosa en `inbox/` → escribes `/ingest` → Claude
clasifica, enruta el archivo a su dominio, redacta la nota si corresponde y
commitea.

El inbox es un único punto de entrada **donde no tienes que decidir nada**:
decidir a dónde va cada cosa es precisamente el trabajo que hace el ingest. Un
paper acaba en `biblioteca/`, una presentación en `docencia/<curso>/`, una foto
en `fotografia/`.

Que un PDF esté ingerido no se sabe por su carpeta sino porque existe una nota
que lo referencia. Lo pendiente es la diferencia entre los archivos y los
`pdf_ref` de las notas — el dato se deriva, no se mantiene.

**Alternativas:** pegar texto o dar una URL (Claude procesa sin PDF), o subir el
PDF al chat (Claude lo lee, pero subirlo a Drive requiere el servidor
`drive_mcp`, que no siempre está activo).

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
visibility: public  # public | private — obligatorio, ver decisions/0004
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
