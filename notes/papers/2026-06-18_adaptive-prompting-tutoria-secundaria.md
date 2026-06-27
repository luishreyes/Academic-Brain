---
title: "Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring"
authors: [Po-Chin Chang, Nicholas Hogan, Aske Plaat, Michiel T. van der Meer]
year: 2026
journal: "arXiv (preprint)"
url: https://arxiv.org/abs/2606.20138
doi: 10.48550/arXiv.2606.20138
pdf_local: sources/pdfs/chang-2026-adaptive-prompting-tutoria.pdf
type: paper
keywords: [tutoria-con-ia, personalizacion-del-aprendizaje, educacion-k12, inteligencia-artificial, aprendizaje-activo]
date_added: 2026-06-27
---

# Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring

## Resumen
Los LLMs pueden personalizar la educación, pero los sistemas de tutoría con prompts estáticos tienen dificultades para adaptarse a disciplinas académicas diversas. Este trabajo desarrolla y prueba un sistema con prompting consciente de la materia (subject-aware), basado en 14 características pedagógicas (p. ej., andamiaje del tutor, comprensión del estudiante) extraídas de transcripciones reales.

Los autores primero entrenan un modelo de enrutamiento de prompts (prompt routing) en un entorno de simulación y luego lo despliegan para adaptación en línea con estudiantes de secundaria reales. El benchmark de simulación muestra que el enrutador supera a dos líneas base estáticas (0,694 vs. 0,647 y 0,64, p < 0,001). El A/B testing (N = 656 conversaciones de 359 estudiantes) muestra transferencia simulación-a-realidad: el modelo cambia de estrategias analíticas a estrategias de andamiaje.

El mecanismo de selección adaptativa de prompts mejora la eficiencia instruccional, mantiene la calidad pedagógica y reduce las interacciones en ~3 turnos (p = 0,007). Mientras un enrutador "voraz" logra una tasa de conversión de ejercicios comparable a la línea base (19,1 % vs. 19,6 %), un enrutador estocástico que muestrea estrategias alcanza una tasa más alta (28,1 %).

## Contribuciones principales
- Sistema de tutoría con prompting adaptativo consciente de la materia (14 características pedagógicas).
- Modelo de enrutamiento de prompts entrenado en simulación y validado con estudiantes reales (A/B testing).
- Mejora de la eficiencia instruccional y de la tasa de conversión con enrutamiento estocástico.

## Metodología
Entrenamiento de un modelo de enrutamiento de prompts en simulación y despliegue con A/B testing (N = 656 conversaciones, 359 estudiantes de secundaria).

## Hallazgos clave
- El enrutamiento adaptativo supera a los prompts estáticos y reduce ~3 turnos por interacción.
- Un enrutador estocástico mejora la conversión (28,1 % vs. 19,6 % de la línea base).

## Limitaciones
- Validado en un contexto de secundaria específico.
- Dependiente de la calidad de las características pedagógicas extraídas.

## Notas relacionadas
- [[concepts/tutoria-con-ia]]
- [[concepts/personalizacion-del-aprendizaje]]
- [[concepts/educacion-k12]]
- [[concepts/inteligencia-artificial]]
- [[concepts/aprendizaje-activo]]
- [[notes/papers/2025-06-03_tutoria-ia-supera-aprendizaje-activo-rct]]
