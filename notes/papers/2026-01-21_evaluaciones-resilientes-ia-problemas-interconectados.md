---
title: "Designing AI-Resilient Assessments Using Interconnected Problems: A Theoretically Grounded and Empirically Validated Framework"
authors: [Kaihua Ding]
year: 2026
journal: arXiv preprint (arXiv:2512.10758)
url: https://arxiv.org/abs/2512.10758
doi: 
pdf_local: sources/pdfs/assessment-redesign/ding_2026_interconnected-problems.pdf
type: paper
keywords: [evaluacion-educativa, integridad-academica, inteligencia-artificial, educacion-en-programacion, ciencia-de-datos, educacion-superior, capacidades-de-ia, pensamiento-critico, psicometria]
date_added: 2026-06-27
---

# Designing AI-Resilient Assessments Using Interconnected Problems

## Resumen

La proliferación de herramientas de IA generativa ha vuelto obsoletas las evaluaciones modulares tradicionales en educación en computación y ciencia de datos, abriendo una brecha entre la formación académica y la práctica profesional: tareas que antes definían el trabajo técnico de nivel inicial (escribir código repetitivo, consultas SQL simples, análisis de datos a pequeña escala) hoy las completa la IA de forma instantánea. Ding propone un marco teóricamente fundamentado y empíricamente validado para diseñar evaluaciones "resilientes a la IA" (AI-resilient): tareas que cultivan aprendizaje genuino precisamente porque no pueden delegarse por completo a un modelo.

El argumento central es que la resiliencia a la IA se logra imbuyendo a las evaluaciones de un alto grado de interconexión entre sus componentes. El autor formaliza dos proposiciones con demostración. (1) Una evaluación compuesta de problemas interconectados —donde la salida de un problema es la entrada del siguiente— es más resiliente a la IA que una evaluación modular equivalente, porque exige razonamiento multi-paso y satura la ventana de contexto limitada de los modelos de lenguaje (LLMs). (2) Un proyecto semiestructurado con criterios de éxito deterministas mide la competencia del estudiante de forma más fiable que un proyecto totalmente abierto, que permite a la IA recurrir a patrones de solución familiares dentro de su distribución de entrenamiento.

Estas tesis contradicen recomendaciones ampliamente citadas —discutidas en un análisis alojado por la UNESCO y en guías institucionales (NYU, Duke Kunshan, ASEE)— según las cuales las evaluaciones abiertas (open-ended) preservan la integridad académica y fomentan un compromiso más profundo. El autor sostiene que esas recomendaciones descansan en el supuesto erróneo de que la IA "tiene dificultades con el pensamiento original y la síntesis compleja", cuando la evidencia reciente indica que las limitaciones de los LLMs no provienen de incapacidad creativa sino de restricciones arquitectónicas del transformer en razonamiento multi-paso y gestión de contexto.

El marco se ancla en la Teoría de la Carga Cognitiva (CLT) y el concepto de interactividad de elementos: la IA destaca en tareas de baja interactividad (problemas de código independientes) pero falla en tareas de alta interactividad (depurar un sistema donde un cambio en un módulo se propaga a otros). Las proposiciones se validan empíricamente con datos de tres cursos universitarios de ciencia de datos (N=117) y se operacionalizan en un procedimiento de diseño de seis pasos (Algoritmo 1).

## Contribuciones principales

- Dos proposiciones formales con demostración: (P1) los problemas interconectados son intrínsecamente más resilientes a la IA que los modulares; (P2) los proyectos semiestructurados con criterios deterministas miden mejor la competencia que los totalmente abiertos.
- Validación empírica en tres ofertas de cursos de ciencia de datos (N=117) que documenta un "efecto de inflación por IA" sustancial.
- Un procedimiento de diseño práctico de seis pasos (Algoritmo 1) que traduce las proposiciones en estrategias implementables para educadores en computación.
- Una refutación basada en evidencia de la recomendación (UNESCO/guías institucionales) de que las evaluaciones abiertas preservan la integridad académica en la era de la IA generativa.

## Metodología

Estudio empírico multi-año sobre datos anonimizados de calificaciones de tres ofertas de cursos de pregrado y posgrado en ciencia de datos en una gran universidad de investigación (Predictive Analytics, Otoño 2024, N=34; Python for Data Science and AI, Primavera 2025, N=41; Predictive Analytics, Otoño 2025, N=42). Se aplicaron análisis descriptivo (estadísticos por tipo de evaluación), comparativo (pruebas t de muestras pareadas y tamaños de efecto Cohen's d entre evaluaciones modulares e interconectadas, más comparación cualitativa entre formatos abierto y semiabierto) y de correlación (correlaciones de Pearson entre tipos de evaluación). El curso de Primavera 2025 es el único con examen presencial vigilado (proctored), usado como referencia AI-resiliente.

## Hallazgos clave

- Efecto de inflación por IA: en Python for Data Science (N=41), los estudiantes lograron casi 90-100% en evaluaciones modulares con IA permitida (knowledge checks M=92.55; homework M=88.73), pero cayeron ~30 puntos en el examen vigilado (M=62.82), con Cohen's d grande (~1.51-1.54).
- El 90.2% alcanzó ≥90% en knowledge checks, pero solo el 4.9% lo logró en el examen vigilado: las altas notas modulares no reflejan dominio real.
- El proyecto interconectado (Otoño 2025, M=78.58, SD=30.42) bajó la media y aumentó la varianza frente al proyecto abierto (Otoño 2024, M=91.47, SD=16.83); mayor varianza interpretada como mejor diferenciación de competencia, no como defecto.
- Los proyectos interconectados correlacionan fuertemente con el examen vigilado (r=0.925, R²≈0.86) frente a los knowledge checks modulares (r=0.671, R²≈0.45): el diseño interconectado tiene mayor validez de constructo siendo compatible con flujos de trabajo asistidos por IA.
- En el proyecto totalmente abierto los estudiantes convergieron hacia datasets de inflación macroeconómica fácilmente descubribles y datos más pequeños/menos variables; el diseño semiabierto produjo mayor profundidad metodológica (incluido NLP) sin sacrificar la autonomía.

## Limitaciones

- Muestra reducida (N=117) y datos provenientes de una sola institución y de cursos del propio autor; la generalización a otras instituciones y disciplinas queda pendiente.
- Solo un curso incluyó examen vigilado, limitando la base de comparación para el efecto de inflación.
- La mayor caída y varianza del diseño interconectado no alcanzó significancia estadística.
- No se determina el nivel óptimo de interconexión (posible punto de rendimientos decrecientes por carga cognitiva excesiva).
- Las herramientas de detección de IA se consideran poco fiables, por lo que la validación depende del diseño y no de la detección.

## Notas relacionadas

- [[concepts/evaluacion-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-programacion]]
- [[concepts/ciencia-de-datos]]
- [[concepts/educacion-superior]]
- [[concepts/capacidades-de-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/psicometria]]
