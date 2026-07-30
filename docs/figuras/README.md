# Figuras de los boletines

Aquí viven las imágenes que los boletines referencian desde un bloque
```` ```figura ````. La ruta que se escribe en el boletín es relativa a `docs/`,
es decir `figuras/nombre.png`.

## Cómo llega una imagen a esta carpeta

Con `<hub>/tools/extraer-figuras.py`, a partir de un PDF que ya esté en el vault:

```bash
python3 <hub>/tools/extraer-figuras.py /tmp/kestin2025.pdf --listar
python3 <hub>/tools/extraer-figuras.py /tmp/kestin2025.pdf \
    --pagina 4 --recorte 8,22,92,58 --prefijo 2026-08-03-kestin-fig01
```

No hay forma de descargarlas desde la web dentro de las rutinas: la política de
red del entorno responde 403 a arxiv.org, biorxiv.org, chemrxiv.org,
ncbi.nlm.nih.gov y api.crossref.org.

## Antes de commitear una figura

Este sitio es público. Una figura de paper es obra protegida, así que hay que
mirar la licencia antes de publicarla:

- Preprints de arXiv y bioRxiv: muchos van con CC BY o CC BY-NC, pero **la
  licencia por defecto de arXiv no autoriza redistribución**. Hay que mirar la
  página del preprint, caso por caso.
- Artículos de editorial cerrada: no.
- Figuras de acceso abierto con licencia Creative Commons: sí, citando autor,
  año y licencia en el pie.

Cuando la licencia no está clara, se deja el bloque ```` ```figura ```` sin
`src`. El lector compone el marco de semitono con la leyenda "Figura pendiente",
que es una pieza legítima del sistema de diseño. El hueco declarado siempre es
preferible a la imagen dudosa.

## Convención de nombres

`AAAA-MM-DD-autor-figNN.png`, con la fecha del boletín que la usa.

## Nota

Casi nunca hace falta una figura de paper. Para comparar cifras está el bloque
```` ```datos ````, que dibuja el gráfico en SVG con el pigmento del número, sin
red, sin licencias y sin salirse del sistema. Úselo primero.
