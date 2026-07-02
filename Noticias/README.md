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
