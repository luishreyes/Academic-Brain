---
title: "ChatGMP: A case of AI chatbots in chemical engineering education towards the automation of repetitive tasks"
authors: [Fiammetta Caccavale, Carina L. Gargalo, Julian Kager, Steen Larsen, Krist V. Gernaey, Ulrich Krühne]
year: 2025
journal: "Computers and Education: Artificial Intelligence"
url: https://doi.org/10.1016/j.caeai.2024.100354
doi: 10.1016/j.caeai.2024.100354
pdf_local: sources/pdfs/cheme-applications/caccavale_2025_chatgmp-interview-gmp.pdf
type: paper
keywords: [inteligencia-artificial, tutoria-con-ia, educacion-en-ingenieria, educacion-superior, ingenieria-quimica, alucinaciones-de-ia, generacion-aumentada-por-recuperacion, aprendizaje-activo, supervision-humana]
date_added: 2026-06-27
---

# ChatGMP: A case of AI chatbots in chemical engineering education towards the automation of repetitive tasks

## Resumen

El trabajo presenta ChatGMP, un chatbot basado en un Large Language Model (LLM) preentrenado, integrado al currículo de un curso de maestría sobre Buenas Prácticas de Manufactura (GMP) en la Technical University of Denmark (DTU). El curso incluye un ejercicio de auditoría en el que los estudiantes, en el rol de auditores, interrogan a una empresa farmacéutica ficticia ("Pharma A/S") representada tradicionalmente por los profesores. Los estudiantes deben formular preguntas razonadas para obtener la documentación necesaria y redactar un informe que determine si la empresa cumple las regulaciones. Dado que la auditoría exige que tres profesores realicen entre 7 y 8 entrevistas presenciales cada uno (tarea repetitiva y agotadora que limita el cupo del curso), ChatGMP busca automatizar este proceso.

El sistema reemplaza al profesor como auditado: los estudiantes escriben preguntas y el chatbot responde de forma coherente y muestra documentos relevantes mediante ventanas emergentes. Técnicamente, ChatGMP se construyó a partir de 35 auditorías grabadas en video (semestres de 2022 y 2023), de las que se extrajo audio (MoviePy), se realizó diarización de hablantes (pyannote 3.1), transcripción (Whisper de OpenAI) y curaduría manual para generar un dataset de pares pregunta-respuesta en formato JSON, anonimizado conforme al GDPR. El modelo final fue FLAN-T5 base (elegido frente a T5 y LLaMA 2 por su equilibrio entre desempeño y tiempo de ejecución en una sola GPU local). Mediante prompt engineering e in-context learning con búsqueda semántica por similitud coseno, se recupera la respuesta histórica más parecida y se inyecta como contexto, reduciendo las alucinaciones sin necesidad de fine-tuning.

Para evaluar la iniciativa se comparó el desempeño de ChatGMP con el de los profesores físicos mediante métricas de calidad (BLEU y similitud coseno) y encuestas a estudiantes y profesores. En la edición 2024 del curso, 3 de 21 grupos se ofrecieron voluntariamente a auditar con el chatbot. Las pruebas estadísticas (Mann-Whitney U para RQ1-RQ3 y Chi-cuadrado para RQ4) no encontraron diferencias significativas (p > 0.05) entre los grupos que auditaron con profesor y con ChatGMP, lo que sugiere que ambos accedieron a la misma información y lograron aprendizajes similares.

Los estudiantes que usaron ChatGMP se mostraron satisfechos y recomendarían la herramienta a futuros estudiantes, aunque señalaron limitaciones: tiempo de respuesta lento, interfaz básica, necesidad de formular preguntas muy precisas, respuestas a veces repetidas o incorrectas, y la imposibilidad de comunicación por voz. El experimento se plantea como una primera prueba positiva que abre la discusión sobre cómo usar LLMs en educación sin pretender eliminar al profesor.

## Contribuciones principales
- Presenta ChatGMP, un chatbot de dominio específico que sustituye al profesor en un ejercicio de auditoría GMP en un curso real de maestría.
- Documenta una pipeline reproducible de construcción de dataset a partir de grabaciones de audio (diarización, speech-to-text, curaduría) anonimizada según GDPR.
- Demuestra empíricamente, mediante pruebas estadísticas, que no hay diferencia significativa entre la experiencia de aprendizaje con el chatbot y con los profesores.
- Aporta una discusión balanceada sobre oportunidades (reducir carga docente, ampliar cupo, gamificar) y limitaciones de los LLMs en educación.

## Metodología
Caso de estudio con experimento de campo en un curso de GMP con ~120 estudiantes. Construcción de un dataset de pares pregunta-respuesta desde 35 auditorías grabadas (MoviePy para audio, diarización con pyannote 3.1, transcripción con Whisper, curaduría manual). Modelo FLAN-T5 base preentrenado, con prompt engineering basado en recuperación de contexto por similitud coseno (in-context learning, inferencia zero-shot), desplegado localmente con Flask y front-end en HTML sobre una GPU NVIDIA RTX 2060. Evaluación cuantitativa con BLEU y similitud coseno; evaluación de percepción con encuestas a 3 grupos de estudiantes voluntarios y a los 3 profesores; análisis estadístico con prueba de Mann-Whitney U (RQ1-RQ3) y Chi-cuadrado (RQ4).

## Hallazgos clave
- No hubo diferencia estadísticamente significativa (p > 0.05) entre los grupos auditados por profesor y por ChatGMP en satisfacción, calidad de respuestas y recomendación.
- FLAN-T5 base obtuvo similitud coseno alta (0.68) con menor runtime (19.0 s) frente a LLaMA 2 (0.72 coseno, 38.9 s); BLEU bajo (0.39) atribuido a sinónimos y exclusión de redundancia.
- Los estudiantes accedieron a la misma información y documentos que el grupo control, alcanzando objetivos de aprendizaje equivalentes.
- La percepción de los estudiantes mejoró semanas después de la experiencia respecto a la encuesta inmediata.
- La recuperación de contexto por búsqueda semántica redujo las alucinaciones y evitó el fine-tuning, ahorrando recursos computacionales.

## Limitaciones
- Muestra muy pequeña de grupos voluntarios (3 de 21) y subset reducido de preguntas (N=10) para métricas.
- El chatbot exige preguntas muy precisas; problemas con sinónimos no programados y respuestas repetidas o contradictorias con el alcance documental.
- Tiempo de respuesta lento (~30 s) e interfaz básica; solo comunicación escrita (sin voz), percibida como artificial y estresante por algunos estudiantes.
- Participación voluntaria y posible solapamiento entre las dos encuestas concernientes a ChatGMP, lo que limita la comparabilidad.

## Notas relacionadas
- [[concepts/inteligencia-artificial]]
- [[concepts/tutoria-con-ia]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/educacion-superior]]
- [[concepts/ingenieria-quimica]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/aprendizaje-activo]]
- [[concepts/supervision-humana]]
