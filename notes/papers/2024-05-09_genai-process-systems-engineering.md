---
title: "Generative AI and process systems engineering: The next frontier"
authors: ["Benjamin Decardi-Nelson", "Abdulelah S. Alshehri", "Akshay Ajagekar", "Fengqi You"]
year: 2024
journal: Computers and Chemical Engineering
url: https://doi.org/10.1016/j.compchemeng.2024.108723
doi: 10.1016/j.compchemeng.2024.108723
pdf_local: sources/pdfs/capability-reliability/decardi-nelson_2024_genai-process-systems-engineering.pdf
type: paper
keywords: [inteligencia-artificial, ingenieria-quimica, simulacion-computacional, quimica-computacional, capacidades-de-ia, alucinaciones-de-ia, seguridad-de-ia, revision-sistematica-de-literatura]
date_added: 2026-06-27
---

# Generative AI and process systems engineering: The next frontier

## Resumen

Este artículo de revisión examina cómo los modelos emergentes de IA generativa (GenAI) —en particular los grandes modelos de lenguaje (LLMs) y los modelos fundacionales (FMs) preentrenados en datos de propósito general— pueden potenciar las metodologías de solución dentro de la ingeniería de sistemas de procesos (Process Systems Engineering, PSE). Los autores parten de la premisa de que los avances en PSE han estado históricamente entrelazados con los desarrollos en computación y tecnologías de sistemas, por lo que explorar la sinergia entre GenAI y PSE resulta natural y oportuno.

El trabajo ofrece primero una panorámica compacta de los modelos GenAI clásicos y emergentes, organizados en cinco familias: autoencoders (incluidos VAEs y AAEs), modelos autorregresivos, redes generativas antagónicas (GANs), modelos de difusión y de flujo, y modelos fundacionales. Estos últimos se subdividen según la tarea de generación (texto o imagen), la multimodalidad o el marco de entrenamiento (aprendizaje por refuerzo). Para cada familia se discuten sus principios de funcionamiento, su evolución y sus limitaciones específicas de cara a aplicaciones en PSE (por ejemplo, la baja interpretabilidad de los espacios latentes o el colapso modal de las GANs).

A continuación, la revisión recorre tres dominios centrales de la PSE y revisa la evidencia existente sobre aplicaciones de GenAI en cada uno: (1) síntesis y diseño multiescala —diseño molecular, de producto y de proceso—, donde GenAI permite el diseño inverso generando candidatos novedosos (fármacos, materiales, solventes, combustibles, rutas de síntesis); (2) optimización e integración; y (3) monitoreo y control de procesos. En cada dominio, además de revisar estudios, los autores aportan su perspectiva sobre el potencial papel de GenAI.

Finalmente, el artículo identifica y discute los principales desafíos para aprovechar plenamente GenAI en PSE: el modelado multiescala, los requisitos de datos (con énfasis en la brecha entre datos computacionales y experimentales), las métricas de evaluación y los benchmarks, y la confianza y la seguridad (incluidas las alucinaciones y la imposibilidad de garantizar la satisfacción de restricciones en sistemas críticos de seguridad). El paper se plantea como una guía para la investigación futura en la aplicación de GenAI emergente a la PSE.

## Contribuciones principales

- Revisión sistemática del estado del arte sobre el uso de IA generativa y modelos fundacionales en la ingeniería de sistemas de procesos (PSE).
- Taxonomía de modelos GenAI en cinco familias (autoencoders, autorregresivos, GANs, difusión/flujo y modelos fundacionales) con discusión de su relevancia y adaptabilidad a contextos de PSE.
- Mapeo de aplicaciones de GenAI a tres dominios centrales de PSE: síntesis y diseño, optimización e integración, y monitoreo y control de procesos.
- Identificación de los retos clave para la integración efectiva: modelado multiescala, requisitos de datos, métricas/benchmarks de evaluación, y confianza y seguridad.

## Metodología

Revisión narrativa/sistemática de literatura. Los autores sintetizan estudios previos sobre modelos generativos clásicos y emergentes y sus aplicaciones documentadas en PSE, estructurando la discusión por familias de modelos y por dominios de aplicación, e incorporando ejemplos ilustrativos (p. ej., capacidades zero-shot de ChatGPT en diseño y predicción molecular). No se realizan experimentos propios; el aporte es de síntesis crítica y prospectiva.

## Hallazgos clave

- Las técnicas GenAI clásicas (autoencoders, GANs, autorregresivos) ya han mostrado utilidad en PSE: generación de compuestos válidos en bases de datos químicas, creación de datos sintéticos para escenarios de falla difíciles de obtener, y aproximación de dinámicas complejas de procesos.
- En diseño molecular, las representaciones basadas en grafos superan a las basadas en caracteres (SMILES), y los VAEs destacan en la generación de candidatos de alta calidad; modelos de difusión y de flujo con GNNs equivariantes logran estado del arte en conformaciones moleculares 3D.
- Un cuello de botella recurrente es la dependencia de datos computacionales frente a experimentales, lo que genera brechas de datos y conocimiento en las moléculas generadas.
- Los LLMs (p. ej., nach0) muestran potencial para tareas químicas multitarea (generación molecular, planificación de síntesis, predicción de propiedades), pese a sus limitaciones actuales en capacidades de regresión.
- Persisten desafíos transversales: modelado multiescala, escasez/calidad de datos, falta de métricas y benchmarks estandarizados, y problemas de confianza y seguridad (alucinaciones, errores de alineación multimodal, y la imposibilidad de garantizar restricciones en sistemas críticos de seguridad).

## Limitaciones

- Es un artículo de revisión y de perspectiva: muchas aplicaciones propuestas son prospectivas o tempranas, no validadas empíricamente en PSE.
- Las aplicaciones de GenAI end-to-end dentro de PSE siguen siendo limitadas; buena parte de la evidencia proviene de campos análogos (descubrimiento de fármacos, diseño de proteínas, ciencia de materiales).
- El campo evoluciona muy rápido, por lo que el panorama de modelos y capacidades puede quedar desactualizado.
- No existen aún métricas ni benchmarks consensuados para evaluar GenAI en contextos de PSE.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/quimica-computacional]]
- [[concepts/capacidades-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/seguridad-de-ia]]
- [[concepts/revision-sistematica-de-literatura]]
