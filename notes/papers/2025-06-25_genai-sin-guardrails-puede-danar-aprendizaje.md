---
title: "Generative AI without guardrails can harm learning: Evidence from high school mathematics"
authors: [Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kabakcı, Rei Mariman]
year: 2025
journal: Proceedings of the National Academy of Sciences (PNAS)
url: https://doi.org/10.1073/pnas.2422633122
doi: 10.1073/pnas.2422633122
pdf_local: sources/pdfs/learning-impact-evidence/bastani_2025_genai-without-guardrails.pdf
type: paper
keywords: [inteligencia-artificial, equidad-educativa, tutoria-con-ia, ensayo-controlado-aleatorio, educacion-k12, ingenieria-de-prompts, alucinaciones-de-ia, autorregulacion-del-aprendizaje, supervision-humana, evaluacion-educativa, futuro-del-trabajo]
date_added: 2026-06-28
---

# Generative AI without guardrails can harm learning: Evidence from high school mathematics

## Resumen

El paper estudia una pregunta poco explorada sobre la IA generativa: más allá de su efecto sobre la productividad inmediata, ¿cómo afecta el aprendizaje, es decir, la adquisición de habilidades que sostiene la productividad de largo plazo? Los autores realizan un ensayo controlado aleatorio (RCT) de gran escala con cerca de mil estudiantes de secundaria (grados 9 a 11) de un colegio en Turquía, durante el otoño de 2023. Diseñan dos tutores basados en GPT-4 y los comparan contra un grupo de control sin IA: "GPT Base", que imita la interfaz estándar de ChatGPT, y "GPT Tutor", cuyo prompt incorpora salvaguardas (guardrails) diseñadas con docentes —incluye la solución correcta de cada problema para evitar alucinaciones, instrucciones para dar pistas sin revelar la respuesta, y errores comunes de estudiantes con su retroalimentación.

Cada sesión de estudio tiene dos fases. En la fase de práctica asistida, los estudiantes resuelven problemas con los recursos asignados según su brazo aleatorio. En la fase de evaluación, rinden un examen a libro cerrado sin ningún recurso, donde cada problema corresponde conceptualmente a un problema de práctica previo. Los resultados son dobles y contrastantes. Durante la práctica asistida, ambos tutores mejoran sustancialmente el desempeño: 48% para GPT Base y 127% para GPT Tutor frente al control. Sin embargo, en el examen sin asistencia, los estudiantes del brazo GPT Base se desempeñan 17% peor que el control —es decir, el acceso irrestricto a GPT-4 daña el aprendizaje. Este efecto negativo queda esencialmente neutralizado en el brazo GPT Tutor, aunque tampoco produce una mejora positiva sobre el control.

El análisis de mecanismos descarta que el daño provenga principalmente de los errores de GPT Base (que da respuestas correctas solo el 51% de las veces, con 42% de errores lógicos y 8% aritméticos) y apunta en cambio a un efecto "muleta" (crutch): los estudiantes usan GPT Base sobre todo para pedir y copiar soluciones, en lugar de comprometerse con el material. Esto se evidencia en que los errores lógicos de GPT Base afectan la práctica pero no se trasladan al examen (señal de que los alumnos no estaban procesando las soluciones), y en que el patrón de mensajes en GPT Base es superficial ("¿cuál es la respuesta?") mientras que en GPT Tutor los estudiantes interactúan de forma más sustantiva (intentan respuestas, piden ayuda) y aprenden a usarlo mejor con el tiempo.

Un hallazgo adicional preocupante es la disociación entre aprendizaje percibido y real: los estudiantes de GPT Base no perciben haber rendido peor ni aprendido menos, y los de GPT Tutor creen haber rendido mejor pese a no superar al control. Los autores concluyen que el diseño de las herramientas de IA generativa —en particular la elección del prompt— es determinante para preservar el aprendizaje, y advierten sobre el uso ya extendido de ChatGPT por estudiantes fuera del aula sin salvaguardas.

## Contribuciones principales

- Evidencia causal de campo (RCT preregistrado, ~1.000 estudiantes) de que el acceso irrestricto a IA generativa puede perjudicar el aprendizaje, no solo dejar de mejorarlo.
- Demostración de que el diseño del prompt (guardrails con solución embebida, pistas en lugar de respuestas, errores comunes) mitiga casi por completo el efecto negativo sobre el examen sin asistencia.
- Distinción empírica entre el efecto de productividad inmediata (mejora en la práctica asistida) y el efecto sobre la adquisición de habilidades (medido en el examen sin asistencia).
- Identificación del mecanismo "muleta": los estudiantes usan la IA estándar para copiar soluciones en lugar de aprender, frente al uso más sustantivo del tutor con salvaguardas.

## Metodología

Ensayo controlado aleatorio con asignación a nivel de aula a tres brazos (control, GPT Base, GPT Tutor) en cuatro sesiones de 90 minutos que cubrieron ~15% del currículo de matemáticas del semestre. Cada sesión tuvo tres partes: clase del docente, práctica asistida (única parte afectada por la intervención) y examen sin asistencia con problemas pareados a los de práctica. Calificadores independientes evaluaron con rúbrica para reducir sesgo docente. El análisis principal usa regresiones intention-to-treat con efectos fijos (sesión, calificador, grado, profesor) y errores estándar agrupados por aula; se preregistró el examen sin asistencia como análisis primario. Se complementa con una especificación a nivel de problema, cuantificación de la tasa de error de GPT Base (10 consultas por problema en 57 problemas) y clustering por NLP de los mensajes de los estudiantes.

## Hallazgos clave

- Práctica asistida: +48% (GPT Base) y +127% (GPT Tutor) sobre el control.
- Examen sin asistencia: −17% para GPT Base frente al control; GPT Tutor estadísticamente indistinguible del control (coeficiente un orden de magnitud menor).
- GPT Base acierta solo 51% de las veces (42% errores lógicos, 8% aritméticos); GPT Tutor evita errores al tener la solución en el prompt.
- Los errores lógicos de GPT Base afectan la práctica pero no se trasladan al examen pareado → consistente con copiado, no con aprendizaje confundido por errores.
- Ambos tutores reducen la dispersión de notas (HHI) en la práctica (mayor beneficio para los más débiles), pero esta reducción de la brecha no persiste en el examen.
- Disociación entre aprendizaje percibido y real en ambos brazos de IA.

## Limitaciones

- Contexto único: dos diseños de tutor, una sola materia (matemáticas, con criterios de evaluación objetivos no disponibles en otras áreas como escritura) y un solo colegio en Turquía.
- Despliegue en otoño de 2023, cuando la IA generativa era muy nueva; los modos de interacción y la capacidad de los modelos han cambiado desde entonces.
- Se miden resultados de corto plazo (desempeño en el examen) y no de largo plazo, por limitaciones del colegio asociado.
- **Corrección formal:** este artículo recibió una corrección/erratum posterior publicada por PNAS (DOI 10.1073/pnas.2518204122; el PDF original lleva la marca "SEE CORRECTION FOR THIS ARTICLE"). Conviene consultar la corrección al citar cifras o detalles específicos.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/equidad-educativa]]
- [[concepts/tutoria-con-ia]]
- [[concepts/ensayo-controlado-aleatorio]]
- [[concepts/educacion-k12]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/supervision-humana]]
- [[concepts/evaluacion-educativa]]
- [[concepts/futuro-del-trabajo]]
