# Noticias-Biotec

Carpeta para noticias y novedades relacionadas con la investigación en biotecnología del autor (péptidos antimicrobianos, nanomedicina, biotecnología metabólica, ingeniería de proteínas y afines).

Distinta de `Noticias/`, que recoge los boletines de investigación sobre IA en educación e ingeniería. Aquí van las novedades del **frente biotec**.

## Convención

- Un archivo por entrada: `YYYY-MM-DD_titulo-corto.md` (sin tildes, sin espacios) — la fecha al inicio del nombre es lo que usa el lector web para ordenarlas.
- Empezar el archivo con `# Título` — el lector lo usa como título de la entrada.
- Cada entrada puede enlazar con notas del vault mediante wiki-links, p. ej. `[[notes/papers/...]]`.

## Leer las noticias

Mismo lector que `Noticias/`: **`docs/noticias.html`** → `https://luishreyes.github.io/Academic-Brain/noticias.html`

Tras agregar una entrada, regenerar los datos:

```bash
node docs/build-noticias.mjs
```

## Boletines publicados

Doce ediciones semanales desde el 2 de julio de 2026, con la convención
`AAAA-MM-DD-boletin.md`. La última es la del 14 de septiembre de 2026.

Cada boletín cierra con una sección **"Hilo abierto para mañana"**: es la memoria
de la rutina, y el PASO 0 de la sesión siguiente la lee para saber por dónde
seguir. Los pendientes no caducan por antigüedad, así que conviene recorrer la
carpeta completa y no solo el último número.
