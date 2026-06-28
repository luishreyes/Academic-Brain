---
title: "From Canonical to Complex: Benchmarking LLM Capabilities in Undergraduate Thermodynamics"
authors: [Anna Geißler, Luca-Sophie Bien, Friedrich Schöppler, Tobias Hertel]
year: 2025
journal: arXiv (preprint)
url: https://arxiv.org/abs/2510.14152
doi:
pdf_local: sources/pdfs/cheme-applications/geissler_2025_utqa-thermodynamics-benchmark-preprint.pdf
type: paper
keywords: [capacidades-de-ia, razonamiento-cuantitativo-llm, tutoria-con-ia, inteligencia-artificial, ingenieria-de-prompts, razonamiento-multimodal, termodinamica, educacion-superior]
date_added: 2026-06-27
---

# From Canonical to Complex: Benchmarking LLM Capabilities in Undergraduate Thermodynamics

## Resumen

El paper introduce UTQA (Undergraduate Thermodynamics Question Answering), un benchmark de 50 preguntas de opción única diseñado para evaluar la competencia de los grandes modelos de lenguaje (LLMs) en termodinámica de nivel universitario, con énfasis en procesos de gas ideal, entropía y reversibilidad. Los autores argumentan que la termodinámica es un banco de pruebas ideal porque su núcleo teórico es compacto pero su aplicación correcta exige distinciones conceptuales sutiles (calor vs. trabajo, variables de estado vs. de proceso, y sobre todo transformaciones reversibles vs. irreversibles). Señalan que los benchmarks científicos existentes (GPQA, Humanity's Last Exam, SciBench) cubren muy poco el razonamiento termodinámico, especialmente entropía y reversibilidad.

El benchmark se compone de 33 preguntas de solo texto y 17 basadas en diagramas (p–V, T–S, H–p, etc.). Ningún modelo de la generación 2025 alcanzó el umbral provisional de fiabilidad del 95% propuesto por los autores para uso no supervisado en tutoría: el mejor desempeño global fue de gpt-o3 con 82%. El rendimiento en ítems de solo texto (media 67%, hasta 88% en DeepSeek R1) fue muy superior al de ítems con diagramas (media 32%, frecuentemente cerca del azar), revelando un déficit de "binding" multimodal: los modelos identifican ejes y rasgos de las curvas, pero fallan al mapear la geometría a su significado termodinámico (p. ej., áreas con signo bajo curvas p–V como trabajo).

Los experimentos de prompting (17 estrategias sobre gpt-4o, incluyendo chain-of-thought, tree/graph of thoughts, personas y framings afectivos) mostraron sensibilidad real pero modesta (precisiones entre 0.36 y 0.54): el diseño del prompt afecta sobre todo la presentación superficial y la estabilidad, no corrige déficits profundos de razonamiento. Las degradaciones lingüísticas controladas (claridad, ortografía, terminología) revelaron que oscurecer la estructura lógica causa las mayores pérdidas, mientras que el ruido ortográfico y terminológico moderado se tolera bien. La complejidad sintáctica (número de cláusulas, rango 1–20) no mostró correlación significativa con la precisión.

La conclusión central es que los LLMs actuales aún no son adecuados para tutoría no supervisada en este dominio: las brechas se concentran en escenarios de tasa finita/irreversibles y en la vinculación de rasgos visuales al significado termodinámico. Aun así, los autores documentan progreso sustancial y consideran plausible alcanzar el umbral en el futuro cercano si mejora el acoplamiento entre percepción visual y restricciones físicas.

## Contribuciones principales

- Introducción de UTQA, benchmark de 50 ítems de opción única (33 de texto, 17 de diagramas) enfocado específicamente en procesos de gas ideal, entropía y reversibilidad; disponible públicamente (huggingface.co/datasets/herteltm/UTQA).
- Comparación cross-model de 19 LLMs contemporáneos (incluyendo gpt-5, Gemini 2.5 Pro, Grok 3, DeepSeek R1, Claude 4 Sonnet, gpt-o3) en ítems de texto y de diagramas.
- Evaluación sistemática de 17 estrategias de prompting y de degradaciones lingüísticas controladas sobre gpt-4o.
- Propuesta de un umbral de fiabilidad del 95% para tutoría no supervisada, no alcanzado por ningún modelo de 2025.
- Identificación de un déficit de "binding" multimodal como cuello de botella principal en la interpretación de diagramas.

## Metodología

Dos clases de experimentos: (i) experimentos de prompting y degradación lingüística ejecutados exclusivamente en gpt-4o vía API (temperatura T = 0.7, ciclos completos de las 33 preguntas para minimizar efectos de caching), y (ii) comparación cross-model sobre 19 modelos usando sus interfaces web/CLI bajo condiciones idénticas con un prompt baseline. Los ítems de texto se restringieron para aislar el razonamiento verbal/semántico; los de diagramas se analizaron por separado. Se aplicaron perturbaciones controladas en tres familias (claridad reducida, ruido ortográfico, sustitución de terminología técnica) a dos severidades, preservando el contenido físico y la clave correcta. La precisión se reportó como media sobre corridas independientes, con desviación estándar run-to-run para separar efectos genuinos del prompt de la variabilidad estocástica.

## Hallazgos clave

- Ningún modelo de 2025 superó el umbral del 95%; el mejor global fue gpt-o3 con 82%.
- Ítems de solo texto (media 67%) muy superiores a ítems con diagramas (media 32%, a menudo cerca del azar del 25%).
- El diseño del prompt mostró sensibilidad real pero modesta (0.36–0.54); el formato de dos fases ("analiza luego responde") no produjo ganancias significativas.
- Oscurecer la estructura lógica (claridad) causa la mayor pérdida de precisión; el ruido ortográfico/terminológico moderado se tolera.
- La complejidad sintáctica (número de cláusulas) no correlaciona con la precisión.
- Patrones de error recurrentes: uso indebido de plantillas cuasiestáticas pese a señales de tasa finita, errores de contabilidad de entropía, puntos ciegos sobre la dependencia de la trayectoria del trabajo, y anclaje numérico a exponentes/constantes de libro de texto.
- En diagramas, los modelos parsean rasgos de bajo nivel (ejes, segmentación, curvatura) pero fallan al mapear la geometría a cantidades termodinámicas (áreas con signo, feasibilidad bajo la segunda ley).

## Limitaciones

- Alcance intencionalmente estrecho (gases ideales; excluye gases reales, mezclas, equilibrios de fase y fenómenos de transporte), por lo que podrían emerger modos de fallo adicionales bajo cobertura más amplia.
- Los experimentos de prompting y degradación se realizaron solo sobre gpt-4o, no sobre todos los modelos.
- Benchmark pequeño (50 ítems), formato exclusivo de opción única con tres distractores.
- Cumplir umbrales de precisión es necesario pero insuficiente para tutoría efectiva: no se evaluaron la granularidad de interacción, la retroalimentación oportuna ni la desambiguación en diálogo.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/tutoria-con-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/razonamiento-multimodal]]
- [[concepts/termodinamica]]
- [[concepts/educacion-superior]]
