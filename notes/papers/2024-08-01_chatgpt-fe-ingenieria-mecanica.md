---
title: "ChatGPT-3.5 and -4.0 and mechanical engineering: Examining performance on the FE mechanical engineering and undergraduate exams"
authors: ["Matthew E. Frenkel", "Hebah Emara"]
year: 2024
journal: Computer Applications in Engineering Education
url: https://onlinelibrary.wiley.com/doi/10.1002/cae.22781
doi: 10.1002/cae.22781
pdf_local: sources/pdfs/capability-reliability/frenkel_2024_chatgpt-mech-eng-fe-exams.pdf
type: paper
keywords: [capacidades-de-ia, educacion-en-ingenieria, evaluacion-educativa, alucinaciones-de-ia, integridad-academica, inteligencia-artificial, pensamiento-critico, STEM, retroalimentacion-con-ia, educacion-superior]
date_added: 2026-06-27
---

# ChatGPT-3.5 y -4.0 e ingeniería mecánica: desempeño en el examen FE de ingeniería mecánica y en exámenes de pregrado

## Resumen
El estudio evalúa empíricamente las capacidades de dos modelos de ChatGPT —la versión gratuita (GPT-3.5, versión del 12 de mayo de 2023) y la versión por suscripción (GPT-4, misma fecha)— respondiendo preguntas de ingeniería mecánica. Los autores usaron un examen de práctica de los Fundamentals of Engineering (FE) en ingeniería mecánica del NCEES, junto con un conjunto de preguntas de cursos de pregrado de nivel 300 (Teoría de Control Automático) y 400 (Transferencia de Calor) de una gran universidad privada.

De las 100 preguntas del examen de práctica FE, solo 47 podían representarse íntegramente en texto (las demás requerían diagramas o figuras que los modelos no podían procesar), distribuidas en formatos de opción múltiple (39), completar espacios (5), emparejamiento (1) y "todas las que apliquen" (2). GPT-4 respondió correctamente 36 de 47 preguntas (76,6%) frente a 24 de 47 (51,1%) de la versión gratuita; GPT-4 fue cerca de 50% más preciso. Ambos modelos cumplieron holgadamente el límite de tiempo del examen (6 horas), pero, dada la limitación de entrada solo de texto y las tasas de acierto observadas, los autores consideran improbable que cualquiera de los dos aprobara el examen FE.

El hallazgo cualitativo central es que ambos modelos cometen errores de aritmética y de conversión de unidades, presentándolos con gran confianza como respuestas correctas. Esto se atribuye a que ChatGPT es un algoritmo predictivo, no una calculadora: predice la respuesta en lugar de ejecutar el cálculo. La confianza con la que presenta respuestas erróneas, su inconsistencia y su tendencia a alucinar hacen que la herramienta sea más adecuada para usuarios con conocimiento experto capaces de verificar sus salidas, y peligrosa para principiantes que podrían aceptar acríticamente respuestas incorrectas.

La última sección ofrece recomendaciones para docentes sobre cómo adaptar la evaluación (problemas técnicos, informes de laboratorio, artículos de investigación, proyectos de diseño y tareas de programación) ante el uso estudiantil de IA generativa, junto con usos productivos de ChatGPT (planes de clase, materiales diferenciados, retroalimentación personalizada, simulaciones).

## Contribuciones principales
- Evaluación comparativa directa GPT-3.5 vs GPT-4 sobre el examen FE de ingeniería mecánica (76,6% vs 51,1% de acierto).
- Análisis cualitativo más allá del acierto/error: tipologías de fallos (aritmética, conversión de unidades, alucinaciones, exceso de confianza, suposiciones inválidas).
- Recomendaciones prácticas para el diseño de evaluaciones resistentes a IA generativa, organizadas por tipo de evaluación (Tabla 6).
- Metodología sin prompt engineering, que imita el uso ingenuo que un estudiante de pregrado haría de la herramienta.

## Metodología
Se adquirió un examen de práctica FE con 100 preguntas y soluciones; se descartaron las que requerían entradas visuales, quedando 47. Cada pregunta se ingresó individualmente como "nuevo chat" en dos cuentas separadas (GPT-3.5 gratuita y GPT-4 de pago), registrando tiempo de respuesta, texto completo y corrección. Las fórmulas complejas se transcribieron en LaTeX. Se hizo análisis posterior de errores y preguntas de seguimiento a GPT-4. El mismo procedimiento se aplicó a 13 preguntas de exámenes de cursos propios de los autores. No se utilizó prompt engineering.

## Hallazgos clave
- GPT-4: 36/47 correctas (76,6%) en ~30 min; versión gratuita: 24/47 (51,1%) en ~24 min.
- GPT-4 igualó o superó a la versión gratuita en casi todas las materias; la única excepción (Mecánica de Materiales) se basaba en una sola pregunta.
- Ambos modelos fallaron sobre todo en preguntas de completar espacios (no podían "redondear" a la opción más cercana como en opción múltiple).
- Errores recurrentes de aritmética y de conversión de unidades, presentados con confianza; p. ej., en un problema de coeficiente de transferencia de calor (respuesta correcta 16,7), GPT-4 respondió 10,2 y la versión gratuita 1,36.
- GPT-4 reconoció con más frecuencia cuándo le faltaba información (tablas, propiedades de materiales) y evitó suposiciones inválidas; aun así produjo desinformación detallada.
- Las tasas de error confirman hallazgos previos de la literatura sobre límites de los LLM en STEM.

## Limitaciones
- Conjunto de datos pequeño (47 preguntas FE textualizables + 13 de curso); varias materias subrepresentadas por requerir visuales.
- Restricción de derechos de autor impide redistribuir el texto de las preguntas; solo se reportan datos agregados.
- Los modelos no aceptaban entrada de imágenes en el momento del estudio, sesgando hacia materias menos visuales.
- Resultados atados a versiones específicas (12 de mayo de 2023) de modelos en rápida evolución.
- No se midió desempeño en generación de informes/código ni se cuantificó la criticidad de los estudiantes ante las respuestas.

## Notas relacionadas
- [[concepts/capacidades-de-ia]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/evaluacion-educativa]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/integridad-academica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/pensamiento-critico]]
- [[concepts/STEM]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/educacion-superior]]
