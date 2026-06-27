---
title: "SAFETUTORS: Benchmarking Pedagogical Safety in AI Tutoring Systems"
authors: [Rima Hazra, Bikram Ghuku, Sayan Layek, Somnath Banerjee, Ilona Marchenko, Yaroslava Tokarieva, Julia Stoyanovich, Mykola Pechenizkiy]
year: 2026
journal: "arXiv (preprint)"
url: https://arxiv.org/abs/2603.17373
doi: 10.48550/arXiv.2603.17373
pdf_local: sources/pdfs/ai-education/hazra-2026-safetutors-seguridad-pedagogica.pdf
type: paper
keywords: [tutoria-con-ia, seguridad-de-ia, capacidades-de-ia, inteligencia-artificial, psicologia-educativa]
date_added: 2026-06-27
---

# SAFETUTORS: Benchmarking Pedagogical Safety in AI Tutoring Systems

## Resumen
Los modelos de lenguaje grandes (LLMs) se despliegan rápidamente como tutores de IA, pero los paradigmas de evaluación actuales miden la precisión en resolución de problemas y la seguridad genérica por separado, sin capturar si un modelo es simultáneamente efectivo en lo pedagógico y seguro a lo largo de la interacción estudiante-tutor. Los autores argumentan que la seguridad en tutoría es fundamentalmente distinta de la seguridad convencional de los LLMs: el riesgo principal no es el contenido tóxico, sino la erosión silenciosa del aprendizaje por sobre-revelación de respuestas, refuerzo de concepciones erróneas y abandono del andamiaje (scaffolding).

Para estudiar sistemáticamente este modo de fallo, introducen SAFETUTORS, un benchmark que evalúa conjuntamente seguridad y pedagogía en matemáticas, física y química, organizado en torno a una taxonomía de riesgo fundamentada en la literatura de las ciencias del aprendizaje (11 dimensiones de daño y 48 subriesgos).

Los hallazgos son contundentes: todos los modelos muestran daño amplio; la escala no ayuda de forma confiable; y el diálogo multironda empeora el comportamiento, con fallos pedagógicos que suben del 17,7 % al 77,8 %. Los daños varían por materia, por lo que las mitigaciones deben ser específicas por disciplina; los resultados de "seguro/útil" en una sola ronda pueden enmascarar fallos sistemáticos del tutor en interacciones extendidas.

## Contribuciones principales
- Benchmark SAFETUTORS que evalúa conjuntamente seguridad y eficacia pedagógica de tutores de IA.
- Taxonomía de riesgo pedagógico (11 dimensiones de daño, 48 subriesgos) basada en ciencias del aprendizaje.
- Evidencia de que el diálogo multironda agrava los fallos pedagógicos (17,7 % → 77,8 %).

## Metodología
Benchmark con taxonomía de daños aplicada a interacciones tutor-estudiante en matemáticas, física y química, evaluando múltiples LLMs en escenarios de una y varias rondas.

## Hallazgos clave
- El riesgo central de los tutores de IA es la erosión del aprendizaje, no el contenido tóxico.
- La escala del modelo no mejora confiablemente la seguridad pedagógica.
- Las mitigaciones deben ser específicas por disciplina y evaluadas en multironda.

## Limitaciones
- Evaluación en tres materias (matemáticas, física, química).
- Dependencia de jueces para calificar fallos pedagógicos.

## Notas relacionadas
- [[concepts/tutoria-con-ia]]
- [[concepts/seguridad-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/psicologia-educativa]]
- [[notes/papers/2026-05-14_sycophancy-tutores-llm-riesgo]]
