# Este repositorio es, en parte, salida generada

`notes/`, `concepts/` y `keywords.md` **no se editan aquí.** Son la proyección
del subgrafo público del brain, que vive completo y privado en el hub
`agentic-os`. Un cambio hecho a mano en esos directorios se pierde en la
siguiente publicación.

Registro de la decisión: `agentic-os/decisions/0004`.

## Por qué

La visibilidad es propiedad del render, no del conocimiento. Una presentación de
clase no es "conocimiento privado" — es conocimiento propio que aún no se
publica, y que puede citar tres papers y volverse público el semestre siguiente.

Dos repositorios separados obligarían a decidir eso al capturar, cuando menos se
sabe, y los enlaces no cruzarían la frontera. Un solo brain privado, y la
publicación como proyección, conserva las conexiones y decide la visibilidad
cuando corresponde.

## Qué se publica

El **subgrafo inducido** por las notas marcadas `visibility: public`:

- Una arista de nota pública a nota privada no existe aquí. No queda un enlace
  roto ni un "hay algo que no puedes ver".
- Un concepto que solo usan notas privadas no se publica, y su keyword tampoco
  aparece en `keywords.md`. El nombre de una keyword delata su tema: publicar la
  taxonomía completa filtraría de qué trata el material privado.
- Los backlinks de cada concepto se re-derivan sobre el subconjunto público.

## Cómo se regenera

Desde el hub:

```bash
python3 scripts/publicar.py <ruta-a-este-repo>            # simula
python3 scripts/publicar.py <ruta-a-este-repo> --apply    # escribe
node docs/build.mjs                                        # en este repo
```

## Qué sí se mantiene a mano aquí

- `docs/` — el visualizador: `index.html`, `build.mjs`, `revista.css`,
  `noticias.html`. Es código, no conocimiento.
- `Noticias/`, `Noticias-Biotec/`, `rutinas/`, `bookclub/`, `starter-kit/` —
  todavía fuente. Moverlos al hub es trabajo pendiente; hoy son públicos por
  naturaleza, así que la inconsistencia no hace daño.

El ingest, el vocabulario y el gate de integridad viven en el hub.
