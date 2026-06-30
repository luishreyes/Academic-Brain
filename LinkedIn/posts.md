# Registro de publicaciones de LinkedIn

Documento único que almacena **todas** las publicaciones de LinkedIn (redactadas, programadas o ya publicadas) con sus metadatos. A medida que se creen nuevas, se añaden aquí como una entrada más.

## Esquema de metadatos (por publicación)

Cada entrada usa estos campos:

| Campo | Significado |
|---|---|
| `id` | Identificador correlativo (`P001`, `P002`, …) |
| `estado` | `borrador` · `programado` · `publicado` |
| `fecha_programada` | Fecha y hora en que está programada en LinkedIn (con zona horaria) — vacío si no aplica |
| `fecha_publicacion` | Fecha real de publicación — vacío si aún no se publica |
| `url` | Enlace al post en LinkedIn — vacío hasta que se publica |
| `fuente` | Nota o boletín del vault del que proviene (ej. `Noticias/2026-06-29-boletin.md`) — vacío si es original |
| `fecha_creacion` | Fecha en que se redactó/aprobó el texto |
| `tags` | Temas/keywords libres para búsqueda |

**Estados:** `borrador` = redactado y en revisión · `programado` = aprobado y agendado en LinkedIn (clic en el reloj) · `publicado` = ya visible en el feed.

---

<!--
PLANTILLA — copiar para cada nueva publicación:

## P00X — Título corto

- **estado:** borrador
- **fecha_programada:**
- **fecha_publicacion:**
- **url:**
- **fuente:**
- **fecha_creacion:** YYYY-MM-DD
- **tags:** []

Texto del post tal como va (o fue) en LinkedIn.

---
-->

<!-- Las publicaciones se añadirán debajo de esta línea. -->
