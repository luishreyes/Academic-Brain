---
title: "Performance of ChatGPT on the US fundamentals of engineering exam: Comprehensive assessment of proficiency and potential implications for professional environmental engineering practice"
authors: ["Vinay Pursnani", "Yusuf Sermet", "Musa Kurt", "Ibrahim Demir"]
year: 2023
journal: "Computers and Education: Artificial Intelligence"
url: https://doi.org/10.1016/j.caeai.2023.100183
doi: 10.1016/j.caeai.2023.100183
pdf_local: sources/pdfs/capability-reliability/pursnani_2023_chatgpt-fe-environmental-exam.pdf
type: paper
keywords: [capacidades-de-ia, educacion-en-ingenieria, evaluacion-educativa, integridad-academica, inteligencia-artificial, ingenieria-ambiental, alucinaciones-de-ia, supervision-humana, equidad-educativa]
date_added: 2026-06-27
---

# Desempeño de ChatGPT en el examen estadounidense de Fundamentos de Ingeniería: evaluación de la competencia e implicaciones para la práctica profesional de la ingeniería ambiental

## Resumen

El estudio evalúa la capacidad de ChatGPT (modelo basado en GPT-4) para responder satisfactoriamente el examen de Fundamentos de Ingeniería (FE) Ambiental de Estados Unidos, una certificación administrada por el NCEES que es requisito para obtener la licencia profesional. Sobre un conjunto de 134 preguntas de un examen de práctica curado por la facultad de Ingeniería Civil y Ambiental de la Universidad de Iowa, los autores comparan el rendimiento de distintas iteraciones del modelo (GPT-3.5-Legacy, GPT-3.5-Turbo y GPT-4) y miden el efecto de modificaciones no invasivas del prompt.

El modelo base GPT-4 (variante "no vision", solo texto) alcanzó una exactitud global de 66,42 %. Al aplicar una refinación no invasiva del prompt —un mensaje de sistema que instruye al modelo a explicar su razonamiento y elegir una opción de la lista provista en lugar de generar una respuesta nueva— la exactitud subió a 75,37 %, lo que podría considerarse una nota aprobatoria (dado que solo el 64 % de los participantes aprobó el examen en 2023). La mejora promedio atribuible al refinamiento fue de 8,95 puntos porcentuales, concentrada en secciones con carga matemática (Matemáticas, Economía de la Ingeniería, Química Ambiental) y nula o negativa en secciones textuales como Ética y Práctica Profesional.

El trabajo documenta una mejora sustancial en las capacidades matemáticas entre generaciones de modelos: en las secciones de cálculo intensivo la exactitud ponderada pasó de 41,38 % (GPT-3.5-Legacy) a 86,21 % (GPT-4 refinado). No obstante, los autores subrayan que GPT-4 frecuentemente identifica las fórmulas y conceptos correctos pero falla en los cálculos de múltiples pasos, lo que constituye una limitación crítica para problemas de ingeniería intensivos en cálculo. Detectan además que GPT-3.5 a veces acertaba la opción correcta pese a un razonamiento incorrecto (aciertos fortuitos en preguntas de opción múltiple), lo que cuestiona la fiabilidad del modelo.

La discusión plantea las tensiones del uso de IA en exámenes de licenciamiento: por un lado, ChatGPT puede asistir en la preparación con planes de estudio personalizados y explicaciones detalladas; por otro, el hecho de que una IA de propósito general y sin entrenamiento específico pueda aprobar un examen que valida la credibilidad de futuros ingenieros plantea preocupaciones sobre integridad, rendición de cuentas y validez de la evaluación.

## Contribuciones principales

- Primera evaluación sistemática del rendimiento de ChatGPT en el examen FE Ambiental, llenando un vacío en la literatura sobre IA en ingeniería ambiental.
- Demostración empírica de que modificaciones no invasivas del prompt (mensaje de sistema) mejoran la exactitud de GPT-4 en ~8,95 puntos porcentuales sin alterar el contenido de la pregunta.
- Análisis comparativo de las capacidades matemáticas a través de generaciones de modelos (GPT-3.5-Legacy → GPT-3.5-Turbo → GPT-4).
- Estudio del efecto del parámetro de temperatura sobre la exactitud (óptimo en 0,75 para GPT-3.5-Turbo).
- Agenda de investigación futura sobre integración responsable de IA, accesibilidad e inclusión, y diseño de preguntas "resistentes a IA".

## Metodología

Diseño experimental con dos conjuntos de prueba sobre 134 preguntas (1 de arrastrar y soltar, 11 de completar, resto de opción múltiple). El primer conjunto usó preguntas textuales sin modificar, probadas en GPT-3.5-Legacy, GPT-3.5-Turbo y GPT-4. El segundo aplicó refinamiento no invasivo del prompt solo a GPT-4. Un experimento aparte sobre GPT-3.5-Turbo midió el efecto de distintos valores de temperatura (0 a 1). Se desarrolló una aplicación en Python con la API de OpenAI y un "autograder" (basado en GPT-3.5-turbo, temperatura 0) para validar respuestas contra la clave, con verificación manual posterior. Cada pregunta se consultó en llamadas independientes.

## Hallazgos clave

- GPT-4 base (no vision): 66,42 % de exactitud global; con refinamiento del prompt: 75,37 %.
- Mejor desempeño en Ética y Práctica Profesional, Termodinámica, y Probabilidad y Estadística; peor en Aguas Subterráneas/Suelos y Sedimentos y en Recursos Hídricos Superficiales e Hidrología.
- Capacidad matemática (secciones de cálculo): de 41,38 % (GPT-3.5-Legacy) a 86,21 % (GPT-4 refinado).
- El refinamiento elimina aciertos por azar y obliga a respuestas justificadas, mejorando la corrección real.
- Temperatura óptima de 0,75 para GPT-3.5-Turbo.

## Limitaciones

- El NCEES no publica una nota de corte, por lo que el estudio no puede afirmar con certeza que ChatGPT apruebe o no el examen.
- El conjunto de datos puede no ser representativo de la distribución real de preguntas del examen ni suficientemente grande.
- Probabilidad no nula de que algunas preguntas estuvieran disponibles en línea (p. ej., en Chegg), pese a que el dataset nunca se publicó.
- El modelo "no vision" no puede responder preguntas con elementos visuales (point and click, diagramas con información única).
- Las salidas del modelo son sensibles a la formulación del prompt e intrínsecamente aleatorias, por lo que los números pueden fluctuar al replicar.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/evaluacion-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-ambiental]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/equidad-educativa]]
