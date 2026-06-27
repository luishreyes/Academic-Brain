---
title: "Beyond the Benefits: A Systematic Review of the Harms and Consequences of Generative AI in Computing Education"
authors: [Seth Bernstein, Ashfin Rahman, Nadia Sharifi, Ariunjargal Terbish, Stephen MacNeil]
year: 2025
journal: "Koli Calling '25 — 25th International Conference on Computing Education Research"
url: https://arxiv.org/abs/2510.04443
doi: 10.1145/3769994.3770036
pdf_local: sources/pdfs/ia-educacion/bernstein2025-danos-ia-cs.pdf
type: paper
keywords:
  - inteligencia-artificial
  - educacion-en-programacion
  - educacion-superior
  - alucinaciones-de-ia
  - integridad-academica
  - psicologia-educativa
  - supervision-humana
  - etica-de-la-ia
  - revision-sistematica-de-literatura
date_added: 2026-06-25
---

# Beyond the Benefits: A Systematic Review of the Harms and Consequences of Generative AI in Computing Education

## Resumen

El debate sobre IA generativa en educación ha estado dominado por los beneficios: mejores explicaciones de código, tutores adaptativos, andamiaje personalizado. Este paper hace el contrapeso: una revisión sistemática de literatura (siguiendo PRISMA) sobre los **daños, riesgos y consecuencias no deseadas** de la IA generativa en la educación en ciencias de la computación. El corpus final es de 224 papers seleccionados de un universo inicial de 1.677 (ACM DL, IEEE Xplore, Scopus, 2022–2025), codificados por cuatro investigadores independientes con IRR de 0.84–0.69 (Fleiss' Kappa).

El resultado principal es una **taxonomía de daños** organizada en seis categorías: (1) *cognitivos* (adquirir conocimiento: alucinaciones y aprendizaje superficial; aplicar conocimiento: declive en resolución de problemas, homogenización de estilos de código); (2) *metacognitivos* (disrupciones en la planificación y monitoreo del propio aprendizaje; sobre-reliance y calibración de confianza); (3) *integridad académica y evaluación* (plagio habilitado por IA, políticas ambiguas, inconsistencia en la aplicación); (4) *equidad* (sesgos del modelo por idioma, raza y género; acceso desigual a herramientas); (5) *sociales* (reducción de colaboración entre pares, aislamiento); e (6) *instruccionales y logísticos* (preocupaciones de privacidad, nuevas cargas sobre el docente).

Los daños cognitivos y metacognitivos dominan la literatura: 189 instancias cognitivas solo en estudiantes de cursos introductorios. Los modelos de chat (ChatGPT, Claude, Gemini) concentran los mayores recuentos: 214 instancias de integridad académica, 323 cognitivas, 266 metacognitivas. Los hallazgos más preocupantes incluyen la "ilusión de competencia" —los estudiantes se sienten productivos y no perciben que no han aprendido—, la homogenización del estilo de código (del 12% al 30% de submissions atípicas entre 2022 y 2023), y la tendencia de los estudiantes de menor desempeño a usar IA sin ganar aprendizaje real. En contraste, los daños sociales (reducción de interacción con pares, aislamiento) y los de equidad siguen siendo las categorías menos investigadas.

El paper identifica un **sesgo de positividad** en la literatura: los estudios con intervención de instructores reportan efectos negativos en solo el 7% de los casos (Prather et al.), mientras que esta revisión más amplia encuentra un 16.3% de papers que discuten daños. Esto puede reflejar que los investigadores tienden a publicar más los resultados favorables de sus propias intervenciones.

## Contribuciones principales

- Taxonomía de daños de la IA generativa específica para educación en computación (la primera de este alcance)
- Síntesis empírica de cómo y dónde aparecen los daños según tipo de herramienta, método de investigación y población estudiantil
- Identificación de brechas metodológicas y daños sub-estudiados (sociales, equidad, impacto en carreras)

## Metodología

Revisión sistemática de literatura (SLR) siguiendo PRISMA. Búsqueda en ACM DL, IEEE Xplore y Scopus con términos de dominio ("computing education", "CS1", etc.) cruzados con términos de herramienta ("LLM", "ChatGPT", "generative AI", etc.). Criterios de inclusión: educación superior, discusión o demostración de daños de IA. Cuatro codificadores independientes extrajeron: año, población, método, tipo de herramienta, tarea educativa y categorías de daño. Niveles de evidencia: hipotético, observacional, empírico.

## Hallazgos clave

- La sobre-reliance es el daño más documentado: en sesiones cortas (0–5 prompts), el 81% de los prompts eran solicitudes directas de solución
- Estudiantes de menor proficiencia usaron IA en 67% de sus entregas (principalmente para generación y debugging) pero no superaron en desempeño a quienes programaron manualmente
- En grupos donde TAs verificaban los outputs de ChatGPT, el grupo asistido superó en 16.5 puntos al control; sin verificación, los resultados eran inconsistentes
- La IA tiende a beneficiar más a estudiantes ya bien preparados, amplificando la brecha preexistente ("AI divide")
- Los daños sociales (estudiantes que prefieren preguntar a ChatGPT antes que a sus profesores por miedo al juicio) están emergiendo pero son poco estudiados sistemáticamente

## Limitaciones

- La revisión cubre solo hasta julio 2025; subreprenta conferencias con proceedings tardíos (ICER, ITiCSE 2025)
- Foco exclusivo en educación superior; no cubre K-12
- Solo inglés; posible sesgo de publicación hacia resultados anglófonos
- Muchos daños aún son hipotéticos o de evidencia débil; la literatura empírica rigurosa (RCTs) es escasa

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-programacion]]
- [[concepts/educacion-superior]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/integridad-academica]]
- [[concepts/psicologia-educativa]]
- [[concepts/supervision-humana]]
- [[concepts/etica-de-la-ia]]
- [[concepts/revision-sistematica-de-literatura]]
- [[notes/papers/2025-06-03_tutoria-ia-supera-aprendizaje-activo-rct]]
