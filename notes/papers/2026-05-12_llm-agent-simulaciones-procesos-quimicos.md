---
title: "Large language model agent for user-friendly chemical process simulations"
authors: [Jingkang Liang, Niklas Groll, Gürkan Sin]
year: 2026
journal: Digital Chemical Engineering
url: https://doi.org/10.1016/j.dche.2026.100312
doi: 10.1016/j.dche.2026.100312
pdf_local: sources/pdfs/cheme-applications/liang_2026_llm-agent-process-simulations.pdf
type: paper
keywords: [ingenieria-quimica, simulacion-computacional, agentes-de-ia, inteligencia-artificial, educacion-en-ingenieria, supervision-humana, alucinaciones-de-ia, adopcion-de-tecnologia]
date_added: 2026-06-27
---

# Large language model agent for user-friendly chemical process simulations

## Resumen

Los simuladores de procesos químicos comerciales son herramientas centrales para diseñar, analizar y optimizar sistemas industriales, pero su uso exige curvas de aprendizaje pronunciadas, configuración manual extensa y experiencia de dominio que tarda años en desarrollarse. Esto restringe la exploración temprana por parte de usuarios inexpertos. Para reducir esta barrera, los autores integran un agente basado en un modelo de lenguaje grande (LLM) con el simulador comercial AVEVA Process Simulation (APS) a través del Model Context Protocol (MCP), permitiendo interactuar en lenguaje natural con simulaciones rigurosas de procesos.

La arquitectura desacopla el razonamiento del LLM de la ejecución determinista: el agente (Claude Desktop con Claude Sonnet 4.0 como modelo por defecto) actúa como cliente MCP, planifica acciones y orquesta llamadas a herramientas, mientras un servidor MCP construido con FastMCP expone un conjunto curado de 16 herramientas que envuelven la API de Python de APS. Todos los cálculos físicos (balances de masa y energía, equilibrio termodinámico, convergencia del solver) permanecen bajo control del solver validado de APS, lo que preserva el rigor y la reproducibilidad. El MCP funciona como una frontera de abstracción explícita entre el LLM y las operaciones específicas del simulador.

El marco se evalúa con tres casos de estudio de complejidad creciente, usando el ejemplo "C1 - Water Methanol Separation" (separación binaria agua-metanol por destilación) como sistema de referencia. El primer caso muestra al agente analizando autónomamente un flowsheet, identificando oportunidades de mejora y optimizando iterativamente (p. ej., ajustando la relación de reflujo para alcanzar >95 mol% de pureza de metanol). El segundo evalúa la síntesis autónoma de flowsheets en dos modos: un diálogo paso a paso (construcción guiada, adecuada para contextos educativos) y un único prompt (construcción rápida de líneas base para refinamiento posterior). El tercero evalúa la estabilidad variando la versión del LLM, el estilo de prompting y la complejidad del proceso.

Los autores concluyen que el marco beneficia tanto a usuarios novatos (traduciendo conceptos técnicos y demostrando flujos de trabajo con fines educativos) como a practicantes experimentados (automatizando la extracción de datos, acelerando tareas rutinarias y apoyando la lluvia de ideas). Las limitaciones actuales se concentran en la interpretación de los resultados físicos: errores de razonamiento menores como sobreafirmaciones excesivamente optimistas, simplificaciones o sugerencias engañosas (p. ej., afirmar ahorros energéticos del 20-40% no verificados), por lo que la supervisión experta sigue siendo necesaria y las recomendaciones se tratan como hipótesis a verificar antes de implementarse.

## Contribuciones principales

- Primera integración —según los autores— totalmente implementada y reproducible de un servidor MCP con un simulador de procesos comercial, evaluada tanto en modo guiado como de mayor autonomía (operación dual-mode).
- Diseño modular y extensible que desacopla el razonamiento del LLM de la ejecución determinista del simulador, permitiendo reutilizar el conjunto de herramientas entre distintos LLMs o aplicaciones anfitrionas sin reentrenar el modelo.
- Conjunto curado de 16 herramientas que abstrae la API de Python de APS en operaciones de alto nivel alineadas con los pasos habituales de un ingeniero de procesos.
- Marco de evaluación orientado a la confiabilidad que combina criterios cuantitativos (llamadas correctas a herramientas, exactitud numérica, errores técnicos) y cualitativos (seguridad, efectividad, claridad).

## Metodología

Marco agéntico que conecta un LLM (Claude Desktop / Claude Sonnet 4.0) como cliente MCP con APS (versión 2025) mediante un servidor MCP construido con FastMCP que expone 16 herramientas tipadas sobre la API de scripting de Python de APS. Evaluación mediante tres casos de estudio (análisis de flowsheet, síntesis de flowsheet en modo paso a paso y de un solo prompt, y prueba de estabilidad) sobre los ejemplos "C1 - Water Methanol Separation" y "A6G - Ammonia Synthesis EQ", con métricas cuantitativas y valoración cualitativa por niveles de calidad (A-E).

## Hallazgos clave

- En el análisis, el agente ejecutó una secuencia lógica de 7 llamadas a herramientas, accedió a 356 de 2006 variables y presentó al usuario solo 24 valores relevantes; todos los valores numéricos reportados fueron correctos.
- En la optimización, ajustó la relación de reflujo a 1.45 para elevar la pureza de metanol del destilado de 84.2 a 95.1 mol%, manteniendo la pureza de agua en fondos y cuantificando el compromiso energético (+6%).
- Las respuestas se mantuvieron estables ante variaciones en versiones del LLM, tipos de prompting y complejidad de los flowsheets.
- La mayoría de las sugerencias de mejora se clasificaron en categorías de alta calidad (A/B); ninguna fue completamente incorrecta, pero algunas eran irrelevantes para el problema específico o potencialmente engañosas (p. ej., eficiencia de bandeja del 100%).

## Limitaciones

- Tendencia del LLM a "sobregenerar" listas largas que priorizan amplitud sobre profundidad, abrumando a usuarios inexpertos cuando no se imponen restricciones explícitas en el prompt.
- Errores menores de razonamiento en la interpretación de resultados físicos: afirmaciones excesivamente optimistas o engañosas (ahorros energéticos del 20-40% no verificados, suposiciones de optimalidad sin probar).
- Requiere supervisión experta (human-in-the-loop); las recomendaciones son hipótesis que deben verificarse antes de implementarse.
- Validación limitada a un simulador (APS) y a ejemplos de su biblioteca; no se evalúan procesos industriales complejos de gran escala.

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/agentes-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/supervision-humana]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/adopcion-de-tecnologia]]
