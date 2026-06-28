---
title: "Encouraging responsible GenAI use in software engineering education: A design-oriented model"
authors: [Vahid Garousi, Zafar Jafarov, Aytan Mövsümova, Atif Namazov, Hüseyn Mirzayev]
year: 2026
journal: The Journal of Systems and Software
url: https://doi.org/10.1016/j.jss.2026.112846
doi: 10.1016/j.jss.2026.112846
pdf_local: sources/pdfs/policy-ethics-accreditation/garousi_2026_responsible-genai-see-jss.pdf
type: paper
keywords: [inteligencia-artificial, educacion-en-programacion, pensamiento-critico, sobredependencia-de-la-ia, alfabetizacion-en-ia, integridad-academica, taxonomia-de-bloom, supervision-humana, evaluacion-educativa, etica-de-la-ia, deteccion-de-texto-ia]
date_added: 2026-06-28
---

# Encouraging responsible GenAI use in software engineering education: A design-oriented model

## Resumen
A medida que herramientas de IA generativa (GenAI) como ChatGPT y GitHub Copilot se vuelven omnipresentes en la educación, crece la preocupación de que los estudiantes las usen para *completar* tareas en lugar de *aprender* de ellas, con riesgos de sobredependencia, menor pensamiento crítico y déficits de habilidades a largo plazo. Este artículo, ubicado específicamente en la educación en ingeniería de software (Software Engineering Education, SEEd), propone un modelo conceptual orientado al diseño llamado **Guide-AI-Ed**, cuyo propósito es ayudar a los docentes a razonar sobre cómo las decisiones de diseño de cursos y currículos pueden fomentar un uso responsable de la GenAI.

El modelo es descrito por los autores como orientado al diseño, informado causalmente y conceptual (no un modelo estricto de causa-efecto). Organiza los factores que influyen en el uso estudiantil de GenAI en tres grupos de actores —profesores, estudiantes y las propias herramientas de IA— y mapea relaciones direccionales (enlaces "+/−") entre factores de diseño del curso (p. ej., tareas de validación de salidas de IA, revisión por pares de artefactos generados por IA, declaraciones de uso) y resultados de aprendizaje (pensamiento crítico, habilidades de verificación, uso responsable). Se apoya en la taxonomía de Bloom (incluida una extensión reciente sensible a la IA), la teoría constructivista del aprendizaje, el ciclo de aprendizaje experiencial de Kolb y la teoría de sistemas sociotécnicos.

Mediante una metodología de investigación basada en el diseño (design-based research, DBR), los autores aplican el modelo en dos contextos reales: (1) la revisión de cuatro prácticas de laboratorio extensas de un curso de último año de Software Testing en la Queen's University Belfast (QUB), y (2) la incorporación de competencias relacionadas con GenAI en el currículo de un nuevo programa de grado en ingeniería de software de la Azerbaijan Technical University (AzTU). Las intervenciones incluyeron declaraciones obligatorias de uso de GenAI, tareas de validación de salidas, revisión por pares de artefactos de IA y mensajes vinculados a la relevancia profesional.

En el caso a nivel de curso, las observaciones del docente y los artefactos de los estudiantes indicaron un mayor compromiso crítico con la GenAI, una reducción de la dependencia pasiva y una mejor conciencia sobre las prácticas de validación. En el caso a nivel de currículo, el modelo orientó la integración de resultados de aprendizaje sobre GenAI a lo largo de múltiples módulos y niveles, habilitando un andamiaje longitudinal de la alfabetización en IA. Los autores no abogan por prohibir la GenAI, sino por fomentar su uso responsable para que los estudiantes evolucionen de "consumidores de IA" a "ingenieros alfabetizados en IA".

## Contribuciones principales
- Propone **Guide-AI-Ed**, un modelo conceptual orientado al diseño e informado causalmente que captura los factores (de profesores, estudiantes y herramientas) que dan forma al uso responsable de GenAI en SEEd.
- Rediseña un conjunto de ejercicios de laboratorio de testing de software para alinearlos con el modelo y evalúa su integración.
- Aplica el modelo al diseño de un nuevo programa de grado en ingeniería de software.
- Aporta hallazgos prácticos sobre cómo los estudiantes interactúan con herramientas GenAI y desarrollan habilidades de verificación mediante uso iterativo y evaluación crítica.

## Metodología
Investigación basada en el diseño (DBR) siguiendo guías de intervención (Reinking, 2021). El modelo se construyó a partir de una revisión extensa de literatura (académica y gris), observaciones de aula desde 2022 (introducción de ChatGPT) y refinamiento iterativo mediante intervenciones de diseño. Se evaluó de forma ilustrativa en dos contextos institucionales (QUB y AzTU). El trabajo incluye un análisis SWOT sintético de la GenAI en educación CS/SE y una comparación con marcos existentes (PAIR, AI-ICE, AI-Lab, competencias UNESCO, diagramas de bucle causal de Tan et al.).

## Hallazgos clave
- Muchos usos estudiantiles de GenAI (resumir documentación, generar código o casos de prueba) permanecen en los niveles bajos de la taxonomía de Bloom (recordar, comprender) y, sin guía deliberada, eluden el aprendizaje significativo.
- Diseñar tareas que exijan evaluar críticamente, validar o mejorar los artefactos generados por IA empuja a los estudiantes hacia los niveles superiores (analizar, evaluar, crear) y a "aprender con la IA, no solo de ella".
- A nivel de curso, las intervenciones produjeron mayor compromiso crítico, menor dependencia pasiva y mejor conciencia de prácticas de validación.
- A nivel de currículo, el modelo permitió un andamiaje longitudinal de la alfabetización en IA a través de módulos y niveles.
- Las herramientas de detección de texto generado por IA presentan altas tasas de falsos positivos (especialmente con hablantes no nativos y textos técnicos breves), lo que refuerza la necesidad de supervisión humana, juicio contextual y diseños de evaluación que reduzcan el incentivo del uso acrítico.

## Limitaciones
- El modelo es conceptual e informado causalmente, no un modelo de causa-efecto validado empíricamente; no todos los enlaces "+/−" están validados en profundidad.
- Las aplicaciones en los dos contextos son ilustrativas, no evaluaciones experimentales controladas; la evidencia se basa en observaciones del docente y artefactos estudiantiles.
- Gran parte de la literatura citada es gris (no revisada por pares), tratada como ilustrativa más que evidencial.
- El foco está en SEEd; aunque los autores argumentan transferibilidad a otras disciplinas, esa generalización no se prueba empíricamente.

## Notas relacionadas
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-programacion]]
- [[concepts/pensamiento-critico]]
- [[concepts/sobredependencia-de-la-ia]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/integridad-academica]]
- [[concepts/taxonomia-de-bloom]]
- [[concepts/supervision-humana]]
- [[concepts/evaluacion-educativa]]
- [[concepts/etica-de-la-ia]]
- [[concepts/deteccion-de-texto-ia]]
