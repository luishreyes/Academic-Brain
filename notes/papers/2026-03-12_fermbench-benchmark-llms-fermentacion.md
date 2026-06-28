---
title: "FermBench: A new benchmark for measuring the capabilities of LLMs on fermentation knowledge"
authors: ["Fiammetta Caccavale", "Adem R.N. Aouichaoui", "Ulrich Krühne", "Krist V. Gernaey", "Carina L. Gargalo"]
year: 2026
journal: "Computers and Education: Artificial Intelligence"
url: https://doi.org/10.1016/j.caeai.2026.100577
doi: 10.1016/j.caeai.2026.100577
pdf_local: sources/pdfs/cheme-applications/caccavale_2026_fermbench-fermentation-llm-benchmark.pdf
type: paper
keywords: [capacidades-de-ia, inteligencia-artificial, ingenieria-quimica, educacion-en-ingenieria, biocombustibles, tutoria-con-ia, evaluacion-educativa, alucinaciones-de-ia, pensamiento-critico, generacion-aumentada-por-recuperacion, supervision-humana]
date_added: 2026-06-27
---

# FermBench: un nuevo benchmark para medir las capacidades de los LLM en conocimiento de fermentación

## Resumen

El estudio aborda una pregunta práctica para la educación en ingeniería (bio)química: ¿son los chatbots de IA generativa lo suficientemente buenos como para apoyar el aprendizaje sobre fermentación, y existe alguna diferencia significativa de rendimiento entre ellos que justifique recomendar uno sobre otro? Para responderla, los autores introducen FermBench, un conjunto de datos de preguntas abiertas sobre procesos de fermentación, recolectadas mediante encuestas a participantes de escuelas de formación bajo la iniciativa DIG4BIO (118 preguntas tras curación). El dataset se libera públicamente.

Con FermBench se evalúan cinco LLM que alimentan chatbots comerciales de uso masivo en su versión gratuita al momento del experimento (abril 2025): ChatGPT (GPT-3.5-turbo), Claude (Claude 3.7 Sonnet), Gemini (Gemini 2.0 Flash), DeepSeek (DeepSeek-V3) y le Chat (Mistral Large). Deliberadamente se usaron las versiones gratuitas y no las de razonamiento, pensando en estudiantes que no pueden o no quieren pagar suscripciones.

El marco experimental combina tres enfoques de evaluación: métricas automáticas (similitud coseno, F1, BLEU, más reducción de dimensionalidad con PCA/t-SNE/UMAP), anotación por expertos humanos (9 anotadores con doctorado o en curso en ingeniería química, puntuando en escala Likert 1-5 ocho parámetros: exactitud factual, exhaustividad, coherencia, concisión, legibilidad, utilidad, perspicacia y calidad general) y el enfoque LLM-as-a-Judge (usando Gemma y GPT-4o como jueces). Se aplicó análisis estadístico no paramétrico (test de Friedman seguido de Nemenyi post-hoc) y acuerdo inter-anotador (alfa de Krippendorff).

El hallazgo central es que la línea base de conocimiento de todos los modelos es alta y satisfactoria: ningún LLM resultó significativamente mejor de forma global, y los jueces no lograron coincidir en un "mejor modelo". Las diferencias significativas emergen solo en dimensiones de orden superior (perspicacia, exhaustividad), donde Gemini y DeepSeek forman un "estrato técnico" diferenciado. Un resultado llamativo es que las respuestas curadas por expertos no son necesariamente mejores que las generadas por los chatbots. La conclusión pedagógica es que la elección de chatbot debería guiarse por directrices institucionales/gubernamentales y preferencias personales informadas, más que por una superioridad demostrada de un modelo.

## Contribuciones principales

- Introducción de FermBench, primer benchmark de preguntas abiertas específicamente sobre fermentación, liberado públicamente.
- Marco experimental robusto que triangula métricas automáticas, anotación humana experta y LLM-as-a-Judge para evaluar respuestas abiertas sin ground truth único.
- Benchmark comparativo de cinco chatbots comerciales (ChatGPT, Claude, Gemini, DeepSeek, le Chat) en su versión gratuita.
- Evidencia de que las respuestas curadas por expertos no superan consistentemente a las generadas por LLM.
- Enriquecimiento del LLM propio FermentAI (basado en RAG, embebido en la plataforma e-learning BioVL) con las respuestas curadas.

## Metodología

Recolección de preguntas vía encuesta anónima a participantes de dos escuelas de formación (DIG4BIO), curadas hasta 118 preguntas. Generación de respuestas vía API de cada modelo, tres corridas por modelo para controlar estocasticidad. Evaluación triple: (i) métricas automáticas N-gram (BLEU, F1) y semánticas (coseno), con visualización por PCA/t-SNE/UMAP; (ii) anotación humana por 9 expertos sobre 15 preguntas representativas (Likert 1-5 en ocho parámetros), más comparación pareada (10 pares únicos) y comparación generadas vs. curadas; (iii) LLM-as-a-Judge con Gemma (gemma-3-4b-it) y GPT-4o usando el mismo guion que los humanos. Análisis estadístico: Friedman + Nemenyi post-hoc, significancia relativa a ChatGPT; acuerdo inter-anotador con alfa de Krippendorff.

## Hallazgos clave

- La línea base de todos los modelos es alta; ningún LLM es significativamente superior de forma global.
- Gemini y DeepSeek forman un "estrato técnico" superior en perspicacia (p < 0.001) y exhaustividad, según jueces humanos y LLM.
- Los expertos humanos prefirieron en promedio a Gemini (4.4), seguido de DeepSeek (4.27); ChatGPT obtuvo el promedio más bajo (3.87).
- Claude y ChatGPT fueron los más concisos y legibles, pero esa concisión penalizó otros parámetros.
- GPT-4o actúa como "juez de estilo" (sensible a concisión, con sesgo de lenidad y efecto techo); Gemma es un "juez de alta resolución" que preserva mayor granularidad evaluativa.
- Las respuestas curadas por expertos no son necesariamente mejores que las generadas; los chatbots a veces superan a los anotadores.
- En exactitud factual, coherencia y legibilidad todos los modelos operan en un "techo" de rendimiento.

## Limitaciones

- Acuerdo inter-anotador muy bajo (alfa de Krippendorff ≈ 0.083 en pareadas, 0.043 en scoring): los resultados son observaciones preliminares, no directrices pedagógicas validadas.
- "Deserción de anotadores": de un diseño inicial mayor se redujo a 15 preguntas y aun así no todos completaron la tarea (proceso de ~70 días, costoso y laborioso).
- Se usaron versiones gratuitas y no de razonamiento de los modelos; los resultados pueden no extrapolarse a las versiones de pago o más recientes.
- Campo de cambio muy rápido: los modelos evaluados quedan rápidamente desactualizados.
- Anotadores reclutados de la red profesional de los autores, lo que limita la generalización.
- El dataset de entrenamiento de los LLM no es público, dificultando garantizar corrección y equidad de las fuentes.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/biocombustibles]]
- [[concepts/tutoria-con-ia]]
- [[concepts/evaluacion-educativa]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/supervision-humana]]
