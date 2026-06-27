---
title: "Can Large Language Models Solve Engineering Equations? A Systematic Comparison of Direct Prediction and Solver-Assisted Approaches"
authors: [Sai Varun Kodathala, Rakesh Vunnam]
year: 2026
journal: arXiv preprint
url: https://arxiv.org/abs/2601.01774
doi: 
pdf_local: sources/pdfs/educacion-ingenieria/kodathala2026-llm-ecuaciones-ingenieria.pdf
type: paper
keywords: [inteligencia-artificial, STEM, capacidades-de-ia, supervision-humana, educacion-superior]
date_added: 2026-06-25
---

# Can Large Language Models Solve Engineering Equations? A Systematic Comparison of Direct Prediction and Solver-Assisted Approaches

## Resumen

Este preprint de arXiv evalúa sistemáticamente si los LLMs actuales pueden resolver ecuaciones trascendentales de ingeniería —aquellas que requieren métodos numéricos iterativos, como la ecuación de Colebrook-White en mecánica de fluidos o la ecuación de Kepler en dinámica orbital— mediante dos enfoques: predicción directa del resultado numérico y una arquitectura híbrida que combina manipulación simbólica del LLM con solucionadores clásicos iterativos.

Se evalúan seis modelos (GPT-5.1, GPT-5.2, Gemini-3-Flash, Gemini-2.5-Lite, Claude-Sonnet-4.5, Claude-Opus-4.5) sobre 100 problemas distribuidos en siete dominios de ingeniería. La predicción directa produce errores relativos medios de 0.765–1.262, mientras que el enfoque asistido por solucionador reduce estos errores a 0.225–0.301, una mejora del 67.9–81.8%. El hallazgo central es que los LLMs sobresalen en manipulación simbólica (plantear las ecuaciones, identificar el método) pero fallan en la aritmética iterativa de precisión que requieren las soluciones numéricas exactas.

## Contribuciones principales

- Primera comparación sistemática entre predicción directa y enfoque híbrido LLM+solver para ecuaciones de ingeniería
- Evalúa 6 modelos de frontera de 2025-2026 en 100 problemas de 7 dominios de ingeniería
- Cuantifica la ventaja del enfoque híbrido: reducción de error del 67.9–81.8%
- Identifica la dicotomía capacidad simbólica / incapacidad aritmética en los LLMs actuales

## Metodología

Evaluación empírica de 6 LLMs sobre un conjunto de 100 ecuaciones trascendentales de ingeniería de 7 dominios (mecánica de fluidos, transferencia de calor, termodinámica, dinámica orbital, química, materiales, control). Dos condiciones: (1) predicción directa del valor numérico y (2) arquitectura híbrida donde el LLM plantea la ecuación y un solucionador clásico (Newton-Raphson, bisección) resuelve iterativamente. Métrica principal: error relativo medio.

## Hallazgos clave

- Todos los modelos evaluados cometen errores inaceptables en predicción directa de ecuaciones trascendentales
- La arquitectura híbrida LLM+solver reduce el error en 67.9–81.8% respecto a predicción directa
- Los LLMs son competentes para manipulación simbólica pero no para aritmética iterativa de precisión
- No se observan diferencias significativas entre modelos dentro de cada condición (directa vs. híbrida)
- El resultado sugiere que el valor de los LLMs en ingeniería es como interfaz simbólica, no como calculadora numérica

## Limitaciones

- Es un preprint sin revisión por pares; los resultados deben interpretarse con cautela
- El conjunto de 100 problemas puede no ser representativo de la diversidad de la práctica ingenieril real
- Los modelos evaluados (GPT-5.1, Gemini-3-Flash, Claude-Sonnet-4.5, etc.) pueden actualizarse rápidamente, haciendo los resultados obsoletos
- No se evalúan ecuaciones diferenciales ni sistemas de ecuaciones, solo ecuaciones trascendentales escalares

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/STEM]]
- [[concepts/capacidades-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/educacion-superior]]
