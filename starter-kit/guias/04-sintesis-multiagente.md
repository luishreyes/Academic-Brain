# 04 · Síntesis con múltiples agentes

Claude Code puede lanzar **subagentes** que trabajan en paralelo, cada uno con su
propio contexto. Esto sirve para dos cosas en el vault: ingestar lotes de fuentes
sin sesgo, y escribir síntesis de conceptos a escala. La idea es siempre la
misma: **el orquestador reparte, los subagentes trabajan aislados, el orquestador
reconcilia**.

## Por qué el aislamiento importa (anti-sesgo)

Si le pide a un solo agente que ingeste diez papers en una conversación, las
keywords del primero "tiñen" al segundo: el modelo arrastra el vocabulario que ya
activó. El resultado es un grafo donde todo conecta de más. La solución es dar a
cada subagente **una sola fuente**, ciego a las demás. Cada uno juzga su fuente
solo por su contenido, como manda la filosofía (`guia 01`).

## Patrón A — Ingesta de un lote

Cuando hay varias fuentes nuevas en `sources/inbox/`:

1. **El orquestador** lista el inbox y hace el reparto: un subagente por fuente.
2. **Cada subagente** recibe UNA fuente y la instrucción de:
   - leer `keywords.md` (para preferir keywords existentes),
   - escribir la nota con su resumen y sus keywords,
   - **no** editar `keywords.md`, **no** tocar `concepts/`, **no** mover PDFs.
   - devolver de forma estructurada: título, tipo, keywords asignadas, keywords
     nuevas propuestas (con definición).
3. **El orquestador reconcilia al final, en un solo paso**, para evitar choques:
   - funde las keywords nuevas en `keywords.md` (resolviendo quasi-duplicados
     entre lo que propusieron distintos subagentes),
   - crea/actualiza las páginas de `concepts/`,
   - mueve los PDFs del inbox a `sources/pdfs/`,
   - corre `node docs/build.mjs`,
   - commitea todo junto.

La regla de oro: **los subagentes escriben solo su propia nota; todo lo
compartido (keywords.md, concepts/, PDFs, grafo) lo toca únicamente el
orquestador.** Así no hay dos agentes editando el mismo archivo a la vez.

Para pedirlo, basta algo como: *"/ingest todos los pdfs del inbox. Lance un
subagente por pdf para evitar sesgos de keyword."*

## Patrón B — Síntesis de conceptos ("Qué dice la literatura")

Para escribir muchas secciones de síntesis sin releer todo usted:

1. El orquestador elige un lote de conceptos (empiece por los de pocas notas).
2. Un subagente por concepto, cada uno con:
   - la lista de notas de ese concepto,
   - la instrucción de leerlas **completas** (no solo el resumen),
   - un ejemplo de tono/formato ya escrito para calibrar,
   - permiso para editar **solo** su archivo `concepts/slug.md`.
3. **Si dos conceptos comparten notas**, dígale a cada subagente qué ángulo le
   toca, para que las síntesis no se repitan.
4. El orquestador verifica (sin backlinks faltantes, una sola sección por
   archivo), regenera el grafo y commitea.

## Consejos que evitan dolores

- **Reparto sin solapamiento de escritura.** Dos subagentes nunca deben poder
  escribir el mismo archivo. Si comparten un recurso, ese recurso lo maneja el
  orquestador.
- **Salida estructurada.** Pídale a cada subagente que devuelva un formato fijo
  (título / keywords / keywords nuevas), así la reconciliación es mecánica.
- **Escale por complejidad.** Los conceptos con 2–9 notas caben en una pasada de
  un subagente. Con decenas o cientos de notas, el subagente no alcanza a leer
  todo: ahí toca dividir por lotes o hacer síntesis incremental. Reconózcalo y
  pare a tiempo en vez de forzar.
- **Commits parciales.** En lotes largos, commitee avances ("wip") a medida que
  llegan los subagentes; haga la reconciliación completa al final.
