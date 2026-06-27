---
title: Generative AI Driven Process Calculations for Fuel Cells and Flow Batteries
authors: [Rishi Garg, Vasudev Majhi, Vinay Chamola, Anubhav Elhence, Jay Pandey]
year: 2026
journal: ACS Omega
url: https://doi.org/10.1021/acsomega.5c12654
doi: 10.1021/acsomega.5c12654
pdf_local: sources/pdfs/capability-reliability/garg_2026_genai-process-calculations-fuelcells-flowbatteries.pdf
type: paper
keywords: [inteligencia-artificial, agentes-de-ia, ingenieria-quimica, simulacion-computacional, alucinaciones-de-ia, supervision-humana, sostenibilidad, capacidades-de-ia]
date_added: 2026-06-27
---

# Generative AI Driven Process Calculations for Fuel Cells and Flow Batteries

## Resumen

El artículo propone un marco computacional asistido por IA generativa que usa modelos de lenguaje de gran tamaño (LLMs) como orquestadores de cálculos de procesos electroquímicos para celdas de combustible de membrana de intercambio protónico (PEMFC), celdas de combustible de óxido sólido (SOFC) y baterías de flujo redox de vanadio (VRFB). El problema de fondo es que estos sistemas se rigen por ecuaciones de transporte-cinética acopladas, no lineales y multiescala: los solucionadores mecanísticos (COMSOL, Fluent, OpenFOAM) ofrecen alta fidelidad física pero exigen mucha pericia y tiempo (desarrollar un nuevo diseño de PEMFC puede tomar 6-12 meses), mientras que los sustitutos puramente basados en datos (ANN, aprendizaje por refuerzo profundo) son frágiles ante el cambio de distribución.

El marco combina tres componentes: generación aumentada por recuperación (RAG) sobre literatura, manuales y cuadernos de laboratorio; prompting con restricciones físicas; y razonamiento integrado con herramientas (tool-integrated reasoning) que invoca solucionadores externos (MATLAB, COMSOL LiveLink, Aspen). Una métrica de similitud híbrida (coseno + distancia de Mahalanobis + penalizaciones físicas) ancla el razonamiento del LLM en parámetros y ecuaciones físicamente compatibles con el régimen operativo objetivo. Una arquitectura multiagente (Planner, Retriever, Modeler, Executor, Critic) coordina el refinamiento iterativo: las violaciones de restricciones o los fallos del solucionador disparan prompts de autocorrección.

La evaluación usa dos conjuntos de datos complementarios: datos sintéticos de simuladores físicos para benchmarking controlado, y datos de Aspen Plus de simulaciones industriales de alta fidelidad validadas contra mediciones experimentales. Para la descomposición de la curva de polarización de PEMFC, el marco logra un RMSE de 9.6 mV (sintético) y 7.8 mV (Aspen), reduciendo las violaciones de restricciones de 48%/42% a 1.2%/0.5%. Para la optimización de VRFB, la eficiencia energética alcanza 79.1% (sintético) y 74.9% (Aspen). Un estudio de usuario preliminar (N=5) muestra una reducción del 85% en el esfuerzo humano (de 85 a 11 minutos por tarea).

Los autores enfatizan que el LLM no reemplaza a los solucionadores mecanísticos —que siguen siendo la fuente de predicciones de alta fidelidad— sino que automatiza el ensamblaje de ecuaciones, la recuperación de parámetros y el análisis de escenarios. Defienden prácticas de IA responsable (registros de auditoría, cuantificación de incertidumbre, supervisión humana) como requisito para el despliegue industrial en sistemas críticos para la seguridad.

## Contribuciones principales

- Un marco asistido por IA generativa, específico de dominio, que acopla RAG, prompting con restricciones físicas y razonamiento integrado con herramientas para el modelado y optimización de procesos electroquímicos, diseñado para interactuar directamente con solucionadores mecanísticos.
- Una métrica de similitud híbrida (coseno + Mahalanobis + penalizaciones físicas) para recuperar ecuaciones y parámetros, con estudio empírico de su impacto en la calidad del anclaje.
- Dos casos de estudio (descomposición de polarización de PEMFC y optimización voltaje-eficiencia de VRFB) con análisis comparativos y de ablación frente a ANN, ePCDNN, DRL y baselines mecanísticos, midiendo exactitud, latencia, interpretabilidad y reducción de esfuerzo humano.
- Articulación de rutas de integración hacia gemelos digitales industriales, detección y diagnóstico de fallas (FDD) y apoyo a la decisión de operadores, con consideraciones de IA responsable.

## Metodología

Flujo cerrado de trabajo: intención del usuario → ecuaciones → código → solucionador → validación → decisión. El LLM parsea una especificación en lenguaje natural y la descompone en subtareas (recuperación de parámetros, formulación de ecuaciones, generación de código, ejecución del solucionador, visualización de residuales). El RAG usa fragmentos de 150-300 tokens con embeddings de BERT adaptados al dominio (768 dimensiones) e indexación HNSW para búsqueda aproximada de vecinos cercanos. La validación de restricciones opera en dos etapas (sintáctica: análisis dimensional vía parsing AST; semántica: conservación de carga/masa y límites termodinámicos), con un bucle de autorrefinamiento de hasta tres iteraciones. Se evalúan seis estrategias acumulativas de prompting, desde LLM base (sin RAG ni restricciones) hasta LLM con autoconsistencia y bucle verificador. Los baselines incluyen solucionadores mecanísticos (COMSOL 6.1), ANN, ePCDNN, DRL (dueling DQN) y optimización multiagente con LLM.

## Hallazgos clave

- PEMFC: RMSE de 9.57 mV (R² = 0.9919) en datos sintéticos, una mejora del 65% sobre el baseline de simulación física sin IA (RMSE = 27.66 mV).
- La recuperación etiquetada con física logra 89% de exactitud frente a 42% de la búsqueda semántica ingenua.
- Las restricciones físicas reducen las violaciones dimensionales y los desajustes de unidades en 97-99% (de 48%/42% a 1.2%/0.5%).
- El razonamiento integrado con herramientas reduce los errores de compilación del 30% a menos del 1% mediante refinamiento iterativo.
- El flujo asistido por LLM reduce el tiempo de modelado en 87% (de 85 a 11 min) y automatiza el 80% de las tareas; la tasa de éxito del solucionador supera el 95%.
- VRFB: eficiencia energética del 79.1% (sintético) y 74.9% (Aspen).
- ~85% del tiempo total se gasta en la ejecución del solucionador; la capa de orquestación de IA introduce sobrecarga modesta (<20%).

## Limitaciones

- La demostración experimental se restringe a casos de PEMFC y VRFB; para otras químicas (SOFC, Li-ion) los parámetros y restricciones deberían curarse y añadirse explícitamente a los módulos RAG/Validador.
- Tanto los datos sintéticos como los de Aspen Plus difieren de la medición experimental directa: variabilidad de manufactura, degradación de electrodos y artefactos de medición se capturan solo parcialmente.
- El estudio de usuario es preliminar y muy pequeño (N=5 ingenieros).
- Persisten violaciones residuales del 9-12% en casos límite donde las heurísticas del verificador de restricciones son insuficientemente estrictas.
- Las PDFs completas de artículos de terceros usados en la base RAG no pueden redistribuirse por restricciones de copyright; los usuarios deben aportar sus propias bibliotecas.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/sostenibilidad]]
- [[concepts/capacidades-de-ia]]
