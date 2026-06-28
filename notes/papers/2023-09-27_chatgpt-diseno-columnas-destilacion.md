---
title: "Complementary role of large language models in educating undergraduate design of distillation column: Methodology development"
authors: [Zong Yang Kong, Vincentius Surya Kurnia Adi, Juan Gabriel Segovia-Hernández, Jaka Sunarso]
year: 2023
journal: Digital Chemical Engineering
url: https://doi.org/10.1016/j.dche.2023.100126
doi: 10.1016/j.dche.2023.100126
pdf_local: sources/pdfs/cheme-applications/kong_2023_chatgpt-distillation-column-design.pdf
type: paper
keywords: [inteligencia-artificial, ingenieria-quimica, educacion-en-ingenieria, simulacion-computacional, pensamiento-critico, etica-de-la-ia, supervision-humana, razonamiento-cuantitativo-llm]
date_added: 2026-06-27
---

# Complementary role of large language models in educating undergraduate design of distillation column: Methodology development

## Resumen

El artículo propone una metodología para integrar grandes modelos de lenguaje (LLM), específicamente ChatGPT 3.5 gratuito, en cursos de transferencia de masa de pregrado en ingeniería química, usando como tarea representativa el diseño de columnas de destilación. Los autores parten del reconocimiento de que ChatGPT es inevitable en la vida de los estudiantes pese a su inestabilidad computacional y su tendencia a producir resultados inconsistentes o erróneos en cálculos complejos. Frente a ello, el rol del docente no es prohibir la herramienta sino enseñar su uso responsable, efectivo y sinérgico junto con los principios fundamentales de la disciplina.

La propuesta plantea a ChatGPT como herramienta auxiliar para generar diseños preliminares (número de etapas, ubicación de alimentación, relación de reflujo, paquete termodinámico) que los estudiantes deben validar y verificar con software de simulación de procesos (Aspen Plus) y con cálculos manuales mediante el método de McCabe-Thiele. El núcleo pedagógico es un proceso de verificación doble: contrastar las sugerencias del LLM contra la literatura establecida y contra los cálculos manuales propios del estudiante. Las discrepancias entre estos resultados se usan deliberadamente para detonar preguntas, discusión y un entendimiento más profundo de los principios de transferencia de masa.

El trabajo demuestra la metodología con dos casos de estudio de separación binaria (n-heptano/isobutanol y propano/isobutano), tomados de trabajos de Luyben. En ambos, las sugerencias de ChatGPT producen diseños razonablemente cercanos a la literatura, aunque con desviaciones notables en consumo energético (cargas de condensador y rehervidor) y relación de reflujo, y a veces requiriendo iteraciones sucesivas hasta alcanzar las purezas objetivo. El artículo cierra con implicaciones pedagógicas (integración curricular, facilitación, consideraciones éticas, mejora continua), recomendaciones concretas de implementación (sesiones de laboratorio durante la segunda mitad del curso) y direcciones futuras como el desarrollo de modelos GPT especializados para destilación.

## Contribuciones principales

- Una metodología estructurada de seis pasos para incorporar ChatGPT como herramienta auxiliar en el diseño de columnas de destilación en pregrado.
- Un proceso de verificación doble (literatura + cálculo manual) que convierte las discrepancias del LLM en oportunidades de aprendizaje en lugar de errores a evitar.
- Dos casos de estudio reproducibles que ejemplifican beneficios y limitaciones concretas de ChatGPT frente a Aspen Plus y al método de McCabe-Thiele.
- Recomendaciones pedagógicas y curriculares detalladas (delivery en sesiones de laboratorio, diseño de asignaciones, evaluación) para docentes de transferencia de masa.

## Metodología

Estudio metodológico/demostrativo basado en dos casos de estudio. Pasos: (1) identificación de casos de estudio de la literatura y extracción de criterios de separación y datos termodinámicos; (2) consulta a ChatGPT para sugerir parámetros de diseño sin proporcionarle los parámetros previos; (3) refinamiento iterativo e interactivo de las consultas; (4) análisis de los cálculos mostrados por ChatGPT; (5) validación y verificación con Aspen Plus, contra la literatura y mediante cálculo manual con McCabe-Thiele; (6) identificación de retos y consideraciones clave. Se usó deliberadamente la versión gratuita ChatGPT 3.5 para mostrar accesibilidad sin costo.

## Hallazgos clave

- En el Caso 1 (n-heptano/isobutanol), ChatGPT propuso 30 etapas frente a las 31 de Luyben y una alimentación cercana, pero alcanzó purezas de 99.99 mol.% superando el objetivo de 99.9 mol.%, con aumentos de 43 % y 34 % en cargas de condensador y rehervidor; tras activar las design specs en Aspen Plus, los diseños resultan muy similares.
- El cálculo manual con McCabe-Thiele produjo menos etapas (16, alimentación en la etapa 4), quedándose corto frente a la pureza objetivo y consumiendo más energía, lo que ilustra el valor didáctico de comparar enfoques.
- En el Caso 2 (propano/isobutano), la sugerencia inicial de ChatGPT no alcanzó las purezas objetivo (96 mol.% destilado), requiriendo un proceso iterativo: tras una revisión, ChatGPT aumentó las etapas y la relación de reflujo (de 3 a 4) y logró superar las especificaciones.
- ChatGPT comete errores en cálculos complejos y en la elección del paquete termodinámico (inicialmente NRTL, corregido a UNIQUAC tras prompting), confirmando que no puede usarse como única fuente.
- Los diseños generados por ChatGPT sirven como "diseño inicial" para optimización posterior con algoritmos como PSO, GA o recocido simulado integrados vía Aspen Plus + MATLAB.

## Limitaciones

- Es un trabajo demostrativo/metodológico sin evaluación empírica con estudiantes; los autores anuncian un estudio de seguimiento (cursos en Sunway University y National Chung Hsing University, sept. 2023) con resultados pendientes.
- Solo se abordan dos casos de separación binaria conventional, simplificados deliberadamente para pregrado; no cubre destilación batch, flash, azeotrópica ni configuraciones complejas.
- Las respuestas de ChatGPT no son reproducibles (varían entre consultas), lo que dificulta estandarizar la experiencia de aprendizaje.
- Inestabilidad computacional reconocida del LLM en cálculos cuantitativos; depende fuertemente de la pericia del docente y de conocimiento de dominio para refinar las consultas.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/simulacion-computacional]]
- [[concepts/pensamiento-critico]]
- [[concepts/etica-de-la-ia]]
- [[concepts/supervision-humana]]
- [[concepts/razonamiento-cuantitativo-llm]]
