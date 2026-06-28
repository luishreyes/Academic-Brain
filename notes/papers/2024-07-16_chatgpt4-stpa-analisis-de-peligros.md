---
title: "Hazard analysis in the era of AI: Assessing the usefulness of ChatGPT4 in STPA hazard analysis"
authors: [Stavroula Charalampidou, Apostolos Zeleskidis, Ioannis M. Dokas]
year: 2024
journal: Safety Science
url: https://doi.org/10.1016/j.ssci.2024.106608
doi: 10.1016/j.ssci.2024.106608
pdf_local: sources/pdfs/cheme-applications/charalampidou_2024_chatgpt-stpa-hazard-analysis.pdf
type: paper
keywords: [inteligencia-artificial, capacidades-de-ia, alucinaciones-de-ia, supervision-humana, seguridad-de-procesos, ingenieria-de-sistemas]
date_added: 2026-06-27
---

# Hazard analysis in the era of AI: Assessing the usefulness of ChatGPT4 in STPA hazard analysis

## Resumen

El artículo investiga la utilidad de los grandes modelos de lenguaje (LLM), específicamente ChatGPT-4 de OpenAI, para apoyar el análisis de peligros STPA (Systems Theoretic Process Analysis) en sistemas socio-técnicos. STPA es un método derivado del modelo de accidentes STAMP que permite identificar las circunstancias operativas bajo las cuales los controladores de un sistema pueden ejecutar acciones de control inseguras. Para evaluar al LLM, los autores recrearon con ChatGPT-4 un análisis STPA previamente verificado sobre el sistema ROLFER (Robotic Lifeguard For Emergency Rescue), un dron cuadricóptero autónomo de búsqueda y rescate diseñado para asistir a personas en riesgo de ahogamiento.

El método siguió cinco pasos: describir el sistema al LLM (sin indicarle que actuaría como ingeniero de seguridad), definir las fronteras del análisis (pérdidas, peligros y restricciones de seguridad), generar acciones de control inseguras (UCA), generar escenarios de pérdida y finalmente generar especificaciones de seguridad. Los resultados generados por ChatGPT-4 se compararon con los del equipo humano de seguridad que había aplicado STPA al mismo sistema. El equipo humano había tardado de 4 a 5 semanas (con cuatro reuniones de tres horas con los desarrolladores), mientras que el proceso asistido por LLM se completó en menos de 8 horas, más unas 8 horas de validación.

Los hallazgos muestran un valor desigual. ChatGPT-4 fue beneficioso en la generación de escenarios de pérdida y especificaciones de seguridad, y especialmente en formular preguntas sobre el sistema (generó 35) que ayudaron a los analistas a comprenderlo mejor y a reducir el tiempo de lluvia de ideas y consulta con desarrolladores. Sin embargo, presentó deficiencias graves en la generación de UCA: de 138 UCA producidas, 69 eran incorrectas, carecían de contexto o estaban mal categorizadas (1 de cada 2 no era aceptable), incluyendo 4 alucinaciones sobre información no aportada. El LLM tendió a producir respuestas con patrones repetitivos (parafraseo del prompt, conteos arbitrarios) y su desempeño se deterioró a medida que se alargaba el intercambio de mensajes.

La conclusión central es que ChatGPT-4 no puede usarse como herramienta de validación autónoma de un análisis STPA y sus salidas siempre deben ser verificadas por expertos. No obstante, puede ser una herramienta potente de apoyo: para generar preguntas de comprensión del sistema, hacer lluvia de ideas, producir escenarios de pérdida y especificaciones de seguridad, y detectar UCA o especificaciones duplicadas.

## Contribuciones principales

- Primer estudio que evalúa ChatGPT-4 (frente a trabajos previos con GPT-3/3.5) aplicado de forma detallada a un análisis STPA en un sistema socio-técnico real.
- Modelo paso a paso reproducible (cinco pasos) para conducir las etapas 3 y 4 de STPA con asistencia de un LLM.
- Comparación cuantitativa del tiempo necesario para completar el análisis con y sin LLM (de 4-5 semanas a ~16 horas).
- Caracterización empírica de fortalezas y debilidades del LLM por etapa de STPA, con clasificación de validez de las UCA generadas.

## Metodología

Estudio de caso comparativo. Se aplicaron las etapas 3 (UCA) y 4 (escenarios de pérdida) de STPA al sistema ROLFER usando ChatGPT-4, mediante prompts derivados del manual STPA (Leveson y Thomas, 2018). Los resultados se contrastaron con un análisis STPA humano previamente verificado del mismo sistema (Charalampidou et al., 2020). Las UCA generadas por el LLM se clasificaron en cuatro categorías de validez: correctas, incorrectas, en lugar equivocado, y necesitadas de más contexto.

## Hallazgos clave

- De 138 UCA generadas por ChatGPT-4: 69 correctas, 31 incorrectas, 20 en categoría equivocada y 18 que requerían más contexto; 4 fueron alucinaciones.
- Los analistas humanos generaron 57 UCA; de ellas, 46 fueron también generadas por el LLM en alguna forma. El LLM tendía a condensar varias verificaciones humanas en una sola UCA.
- ChatGPT-4 generó una UCA correcta que los humanos no habían identificado, derivando en una nueva especificación de seguridad válida.
- Los escenarios de pérdida fueron mayormente correctos y útiles; los erróneos eran fáciles de descartar, a diferencia de las UCA erróneas, difíciles de detectar para un analista sin experiencia.
- El desempeño del LLM se degradó con la longitud del intercambio (errores de numeración, ortografía y patrones repetitivos).
- El tiempo total con LLM fue de menos de 8 horas de análisis más ~8 horas de validación, frente a 4-5 semanas del equipo humano.

## Limitaciones

- Estudio de un único sistema (ROLFER) y un único LLM (ChatGPT-4), lo que limita la generalización de la metodología propuesta.
- El conocimiento de ChatGPT-4 estaba limitado a datos hasta septiembre de 2021 y al contexto descrito en el chat; no aprende de la experiencia ni mantiene un contexto extenso.
- La validación dependió de un análisis humano previo tomado como referencia de verdad; no se exploró su uso en sistemas sin análisis previo.
- No se evaluaron otros LLM (Bard, Bing Chat, etc.), señalado como trabajo futuro.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/capacidades-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/seguridad-de-procesos]]
- [[concepts/ingenieria-de-sistemas]]
