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

_Sin entradas por ahora._
