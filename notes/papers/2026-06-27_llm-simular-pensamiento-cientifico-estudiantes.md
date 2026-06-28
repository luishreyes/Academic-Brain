---
title: "Exploring the Capacity of Large Language Models to Simulate Students' Scientific Thinking: Insights for Responsive Teaching"
authors: [Ha Nguyen, Jie Cao]
year: 2026
journal: Journal of Science Education and Technology
url: https://doi.org/10.1007/s10956-026-10333-5
doi: 10.1007/s10956-026-10333-5
pdf_local: sources/pdfs/cheme-applications/nguyen_2026_llm-simulate-student-scientific-thinking.pdf
type: paper
keywords: [inteligencia-artificial, educacion-k12, psicologia-educativa, capacidades-de-ia, formacion-docente, retroalimentacion-con-ia, supervision-humana, evaluacion-educativa]
date_added: 2026-06-27
---

# Explorando la capacidad de los grandes modelos de lenguaje para simular el pensamiento científico de los estudiantes

## Resumen

El estudio investiga si distintos grandes modelos de lenguaje (LLMs) pueden simular de forma realista las ideas que los estudiantes de K-12 producirían en actividades de aprendizaje de ciencias, con el fin de apoyar la enseñanza responsiva (*responsive teaching*). La enseñanza responsiva busca elicitar, poner en primer plano y profundizar la sustancia de las ideas de los estudiantes, conectándolas con perspectivas disciplinares; sin embargo, anticipar y generar esas ideas durante la planeación de clases es una tarea laboriosa que exige conocimiento del contenido y del contexto instruccional. Los autores proponen usar LLMs para externalizar posibles ideas estudiantiles y aliviar esa carga.

Se evaluaron seis modelos —GPT-5-mini, GPT-4o, Claude Sonnet 4, Gemini 2.5 Flash, Mistral 7B y Llama-4-17B— generando 8.820 ideas simuladas a partir de 49 planes de lección de OpenSciEd (alineados con los Next Generation Science Standards) que abarcan tres dominios (ciencias de la vida, física y química) y tres niveles escolares (primaria, media y secundaria). Cada modelo produjo 30 ideas por lección. La evaluación cuantitativa (RQ1) midió tres dimensiones: la similitud semántica entre las ideas simuladas y las ideas reales de las lecciones (vía embeddings y similitud coseno), el nivel de lenguaje (índice Flesch-Kincaid) y el alcance de conocimiento apropiado para el grado (mediante un enfoque *LLM-as-a-judge* con GPT-5).

Los hallazgos indican que las respuestas simuladas son en general realistas y se ubican mayoritariamente en el nivel de grado esperado tanto en alcance de conocimiento (91%) como en legibilidad (69%). No obstante, hay variaciones entre modelos y niveles: los LLMs producen más ideas dentro del alcance para secundaria y tienden a generar ideas demasiado complejas y con lenguaje técnico para los grados inferiores. Un pipeline de re-prompting iterativo ("revisa esta respuesta para el grado X") mejora sustancialmente la alineación de legibilidad.

En la segunda fase (RQ2), entrevistas semiestructuradas con seis docentes que usaron ideas generadas por GPT-4o con sus propios planes de lección revelaron que las respuestas son percibidas como realistas y alineadas con los objetivos. Resultan más útiles cuando estimulan el *sensemaking* del docente sobre lo que sus estudiantes saben y no saben, y cuando sugieren andamiajes instruccionales relevantes. Los docentes también señalaron limitaciones: vocabulario poco natural, preguntas de seguimiento demasiado dirigidas y la necesidad constante de refinamiento humano con contexto del aula.

## Contribuciones principales

- Aporta evidencia empírica a gran escala (8.820 ideas, seis LLMs) de que los LLMs pueden aproximar el pensamiento abierto de estudiantes y solaparse con ideas generadas por docentes y estudiantes reales.
- Demuestra cómo las simulaciones de LLM pueden apoyar prácticas de enseñanza responsiva: externalizar ideas estudiantiles, activar el *sensemaking* docente y sugerir andamiajes.
- Documenta variaciones sistemáticas de desempeño por modelo y por nivel de grado, subrayando la necesidad de evaluación exhaustiva antes del despliegue.
- Integra una fase cualitativa con docentes, poco común en estudios previos de simulación estudiantil.

## Metodología

Diseño de dos fases mapeadas a las preguntas de investigación. Fase 1 (RQ1): generación de ideas con seis LLMs sobre planes de OpenSciEd, mediante un prompt estructurado (estándares de aprendizaje, instrucción previa, descripción de la actividad, descripción de la tarea con grado/dominio, e instrucción de simulación que incluía razonamiento parcial o incorrecto). Pipeline de evaluación de cinco pasos: clustering aglomerativo de ideas (embeddings text-embedding-3-large), similitud coseno frente a ideas-lección, nivel de lenguaje Flesch-Kincaid, alcance de conocimiento con LLM-as-a-judge (GPT-5, validado con codificación humana del 20%, κ = 0.69; y robustez con Claude Sonnet 4, κ = 0.64) y análisis cualitativo de divergencias. Modelos mixtos lineales y generalizados (lme4) con ID de actividad como intercepto aleatorio; pruebas Kruskal-Wallis, ANOVA, Chi-cuadrado y Fisher exacta. Fase 2 (RQ2): seis entrevistas semiestructuradas (45 min) con docentes de primaria, media y secundaria usando GPT-4o; análisis temático con *member checking*.

## Hallazgos clave

- Similitud semántica media de 0.52 (SD = 0.07); los modelos mayores superan a Mistral-7B; la similitud es menor en secundaria que en primaria/media.
- El dominio (vida, física, química) no predice significativamente la similitud semántica.
- 69% de las ideas cumplen el nivel de lenguaje objetivo; Llama-4 es el mejor (>80%); los LLMs generan lenguaje demasiado complejo para grados inferiores.
- 91% de las ideas caen dentro del alcance de conocimiento esperado; GPT-4o y Llama-4 son los mejores; GPT-5-mini tiende a exceder el alcance del grado.
- El re-prompting iterativo mejora la alineación de legibilidad (Gemini 95.92%, GPT-5-mini solo 55.10%).
- Divergencias cualitativas: razonamiento más genérico (60.54%), errores conceptuales menos apropiados al desarrollo (17.69%), exceso de vocabulario técnico (35.71%), menos marcadores de incertidumbre (14.63%) y uso de analogías (7.48%).
- Los docentes valoran las ideas para activar su *sensemaking* y los *prompts* de facilitación, pero exigen supervisión humana y refinamiento iterativo con contexto del aula.

## Limitaciones

- Muestra pequeña de docentes (n = 6), justificada por el principio de "poder informativo" pero limitada en generalización.
- Las ideas-lección de referencia provienen de OpenSciEd, no de transcripciones de aula reales; la "realidad" del estudiante es una aproximación.
- Sesgos potenciales al usar un LLM (GPT-5) para juzgar salidas de otros LLMs entrenados con datos similares.
- Los LLMs tienen dificultad persistente para representar el razonamiento y las concepciones erróneas de estudiantes más jóvenes (primaria).
- La evaluación de lenguaje se basa en un único índice (Flesch-Kincaid), que captura legibilidad pero no toda la autenticidad lingüística.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-k12]]
- [[concepts/psicologia-educativa]]
- [[concepts/capacidades-de-ia]]
- [[concepts/formacion-docente]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/supervision-humana]]
- [[concepts/evaluacion-educativa]]
