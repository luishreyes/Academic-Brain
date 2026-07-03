# Visualizador

Sitio estático que dibuja el grafo de notas y conceptos del vault y muestra los
boletines. No requiere Obsidian ni ninguna app: corre en cualquier navegador y se
publica con GitHub Pages. Sin dependencias externas. Guía completa en
`../guias/05-visualizador.md`.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | El grafo interactivo (autónomo). |
| `build.mjs` | Genera `graph-data.js` leyendo notas y conceptos. |
| `graph-data.js` | Datos del grafo — **generado, no editar a mano.** |
| `noticias.html` | El lector de boletines. |
| `build-noticias.mjs` | Genera `noticias-data.js` desde las carpetas de boletines. |
| `noticias-data.js` | Datos de boletines — **generado, no editar a mano.** |

## Regenerar los datos

Desde la raíz del repo:

```bash
node docs/build.mjs           # tras agregar o editar notas / conceptos
node docs/build-noticias.mjs  # tras publicar o editar un boletín
```

`/ingest` ya corre `build.mjs` automáticamente. `build-noticias.mjs` se corre al
publicar un boletín (la rutina lo hace en su PASO 4).

## Publicar (una vez)

GitHub → **Settings → Pages** → *Deploy from a branch* → `main` / `/docs`.
Queda en `https://SU-USUARIO.github.io/SU-REPO/`. (Repo público para plan gratis.)

## Qué editar para su repo

En `index.html`: `CONFIG.repoBlobBase` (su usuario/repo), la marca (`<title>` y
`<h1>`) y, opcional, el `CATEGORY_MAP`. En `build-noticias.mjs`: el array
`COLLECTIONS` (sus carpetas de boletines). Todo está marcado con `EDITE ESTO`.

## Ver en local

```bash
cd docs && python3 -m http.server 8000   # abrir http://localhost:8000
```
(`file://` no carga los datos por seguridad del navegador.)
