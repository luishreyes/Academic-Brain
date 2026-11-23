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

Quince ediciones con la convención `AAAA-MM-DD-boletin.md`. Las catorce
primeras son semanales y van del 2 de julio al 28 de septiembre de 2026. La
decimoquinta es la del 23 de noviembre de 2026, y entre una y otra hubo ocho
semanas sin edición.

Esa interrupción cambia cómo se lee el número del 23 de noviembre. Su ventana
primaria cubre solo los siete días previos, del 16 al 23 de noviembre. El
material publicado entre el 1 de octubre y el 15 de noviembre se trata como
ventana secundaria: entra únicamente si cierra o mueve un hilo abierto, o si es
demasiado importante para omitirlo. Cada hallazgo declara a qué ventana
pertenece.

Una versión anterior de este archivo afirmaba quince ediciones ya en octubre y
situaba la última el 12 de octubre de 2026. Era falso: ese archivo no existe en
ninguna rama del repositorio, comprobado con
`git log --all --name-only -- Noticias-Biotec/`. Tampoco hubo edición el 5 de
octubre, y ninguna edición cubre una ventana de dos semanas.

Cada boletín cierra con una sección **"Hilo abierto para mañana"**: es la memoria
de la rutina, y el PASO 0 de la sesión siguiente la lee para saber por dónde
seguir. Los pendientes no caducan por antigüedad, así que conviene recorrer la
carpeta completa y no solo el último número.
