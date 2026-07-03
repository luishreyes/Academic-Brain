# 05 · El visualizador

El vault tiene su propio visualizador web en `docs/`, servido por GitHub Pages.
No requiere Obsidian ni ninguna app: es HTML + JS vanilla, sin dependencias
externas, que corre en cualquier navegador. Son dos páginas que se enlazan entre
sí: el **grafo** y el **lector de boletines**.

## Los archivos

| Archivo | Qué es |
|---|---|
| `docs/index.html` | El grafo interactivo (nodos = notas y conceptos; aristas = keywords compartidas). |
| `docs/build.mjs` | Script Node (sin dependencias) que lee notas + conceptos + keywords y genera `graph-data.js`. |
| `docs/graph-data.js` | Datos del grafo — **generado, no editar a mano.** |
| `docs/noticias.html` | El lector de boletines (ver `guia 06`). |
| `docs/build-noticias.mjs` | Genera `noticias-data.js` desde las carpetas de boletines. |
| `docs/noticias-data.js` | Datos de boletines — **generado, no editar a mano.** |

**Regla:** después de cualquier cambio en notas, conceptos o keywords, corra
`node docs/build.mjs` y commitee `docs/graph-data.js`. El comando `/ingest` ya lo
hace en su último paso.

## Qué puede hacer el grafo

- Filtrar por tipo (papers, artículos, libros, conceptos) y por categoría.
- Buscar por título, autor o keyword.
- Explorar conceptos y abrir un panel de detalle con el contenido de cada nota,
  su definición, la síntesis "Qué dice la literatura" (si existe) y un enlace al
  `.md` original en GitHub.
- Ajustar la física del grafo (repulsión, atracción, etc.) en vivo.
- Funciona en móvil (arrastre con un dedo, zoom con pellizco).

## Publicarlo en GitHub Pages (una sola vez)

1. En GitHub: **Settings → Pages**.
2. **Source:** *Deploy from a branch*.
3. **Branch:** `main` · **Folder:** `/docs`.
4. Guardar. En ~1 min queda en `https://SU-USUARIO.github.io/SU-REPO/`.

> El repo debe ser **público** para usar Pages con cuenta gratuita. Si necesita
> que sea privado, Pages requiere plan de pago.

## Personalizar (opcional)

Todo el visualizador es agnóstico al tema salvo tres cosas, todas en
`docs/index.html`:

1. **El enlace al `.md` original.** Edite `CONFIG.repoBlobBase` y ponga
   `https://github.com/SU-USUARIO/SU-REPO/blob/main/`. Sin esto, el botón "Ver
   nota (.md)" apunta al repo equivocado.
2. **La marca.** El `<title>` y el `<h1>` dicen "Segundo Cerebro". Cámbielos por
   el nombre que quiera.
3. **Las categorías de color** (`CATEGORY_MAP`). Cada categoría agrupa keywords
   bajo un color y un botón de filtro. Viene con un ejemplo. Para adaptarlo:
   - Ponga en cada `Set` los slugs de sus keywords.
   - Un keyword que no esté en ninguna categoría no se resalta al filtrar, pero
     el grafo funciona igual. No hace falta clasificarlos todos.
   - Si quiere renombrar o cambiar el número de categorías, edite también los
     botones `.cat-btn` (en el HTML) y sus reglas de color `.cat-btn.active[...]`
     (en el CSS). Están a pocas líneas del `CATEGORY_MAP`, marcados.

`noticias.html` solo tiene la marca para cambiar; el resto se alimenta de los
datos generados.

## Verlo en local (sin publicar)

`file://` no carga los datos por seguridad del navegador. Use un servidor simple:

```bash
cd docs && python3 -m http.server 8000
# abrir http://localhost:8000
```
