---
title: "Integrating artificial-intelligence assistance into chemical process control education"
authors: ["Zuyi Huang"]
year: 2026
journal: "Education for Chemical Engineers"
url: https://doi.org/10.1016/j.ece.2025.10.002
doi: 10.1016/j.ece.2025.10.002
pdf_local: sources/pdfs/cheme-applications/huang_2026_ai-process-control-education.pdf
type: paper
keywords: [educacion-en-ingenieria, ingenieria-quimica, tutoria-con-ia, inteligencia-artificial, aprendizaje-activo, alfabetizacion-en-ia, pensamiento-critico, simulacion-computacional]
date_added: 2026-06-27
---

# Integrating artificial-intelligence assistance into chemical process control education

## Resumen

El control de procesos químicos es uno de los cursos más exigentes matemáticamente del currículo de ingeniería química: requiere dominar ecuaciones diferenciales ordinarias (EDO), transformadas de Laplace, funciones de transferencia y diseño de controladores PID. En la Universidad de Villanova, Zuyi Huang desarrolló un proyecto piloto que integra asistencia de inteligencia artificial (el chatbot ChatGPT) a lo largo de toda la cadena de modelado y control, organizado en tres módulos: (1) codificación en Python para simulación de EDO, (2) transformadas de Laplace e inversa con estimación de parámetros de funciones de transferencia, y (3) ajuste (tuning) de controladores PID.

El curso siguió un diseño cuasi-flipped classroom: antes de cada sesión los estudiantes recibían videos y handouts que introducían la teoría y demostraban código de ejemplo en Google Colab; el tiempo de clase se dedicaba sobre todo a una breve sesión de preguntas (~10 min) y a aclarar conceptos, mientras que el grueso del trabajo se hacía de forma independiente. Se instruyó a los estudiantes a pedir al modelo de lenguaje que explicara ecuaciones, generara y depurara código Python, e interpretara el significado físico de los modelos. El enfoque evolucionó entre módulos: en el Módulo 1 los estudiantes dependían fuertemente de la IA para aprender desde cero, mientras que en los Módulos 2 y 3 el instructor proporcionó programas de ejemplo que los estudiantes debían adaptar, un andamiaje (scaffolding) que redujo el riesgo de propagar errores de salidas de IA no verificadas.

Cincuenta y nueve estudiantes completaron los tres módulos; 47 respondieron una encuesta anónima de 15 preguntas (13 de escala Likert de cinco puntos y 2 abiertas) que medía la confianza en programación Python, la comprensión del modelado de EDO y conceptos de control, la capacidad de usar herramientas de IA eficazmente y la aplicabilidad percibida a problemas reales. Las medias oscilaron entre 3.28 y 4.36. La calificación más alta (4.36) correspondió a la efectividad del proyecto para mostrar cómo la IA y la programación pueden aplicarse a la ingeniería química, seguida de la disposición a recomendar los módulos (4.23). Las puntuaciones más bajas fueron para la transformada de Laplace (3.36) y la transformada inversa de Laplace (3.28), temas matemáticamente intensivos que requieren más apoyo instruccional.

Los comentarios cualitativos revelan que los estudiantes valoraron la novedad y el desarrollo de habilidades de codificación y exposición a herramientas de IA, pero pidieron instrucciones más claras y mayor orientación. Un desafío recurrente fue la dificultad para juzgar si las salidas de ChatGPT eran correctas, lo que subraya la necesidad de enseñar no solo a consultar la IA de forma efectiva sino a evaluar críticamente sus respuestas.

## Contribuciones principales

- Presenta un enfoque totalmente integrado de educación asistida por IA en control de procesos químicos que abarca toda la cadena modelado–control (EDO, Laplace, funciones de transferencia y ajuste de controladores) en un único marco coherente.
- Combina la programación en Python en Google Colab con estrategias estructuradas de interacción con IA para tender un puente entre conceptos teóricos y aplicaciones prácticas.
- Aporta un diseño instruccional progresivo que desplaza al estudiante desde la dependencia de la IA hacia la modificación y validación de código con andamiaje.

## Metodología

Estudio piloto observacional en el curso de nivel senior CHE4202 Chemical Process Control (Villanova University, primavera 2025). Tres módulos secuenciales con handouts, videos pre-clase y reportes escritos; cada estudiante debía pedir a ChatGPT que generara un problema de aplicación del mundo real para resolverlo. La evaluación combinó la valoración del instructor sobre reportes y programas Python (correctitud de ecuaciones, calidad del código, claridad de gráficos) y una encuesta anónima de 15 preguntas con análisis estadístico descriptivo (media ± desviación estándar).

## Hallazgos clave

- Ganancias moderadas a altas en múltiples objetivos de aprendizaje; media máxima 4.36 (aplicación de IA y programación a la ingeniería química).
- La mayoría de los estudiantes completó las tareas exitosamente; solo cinco de 59 obtuvieron puntajes bajos.
- Temas matemáticamente intensivos (Laplace 3.36, Laplace inversa 3.28) recibieron las puntuaciones más bajas y siguen requiriendo apoyo del instructor.
- La verificación de las salidas de IA fue un punto débil persistente; usar una segunda herramienta (Gemini) como contraste no eliminó las inconsistencias.

## Limitaciones

- Integración limitada a un solo curso y un solo semestre, lo que restringe conclusiones sobre ganancias de aprendizaje de largo plazo o transferencia de habilidades.
- Variabilidad en la experiencia previa de Python afectó el desempeño; estudiantes sin base de codificación avanzaron más lento.
- Estudio sin grupo de control; los resultados se basan en autoevaluación por encuesta y en la evaluación del instructor, no en una medición causal del aprendizaje.

## Notas relacionadas

- [[concepts/educacion-en-ingenieria]]
- [[concepts/ingenieria-quimica]]
- [[concepts/tutoria-con-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/aprendizaje-activo]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/simulacion-computacional]]
