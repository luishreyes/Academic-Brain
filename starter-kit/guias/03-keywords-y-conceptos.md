# 03 · Keywords y conceptos

Las keywords son el sistema nervioso del vault. Cada keyword asignada a una nota
genera una arista hacia una **página de concepto**, y esas páginas son los nodos
que conectan fuentes distintas. Gestionar bien la taxonomía es lo que mantiene el
grafo limpio.

## `keywords.md` es la fuente de verdad

Todas las keywords viven en `keywords.md`, ordenadas alfabéticamente por secciones
de letra. Formato de cada entrada:

```
**slug-con-guiones** — Definición corta. _Aliases: forma en inglés, sinónimos_
```

Reglas:

- **Siempre leerlo completo antes de asignar keywords.** No de memoria.
- **Nunca dos keywords que signifiquen lo mismo.** `machine-learning` y
  `aprendizaje-automatico` no pueden coexistir. Elija una forma canónica y ponga
  la otra como alias.
- **Antes de crear una keyword nueva, busque un quasi-duplicado.** Si existe, use
  la forma que ya está. Si es genuinamente nueva, agréguela con su definición.
- **Un idioma solo** para los slugs, para que el grafo no se fragmente.

El `_Aliases:_` no es decorativo: alimenta el buscador del visualizador y es su
principal defensa contra los duplicados. Ponga ahí la forma en inglés y los
sinónimos habituales.

## Las páginas de concepto

Por cada keyword existe un archivo `concepts/slug.md`:

```markdown
---
type: concept
keyword: slug-con-guiones
aliases: [alias1, alias2]
---

# Nombre del concepto

Definición corta (la misma de keywords.md).

## Qué dice la literatura
(opcional — ver abajo)

## Notas que usan este concepto
- [[notes/papers/...]]
```

`/ingest` las crea y mantiene automáticamente: cuando una nota nueva usa un
concepto, agrega el backlink bajo "Notas que usan este concepto".

## La sección "Qué dice la literatura" (la joya, y la más costosa)

Es una **síntesis narrativa en prosa** de lo que todas las notas de ese concepto
dicen *en conjunto*: dónde convergen, dónde se contradicen, qué matiz aparece
solo al leerlas juntas. Se escribe citando autores y cifras concretas. No es una
lista de resúmenes, es un texto que teje.

Es **opcional y de esfuerzo alto**. No se genera en cada `/ingest`. Se escribe (o
reescribe) a mano cuando tiene sentido:

- cuando un concepto ya acumuló varias notas y vale sintetizarlo, o
- cuando una nota nueva cambia sustancialmente lo que dice el conjunto.

Reglas de honestidad (heredadas de la filosofía, `guia 01`):

- Si el corpus genuinamente **no dice mucho en conjunto**, dígalo en pocas líneas.
  No infle.
- Si dos notas comparten el keyword pero abordan **cosas distintas**, esa es la
  síntesis: reconózcalo.
- Prefiera señalar una **tensión real** entre fuentes antes que fabricar una
  convergencia.

Para escalar esto a muchos conceptos sin releer todo usted mismo, use el patrón
de subagentes de `guias/04-sintesis-multiagente.md`. Un consejo práctico: empiece
por los conceptos con pocas notas (2–4) y suba en complejidad; los conceptos con
decenas o cientos de notas necesitan un enfoque por lotes, no una sola pasada.

## Mantenimiento

- Tras cualquier cambio en keywords o conceptos, corra `node docs/build.mjs` y
  commitee `docs/graph-data.js`.
- Si detecta un duplicado que se coló (dos keywords para lo mismo), consolídelas:
  elija la canónica, actualice el frontmatter de las notas afectadas, funda las
  dos páginas de concepto en una y regenere el grafo.
