---
title: "GenAI in the classroom: Customized GPT roleplay for process safety education"
authors: [Christopher D.F. Honig, Aditya Desu, John Franklin]
year: 2024
journal: Education for Chemical Engineers
url: https://doi.org/10.1016/j.ece.2024.09.001
doi: 10.1016/j.ece.2024.09.001
pdf_local: sources/pdfs/cheme-applications/honig_2024_gpt-roleplay-process-safety.pdf
type: paper
keywords: [inteligencia-artificial, educacion-en-ingenieria, ingenieria-quimica, tutoria-con-ia, evaluacion-educativa, alucinaciones-de-ia, adopcion-de-tecnologia, generacion-aumentada-por-recuperacion, integridad-academica, personalidad-introversion]
date_added: 2026-06-27
---

# GenAI in the classroom: Customized GPT roleplay for process safety education

## Resumen

El artículo describe e evalúa una innovación pedagógica para la enseñanza de la seguridad de procesos en ingeniería química, implementada en una asignatura de tercer año ("Safety and Sustainability Case Studies") de la Universidad de Melbourne. La propuesta combina tres estrategias: (1) integrar la experiencia directa de ingenieros profesionales con larga trayectoria (consultores de industria, frecuentemente al final de su carrera o recién jubilados) para enseñar estudios de caso de incidentes reales de seguridad; (2) reemplazar las presentaciones orales cortas tradicionales por un formato de "engineering meeting" tipo viva/defensa, más dinámico y auténtico; y (3) usar IA generativa (GPT) para escalar y complementar (1) y (2), reduciendo costos y mejorando el acceso y la diversidad de estilos de aprendizaje.

Los autores construyeron dos chatbots personalizados —un "AI-consultant" que simula al consultor de industria y un "AI-engineering meeting" que simula al académico que conduce la viva— mediante llamadas a la API de GPT-4 con Streamlit como interfaz, sin usar los GPTs nativos de OpenAI por falta de flexibilidad. Los prompts de sistema se nutrieron de cuestionarios detallados a los consultores (su estilo de habla, jerga industrial, detalles del incidente, lecciones aprendidas y reflexiones personales), y se incorporaron recursos adicionales mediante generación aumentada por recuperación (RAG).

Un eje conceptual central es el tratamiento de las "alucinaciones". Los autores argumentan que enmarcar al GPT como roleplay de un humano (en lugar de como fuente de verdad factual) mitiga el problema, porque elimina las expectativas implícitas de fiabilidad y "compellability" que los estudiantes proyectan sobre los recursos del curso. Introducen además el concepto de "designed fallibility" (falibilidad diseñada): un chatbot infalible no sería óptimo, porque la cultura de seguridad exige que el ingeniero junior cuestione críticamente incluso a colegas senior; conviene que el bot cometa errores con una frecuencia y arquitectura similares a las de los humanos que emula, para que los estudiantes mantengan el escepticismo. Se añadieron además instrucciones y reglas condicionales para que el bot responda "no estoy seguro" o pida aclaraciones ante preguntas fuera de alcance.

La evaluación, de métodos mixtos (encuesta Likert de 5 puntos y análisis de contenido cualitativo inductivo) sobre 41 respuestas completas de una clase de 70, halla impactos positivos en aprendizaje y compromiso. Los consultores de industria y el formato de viva recibieron fuerte respaldo; la adopción voluntaria de las herramientas de IA fue alta (83 % usó el AI-consultant, 71 % el AI-engineering meeting), con una valoración de utilidad más moderada pero superior a la esperada por los autores, quienes habían concebido la IA solo como solución de escala.

## Contribuciones principales

- Diseño replicable de una actividad de aula que combina consultores de industria, evaluación tipo viva ("engineering meeting") y chatbots GPT personalizados que hacen roleplay de esos roles, con recursos de apoyo para otros docentes.
- Reformulación del problema de las alucinaciones: enmarcar el GPT como roleplay humano (no como fuente factual) para neutralizar las expectativas de fiabilidad y "compellability".
- Concepto de "designed fallibility": en educación en seguridad, un chatbot que erre como un humano es preferible a uno infalible, porque preserva el escepticismo crítico exigido por la cultura de seguridad.
- Evidencia empírica (métodos mixtos) de alta adopción voluntaria y percepción positiva de las herramientas, incluyendo un hallazgo inesperado sobre estudiantes introvertidos.

## Metodología

Estudio evaluativo de métodos mixtos en una sola asignatura (caso de estudio educativo). Instrumento de encuesta validado (templates Likert de estudios previos en dominio público más enunciados a medida, con revisión por colegas y pilotaje). Componente cuantitativo: escala Likert de 5 puntos reportada como promedios y porcentajes de acuerdo/desacuerdo. Componente cualitativo: análisis de contenido inductivo (convenciones de Krippendorff) con biblioteca de 33 códigos agrupados en temas, codificado en Excel; se verificó fiabilidad intra-codificador recodificando a los 4 meses (alta reproducibilidad). Tasa de respuesta del 59 % (41/70 completas). Datos anonimizados; uso verificado además por IPs únicas en Streamlit (78 usuarios únicos).

## Hallazgos clave

- Fuerte respuesta positiva a los consultores de industria (Q4.1.1: promedio 4.3, 80 % de acuerdo); fue el tema más mencionado como más beneficioso para el aprendizaje (37 %).
- Al comparar tiempo con consultores frente a tiempo con docentes, el apoyo se modera (49 % de acuerdo, 39 % sin preferencia): los estudiantes valoran roles complementarios de académicos e industria casi por igual.
- El "engineering meeting" (viva) recibió fuerte afirmación (Q4.2.1: 4.5, 90 % de acuerdo) y se considera más práctico que otras evaluaciones; además es más resistente al ghost-writing con GPT que reportes y presentaciones.
- Adopción voluntaria alta de la IA (83 % AI-consultant; 71 % AI-engineering meeting). Utilidad percibida positiva pero más moderada (Q4.3.1: 3.8, 58-59 % de acuerdo).
- Hallazgo inesperado: 29 % de estudiantes se sintió más cómodo preguntando al AI-consultant que a un consultor real (asociado tentativamente a introversión y al temor de "perder la cara" en grupo).
- "Performance expectancy" (expectativa de fiabilidad) fue la principal barrera de adopción; usos de la IA: investigar/verificar información, claridad de explicaciones, superar barreras de idioma y rapidez de respuesta.

## Limitaciones

- Muestra pequeña (clase de 70, 41 respuestas), lo que reduce la precisión de los hallazgos.
- Las encuestas miden la percepción de aprendizaje del estudiante como proxy del aprendizaje real, no el aprendizaje en sí; los estudiantes tienden a sobreestimar su competencia.
- El primer autor era el coordinador de la asignatura, lo que pudo influir en las percepciones reportadas.
- Las tres innovaciones (consultores, viva, IA) son difíciles de desacoplar para aislar el efecto de la IA.
- No se realizó codificación por un segundo evaluador (sin fiabilidad inter-codificador / Krippendorff's Alpha).

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/ingenieria-quimica]]
- [[concepts/tutoria-con-ia]]
- [[concepts/evaluacion-educativa]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/adopcion-de-tecnologia]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/integridad-academica]]
- [[concepts/personalidad-introversion]]
