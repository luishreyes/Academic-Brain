---
title: "Empowering Teachers to Integrate AI: Developing an LLM-Based Copilot"
authors: [Sabine Seufert, Stefan Sonderegger]
year: 2024
journal: "21st International Conference on Cognition and Exploratory Learning in Digital Age (CELDA 2024)"
url: 
doi: 
pdf_local: sources/pdfs/faculty-development-implementation/seufert_2024_teacher-copilot.pdf
type: paper
keywords: [formacion-docente, tutoria-con-ia, alfabetizacion-en-ia, inteligencia-artificial, ingenieria-de-prompts, generacion-aumentada-por-recuperacion, retroalimentacion-con-ia, taxonomia-de-bloom, etica-de-la-ia, adopcion-de-tecnologia]
date_added: 2026-06-28
---

# Empowering Teachers to Integrate AI: Developing an LLM-Based Copilot

## Resumen

Este paper conceptual presenta el **Teacher Copilot**, un sistema de entrenamiento y asistencia para docentes basado en grandes modelos de lenguaje (LLM), y documenta su integración en el currículo de formación docente. Ante la transformación digital, los profesores enfrentan un doble reto: como aprendices, deben mantenerse al día con tecnologías que cambian constantemente y, como docentes, transferir esas competencias a sus estudiantes; todo ello con poco tiempo para capacitación y con incertidumbre frente a las herramientas nuevas. El proyecto, de los autores de la Universidad de St. Gallen, propone una solución de investigación basada en diseño (design-based research) que apoya la formación continua del profesorado y eleva su competencia digital y su alfabetización en IA.

El marco teórico es el **TPACK** (Technological Pedagogical Content Knowledge) de Mishra y Koehler, que extiende el modelo PCK de Shulman agregando el conocimiento tecnológico. Los autores usan los siete componentes del TPACK como estructura guía para fomentar los tipos de conocimiento necesarios para integrar la IA generativa en la enseñanza, apoyándose en la discusión de Mishra et al. (2023) sobre el cambio de naturaleza de la enseñanza y el aprendizaje que la IA generativa supone (más allá del plagio y la calidad del contenido generado).

El prototipo es una aplicación web (framework Flask/Quart) que integra modelos de OpenAI vía API con arquitectura agnóstica al modelo, permitiendo a futuro usar modelos open-source autohospedados por motivos de protección de datos. Ofrece escenarios de chatbot instruido (tutor, compañero de diálogo socrático, asistente de escritura, generador de ideas, entrenador de idiomas, bot de evaluación, simulación conversacional) y búsqueda en un repositorio de materiales mediante RAG (Retrieval Augmented Generation). Incluye un módulo de autoevaluación y reflexión de competencias en IA, con fases de autoevaluación, cuestionario de opción múltiple, preguntas abiertas y reflexión final.

El sistema se integró en un curso para futuros docentes del programa de Business Education (nivel secundario superior, Gymnasium) en primavera de 2024, con un diseño de dos fases: primero construir conocimiento a lo largo de los componentes TPACK (diseño y evaluación de prompts, análisis de escenarios de aprendizaje), y luego un entorno tipo sandbox de co-creación donde los estudiantes diseñan sus propios escenarios de aprendizaje con IA. La evaluación del curso destaca el rol novedoso del docente como **diseñador y co-creador** en un proceso de co-creación con IA, y sugiere que la IA generativa puede ampliar las dimensiones de conocimiento del TPACK, desplazando el foco de la mera adopción de tecnología hacia el diseño pedagógico.

## Contribuciones principales

- Introduce el concepto y prototipo del **Teacher Copilot**, un sistema dual (entrenamiento + asistencia) basado en LLM para docentes en formación y en ejercicio.
- Propone usar el marco **TPACK** como estructura para integrar la IA generativa, con ejemplos concretos por cada uno de sus siete componentes (Tabla 1).
- Documenta un diseño de curso de dos fases (construcción de competencias TPACK + sandbox de co-creación) que reposiciona al docente como diseñador y co-creador de escenarios de aprendizaje con IA.
- Aporta a la línea de investigación "teachers as designers of technology enhanced learning" (TaD of TEL).

## Metodología

Paper conceptual dentro de un proyecto de investigación basada en diseño (design-based research). Se desarrolló un prototipo de aplicación web (Flask/Quart, modelos de OpenAI vía API, arquitectura agnóstica al modelo) con funciones de chatbot instruido y recuperación RAG. El sistema se integró como estudio piloto en un curso de formación de profesores de Business Education en la Universidad de St. Gallen (primavera 2024); cuatro grupos de futuros docentes diseñaron escenarios de aprendizaje con IA (debate sobre derechos de autor de IA generativa, explorador de modelos de negocio, co-creación de campaña de marketing, tutor personalizado de estrategias competitivas). La evaluación combina apreciaciones cualitativas y cuantitativas del diseño del curso y de los proyectos resultantes.

## Hallazgos clave

- Los futuros docentes requieren **mayor apoyo y guía estructurada** para pasar de los conceptos teóricos al diseño práctico de escenarios con IA; esto motivó enriquecer el entorno con escenarios de ejemplo y plantillas.
- El curso evidenció el **rol novedoso del docente como diseñador y co-creador** en entornos de aprendizaje potenciados por IA; la integración se entiende como diseño más que como adopción tecnológica.
- La IA generativa parece **extender varias dimensiones del conocimiento TPACK**, automatizando tareas rutinarias (TK), apoyando aprendizaje adaptativo y retroalimentación en tiempo real (PK) y aportando materiales y simulaciones ricas (CK).
- Los escenarios diseñados promovieron mayor compromiso estudiantil según el modelo **ICAP** (formas interactivas y constructivas de aprendizaje).

## Limitaciones

- El acceso a sistemas basados en LLM y sus costos asociados pueden ser barreras para la adopción generalizada.
- Persisten preocupaciones de protección de datos, privacidad, transparencia, derechos de autor, equidad y posibles sesgos en el contenido generado por IA.
- Es un paper conceptual con un piloto reducido (un curso, cuatro proyectos); no mide impacto de largo plazo en eficacia docente, carga de trabajo ni resultados de aprendizaje estudiantil.

## Notas relacionadas

- [[concepts/formacion-docente]]
- [[concepts/tutoria-con-ia]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/taxonomia-de-bloom]]
- [[concepts/etica-de-la-ia]]
- [[concepts/adopcion-de-tecnologia]]
