---
title: "EngiBench: A Benchmark for Evaluating Large Language Models on Engineering Problem Solving"
authors: [Xiyuan Zhou, Xinlei Wang, Yirui He, Yang Wu, Ruixi Zou, Yuheng Cheng, Yulu Xie, Wenxuan Liu, Huan Zhao, Yan Xu, Jinjin Gu, Junhua Zhao]
year: 2025
journal: "arXiv preprint (arXiv:2509.17677)"
url: https://arxiv.org/abs/2509.17677
doi:
pdf_local: sources/pdfs/capability-reliability/zhou_2025_engibench-engineering-problem-solving.pdf
type: paper
keywords: [capacidades-de-ia, inteligencia-artificial, educacion-en-ingenieria, pensamiento-critico]
date_added: 2026-06-27
---

# EngiBench: A Benchmark for Evaluating Large Language Models on Engineering Problem Solving

## Resumen

EngiBench es un benchmark jerárquico diseñado para evaluar la capacidad de los grandes modelos de lenguaje (LLMs) para resolver problemas de ingeniería del mundo real. A diferencia de los benchmarks matemáticos existentes (GSM8K, MATH, Omni-MATH), que se centran en problemas bien definidos y de respuesta cerrada, EngiBench aborda la complejidad de la ingeniería real, donde los problemas implican incertidumbre, contexto y escenarios abiertos que van más allá del cálculo simbólico.

El benchmark organiza las tareas en tres niveles de dificultad creciente: Nivel 1 (recuperación de conocimiento fundamental, cálculo de un solo paso), Nivel 2 (razonamiento contextual multi-paso bajo restricciones bien definidas) y Nivel 3 (modelado abierto con incertidumbre, información incompleta y objetivos en conflicto). Cubre tres grandes subcampos de la ingeniería —Sistemas y Control (939 problemas), Físico y Estructural (354) y Químico y Biológico (467)— y define la "capacidad de resolución de problemas de ingeniería" como cuatro dimensiones: extracción de información, razonamiento específico de dominio, toma de decisiones multi-objetivo y manejo de la incertidumbre.

Para diagnosticar dónde y por qué fallan los modelos, cada problema se reescribe sistemáticamente en tres variantes controladas: perturbada (cambios numéricos y semánticos para medir robustez y reducir solapamiento con datos de preentrenamiento), aumentada con conocimiento (añade fórmulas y definiciones para separar déficits de conocimiento de fallos de razonamiento) y abstracción matemática (elimina el contexto de ingeniería para aislar la capacidad matemática pura). Las tareas abiertas de Nivel 3 se evalúan con rúbricas diseñadas por expertos.

Los resultados sobre 16 LLMs muestran una clara estratificación: la precisión decae con la complejidad de la tarea, se degrada bajo perturbaciones menores y permanece muy por debajo del desempeño humano en tareas de alto nivel. Incluso los modelos más fuertes (GPT-4.1, Claude 3.7 Sonnet) alcanzan puntajes cercanos a 7.0 en Nivel 3, frente al promedio humano experto de 8.74. Los autores concluyen que los LLMs actuales todavía carecen del razonamiento de alto nivel necesario para la ingeniería real.

## Contribuciones principales

- Uno de los primeros benchmarks que evalúa sistemáticamente a los LLMs en problemas de ingeniería del mundo real, no solo matemáticos.
- Diseño jerárquico de tres niveles de dificultad con múltiples variantes por problema, que permite un análisis fino de las capacidades y limitaciones de razonamiento.
- Primera colección sistemática de tareas de ingeniería abiertas (43 problemas de competiciones de modelado) con rúbricas oficiales y soluciones de referencia validadas por expertos.
- Evaluación de un conjunto amplio de LLMs mainstream (cerrados y abiertos), con hallazgos orientados al desarrollo de futuros modelos.

## Metodología

Benchmark de evaluación zero-shot sobre 16 LLMs (cerrados: GPT-4.1/Mini/Nano, Claude 3.7 y 3.5 Sonnet, Gemini 2.5 y 2.0 Flash; abiertos: GLM-4, Qwen2.5, Llama 4 y 3.3, DeepSeek-V3 y R1, Mixtral-8x7B). Los datos provienen de benchmarks públicos, materiales educativos universitarios y competiciones de modelado, filtrados por relevancia de ingeniería. Niveles 1 y 2 se puntúan de forma binaria con verificación cruzada multi-modelo y revisión humana; el Nivel 3 usa evaluación basada en rúbricas, calificada por LLMs y calibrada por anotadores humanos. Se introducen puntajes humanos de referencia (envíos ganadores de competiciones y soluciones de estudiantes destacados) bajo la misma rúbrica.

## Hallazgos clave

- Estratificación clara de desempeño: alta precisión en Nivel 1, moderada en Nivel 2, fuerte caída en Nivel 3.
- La variante perturbada produce caídas de precisión (p. ej. -9.3% GPT-4.1 Nano, -11.4% Qwen2.5-7B en Nivel 2), revelando dependencia del pattern matching y riesgo de contaminación por preentrenamiento.
- El conocimiento explícito y la abstracción matemática mejoran el desempeño: el reto principal no es el cálculo, sino traducir descripciones en lenguaje natural a formulaciones estructuradas.
- Los modelos pequeños son mucho más sensibles a las variantes de entrada, indicando generalización limitada.
- Los LLMs manejan bien la extracción de información pero fallan en razonamiento de dominio y manejo de incertidumbre; todos quedan por debajo del experto humano (8.74) en Nivel 3.
- Correlación positiva entre desempeño en tareas estructuradas y abiertas, con excepciones: Llama 4 rinde bien en estructuradas pero falla en abiertas (razonamiento de alto nivel débil).

## Limitaciones

- No incluye tareas multimodales (diagramas, esquemas, tablas): todas las entradas son solo texto.
- Excluye tareas de contexto largo que exceden los límites de entrada de los LLMs actuales.
- La construcción del dataset requiere un esfuerzo humano sustancial (recolección, generación de respuestas, validación de variantes).

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/pensamiento-critico]]
