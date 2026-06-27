---
title: "Evaluating ChatGPT's Cognitive Performance in Chemical Engineering Education"
authors: [Salman Shahid, Shaun Walmsley]
year: 2026
journal: Information
url: https://doi.org/10.3390/info17020162
doi: 10.3390/info17020162
pdf_local: sources/pdfs/capability-reliability/shahid_2026_chatgpt-bloom-chemeng-education.pdf
type: paper
keywords: [capacidades-de-ia, taxonomia-de-bloom, educacion-en-ingenieria, ingenieria-quimica, evaluacion-educativa, alfabetizacion-en-ia, pensamiento-critico, alucinaciones-de-ia, integridad-academica, inteligencia-artificial]
date_added: 2026-06-27
---

# Evaluating ChatGPT's Cognitive Performance in Chemical Engineering Education

## Resumen

El estudio evalúa empíricamente la competencia de ChatGPT (modelo 3.5) para resolver problemas de ingeniería química de nivel de pregrado, mapeando 110 problemas auténticos a los seis niveles de la Taxonomía de Bloom revisada (Recordar, Comprender, Aplicar, Analizar, Evaluar, Crear). Cada respuesta fue calificada por dos evaluadores con experiencia docente en cuanto a exactitud (0-100%), calidad del razonamiento (1-5) y tipo de error, con alta fiabilidad entre evaluadores (κ de Cohen = 0.87).

El hallazgo central es una relación negativa fuerte y monótona entre la complejidad cognitiva de la tarea y el desempeño del modelo (R² = 0.96). ChatGPT obtiene precisión casi perfecta en los niveles bajos (Recordar ≈95%, Comprender ≈88%) pero se degrada sustancialmente en los niveles altos (Evaluar ≈53%, Crear ≈41%). Un ANOVA (F = 52.3, p < 0.001) y pruebas post hoc de Tukey revelan tres niveles ("tiers") de capacidad estadísticamente distintos: Tier 1 (Recordar y Comprender), Tier 2 (Aplicar), y Tier 3 (Analizar, Evaluar, Crear), cada uno significativamente por debajo del anterior. El umbral cognitivo crítico aparece entre Aplicar y Analizar.

El análisis de errores muestra que los errores conceptuales son los más frecuentes (35%), seguidos por contextuales/de juicio (25%), computacionales (20%) y factuales (5%). Los autores caracterizan el comportamiento del modelo como "cognición sintética" o "mimetismo cognitivo": ChatGPT "habla matemáticas pero no piensa física", produciendo una "coherencia hueca" (texto fluido que oculta comprensión superficial). El desempeño por subdominio se correlaciona con la densidad del corpus de entrenamiento: alto en termodinámica y transferencia de calor (≈88%), bajo en síntesis/diseño de procesos y sistemas ambientales (≈55%).

Las implicaciones pedagógicas apuntan a una integración calibrada en lugar de sustitución del docente. ChatGPT sirve mejor como herramienta de apoyo formativo (revisión, ejemplos resueltos, explicación de conceptos) y no como solucionador autónomo en niveles cognitivos avanzados. Los autores recomiendan rediseñar la evaluación para priorizar la transparencia del razonamiento sobre la respuesta numérica final, e incorporar actividades de crítica estructurada de salidas de IA que cultiven la alfabetización en IA y el juicio disciplinar.

## Contribuciones principales

- Primera evaluación empírica de ChatGPT en ingeniería química anclada sistemáticamente en la Taxonomía de Bloom y con evaluación experta comparativa (gap en literatura, dominada por humanidades y ciencias de la computación).
- Dataset de 110 problemas auténticos de pregrado curados a partir de exámenes y tareas reales, mapeados a los seis niveles cognitivos.
- Cuantificación de un gradiente de desempeño con tres niveles de capacidad estadísticamente distintos y un umbral cognitivo claro entre Aplicar y Analizar.
- Taxonomía de cinco tipos de error (factual, computacional, conceptual, contextual/juicio, mixto) y su distribución a través de los niveles de Bloom.
- Recomendaciones concretas de rediseño de evaluación y de prácticas de alfabetización en IA para educadores de ingeniería.

## Metodología

Diseño empírico sistemático en tres fases: (1) generación de problemas auténticos curados por los autores a partir de currículos acreditados; (2) recolección de respuestas usando ChatGPT 3.5 con prompts estándar de un solo paso ("solve the following chemical engineering problem"), sin ingeniería de prompts ni aclaraciones, para reflejar el uso típico del estudiante; (3) evaluación cognitiva experta por dos calificadores. Métricas: exactitud (0-100%), calidad de razonamiento (1-5) y tipo de error. Análisis estadístico mediante ANOVA de una vía y pruebas post hoc de Tukey; fiabilidad entre evaluadores con κ de Cohen.

## Hallazgos clave

- Declive monótono de la exactitud al aumentar el nivel de Bloom (R² = 0.96); Recordar 95.1% → Crear 40.7%.
- Tres niveles de capacidad distintos (Tukey): Tier 1 (Recordar/Comprender), Tier 2 (Aplicar), Tier 3 (Analizar/Evaluar/Crear); umbral crítico entre Aplicar y Analizar.
- La variabilidad crece con la complejidad: la desviación estándar sube de 3.2% a 13.2% y el coeficiente de variación de 3.4% a 32.4%.
- Errores conceptuales dominan (35%); los errores contextuales/de juicio aumentan marcadamente en Evaluar y Crear.
- "Coherencia hueca" y mimetismo metacognitivo (frases como "es importante notar") que simulan pensamiento crítico sin cadenas de razonamiento subyacentes.
- El dominio se correlaciona con la densidad del corpus: fuerte en termodinámica y transferencia de calor; débil en diseño/síntesis de procesos y sistemas ambientales.
- ChatGPT no puede autocorregirse tras producir una respuesta, a diferencia del aprendiz humano con conciencia metacognitiva.

## Limitaciones

- Conjunto de preguntas curado por expertos (no aleatorio), con posible sesgo de selección hacia problemas canónicos.
- Número limitado de evaluadores, lo que puede restringir la generalización de las interpretaciones de calificación.
- Evaluación de una sola generación del modelo (ChatGPT-3.5) bajo prompting genérico: snapshot temporal que no se generaliza a GPT-4 ni a diseños de interacción mediados pedagógicamente.
- Enfoque exclusivo en tareas de razonamiento basado en texto; excluye razonamiento visual/diagramático (diagramas de flujo, esquemas, gráficas) central en ingeniería, lo que podría subestimar o mischaracterizar el desempeño.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/taxonomia-de-bloom]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/ingenieria-quimica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/integridad-academica]]
- [[concepts/inteligencia-artificial]]
