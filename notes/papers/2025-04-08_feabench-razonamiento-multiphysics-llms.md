---
title: "FEABench: Evaluating Language Models on Multiphysics Reasoning Ability"
authors: [Nayantara Mudur, Hao Cui, Peter Norgaard, Paul Raccuglia, Subhashini Venugopalan, Michael P. Brenner]
year: 2025
journal: arXiv (preprint)
url: https://arxiv.org/abs/2504.06260
doi:
pdf_local: sources/pdfs/capability-reliability/mudur_2025_feabench-multiphysics-reasoning.pdf
type: paper
keywords: [capacidades-de-ia, agentes-de-ia, inteligencia-artificial, alucinaciones-de-ia, simulacion-computacional, supervision-humana]
date_added: 2026-06-27
---

# FEABench: Evaluating Language Models on Multiphysics Reasoning Ability

## Resumen

FEABench es un benchmark diseñado para medir la capacidad de los modelos de lenguaje (LLMs) y de los agentes basados en LLMs para simular y resolver problemas de física, matemáticas e ingeniería mediante análisis de elementos finitos (FEA). La tarea es exigente porque combina dos competencias distintas: el razonamiento científico sobre el problema (geometría, propiedades de materiales, condiciones de contorno, física) y la capacidad de operar software de simulación generando secuencias correctas de llamadas a su API. Como entorno concreto, los autores eligen COMSOL Multiphysics, un software de FEA ampliamente usado en ingeniería comercial e investigación científica, cuyo flujo de trabajo (geometría, materiales, física, malla, solver y postprocesamiento) es relativamente canónico.

El benchmark se compone de FEABench Gold (15 problemas verificados manualmente, cuantitativamente comprobables porque exportan un valor objetivo a una tabla) y FEABench Large (200 tareas parseadas algorítmicamente desde tutoriales de la galería de COMSOL). Para FEABench Gold se definen dos variantes de tarea —ModelSpecs (descripción del problema más información de selección) y Plan (instrucciones paso a paso)— que permiten desacoplar si la dificultad proviene de tomar decisiones de modelado correctas o de traducir instrucciones explícitas a código sintácticamente válido.

Más allá de la evaluación de un solo turno, los autores diseñan un sistema multiagente que interactúa con la API de COMSOL y con funciones auxiliares especializadas. El sistema incluye un Evaluator que calcula una "fitness" de cada solución, un ControllerAgent que delega en un CorrectorSubAgent y un ToolLookupAgent, y herramientas como la búsqueda semántica de fragmentos de código anotados, la consulta de interfaces y propiedades del árbol del modelo. El agente usa retroalimentación de ejecución híbrida (mensajes de la API sobre ejecutabilidad sintáctica más un VerifierLLM que evalúa alineación y completitud) y un principio de consistencia analítico-numérica para comparar el valor calculado con una estimación analítica previa.

Los resultados muestran que incluso los LLMs de frontera tienen dificultades: los modelos de pesos cerrados generan código con ejecutabilidad moderada (0.60-0.79), pero fallan en las decisiones más finas, alucinando interfaces de física inexistentes. Claude 3.5 Sonnet obtiene el mejor desempeño consistente en ambos benchmarks. La mejor estrategia agéntica genera llamadas API ejecutables el 88% del tiempo. Lograr esta capacidad acercaría a los LLMs a aumentar su razonamiento con la precisión de los solvers numéricos y a habilitar sistemas autónomos para problemas de ingeniería del mundo real.

## Contribuciones principales

- Introducción de FEABench, el primer benchmark para investigación de LLMs y agentes en simulación de ingeniería (FEA), con un subconjunto verificado manualmente (Gold, 15 problemas) y uno mayor parseado algorítmicamente (Large, 200 problemas).
- Definición de dos variantes de tarea (ModelSpecs y Plan) que desacoplan la dificultad de razonamiento de la de traducción a código.
- Una estrategia de evaluación automatizada holística con métricas intermedias que miden distintas facetas de la "distancia a una solución correcta", incluso cuando no se logra computar el valor objetivo.
- Diseño de un agente multiphysics que interactúa con la API de COMSOL, usa herramientas especializadas y aprovecha retroalimentación de ejecución para mejorar su solución a lo largo de múltiples turnos.

## Metodología

Los problemas se derivan de tutoriales de la galería de aplicaciones de COMSOL, convertidos en tareas verificables con un valor objetivo. El LLM debe leer la especificación en lenguaje natural y generar llamadas Java a la API que construyan el modelo y computen el objetivo. Se comparan estrategias de prompting (One-Shot y PhyDoc In-Context, que añade la lista de interfaces y features válidas) y un sistema agéntico iterativo (20 muestras iniciales corregidas durante 20 pasos). Se evalúan tres LLMs de pesos cerrados (Claude 3.5 Sonnet, GPT-4o, Gemini-1.5-Pro) y tres modelos de pesos abiertos de la familia Gemma. Las métricas incluyen Ejecutabilidad, Model Tree Score, métricas de física (factualidad de interfaces, recall de interfaces/features/propiedades, dimensión de features) y error relativo respecto al valor objetivo.

## Hallazgos clave

- Los LLMs de pesos cerrados manejan la gramática general de la API (ejecutabilidad 0.60-0.79), pero alucinan la elección de interfaz de física (factualidad entre 0.54 y 0.85).
- El bloque de física es el más difícil: presenta la menor ejecutabilidad y los menores valores de recall de propiedades de features.
- Proporcionar un plan explícito (tarea Plan) no mejora consistentemente el desempeño; el LLM tiende a alucinar llamadas siguiendo literalmente instrucciones en lenguaje natural (p. ej. usa "Heat Transfer in Solids" en vez del nombre sintáctico HeatTransfer).
- Anclar al LLM con información de la API (PhyDoc In-Context) mejora el desempeño.
- Claude 3.5 Sonnet tiene el mejor desempeño consistente en ambos benchmarks; la mejor estrategia agéntica produce llamadas API ejecutables el 88% del tiempo.
- A pesar de la ejecutabilidad alta, computar el valor objetivo correcto sigue siendo raro (en baseline, solo 1/15 problemas con valor válido para Claude 3.5 Sonnet), lo que evidencia la brecha entre corrección sintáctica y corrección física.

## Limitaciones

- FEABench Gold contiene solo 15 problemas verificados manualmente, lo que limita la potencia estadística (errores estándar amplios en varias métricas).
- FEABench Large carece de un artefacto numérico verificable único, por lo que solo se evalúa con métricas que no requieren ejecución.
- La evaluación depende de COMSOL Multiphysics, software propietario, lo que condiciona la reproducibilidad y el alcance del entorno.
- Algunas métricas físicas anidadas (p. ej. dimensión de features) no son válidas cuando no hay solapamiento entre la solución del LLM y la ground truth, y se enmascaran al promediar.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/agentes-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/simulacion-computacional]]
- [[concepts/supervision-humana]]
