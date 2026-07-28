# Prompts de las rutinas

Los dos boletines semanales corren como Rutinas de Claude, configuradas desde la
interfaz de claude.ai y no desde este repositorio. Aquí queda la versión de
control de sus prompts, para poder editarlos, revisarlos y volver atrás.

| Archivo | Rutina | Cron (UTC) | Hora en Bogotá |
|---|---|---|---|
| `prompt-noticias.md` | Weekly AI in education digest | `30 11 * * 1` | lunes 6:30 a. m. |
| `prompt-noticias-biotec.md` | Weekly Bio and Nano Digest | `0 12 * * 1` | lunes 7:00 a. m. |

## Cómo se actualiza una rutina

Las Rutinas se crearon por la API, así que un agente no puede modificarlas: la
API solo deja tocar las que él mismo creó. Los cambios de modelo, de prompt y de
horario se hacen a mano.

1. Abrir claude.ai → Rutinas → la rutina.
2. Pegar el contenido del archivo correspondiente en el campo del prompt.
3. Confirmar que el modelo sea **Opus 5**.
4. Guardar.

## Estado a 28 de julio de 2026

- El prompt de ambas rutinas incorpora ya el formato revista descrito en
  `docs/formato-boletin.md`.
- **Pendiente en la interfaz:** las dos rutinas siguen en modelos anteriores
  (`claude-sonnet-5` la de biotecnología, `claude-opus-4-8` la de educación).
  Hay que cambiarlas a Opus 5 a mano.
- **Pendiente en el entorno:** la política de red bloquea `arxiv.org`,
  `biorxiv.org`, `chemrxiv.org`, `ncbi.nlm.nih.gov` y `api.crossref.org` con 403.
  Mientras siga así, las rutinas verifican contra fuente primaria solo por
  WebSearch y por los conectores de PubMed y Scholar Gateway, y no pueden
  descargar figuras.
