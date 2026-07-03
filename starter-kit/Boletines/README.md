# Boletines

Carpeta de boletines/digests generados por la rutina semanal (ver
`../guias/06-rutinas-y-boletines.md`). Cada edición es un `.md`:

- Convención de nombre: `AAAA-MM-DD-boletin.md`.
- Estructura: título, párrafo inicial en cursiva que sintetiza la semana,
  secciones con `##`, referencia mínima al cierre de cada fuente, y cierre en
  **"Hilo abierto para la próxima"** (es lo que mantiene la continuidad entre
  ediciones).

Para que el lector web (`docs/noticias.html`) muestre esta carpeta, debe estar
declarada en `COLLECTIONS`, dentro de `docs/build-noticias.mjs`. Puede renombrar
esta carpeta o tener varias (una por línea de investigación); solo mantenga
`COLLECTIONS` en sincronía.

> Puede borrar este README cuando publique su primer boletín.
