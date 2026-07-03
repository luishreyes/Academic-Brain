# concepts

Una página por keyword. Son los nodos que conectan notas distintas en el grafo.
`/ingest` las crea y mantiene: cuando una nota usa un concepto, agrega el backlink
bajo "Notas que usan este concepto".

Cada página lleva una sección **"Qué dice la literatura"**: una síntesis
narrativa de lo que las notas del concepto dicen en conjunto. Es una práctica
incremental (se escribe al llegar a la 2ª–3ª nota y se refina con cada nota
nueva; `/ingest` la mantiene al día), no un extra opcional. Con una sola nota
aún no aplica. Ver `../guias/03-keywords-y-conceptos.md`.
