---
title: "Optimizing Human–AI Collaboration in Chemistry: A Case Study on Enhancing Generative AI Responses through Prompt Engineering"
authors: [Dinesh V. Vidhani, Manoharan Mariappan]
year: 2024
journal: Chemistry (MDPI)
url: https://doi.org/10.3390/chemistry6040043
doi: 10.3390/chemistry6040043
pdf_local: sources/pdfs/capability-reliability/vidhani_2024_human-ai-ingenieria-de-prompts-chemistry.pdf
type: paper
keywords: [inteligencia-artificial, alucinaciones-de-ia, capacidades-de-ia, supervision-humana, ingenieria-quimica, educacion-superior, evaluacion-educativa, STEM]
date_added: 2026-06-27
---

# Optimizing Human–AI Collaboration in Chemistry: A Case Study on Enhancing Generative AI Responses through Prompt Engineering

## Resumen

El estudio examina cómo la ingeniería de prompts (prompt engineering) puede guiar a ChatGPT-3.5 hacia respuestas confiables y precisas en química general de nivel universitario. Partiendo de la premisa de que la mayoría de los usuarios —especialmente estudiantes— emplean el modelo en su configuración por defecto, los autores evalúan una batería de 30 preguntas de opción múltiple clasificadas según la taxonomía de Bloom (niveles "apply", "understand" y "remember"). En diez exámenes (cinco presentando las 30 preguntas a la vez y cinco de forma secuencial), ChatGPT-3.5 obtuvo un promedio del 62%, un avance notable frente a los puntajes reportados meses antes (18-22%), pero con dificultades concentradas en las preguntas de nivel "apply".

El trabajo demuestra que refinamientos aparentemente menores en la redacción del prompt transforman radicalmente la exactitud del modelo. Técnicas como aportar pistas contextuales, definir explícitamente los símbolos (p. ej. ">" y "<"), enunciar restricciones implícitas (como las reglas de PEMDAS o el orden de operaciones), reemplazar formatos abiertos de "rellenar el espacio" por preguntas directas, calibrar la cantidad de información de contexto y aplicar instrucciones específicas del campo (química) elevaron la precisión, en varios casos, de 1-5 aciertos sobre 10 hasta 10 sobre 10. Un ejemplo emblemático es la sustitución del adjetivo "lowest" por "least", que llevó al modelo del fracaso sistemático al 100% de aciertos, evidenciando cómo la sutileza del lenguaje condiciona la interpretación del modelo.

Los autores enmarcan estos hallazgos en el concepto de inteligencia humano-IA (HAI), en el que la IA complementa la inteligencia humana en lugar de reemplazarla. La elaboración cuidadosa de prompts se presenta como el elemento clave del lado humano de esa colaboración, y la supervisión humana como salvaguarda frente a las alucinaciones y la generación de información incorrecta. El estudio concluye ofreciendo a los educadores una posible hoja de ruta para incorporar ChatGPT al aula de química, reconociendo a la vez las limitaciones persistentes del modelo, sobre todo en tareas de aplicación y cálculo.

## Contribuciones principales

- Documenta empíricamente cómo distintas técnicas de ingeniería de prompts mejoran la exactitud de ChatGPT-3.5 en química general universitaria, con resultados cuantificados (aciertos sobre 10 intentos).
- Muestra que detalles lingüísticos y de formato mínimos (un paréntesis, definir un símbolo, cambiar "lowest" por "least") tienen efectos profundos y a veces decisivos sobre la fiabilidad de las respuestas.
- Vincula los errores con los niveles cognitivos de la taxonomía de Bloom, identificando el nivel "apply" como el más problemático.
- Propone una hoja de ruta práctica para que docentes integren ChatGPT como herramienta instruccional, enmarcada en el paradigma de colaboración humano-IA (HAI).

## Metodología

Estudio de caso con ChatGPT-3.5 (versión gratuita) usando 30 preguntas de opción múltiple de química general I, clasificadas por taxonomía de Bloom. Las preguntas se presentaron de dos modos (todas a la vez vs. secuencialmente), repetidos cinco veces cada uno (diez exámenes). Las preguntas con tasa de error >50% se sometieron a refinamiento iterativo de prompts. Cada prompt refinado se probó en diez iteraciones, comparando la repetición dentro de una misma ventana de contexto frente a ventanas separadas, borrando el historial de chat entre revisiones para aislar el efecto de cada cambio. Se aplicaron controles de fiabilidad (misma condición) y replicabilidad (condiciones distintas). Adicionalmente, se comparó ChatGPT-3.5 con ChatGPT-4.0 sobre el mismo conjunto.

## Hallazgos clave

- ChatGPT-3.5 promedió 62-65% en química general; rindió ligeramente mejor con preguntas presentadas individualmente (65%) que en bloque (60%).
- Los errores se concentraron en preguntas de nivel "apply" de Bloom; el modelo entendía conceptos pero fallaba al aplicarlos a escenarios concretos.
- Aportar contexto y definir símbolos, enunciar restricciones implícitas (PEMDAS, colocación de electrones), evitar formatos de "rellenar el espacio" y dar instrucciones específicas del campo elevaron la precisión, frecuentemente hasta 10/10.
- El exceso de contexto también degrada el rendimiento: eliminar información introductoria innecesaria subió la exactitud de 50% a 100% en un caso.
- Cambiar "lowest" por "least" produjo un salto a 100% de aciertos, revelando la sensibilidad del modelo a matices léxicos.
- Las respuestas fueron consistentes con independencia de repetir el prompt en la misma ventana de contexto o en ventanas separadas: la calidad depende más de la formulación del prompt que del contexto acumulado.
- ChatGPT-4.0 alcanzó 93% (28/30) frente al 65% de ChatGPT-3.5, aunque ambos fallaron en el fotón de menor energía del átomo de hidrógeno de Bohr y en el orden de series isoelectrónicas.

## Limitaciones

- Estudio de caso de un solo curso (química general I) con 30 preguntas; muestra limitada para generalizar.
- Los autores señalan que diez exámenes son insuficientes para una prueba t pareada que determine qué modo de presentación es superior.
- Resultados atados a versiones específicas y fechadas de ChatGPT (3.5 y 4.0, finales de 2023), de validez temporal limitada dada la rápida evolución de los modelos.
- Persisten fallos no resueltos por prompting en cálculos con cifras significativas y en algunos conceptos (transiciones electrónicas, series isoelectrónicas).

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/ingenieria-quimica]]
- [[concepts/educacion-superior]]
- [[concepts/evaluacion-educativa]]
- [[concepts/STEM]]
