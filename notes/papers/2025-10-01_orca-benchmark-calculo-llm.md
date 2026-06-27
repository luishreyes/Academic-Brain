---
title: "The ORCA Benchmark: Evaluating Real-World Calculation Accuracy in Large Language Models"
authors: [Claudia Herambourg, Dawid Siuda, Anna Szczepanek, Julia Kopczyńska, Joao R. L. Santos, Wojciech Sas, Joanna Śmietańska-Nowak]
year: 2025
journal: preprint (Omni Calculator Research Team)
url:
doi:
pdf_local: sources/pdfs/capability-reliability/herambourg_2025_orca-calculation-accuracy.pdf
type: paper
keywords: [capacidades-de-ia, inteligencia-artificial, razonamiento-cuantitativo-llm, alucinaciones-de-ia]
date_added: 2026-06-27
---

# The ORCA Benchmark: Evaluating Real-World Calculation Accuracy in Large Language Models

## Resumen

El artículo presenta ORCA (Omni Research on Calculation in AI), un benchmark que evalúa la capacidad de los grandes modelos de lenguaje (LLMs) para resolver problemas de cálculo cuantitativo de la vida real, en contraste con los benchmarks matemáticos clásicos (GSM8K, MATH, MiniF2F) centrados en problemas académicos, simbólicos o de competición. El conjunto de datos consta de 500 tareas en lenguaje natural distribuidas en 13 categorías (finanzas, física, salud, estadística, etc.), cada una con una única respuesta verificada por el motor de cálculo de Omni Calculator, lo que permite una verificación determinista y reproducible. Las preguntas se redactaron por expertos de dominio (con doctorados en sus áreas) imitando el fraseo natural de usuarios reales y se clasificaron en tres niveles de dificultad.

Se evaluaron cinco sistemas de última generación (ChatGPT-5, Gemini 2.5 Flash, Claude Sonnet 4.5, Grok 4 y DeepSeek V3.2), accedidos por sus interfaces oficiales con entradas idénticas. Los resultados muestran una exactitud global de apenas 45–63%: Gemini 2.5 Flash lidera (63%), seguido de cerca por Grok 4 (62.8%), DeepSeek V3.2 (52%), ChatGPT-5 (49.4%) y Claude Sonnet 4.5 (45.2%). Es decir, incluso los modelos propietarios más avanzados fallan en aproximadamente la mitad de las tareas deterministas, confirmando que el progreso en razonamiento lingüístico no se traduce directamente en fiabilidad computacional.

El análisis de errores revela que dos categorías mecánicas dominan: problemas de precisión/redondeo (34.7%) y errores de cálculo (33.4%), que juntos suman más de dos tercios de todos los fallos. Les siguen errores de selección de fórmula/método (13.4%) y suposiciones erróneas (11.8%). Las alucinaciones, los rechazos (refusals) y los errores de unidades fueron casi inexistentes (≤1%), un contraste con las tareas abiertas de preguntas-respuestas: la naturaleza determinista del benchmark restringe la libertad generativa que suele producir alucinaciones factuales.

Por dominio, los modelos rinden mejor en Matemáticas y Conversiones (hasta 83%) y Estadística y Probabilidad (hasta 80.6% para Gemini), y peor en Física, Biología y Química, y Salud y Deportes (mayoría por debajo del 50%). El análisis de correlación cruzada (r ≈ 0.38–0.65) indica que los modelos tienden a fallar y acertar en subconjuntos solapados de problemas, pero sin alineamiento perfecto: sus perfiles de error difieren (la correlación más alta fue Claude Sonnet 4.5–DeepSeek V3.2; la más baja, ChatGPT-5–Gemini 2.5 Flash). Esta complementariedad parcial sugiere que ensambles o arquitecturas híbridas podrían ganar robustez. La conclusión central es que los LLMs pueden planificar pasos de razonamiento pero aún no computar de forma fiable, y que el camino prometedor son las arquitecturas híbridas que delegan la precisión numérica a backends computacionales dedicados.

## Contribuciones principales

- Un benchmark nuevo (ORCA) de 500 tareas de cálculo cotidiano verificadas de forma determinista contra un motor de cálculo experto, evitando la contaminación de datos de entrenamiento típica de benchmarks públicos.
- Evaluación comparativa de cinco LLMs de última generación (octubre 2025) sobre razonamiento cuantitativo aplicado en lugar de matemática simbólica o de competición.
- Una taxonomía de ocho tipos de error y su distribución empírica, mostrando que los fallos se concentran en precisión/redondeo y cálculo aritmético.
- Análisis de variabilidad por dominio y de correlación cruzada entre modelos, evidenciando perfiles de error parcialmente independientes.

## Metodología

Creación de 500 prompts en lenguaje natural por expertos de dominio, cada uno mapeado a un calculador de Omni con respuesta de referencia única. Cada prompt se envió a los cinco modelos vía sus interfaces oficiales con entradas idénticas. Las respuestas se puntuaron de forma binaria (1 correcto / 0 incorrecto) tras normalizar unidades y precisión al formato de Omni. Los errores se clasificaron en ocho categorías (fórmula/método, cálculo, unidad/redondeo, suposición errónea, parámetros erróneos, rechazo/deflección, alucinación, respuesta incompleta). Se calcularon exactitud global, distribución de errores, exactitud por dominio (consolidados en siete dominios) y una matriz de correlación de Pearson entre los vectores de corrección de los modelos.

## Hallazgos clave

- Exactitud global baja (45–63%); Gemini 2.5 Flash (63%) y Grok 4 (62.8%) lideran; Claude Sonnet 4.5 (45.2%) es el más bajo.
- Los errores de precisión/redondeo (34.7%) y de cálculo (33.4%) dominan: son fallos mecánicos, no conceptuales.
- Mejor desempeño en Matemáticas/Conversiones y Estadística; peor en Física, Biología y Química, y Salud y Deportes.
- Alucinaciones y rechazos casi ausentes (≤1%) gracias a la naturaleza determinista del benchmark.
- Correlación moderada entre modelos (r ≈ 0.38–0.65): fallan en subconjuntos solapados pero con perfiles de error distintos, lo que abre la puerta a ensambles híbridos.

## Limitaciones

- Acceso a los modelos vía interfaces de usuario oficiales (no API), lo que puede introducir variabilidad de configuración no controlada (por ejemplo, herramientas de cálculo activadas o no).
- Inconsistencias menores en el propio texto: el número de dominios/categorías varía entre menciones (13 vs. 14) y algunos nombres de modelo/figuras presentan erratas (p. ej. "Gemini 4.5", "DeepSeek V2.3").
- El benchmark mide solo la exactitud de la respuesta final binaria, sin evaluar sistemáticamente la calidad del razonamiento intermedio más allá de la clasificación de errores.
- Evaluación puntual (octubre 2025) sobre versiones específicas de modelos en rápida evolución; el conjunto de 500 tareas y su balance por dominio condicionan la generalización.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/alucinaciones-de-ia]]
