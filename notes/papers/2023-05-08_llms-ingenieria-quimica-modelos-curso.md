---
title: "Exploring the use of large language models (LLMs) in chemical engineering education: Building core course problem models with Chat-GPT"
authors: [Meng-Lin Tsai, Chong Wei Ong, Cheng-Liang Chen]
year: 2023
journal: Education for Chemical Engineers
url: https://doi.org/10.1016/j.ece.2023.05.001
doi: 10.1016/j.ece.2023.05.001
pdf_local: sources/pdfs/capability-reliability/tsai_2023_llms-chemeng-core-course-models.pdf
type: paper
keywords: [ingenieria-quimica, educacion-en-ingenieria, inteligencia-artificial, pensamiento-critico, alucinaciones-de-ia, integridad-academica, etica-de-la-ia, regulacion-de-ia]
date_added: 2026-06-27
---

# Exploring the use of large language models (LLMs) in chemical engineering education: Building core course problem models with Chat-GPT

## Resumen

Este estudio, realizado en el Departamento de Ingeniería Química de la National Taiwan University, explora cómo integrar modelos de lenguaje de gran tamaño (LLMs), concretamente Chat-GPT 3.5, como herramienta de resolución de problemas en cursos básicos de ingeniería química. Los autores parten del diagnóstico de que la educación tradicional en ingeniería química privilegia el conocimiento fundamental en el aula pero ofrece pocas oportunidades de resolución práctica de problemas, y de que muchos estudiantes, asistentes docentes y profesores tienen conocimientos limitados de programación. Como respuesta, proponen un procedimiento de resolución de problemas asistido por LLMs en el que el estudiante desarrolla los pasos y formula preguntas (prompts) que el modelo traduce a código (típicamente Python), mientras el estudiante actúa como guía que evalúa, depura y valida los resultados.

El núcleo empírico es un estudio de caso basado en una clase impartida en febrero de 2023 dentro del curso electivo "The Application of AI in Chemical Engineering", con 29 estudiantes (de segundo año a primer año de posgrado). Como ejemplo guía se construye con Chat-GPT un modelo virtual para calcular la eficiencia del ciclo de una planta de vapor (apoyado en la librería CoolProp en lugar de tablas de vapor) y se exploran efectos de variables como temperatura y presión de entrada a la turbina. Tras una tarea abierta, los estudiantes aplicaron el enfoque a termodinámica, transferencia de calor, principios elementales de procesos, fisicoquímica, control de procesos y operaciones unitarias.

El artículo subraya que usar LLMs para construir modelos correctos exige una base sólida de principios de ingeniería, porque el modelo tiende a producir resultados inexactos. A partir del análisis de los proyectos estudiantiles, los autores identifican cinco dificultades y malentendidos recurrentes, y aportan dos ejemplos adicionales (un reactor adiabático en ingeniería de reacciones y la difusión de etanol en un tubo en transferencia de masa) que muestran cómo resolver ecuaciones diferenciales ordinarias y parciales con prompts simples. El trabajo cierra con recomendaciones para universidades, profesores y estudiantes, y con una reflexión sobre riesgos legales y éticos (alucinaciones, regulación tipo EU AI Act, integridad académica), enfatizando que el estudiante debe asumir responsabilidad por los resultados generados y desarrollar pensamiento crítico.

## Contribuciones principales

- Propone un procedimiento concreto de resolución de problemas asistida por LLMs como extensión del enfoque tradicional en ingeniería química, con el estudiante como "guía" y el LLM como "implementador".
- Documenta un estudio de caso real (curso, 29 estudiantes, proyectos y retroalimentación) que enmarca el uso de Chat-GPT como adquisición de competencias de Industria 4.0 y de programación.
- Identifica cinco dificultades y malentendidos comunes al usar LLMs para modelar problemas de cursos básicos, con soluciones prácticas para cada uno.
- Aporta ejemplos reproducibles (planta de vapor, reactor adiabático, difusión de etanol) con prompts y código que cubren ODE/PDE y visualización.

## Metodología

Investigación de tipo estudio de caso educativo con componente práctico. Se diseñó una clase en tres partes (panorama de LLMs, ejemplo paso a paso, ejercicio abierto para llevar a casa) usando Chat-GPT 3.5. Se recopilaron y analizaron cualitativamente los proyectos y la retroalimentación de los estudiantes, clasificando los campos abordados y catalogando complicaciones recurrentes. No es un diseño experimental controlado: la evidencia es descriptiva, basada en observación de proyectos, comentarios estudiantiles y demostraciones de código generado.

## Hallazgos clave

- Chat-GPT generó código bien estructurado y legible, recomendó librerías (CoolProp, Euler, diferencias finitas) y mejoró la eficiencia de resolución, aunque la retroalimentación de los estudiantes fue mixta.
- Cinco dificultades recurrentes: (1) incapacidad de calcular o ejecutar código de forma fiable; (2) errores en conversión de unidades y dimensiones, con riesgo de consecuencias peligrosas; (3) contaminación por errores previos en el mismo hilo de chat (conviene abrir un hilo nuevo); (4) tiempos de espera agotados (timeouts), mitigables fragmentando la tarea; (5) invención de funciones y entradas de base de datos inexistentes (alucinaciones).
- La construcción de modelos con LLMs se considera de menor riesgo académico que la generación de texto, porque exige validación con conocimiento de dominio y reduce la viabilidad del plagio directo.
- Los autores recomiendan que universidades, profesores y estudiantes adopten activamente los LLMs, y que los estudiantes cultiven pensamiento crítico, comprensión de los fundamentos del modelo y responsabilidad sobre los resultados.

## Limitaciones

- Estudio restringido por el periodo de la clase y por la versión usada (Chat-GPT 3.5), un modelo puramente textual sin lectura de diagramas, navegación web, calculadora ni ejecución de código.
- Se centró en problemas pequeños, textuales y fáciles; no aborda problemas grandes, complejos ni dependientes de gráficos o diagramas.
- Evidencia descriptiva y de muestra pequeña (29 estudiantes, un solo curso), sin grupo de control ni medición cuantitativa de aprendizaje.
- No evalúa aplicaciones emergentes mencionadas (GPT-4 multimodal, integración con planificadores de retrosíntesis o calculadoras).

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/inteligencia-artificial]]
- [[concepts/pensamiento-critico]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/integridad-academica]]
- [[concepts/etica-de-la-ia]]
- [[concepts/regulacion-de-ia]]
