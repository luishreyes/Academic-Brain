# Noticias

Boletines de investigación sobre **IA en educación e ingeniería** — el tema dominante del second brain. Cada edición sintetiza literatura reciente relevante para la docencia en ingeniería (evaluación, integridad académica, tutoría con IA, evidencia empírica de impacto, etc.) y la conecta con lo que ya vive en el vault.

Distinta de `Noticias-Biotec/`, que recoge novedades del frente de investigación en biotecnología del autor.

## Convención

- Un archivo `.md` por edición: `YYYY-MM-DD-boletin.md` — es la fuente de verdad (editable, versionada, legible en GitHub).
- Estructura libre por secciones temáticas (títulos `##`), cerrando siempre con un **"Hilo abierto para mañana"** que retoma el pendiente para la próxima edición — es lo que mantiene la continuidad entre boletines.
- Cada afirmación va acompañada de su referencia (autor, año, DOI/enlace).
- Las ediciones se enlazan entre sí cronológicamente (la más reciente retoma el hilo abierto de la anterior).

## Leer los boletines

El vault tiene un **lector web en GitHub Pages** que lista todas las ediciones (de aquí y de `Noticias-Biotec/`) y permite seleccionarlas por fecha:
**`docs/noticias.html`** → `https://luishreyes.github.io/Academic-Brain/noticias.html`

Tras agregar o editar un boletín, regenerar los datos del lector:

```bash
node docs/build-noticias.mjs
```

## Ediciones

- [2026-06-28](2026-06-28-boletin.md) — primer número.
- [2026-06-29](2026-06-29-boletin.md) — segundo número, retoma el hilo de retención/transferencia del primero.
- [2026-07-06](2026-07-06-boletin.md) — tercer número, cierra el hilo de la evidencia rigurosa: benchmarks de ingeniería vs. aprendizaje real, un RCT con resultado nulo y la brecha desempeño-competencia.
- [2026-07-13](2026-07-13-boletin.md) — cuarto número, aparece el ensayo de transferencia que faltaba (Contractor y Reyes) con su contradicción (Barcaui): lo que decide entre aprender y desaprender es el modo de uso, y lo gobierna el diseño de la evaluación (marco de Gao).
- [2026-07-20](2026-07-20-boletin.md) — quinto número, la geografía del hueco de ingeniería: Bralin muestra que la máquina falla en el razonamiento cuantitativo con figuras y Kirpalani que el estudiante cede su criterio en el conocimiento fundamental.
- [2026-07-27](2026-07-27-boletin.md) — sexto número, la grieta visuoespacial se replica en cirugía cardiovascular y oftalmología, y un preprint con 156 000 estudiantes matiza la alarma de la descarga cognitiva midiendo notas, no aprendizaje.
- [2026-08-03](2026-08-03-boletin.md) — séptimo número, Dickey aporta el aleatorizado cruzado más cercano al hilo (sube la tarea, no se mueve el examen), la histopatología oral suma la quinta disciplina a la grieta visuoespacial y la adulación resulta despolarizar en vez de encerrar.
- [2026-08-10](2026-08-10-boletin.md) — octavo número, el examen sí se enteró dos años después: un panel de 26 000 estudiantes chinos respondía desde hacía meses la pregunta abierta, y la adulación resulta tener modos que el texto esconde y los pesos separan.
- [2026-08-17](2026-08-17-boletin.md) — noveno número, al último testigo fiable le están escribiendo las preguntas: medio millón de notas respaldan el examen vigilado, y los ítems redactados por IA pierden la mitad de su fiabilidad sin que ningún experto lo note.
- [2026-08-24](2026-08-24-boletin.md) — décimo número, el mecanismo de la grieta visuoespacial recibe nombre propio: el modelo no lee la figura, deduce lo que debería contener a partir del texto y lo presenta con menos advertencias.
- [2026-08-31](2026-08-31-boletin.md) — undécimo número, la respuesta correcta por la razón equivocada: casi una de cada cinco respuestas acertadas de imagen torácica se apoya en hallazgos inventados.
- [2026-09-07](2026-09-07-boletin.md) — duodécimo número, la mejora no viajó a la tarea siguiente (Chakraborty), y el conector académico resulta no estar congelado sino leer un solo sello editorial.
- [2026-09-14](2026-09-14-boletin.md) — decimotercer número, nueve demostraciones que no movieron nada: cálculo propio sobre los datos depositados de un curso de estática (resultado nulo en desempeño, confianza al alza, autopercepción de error plana). El quinto frente se resuelve con un metaanálisis que ya estaba en el archivo.
