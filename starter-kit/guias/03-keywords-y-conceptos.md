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
(síntesis incremental — ver abajo)

## Notas que usan este concepto
- [[notes/papers/...]]
```

`/ingest` las crea y mantiene automáticamente: cuando una nota nueva usa un
concepto, agrega el backlink bajo "Notas que usan este concepto".

## La sección "Qué dice la literatura" (la joya del vault)

Es una **síntesis narrativa en prosa** de lo que todas las notas de ese concepto
dicen *en conjunto*: dónde convergen, dónde se contradicen, qué matiz aparece
solo al leerlas juntas. Se escribe citando autores y cifras concretas. No es una
lista de resúmenes, es un texto que teje.

**Construyendo desde cero, no la trate como opcional: es una práctica
incremental.** El error que la vuelve dolorosa es dejarla para el final, cuando
un concepto ya juntó decenas de notas y hay que leerlas todas de golpe. Si en
cambio la escribe temprano y la mantiene al día, el costo se reparte nota a nota
y cada paso es corto:

- Un concepto llega a su **2ª o 3ª nota** → escriba la primera síntesis.
- Entra una nota nueva a un concepto que **ya tiene síntesis** → **refínela**,
  ajustando la prosa existente para incorporar lo nuevo. Refinar es barato
  aunque el concepto crezca; lo caro es arrancar de cero sobre un concepto grande.
- Un concepto con **una sola nota** → todavía no.

El comando `/ingest` hace esto en su paso 9b, así que en el día a día la síntesis
se mantiene sola. Solo la escribe "a mano" cuando quiere revisarla con cuidado.

Reglas de honestidad (heredadas de la filosofía, `guia 01`) — esto es lo único
que sigue siendo opcional, en el sentido de que a veces la síntesis correcta es
casi nada:

- Si el corpus genuinamente **no dice mucho en conjunto**, dígalo en pocas líneas.
  No infle.
- Si dos notas comparten el keyword pero abordan **cosas distintas**, esa es la
  síntesis: reconózcalo.
- Prefiera señalar una **tensión real** entre fuentes antes que fabricar una
  convergencia.

Para **sembrar** la síntesis de muchos conceptos de una vez —al arrancar el
vault con un lote inicial, o en una auditoría periódica— use el patrón de
subagentes de `guias/04-sintesis-multiagente.md`.

## Mantenimiento

- Tras cualquier cambio en keywords o conceptos, corra `node docs/build.mjs` y
  commitee `docs/graph-data.js`.
- Si detecta un duplicado que se coló (dos keywords para lo mismo), consolídelas:
  elija la canónica, actualice el frontmatter de las notas afectadas, funda las
  dos páginas de concepto en una y regenere el grafo.
