---
title: "Generative AI in Engineering and Computing Education: A Scoping Review of Empirical Studies and Educational Practices"
authors: ["Jonathan Álvarez Ariza", "Milena Benitez Restrepo", "Carola Hernández Hernández"]
year: 2025
journal: IEEE Access
url: https://doi.org/10.1109/ACCESS.2025.3541424
doi: 10.1109/ACCESS.2025.3541424
pdf_local: sources/pdfs/existing-reviews-gapmap/alvarezariza_2025_genai-eng-computing.pdf
type: paper
keywords: [inteligencia-artificial, educacion-en-ingenieria, educacion-en-programacion, revision-sistematica-de-literatura, alfabetizacion-en-ia, ingenieria-de-prompts, pensamiento-critico, retroalimentacion-con-ia, integridad-academica, educacion-superior, educacion-k12, formacion-docente]
date_added: 2026-06-28
---

# Generative AI in Engineering and Computing Education: A Scoping Review of Empirical Studies and Educational Practices

## Resumen

Esta revisión de alcance (scoping review), elaborada según las guías PRISMA-ScR, analiza la integración de la IA generativa (GenAI) en la educación en ingeniería y computación, desde niveles K-12 hasta educación terciaria. Partiendo de 146 registros recuperados de SCOPUS, Web of Science y ERIC, y tras un proceso de cribado con tres codificadores (Cohen's Kappa = 0.84, acuerdo final del 100 %), los autores seleccionaron 24 estudios empíricos (estudios de caso y experimentales) que reportan evidencia de aplicación y evaluación. El análisis combina una capa bibliométrica (autores, citas, países, revistas y mapas de clústeres de keywords con VOSViewer) con una capa pedagógica codificada en MAXQDA (enfoque de investigación, participantes, nivel educativo, resultados de aprendizaje, instrumentos de alfabetización en IA, y percepciones de estudiantes y docentes).

Los hallazgos muestran un predominio de propuestas centradas en el estudiante para educación en computación a nivel universitario, con resultados de aprendizaje concentrados en el dominio cognitivo; en cambio, en K-12 hay mayor énfasis en el dominio afectivo. ChatGPT es la herramienta más utilizada, seguida de DALL·E, GitHub Copilot y herramientas de prompting creadas por los propios investigadores (p. ej., Promptly). La mayoría de los estudios provienen de Estados Unidos (45.8 %), lo que limita la diversidad de contextos socioculturales. La ingeniería de prompts aparece como una habilidad del siglo XXI, aunque la evidencia sugiere que la alfabetización en IA y la capacidad de formular buenos prompts no están necesariamente correlacionadas.

Los autores señalan una sobreestimación del estudio de las percepciones frente a una subestimación de cómo la GenAI influye realmente en el proceso de enseñanza-aprendizaje, así como un desbalance entre propuestas centradas en estudiantes y en docentes (la voz del profesorado y los programas de formación docente están ausentes). Concluyen que la GenAI es solo una herramienta que debe orientarse a propósitos pedagógicos —y no al revés—, y abogan por una mejor articulación entre los currículos de ingeniería/computación y las competencias de alfabetización en IA, adoptando una perspectiva pedagógica crítica más allá del hype.

## Contribuciones principales

- Mapeo sistemático de 24 estudios empíricos sobre prácticas educativas reales con GenAI en ingeniería y computación (no solo de afordancias u opiniones).
- Síntesis de estrategias y actividades de integración de GenAI, clasificadas por nivel educativo (K-12 vs. terciario) y por enfoque (centrado en estudiante vs. centrado en docente).
- Catálogo de herramientas de GenAI usadas, incluyendo asistentes de prompting creados ad hoc por los investigadores.
- Inventario de escalas, encuestas y guías de alfabetización en IA identificadas en los estudios.
- Identificación de brechas (gap map) y oportunidades de mejora desde una óptica pedagógica crítica.

## Metodología

Revisión de alcance bajo PRISMA-ScR siguiendo las etapas de Arksey y O'Malley. Búsqueda en SCOPUS, WoS y ERIC con cadenas booleanas sobre "engineering education" y "computing education" + IA generativa (2022-2024); 146 registros iniciales depurados a 127 tras eliminar duplicados y registros irrecuperables. Cribado con Rayyan.ai bajo criterios de inclusión/exclusión y clasificación por tipo de estudio (marco de Montesi y Lago), reteniendo 24 estudios de caso y experimentales. Análisis bibliométrico con VOSViewer y Crossref REST API (vía Python); codificación cualitativa abierta de 640 fragmentos en MAXQDA 24 por dos codificadores con acuerdo inter-codificador del 100 %. Los resultados se organizan en torno a cuatro preguntas de investigación (RQ1 bibliometría; RQ2 características educativas y dominios de aprendizaje; RQ3 estrategias y actividades; RQ4 retos y oportunidades).

## Hallazgos clave

- Solo 24 de 146 estudios reportan evidencia empírica; abundan los papers de opinión, experiencia y benchmarking (ej. si ChatGPT aprueba exámenes de CS1/CS2).
- Predominio de propuestas centradas en el estudiante, en computación, a nivel universitario y en el dominio cognitivo; en K-12 emerge el dominio afectivo (identidad, creatividad, prácticas culturales).
- ChatGPT es la herramienta dominante; las percepciones positivas incluyen tutoría personalizada y retroalimentación, y las negativas incluyen alucinaciones, información poco fiable para temas técnicos específicos y carga cognitiva en la formulación de prompts.
- Alfabetización en IA y prompt engineering aparecen como conceptos centrales pero ambiguos: las competencias de alfabetización en IA no se aplican igual a todos los niveles (K-12 vs. universidad) y no correlacionan necesariamente con la capacidad de prompting.
- Concentración geográfica en EE. UU. (45.8 % de las propuestas) y predominio de actas de congreso (82.6 %) sobre artículos de revista.
- Brecha entre el estudio de percepciones y la comprensión de los efectos reales de la GenAI en el aprendizaje; voz docente y formación del profesorado ausentes.

## Limitaciones

- Las cadenas de búsqueda ("engineering/computing education") pueden excluir estudios indexados bajo "computer science", literatura gris u otros idiomas.
- Sesgo potencial de los investigadores al analizar bajo una lente pedagógica crítica, que pudo descartar artículos relevantes.
- Estudios emergentes posteriores al cierre de la revisión quedan fuera del alcance.
- Base reducida (24 estudios) que limita generalizaciones.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/educacion-en-programacion]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/pensamiento-critico]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/integridad-academica]]
- [[concepts/educacion-superior]]
- [[concepts/educacion-k12]]
- [[concepts/formacion-docente]]
