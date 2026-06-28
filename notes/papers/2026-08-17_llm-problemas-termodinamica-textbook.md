---
title: "Using large language models for solving textbook-style thermodynamic problems"
authors: ["Rébecca Loubet", "Pascal Zittlau", "Luisa Vollmer", "Marco Hoffmann", "Sophie Fellenz", "Fabian Jirasek", "Heike Leitte", "Hans Hasse"]
year: 2026
journal: "Computers and Chemical Engineering"
url: https://doi.org/10.1016/j.compchemeng.2025.109333
doi: 10.1016/j.compchemeng.2025.109333
pdf_local: sources/pdfs/cheme-applications/loubet_2026_llm-textbook-thermo-problems.pdf
type: paper
keywords: [capacidades-de-ia, razonamiento-cuantitativo-llm, inteligencia-artificial, ingenieria-quimica, alucinaciones-de-ia, grafos-de-conocimiento, supervision-humana, evaluacion-educativa]
date_added: 2026-06-27
---

# Uso de grandes modelos de lenguaje para resolver problemas de termodinámica tipo libro de texto

## Resumen

El estudio evalúa empíricamente la capacidad de cinco grandes modelos de lenguaje (LLMs) para resolver problemas de termodinámica de ingeniería del tipo que aparece en libros de texto. Los autores diseñaron un benchmark propio de 22 problemas, divididos en dos conjuntos: 13 problemas "simples" (sistemas cerrados con gas ideal que experimentan un único cambio de estado: isotérmico, isobárico, isocórico, politrópico, adiabático/no adiabático, reversible/irreversible) y 9 problemas "avanzados" (sistemas abiertos y cerrados, procesos multietapa y cíclicos, líquidos y gases, sistemas acoplados, con contribuciones de energía cinética y potencial). Los problemas se redactaron específicamente para el estudio, enteramente en texto y con solución única bien determinada, y se liberan junto con sus soluciones y rúbrica.

Los modelos evaluados fueron GPT-3.5, GPT-4 y GPT-4o (OpenAI), Llama 3.1 70B (Meta) y le Chat / Mistral Large 2 (MistralAI). Cada problema se presentó tres veces de forma independiente a cada modelo para medir la varianza de las respuestas, usando una estrategia de prompting única (tratando al LLM como un estudiante en un examen, con consulta de un solo disparo, sin fine-tuning ni retroalimentación) y los parámetros por defecto de cada modelo. Las respuestas fueron calificadas por expertos humanos entrenados siguiendo una metodología análoga a la corrección de exámenes académicos, otorgando 0,5 puntos por cada paso correcto del camino de solución (no solo por el valor numérico final), con una incertidumbre estimada de la calificación de ±0,5 puntos.

Los resultados muestran un panorama mixto. En los problemas simples los LLMs rinden en general bien (GPT-4 y GPT-4o alcanzan ~87-89% del puntaje máximo; Llama 3.1 y le Chat quedan por debajo, ~73-76%), con un salto notable de GPT-3.5 (46%) a GPT-4. En los problemas avanzados el rendimiento cae drásticamente para todos (~41-55%): rara vez se obtienen soluciones correctas y nunca en las tres repeticiones. Ningún modelo produce resultados consistentes al repetir el mismo problema; la desviación estándar típica es de 20-25% del puntaje máximo (30-50% del puntaje real). Los errores se clasificaron en seis categorías (suposiciones erróneas, errores numéricos, signos inconsistentes, ecuaciones erróneas, confusión de contexto, divagación verbosa): en los problemas simples dominan las suposiciones erróneas (GPT) y los errores numéricos/ecuaciones (Llama, le Chat, que carecen de generación de código especializada); en los avanzados domina la confusión de contexto en todos los modelos.

Los autores concluyen que el enfoque estadístico del modelado del lenguaje tiene dificultades con la interpretación precisa y el razonamiento riguroso que exige la termodinámica. Una prueba preliminar con OpenAI o1-preview (con "cadena de pensamiento") fue el primer modelo en resolver el problema simple 12, pero con resultados inconsistentes entre intentos. Como referencia, discuten KnowTD, un sistema basado en conocimiento construido sobre una ontología que resuelve los problemas simples de forma exacta y trazable mediante un grafo de conocimiento, y proponen la hibridación de LLMs con sistemas basados en conocimiento como vía para lograr fiabilidad.

## Contribuciones principales
- Un benchmark abierto de 22 problemas de termodinámica de ingeniería tipo libro de texto, diseñado a propósito (no extraído estocásticamente de un pool), con cobertura sistemática de combinaciones de procesos y soluciones únicas verificables.
- Evaluación comparativa de cinco LLMs de última generación (GPT-3.5/4/4o, Llama 3.1, le Chat) con tres repeticiones por problema para cuantificar la varianza.
- Una metodología de calificación por expertos basada en el camino de solución (puntaje parcial por paso) en lugar de solo la corrección numérica final.
- Una taxonomía de seis tipos de error y su distribución por modelo y nivel de dificultad.
- Una discusión de la hibridación LLM + sistema basado en conocimiento (KnowTD) como ruta hacia soluciones rigurosas, trazables y explicables.

## Metodología
Construcción de dos conjuntos de problemas (simples y avanzados) con soluciones maestras y rúbricas. Prompting de un solo disparo con un encabezado común (rol de estudiante de examen, formato sin LaTeX), modificado para le Chat y Llama 3.1 para forzar concisión. Acceso vía API, salvo Llama 3.1 (descargado y ejecutado localmente en GPU, modelo de 70·10⁹ parámetros). Parámetros por defecto de cada modelo (temperatura, top_p, presence_penalty). Tres consultas independientes por problema y modelo. Calificación manual por expertos con cruce de revisores, otorgando 0,5 puntos por paso correcto; normalización de puntajes con el máximo de cada problema y cálculo de medias y desviaciones estándar.

## Hallazgos clave
- Los LLMs resuelven bien los problemas simples pero su rendimiento se desploma en los avanzados; nunca producen soluciones correctas en las tres repeticiones de un problema avanzado.
- Alta variabilidad e inconsistencia: el mismo prompt repetido produce respuestas de calidad notablemente distinta (σ ≈ 20-25% del máximo).
- GPT-4 y GPT-4o superan a Llama 3.1 y le Chat en los problemas simples; en los avanzados GPT-4o es el mejor y le Chat se acerca, nivelándose la calidad entre modelos.
- Errores frecuentes: suposiciones inválidas (p. ej., asumir reversibilidad o tratar un líquido como gas ideal cuando no corresponde), confusión de contexto, errores numéricos en los modelos sin generación de código especializada.
- Los modelos a veces usan propiedades de fluidos de fuentes no reveladas en lugar de los datos provistos, y GPT-4/Llama tienden a respuestas verbosas que parafrasean el enunciado sin avanzar.
- GPT-4 y GPT-4o muestran capacidad de autocrítica (revisan y corrigen su propia respuesta); GPT-4o tiende a detenerse cuando no puede continuar en vez de inventar suposiciones.
- KnowTD (sistema basado en conocimiento con ontología y grafo) resuelve todos los problemas simples de forma exacta y explicable, pero no cubre los avanzados por límites de su conocimiento implementado.

## Limitaciones
- La calificación basada en el camino de solución es laboriosa, requiere expertos y conlleva ambigüedad (±0,5 puntos), lo que limita el tamaño del estudio.
- Solo tres repeticiones por problema, por restricciones prácticas de la evaluación manual.
- Se usaron los parámetros por defecto sin variación sistemática; no se hizo fine-tuning.
- Para Llama 3.1 se usó el modelo de 70B y no el de 405B disponible.
- Las pruebas con o1-preview son preliminares (un solo problema, tres corridas).
- Los modelos GPT son cajas negras con información limitada sobre entrenamiento y datos.

## Notas relacionadas
- [[concepts/capacidades-de-ia]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/grafos-de-conocimiento]]
- [[concepts/supervision-humana]]
- [[concepts/evaluacion-educativa]]
