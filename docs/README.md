# Visualizador del Academic Brain

Sitio estático que dibuja el grafo de notas y conceptos del vault. No requiere
Obsidian: corre en cualquier navegador y se publica con GitHub Pages.

## Qué hay aquí

| Archivo | Qué es |
|---|---|
| `index.html` | El visualizador (autónomo, sin dependencias externas) |
| `build.mjs` | Genera `graph-data.js` leyendo las notas y conceptos del vault |
| `graph-data.js` | Datos del grafo — **generado automáticamente, no editar a mano** |

## Cómo regenerar los datos

Desde la raíz del repo, tras agregar o editar notas:

```bash
node docs/build.mjs
```

El comando `/ingest` ya hace esto automáticamente al procesar un paper/artículo.

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
