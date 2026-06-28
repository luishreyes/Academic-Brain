---
title: "Large Language Models in Computer Science Education: A Systematic Literature Review"
authors: [Nishat Raihan, Mohammed Latif Siddiq, Joanna C. S. Santos, Marcos Zampieri]
year: 2025
journal: "Proceedings of the 56th ACM Technical Symposium on Computer Science Education (SIGCSE TS 2025)"
url: https://doi.org/10.1145/3641554.3701863
doi: 10.1145/3641554.3701863
pdf_local: sources/pdfs/existing-reviews-gapmap/raihan_2025_llm-cs-education.pdf
type: paper
keywords: [educacion-en-programacion, inteligencia-artificial, revision-sistematica-de-literatura, integridad-academica, deteccion-de-texto-ia, retroalimentacion-con-ia, tutoria-con-ia, ingenieria-de-prompts, evaluacion-educativa, adopcion-de-tecnologia]
date_added: 2026-06-28
---

# Large Language Models in Computer Science Education: A Systematic Literature Review

## Resumen

Este trabajo presenta la primera revisión sistemática de literatura (SLR) integral sobre el impacto de los grandes modelos de lenguaje (LLMs) en la educación en ciencias de la computación (CS) e ingeniería de la computación. Siguiendo las directrices de Kitchenham y Charters (2007), los autores parten de 1.735 estudios recuperados de ocho bases de datos (ACM Digital Library, IEEE Xplore, Scopus, ACL Anthology, Web of Science, Springer Link, ScienceDirect y ArXiv) y, tras aplicar criterios estrictos de inclusión/exclusión, analizan en profundidad 125 artículos publicados entre enero de 2019 y junio de 2024.

La revisión se organiza en torno a cinco preguntas de investigación: (RQ1) los niveles educativos en que se usan los LLMs; (RQ2) las subdisciplinas de CS que abordan los estudios; (RQ3) las metodologías de investigación empleadas; (RQ4) los lenguajes de programación más estudiados; y (RQ5) los modelos de lenguaje más utilizados. Los resultados muestran una fuerte concentración en el nivel de pregrado (más del 80% de los trabajos) y en cursos introductorios de programación e introducción a CS (67%), con escasa atención a temas avanzados, a niveles de posgrado/doctorado y a contextos K-12 o profesionales.

Metodológicamente, predominan los estudios de caso/etnografía (38%) y la investigación-acción (24%), con presencia limitada de análisis centrados en datos y de benchmarking de modelos. Python es el lenguaje más estudiado (55% de los artículos), seguido de Java, mientras que JavaScript, C y C++ reciben mucha menos atención. En cuanto a modelos, ChatGPT (principalmente GPT-3.5) domina por su popularidad y bajo costo frente a GPT-4, seguido de GitHub Copilot (Codex); BingAI, BARD/Gemini y modelos afinados para código como StarCoder y CodeBERT aparecen de forma ocasional.

En la discusión, los autores sintetizan cuatro hallazgos transversales: los estudiantes tienen percepciones mayoritariamente positivas (valoran ejemplos y explicaciones claras) pero reportan frustración al formular prompts; los instructores expresan preocupación por la sobredependencia, el aprendizaje superficial y el plagio, e incluso reportan correlación negativa entre uso de LLMs y calificaciones. Los LLMs muestran resultados mixtos: ayudan a resolver problemas introductorios, reparar código y generar ejercicios/MCQs, pero rinden mal en problemas de machine learning y en lenguajes distintos del inglés. La SLR concluye que la mayoría de los currículos de CS aún deben adaptarse a estos avances.

## Contribuciones principales

- Primera revisión sistemática integral del impacto de los LLMs en la educación en CS, que cubre 125 estudios (frente a las 21 referencias de la SLR previa más cercana, centrada solo en programación).
- Mapeo estructurado del campo según cinco dimensiones: niveles educativos, subdisciplinas de CS, metodologías de investigación, lenguajes de programación y modelos de lenguaje.
- Identificación de vacíos de investigación: poca cobertura de temas avanzados, posgrado, K-12, lenguajes no-Python y enfoques de benchmarking/análisis de datos.
- Repositorio público con scripts y datos para reproducibilidad.

## Metodología

Revisión sistemática de literatura (SLR) según las directrices de Kitchenham y Charters (2007), en tres fases (planeación, conducción y reporte). Búsqueda booleana en ocho bases de datos que combina términos de CS/ingeniería de software con "education/teaching" y "LLM/large language model". Cribado en tres etapas (eliminación de duplicados y trabajos fuera de los últimos 5 años; revisión de título, keywords, páginas y abstract; revisión de texto completo) hasta llegar a 125 artículos. La extracción de datos fue realizada por dos autores y revisada por el autor senior.

## Hallazgos clave

- **Niveles educativos (RQ1):** más del 80% de los estudios se centra en pregrado; 15 trabajos en posgrado, solo 4 en doctorado, 2 en K-12 y 1 en contexto profesional.
- **Subdisciplinas (RQ2):** 67% se concentra en introducción a la programación e introducción a CS; la ciencia de datos muestra resultados mixtos y los temas avanzados están subrepresentados.
- **Metodologías (RQ3):** dominan estudios de caso/etnografía (38%) e investigación-acción (24%); poco análisis de datos (14%) y benchmarking (5%).
- **Lenguajes (RQ4):** Python lidera (55%), seguido de Java; JavaScript, C y C++ están desatendidos.
- **Modelos (RQ5):** ChatGPT/GPT-3.5 es el más usado por costo y disponibilidad; GPT-4 se evita a menudo por su precio; modelos afinados para código (StarCoder, CodeBERT) y otros (Claude, Mistral, Falcon, MPT) aparecen marginalmente.
- **Percepciones:** estudiantes mayormente positivos; instructores preocupados por sobredependencia, plagio y posible efecto negativo en el aprendizaje y las calificaciones.
- **Desempeño:** los LLMs ayudan en tareas introductorias y reparación de código, pero fallan en machine learning y en idiomas distintos del inglés (p. ej., bajo desempeño en preguntas de Python en chino).

## Limitaciones

- La ventana de búsqueda (enero 2019 - junio 2024) excluye trabajos posteriores y la mayoría de los estudios analizados anteceden a la difusión de GPT-4, sesgando los hallazgos hacia GPT-3.5.
- Fuerte sesgo del corpus hacia pregrado e introducción a la programación, lo que limita conclusiones sobre niveles avanzados, K-12 y contextos profesionales.
- Predominio de estudios de caso e investigación-acción sobre evidencia cuantitativa o experimental robusta, con benchmarking escaso.
- La síntesis depende de la calidad heterogénea de los estudios primarios y de la extracción manual de datos.

## Notas relacionadas

- [[concepts/educacion-en-programacion]]
- [[concepts/inteligencia-artificial]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/integridad-academica]]
- [[concepts/deteccion-de-texto-ia]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/tutoria-con-ia]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/evaluacion-educativa]]
- [[concepts/adopcion-de-tecnologia]]
