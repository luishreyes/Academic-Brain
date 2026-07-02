# Visualizador del Academic Brain

Sitio estático que dibuja el grafo de notas y conceptos del vault. No requiere
Obsidian: corre en cualquier navegador y se publica con GitHub Pages.

## Qué hay aquí

| Archivo | Qué es |
|---|---|
| `index.html` | El visualizador del grafo (autónomo, sin dependencias externas) |
| `build.mjs` | Genera `graph-data.js` leyendo las notas y conceptos del vault |
| `graph-data.js` | Datos del grafo — **generado automáticamente, no editar a mano** |
| `noticias.html` | Lector de boletines (`Noticias/` y `Noticias-Biotec/`), selección por fecha |
| `build-noticias.mjs` | Genera `noticias-data.js` leyendo los `.md` de ambas carpetas de boletines |
| `noticias-data.js` | Datos de los boletines — **generado automáticamente, no editar a mano** |

Ambas páginas se enlazan entre sí (el visualizador tiene un botón "📰 Boletines →"
y el lector tiene "← Volver al grafo").

## Cómo regenerar los datos

Desde la raíz del repo:

```bash
node docs/build.mjs           # tras agregar o editar notas/conceptos
node docs/build-noticias.mjs  # tras agregar o editar un boletín en Noticias/ o Noticias-Biotec/
```

El comando `/ingest` ya ejecuta `build.mjs` automáticamente al procesar un paper/artículo.
`build-noticias.mjs` se corre a mano al publicar un boletín nuevo.

## Activar GitHub Pages (una sola vez)

1. En GitHub: **Settings → Pages**
2. En **Source** elegir **Deploy from a branch**
3. Branch: **`main`** · Folder: **`/docs`**
4. Guardar. En ~1 min el sitio queda en `https://luishreyes.github.io/Academic-Brain/`

> Nota: el repo debe ser **público** para usar Pages con cuenta gratuita.
> El enlace "Ver nota (.md)" usa la rama configurada en `CONFIG.repoBlobBase`
> dentro de `index.html` (actualmente `main`).

## Verlo localmente

`file://` no carga el `graph-data.js` por restricciones del navegador, así que usa
un servidor simple:

```bash
cd docs && python3 -m http.server 8000
# abrir http://localhost:8000
```
