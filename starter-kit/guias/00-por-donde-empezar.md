# 00 · Por dónde empezar

Este starter-kit es un **segundo cerebro** que crece con usted: ingesta papers,
artículos y libros; extrae keywords sin forzar conexiones; construye un grafo
navegable; y —opcionalmente— corre una rutina semanal que vigila la literatura
nueva y la cruza contra lo que usted ya tiene. Todo son archivos de texto plano
en un repo de GitHub. La inteligencia la pone Claude Code cada vez, no una
plantilla rígida.

## Qué hay en el kit

```
CLAUDE.md                 ← el archivo que le dice a Claude Code cómo comportarse. EMPIECE EDITANDO ESTO.
keywords.md               ← taxonomía semilla (bórrela y ponga la suya)
.claude/commands/ingest.md← el comando /ingest
docs/                     ← visualizador del grafo + lector de boletines (GitHub Pages)
notes/  concepts/  sources/← el vault en sí (arranca vacío)
Boletines/                ← boletines/digests semanales (opcional)
templates/                ← plantillas de nota, concepto y rutina
guias/                    ← esto que está leyendo
SETUP.md                  ← montaje paso a paso (repo, Pages, primera ingesta, rutina)
```

## Ruta recomendada (una tarde)

1. **Monte el repo.** Siga `SETUP.md`. Al terminar tiene el kit en su propio
   repositorio de GitHub y Claude Code conectado a él.
2. **Defina su tema.** Edite `CLAUDE.md`: reemplace `[SU TEMA]` y ajuste lo que
   quiera. Este archivo gobierna todo el comportamiento.
3. **Lea la filosofía.** `guias/01-filosofia-antisesgo.md`. Son cinco minutos y
   es lo que separa un segundo cerebro útil de una pila de PDFs etiquetados.
4. **Ingeste 5–10 fuentes a mano.** Suba PDFs a `sources/inbox/` y escriba
   `/ingest`. Vea cómo se crean notas, keywords y conceptos. (`guia 02` y `03`.)
5. **Publique el grafo.** Active GitHub Pages sobre `/docs`. (`guia 05`.)
6. **(Opcional) Monte la rutina semanal.** `guia 06` + `templates/rutina-boletin.md`.

## Las tres decisiones que solo usted puede tomar

- **El tema y su alcance.** ¿Qué entra al vault y qué no? Vive en `CLAUDE.md`.
- **Las categorías de color del grafo.** Opcional, cosmético. Vive en el
  `CATEGORY_MAP` de `docs/index.html`. (`guia 05`.)
- **Las fuentes y la cadencia de la rutina.** Qué bases vigila y cada cuánto.
  Vive en la Routine y en `docs/build-noticias.mjs`. (`guia 06`.)

Todo lo demás ya viene montado y es agnóstico al tema.

## Índice de guías

| Guía | De qué trata |
|---|---|
| `01-filosofia-antisesgo.md` | La regla de oro: las conexiones emergen, no se fuerzan. |
| `02-ingesta-y-notas.md` | Cómo entra una fuente y en qué se convierte. |
| `03-keywords-y-conceptos.md` | La taxonomía, las páginas de concepto, la síntesis. |
| `04-sintesis-multiagente.md` | Lanzar subagentes en paralelo sin sesgo ni conflictos. |
| `05-visualizador.md` | El grafo web, GitHub Pages y las categorías de color. |
| `06-rutinas-y-boletines.md` | La vigilancia semanal automatizada y su lector web. |
