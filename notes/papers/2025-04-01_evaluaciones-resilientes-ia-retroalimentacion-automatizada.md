---
title: "Beyond Detection: Designing AI-Resilient Assessments with Automated Feedback Tool to Foster Critical Thinking and Originality"
authors: [Muhammad Sajjad Akbar]
year: 2025
journal: arXiv preprint (arXiv:2503.23622)
url: https://arxiv.org/abs/2503.23622
doi: 
pdf_local: sources/pdfs/assessment-redesign/akbar_2025_ai-resilient-automated-feedback.pdf
type: paper
keywords: [evaluacion-educativa, integridad-academica, pensamiento-critico, creatividad, inteligencia-artificial, educacion-superior, etica-de-la-ia, supervision-humana, educacion-en-programacion]
date_added: 2026-06-27
---

# Beyond Detection: Designing AI-Resilient Assessments with Automated Feedback Tool to Foster Critical Thinking and Originality

## Resumen

El paper aborda la preocupación creciente por el impacto de las herramientas de IA generativa (como ChatGPT) en el aprendizaje estudiantil, en particular su potencial de erosionar el pensamiento crítico y la creatividad cuando los estudiantes las usan para completar evaluaciones. Akbar argumenta que las herramientas de detección de texto generado por IA son fundamentalmente inadecuadas: producen salidas poco fiables y no verificables, son altamente susceptibles a falsos positivos y falsos negativos, y se desploman frente a técnicas de ofuscación como el parafraseo, la traducción o la reescritura estructural. Estas herramientas se apoyan en rasgos estadísticos superficiales en lugar de comprensión contextual o semántica, lo que las hace inservibles como prueba definitiva de mal uso.

Frente a esto, la propuesta desplaza el foco de la detección reactiva hacia el diseño proactivo de la evaluación. La solución se materializa en una herramienta web en Python que integra la Taxonomía de Bloom con técnicas de procesamiento de lenguaje natural (GPT-3.5 Turbo, similitud semántica basada en BERT y métricas TF-IDF) para estimar la "AI-solvability" (resolubilidad por IA) de las tareas de evaluación. Al analizar tanto rasgos superficiales como semánticos, la herramienta ayuda a los docentes a discernir si una tarea apunta al pensamiento de orden inferior (recordar, resumir), más fácil de completar por IA, o de orden superior (analizar, evaluar, crear), más resistente a la automatización.

El trabajo combina evidencia empírica (una encuesta en clase a estudiantes de posgrado de ciencias de la computación en la Universidad de Sídney, estructurada según los niveles de Bloom) con una validación del prototipo sobre 50 tareas reales de asignaturas de pregrado y posgrado. Los resultados muestran que la mayoría de las tareas analizadas son moderada o altamente susceptibles a la IA, y que solo una minoría exige el razonamiento creativo o analítico que la IA generativa todavía no replica bien. El objetivo es ofrecer a los docentes una retroalimentación accionable y en tiempo real para rediseñar evaluaciones cognitivamente exigentes y resilientes a la IA.

## Contribuciones principales

- Reformula el problema de la integridad académica ante la IA generativa: de detectar el uso de IA tras la entrega a diseñar evaluaciones intrínsecamente resistentes a la IA.
- Propone el concepto y una métrica operacional de "AI-solvability" (resolubilidad por IA), con categorías Bajo (<50%), Medio (50-64%), Medio-Alto (65-74%) y Alto (>74%).
- Implementa una herramienta web en Python que integra Taxonomía de Bloom + GPT-3.5 Turbo + BERT (similitud semántica) + TF-IDF, con extracción de PDFs mediante PyMuPDF y retroalimentación automatizada al docente.
- Aporta evidencia empírica del efecto de la IA sobre la comprensión, aplicación, exactitud percibida y creatividad de estudiantes de posgrado mediante una encuesta basada en Bloom.

## Metodología

Enfoque mixto. (1) Encuesta anónima en clase a estudiantes de posgrado de una asignatura de ciencias de la computación en la Universidad de Sídney, con preguntas alineadas a los seis niveles de la Taxonomía de Bloom; las respuestas se analizan con el método temático de seis fases de Braun y Clarke. (2) Análisis comparativo de la fiabilidad de 12 herramientas de detección de acceso abierto y 2 comerciales (incluida Turnitin). (3) Validación cualitativa basada en datos de un prototipo en Python aplicado a 50 tareas reales de subdominios de ciencias de la computación (TI, ciberseguridad, privacidad de datos, desarrollo de software, gestión de proyectos), que genera puntajes de AI-solvability y retroalimentación por tarea.

## Hallazgos clave

- Las herramientas de detección de IA son poco fiables: ninguna supera el 80% de exactitud y solo cinco rebasan el 70%; tienden a clasificar texto de IA como humano (~20% mal atribuido) y fallan aún más con ofuscación (~50% del texto modificado se identifica erróneamente como humano).
- Los falsos positivos van del 0% (Turnitin) al 50% (GPTZero) y los falsos negativos del 8% al 100% (Content at Scale); sus salidas son vagas e inverificables y no sirven como prueba concluyente de mala conducta.
- En la encuesta, el 70% de estudiantes sintió que la IA ayudó a su comprensión, el 65% reportó modificaciones mínimas del texto generado, el 75% consideró las respuestas de IA más exactas que las propias y el 60% percibió que la IA obstaculizó su creatividad.
- De las 50 tareas evaluadas, 22 cayeron en 65-74%, 16 en 50-64%, 8 por encima de 74% y solo 4 por debajo del 50%, evidenciando que pocas evaluaciones exigen pensamiento de orden superior resistente a la IA.
- Las tareas con mayor AI-solvability son conceptuales o definicionales; las de menor puntaje implican resolución abierta de problemas, escenarios reales y diseño, que requieren juicio humano.

## Limitaciones

- La validación de la herramienta es cualitativa y data-driven sobre una muestra acotada (50 tareas) y de un solo dominio (ciencias de la computación de una única universidad), lo que limita la generalización.
- La encuesta tiene tamaño muestral reducido y se centra en posgrado, y depende de la autopercepción de los estudiantes.
- El marco se apoya principalmente en la Taxonomía de Bloom, que puede no capturar toda la complejidad del pensamiento crítico.
- La propia herramienta depende de modelos (GPT-3.5 Turbo, BERT) con sus sesgos y opacidad; no se reportan métricas cuantitativas de validez del puntaje de AI-solvability frente a un estándar externo.

## Notas relacionadas

- [[concepts/evaluacion-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/pensamiento-critico]]
- [[concepts/creatividad]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/etica-de-la-ia]]
- [[concepts/supervision-humana]]
- [[concepts/educacion-en-programacion]]
