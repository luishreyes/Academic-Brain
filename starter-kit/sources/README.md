# sources

- `inbox/` — suelte aquí los PDFs nuevos. `/ingest` (sin argumentos) los procesa,
  los mueve a `pdfs/` con nombre canónico y borra el original del inbox.
- `pdfs/` — PDFs ya procesados, con nombre canónico
  `apellido-año-slug.pdf`. Cada nota los referencia en su campo `pdf_local`.
