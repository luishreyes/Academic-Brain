---
title: Testing of detection tools for AI-generated text
authors: [Debora Weber-Wulff, Alla Anohina-Naumeca, Sonja Bjelobaba, Tomáš Foltýnek, Jean Guerrero-Dib, Olumide Popoola, Petr Šigut, Lorna Waddington]
year: 2023
journal: International Journal for Educational Integrity
url: https://doi.org/10.1007/s40979-023-00146-z
doi: 10.1007/s40979-023-00146-z
pdf_local: sources/pdfs/integrity-by-design/weberwulff_2023_testing-detection-tools.pdf
type: paper
keywords: [deteccion-de-texto-ia, integridad-academica, inteligencia-artificial, evaluacion-educativa, educacion-superior, capacidades-de-ia, procesamiento-de-lenguaje-natural]
date_added: 2026-06-28
---

# Testing of detection tools for AI-generated text

## Resumen

El paper evalúa la funcionalidad real de las herramientas que afirman detectar texto generado por IA (en particular por ChatGPT) en el contexto de la integridad académica. Ante la disponibilidad masiva de modelos de lenguaje grandes (LLM) basados en transformers generativos preentrenados (GPT), las instituciones de educación superior han demandado soluciones técnicas para distinguir el trabajo escrito por humanos del producido por IA. Los autores someten a prueba 12 herramientas gratuitas en línea más dos sistemas comerciales ampliamente usados en academia (Turnitin y PlagiarismCheck), para un total de 14 herramientas evaluadas.

La metodología parte de un conjunto documental original de 54 casos de prueba con verdad-base conocida, elaborados por nueve investigadores en siete campos disciplinares. Los documentos se reparten en seis categorías: texto humano (01-Hum), texto humano en otra lengua traducido por máquina al inglés (02-MT), dos conjuntos de texto generado por ChatGPT (03-AI, 04-AI), texto generado por IA con edición manual posterior (05-ManEd) y texto generado por IA reescrito automáticamente con la herramienta de paráfrasis Quillbot (06-Para). Cada uno de los 54 casos se presentó a las 14 herramientas, produciendo 756 pruebas. Como las herramientas no dan una clasificación binaria exacta, los resultados se mapearon a una escala de cinco niveles y la exactitud se calculó con cuatro enfoques distintos (binario, binario inclusivo, semi-binario y logarítmico).

La conclusión central es que las herramientas de detección disponibles no son ni exactas ni confiables. Ninguna superó el 80% de exactitud, y todas (salvo GPT Zero) mostraron un sesgo sistemático a clasificar el texto como humano en lugar de detectar contenido de IA. Turnitin obtuvo el mejor desempeño, seguido de Compilatio y del GPT-2 Output Detector (un detector no entrenado para GPT-3.5). La exactitud cae drásticamente con las técnicas de ofuscación: la traducción automática reduce la precisión en cerca de 20 puntos, la edición manual deja la detección en torno al 50%, y la paráfrasis automática hunde la exactitud a alrededor del 26%, dejando indetectable la mayoría del texto de IA.

El análisis de errores distingue dos tipos de daño en contextos educativos: los falsos positivos (acusaciones injustas a estudiantes honestos) y los falsos negativos (casos no detectados que dan ventaja injusta al estudiante deshonesto). Seis de las 14 herramientas generaron falsos positivos, con riesgo creciente para textos traducidos por máquina; en GPT Zero la mitad de las clasificaciones positivas serían acusaciones falsas, lo que la hace inadecuada para el entorno académico. El sesgo hacia la clasificación "humano" es, según los autores, preferible en educación, pero deja sin resolver el problema de fondo: estas herramientas no deberían usarse como evidencia única para sancionar.

## Contribuciones principales

- Sintetiza el estado del arte científico y no científico en la detección de texto generado por IA (Tablas 1-3).
- Presenta uno de los tests más exhaustivos hasta la fecha, con metodología rigurosa, conjunto documental original y amplia cobertura de herramientas (14, incluidas Turnitin y PlagiarismCheck).
- Cuantifica el impacto de la traducción automática, la edición manual y la paráfrasis automática sobre la exactitud de la detección.
- Discute las implicaciones y limitaciones del uso de estas herramientas en entornos académicos, advirtiendo contra su uso punitivo.

## Metodología

Estudio empírico comparativo. Nueve investigadores prepararon 54 documentos de verdad-base conocida en seis categorías (humano, traducido por máquina, dos de IA, IA con edición manual, IA con paráfrasis automática), con textos nunca expuestos a internet para evitar contaminación de los datos de entrenamiento. Se usó ChatGPT (modelo del 13 de febrero de 2023) como único generador. Cada documento se evaluó en 14 herramientas (756 pruebas, marzo-mayo 2023). Los resultados se clasificaron en una escala de cinco niveles (verdadero/parcial/incierto, positivo/negativo) y la exactitud se calculó con cuatro fórmulas (binaria, binaria inclusiva, semi-binaria y logarítmica). Se midieron además precisión, tasa de falsos positivos (FPR) y tasa de falsos negativos (FNR/recall).

## Hallazgos clave

- Ninguna herramienta superó el 80% de exactitud; el promedio general ronda el 50-60% según el enfoque de cálculo.
- Todas las herramientas (excepto GPT Zero) son más exactas detectando texto humano que texto de IA: hay un sesgo deliberado hacia clasificar como "humano".
- Turnitin fue la mejor en todos los enfoques de exactitud, seguida de Compilatio y del GPT-2 Output Detector.
- La traducción automática del texto humano reduce la exactitud (~20 puntos) e introduce "trazas" que las herramientas confunden con IA.
- La edición manual (patchwriting) deja la detección en ~50%; la paráfrasis automática con Quillbot la reduce a ~26%.
- Content at Scale clasificó erróneamente todos los casos positivos: su sesgo absoluto hacia "humano" lo hace inservible.
- Seis de 14 herramientas produjeron falsos positivos; GPT Zero llega a una FPR del 50%, inadecuada para uso académico.
- Se detectaron problemas de usabilidad (errores de servidor, rechazo de código, reportes "NaN%") atribuibles a la naturaleza beta de las herramientas.

## Limitaciones

- Se usó únicamente ChatGPT (modelo de febrero de 2023) como generador; los resultados pueden no extrapolarse a otros LLM o versiones posteriores.
- El conjunto documental, aunque original y controlado, es relativamente pequeño (54 casos).
- El panorama de herramientas evoluciona rápido: tanto los modelos generadores como los detectores cambian con el tiempo, lo que limita la vigencia de los resultados puntuales.
- Los sistemas comerciales (Turnitin, PlagiarismCheck) sabían que los documentos eran parte de un test y procesaron el documento completo, lo que puede no ser comparable con las herramientas gratuitas.

## Notas relacionadas

- [[concepts/deteccion-de-texto-ia]]
- [[concepts/integridad-academica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/evaluacion-educativa]]
- [[concepts/educacion-superior]]
- [[concepts/capacidades-de-ia]]
- [[concepts/procesamiento-de-lenguaje-natural]]
