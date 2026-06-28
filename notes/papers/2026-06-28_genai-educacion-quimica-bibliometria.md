---
title: "Generative AI in Chemical Education: A Bibliometric Perspective"
authors: [Jonghwa Park, Yongin Choi, Kyunghyun Han, Sungyool Bong, Hyuck Jin Lee]
year: 2026
journal: Journal of Chemical Education
url: https://doi.org/10.1021/acs.jchemed.5c01667
doi: 10.1021/acs.jchemed.5c01667
pdf_local: sources/pdfs/existing-reviews-gapmap/park_2026_genai-chemistry-bibliometric.pdf
type: paper
keywords: [inteligencia-artificial, educacion-superior, evaluacion-educativa, integridad-academica, alfabetizacion-en-ia, ingenieria-de-prompts, pensamiento-critico, analisis-bibliometrico]
date_added: 2026-06-28
---

# Generative AI in Chemical Education: A Bibliometric Perspective

## Resumen

Este estudio realiza un análisis bibliométrico exhaustivo del campo emergente de la inteligencia artificial generativa (GenAI) aplicada a la educación química, abarcando la literatura producida desde el lanzamiento público de ChatGPT (finales de 2022) hasta febrero de 2026. Los datos se extrajeron exclusivamente de la Web of Science Core Collection, justificada como una fuente curada, consistente y de alta calidad que evita los problemas de deduplicación y armonización que surgen al combinar varias bases de datos. Tras una búsqueda con cadenas booleanas en títulos, resúmenes y palabras clave de autor, y un cribado conforme al marco PRISMA, se obtuvo un conjunto final de 101 publicaciones para el análisis.

Los resultados muestran un crecimiento explosivo y concentrado de la actividad académica: de 18 artículos en 2023 a 33 en 2024 y 46 en 2025. El *Journal of Chemical Education* se erige como el eje central del campo, con 44 de las publicaciones identificadas y 1163 citas (casi cuatro veces más que la segunda revista). Geográficamente, Estados Unidos domina tanto en volumen de publicación (26 artículos, ~25% del total) como en impacto de citación y centralidad colaborativa, conformando junto a otros centros anglófonos el núcleo de la red internacional; países como China muestran alta productividad pero baja colaboración internacional, atribuida a un ecosistema regulatorio y tecnológico distinto (modelos domésticos como DeepSeek frente a la restricción de ChatGPT).

El análisis de co-ocurrencia de palabras clave (mediante VOSviewer y *total link strength*) revela que GenAI y "undergraduate" son los términos más centrales, situando el discurso predominantemente en la educación superior. Términos como writing, assessment, web-based learning y student-centered learning evidencian un desplazamiento hacia entornos digitales centrados en el estudiante y una presión por rediseñar la evaluación. El clustering identifica cuatro temas: (1) fundamentos tecnológicos en la pedagogía química, (2) evaluación y alfabetización en IA en la química de pregrado, (3) especialización disciplinar y práctica de laboratorio, y (4) innovación curricular y aprendizaje centrado en el estudiante.

Los autores concluyen que la GenAI está evolucionando de herramienta genérica a "colaborador disciplinar", lo que exige repensar cómo se construye y evalúa el conocimiento químico. Proponen líneas futuras de investigación longitudinal, marcos de alfabetización en IA específicos de la química y una colaboración internacional más inclusiva.

## Contribuciones principales
- Primer mapeo bibliométrico comprehensivo del campo GenAI–educación química (2023–feb. 2026), con 101 publicaciones analizadas.
- Identificación del *Journal of Chemical Education* como hub central de producción y citación del campo.
- Caracterización de la estructura geográfica del campo: dominio de EE. UU. y centros anglófonos, con China como nodo productivo pero aislado.
- Tipología de cuatro temas de investigación derivada del análisis de co-ocurrencia de palabras clave.
- Tesis interpretativa de la GenAI como "colaborador disciplinar" más que como herramienta de productividad genérica.

## Metodología
Análisis bibliométrico de mapeo. Recuperación de datos exclusivamente desde Web of Science Core Collection mediante una cadena booleana con truncamientos (chemi*, educat*/teach*, variantes de GenAI/ChatGPT/LLM) en los campos TI (título), AB (resumen) y AK (palabras clave de autor); 146 registros iniciales depurados según PRISMA hasta 101 publicaciones. Estadística descriptiva con Python/Pandas (patrones de publicación, distribución de revistas, citas); redes de coautoría por país y red de co-ocurrencia de palabras clave construida y agrupada en VOSviewer (medida de *association strength*, función de calidad tipo modularidad, *smart local moving algorithm*).

## Hallazgos clave
- Crecimiento explosivo: 18 (2023) → 33 (2024) → 46 (2025) artículos.
- *Journal of Chemical Education*: 44 publicaciones y 1163 citas, núcleo de una estructura centro-periferia.
- EE. UU. lidera en producción (26, ~25%), citas y centralidad colaborativa (TLS = 11); discrepancia productividad/colaboración en China.
- Palabras clave más centrales: GenAI (TLS = 112) y undergraduate (TLS = 109); seguidas de web-based learning, writing, student-centered learning, assessment.
- Cuatro clusters temáticos: fundamentos tecnológicos en pedagogía química; evaluación y alfabetización en IA; especialización disciplinar y laboratorio; innovación curricular y aprendizaje centrado en el estudiante.
- El artículo más citado (Fergus et al., 2023, 227 citas) trata la evaluación crítica de respuestas generadas por ChatGPT.

## Limitaciones
- Fuente de datos única (Web of Science Core Collection); la exclusión de Scopus u otras bases puede limitar la cobertura.
- Análisis basado en metadatos de los artículos, no en el texto completo: no permite examinar el rigor metodológico ni la implementación pedagógica a nivel de estudio.
- Ventana temporal muy reciente y campo en rápida evolución; los datos de 2026 son parciales (hasta febrero).

## Notas relacionadas
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/evaluacion-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/pensamiento-critico]]
- [[concepts/analisis-bibliometrico]]
