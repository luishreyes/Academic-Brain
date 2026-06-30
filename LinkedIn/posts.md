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

## P001 — IA, descarga cognitiva y el diseño de la consigna

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** ~2026-06-16 (aprox.; publicado "hace 2 semanas" respecto al 2026-06-30, LinkedIn no muestra la fecha exacta)
- **url:**
- **fuente:** [[notes/papers/2025-01-03_ia-descarga-cognitiva-pensamiento-critico]] (Gerlich 2025) · [[notes/papers/2026-06-28_brain-on-chatgpt-deuda-cognitiva]] (Kosmyna 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [pensamiento-critico, descarga-cognitiva, ia-en-educacion, educacion-en-ingenieria, ia-generativa, diseno-de-evaluacion]

¿Y si la herramienta que promete potenciar el aprendizaje estuviera debilitando, en silencio, el músculo que más nos importa formar?

Vengo siguiendo la evidencia reciente sobre IA generativa y pensamiento crítico, y hay un patrón que ningún docente de ingeniería debería ignorar.

Un estudio con 666 participantes (Gerlich, 2025) encontró una asociación negativa entre el uso frecuente de IA y la capacidad de razonar críticamente. El mecanismo tiene nombre: descarga cognitiva. Delegamos el esfuerzo mental, y ese esfuerzo es justamente donde ocurre el aprendizaje. Un trabajo del MIT lo midió con electroencefalografía y observó menor conectividad cerebral en quienes escribían apoyados por el modelo.

Aclaro algo importante. Esa evidencia es correlacional y todavía discutida. No demuestra que la herramienta cause daño permanente.

Pero la lección pedagógica es clara y la asumo en mis cursos: el riesgo no vive en la IA, vive en el diseño de la actividad. Si la consigna permite entregar la respuesta de la máquina, el estudiante la entrega. Si la consigna exige justificar, refutar y reconstruir esa respuesta, la IA se vuelve un detonante del pensamiento y no un sustituto.

El verdadero rediseño curricular no consiste en prohibir, consiste en pedir aquello que la herramienta no puede hacer por nosotros.

¿Qué están haciendo ustedes para que sus estudiantes piensen con la IA y no en lugar de ella?

(Dejo las referencias en el primer comentario.)

#IAenEducación #IngenieríaEducación #PensamientoCrítico #EducaciónSuperior #IAGenerativa

**Primer comentario (referencias):**

Gerlich, M. (2025). AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking. Societies, 15(1), 6. https://doi.org/10.3390/soc15010006 (acceso abierto)

Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X. H., Beresnitzky, A. V., Braunstein, I., & Maes, P. (2025). Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task. arXiv:2506.08872. https://arxiv.org/abs/2506.08872 (preprint)

Stanković, M., Hirche, E., Kollatzsch, S., & Doetsch, J. N. (2026). Comment on: Your Brain on ChatGPT. arXiv:2601.00856. https://arxiv.org/abs/2601.00856 (crítica metodológica)

---
