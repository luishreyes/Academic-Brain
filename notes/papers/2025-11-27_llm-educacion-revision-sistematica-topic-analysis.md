---
title: "Exploring the Educational Applications of Large Language Models: A Systematic Review and Topic Analysis"
authors: ["Bianca-Raluca Cibu", "Liliana Crăciun", "Anca Gabriela Molănescu", "Liviu-Adrian Cotfas"]
year: 2025
journal: Electronics
url: https://doi.org/10.3390/electronics14234683
doi: 10.3390/electronics14234683
pdf_local: sources/pdfs/existing-reviews-gapmap/cibu_2025_llm-topic-analysis.pdf
type: paper
keywords: [inteligencia-artificial, revision-sistematica-de-literatura, procesamiento-de-lenguaje-natural, educacion-superior, evaluacion-educativa, retroalimentacion-con-ia, integridad-academica, etica-de-la-ia, equidad-educativa, ciencia-de-datos]
date_added: 2026-06-28
---

# Exploring the Educational Applications of Large Language Models: A Systematic Review and Topic Analysis

## Resumen

Este artículo realiza una revisión sistemática de la literatura científica sobre los grandes modelos de lenguaje (LLMs) aplicados a la educación, publicada entre 2023 y 2024. El corpus se extrajo de la Web of Science (WoS) siguiendo el protocolo PRISMA 2020 y comprende 507 documentos provenientes de 322 fuentes. Los autores destacan la velocidad de crecimiento del campo: una tasa de crecimiento anual del 369.66%, con 418 artículos publicados en 2024 frente a solo 89 en 2023, y una media de 15.03 citas por documento que evidencia un impacto científico rápido.

Metodológicamente, el estudio combina técnicas bibliométricas (mapas temáticos, análisis factorial de Keywords Plus y de bigramas de títulos y resúmenes) con dos métodos de modelado de temas: Latent Dirichlet Allocation (LDA), que descubre temas de alto nivel mediante asignación probabilística, y BERTopic, que captura patrones semánticos más profundos a partir de embeddings. El análisis se apoyó en RStudio (Biblioshiny) para la parte bibliométrica y en Python para el modelado de temas.

A partir de la triangulación entre mapas temáticos, LDA y BERTopic, el campo se estructura en cuatro grandes direcciones de investigación: (1) Fundamentos tecnológicos de los LLMs en educación; (2) Impacto en estudiantes, desempeño y resultados de aprendizaje; (3) Calidad del contenido, legibilidad y alfabetización en las salidas de IA; y (4) Ética, personalización y uso responsable de los LLMs. El LDA identificó cuatro temas (el dominante, con 65.7% de los tokens, centrado en aplicaciones de IA generativa centradas en el estudiante), mientras que BERTopic produjo cuatro tópicos dominados por aplicaciones en educación médica, odontológica, oftalmológica y radiológica.

Una observación central es la fuerte presencia de la educación médica y la educación de pacientes en el corpus, interpretada no como un sesgo sino como un terreno de prueba natural para tecnologías emergentes por su base científica sólida, sus requisitos éticos estrictos y su alto grado de estandarización. El estudio también traza una evolución temporal: del entusiasmo tecnológico de 2023 hacia un interés en 2024 por la responsabilidad, la integridad académica, la privacidad de datos y la equidad algorítmica.

## Contribuciones principales

- Mapa exhaustivo y reproducible (PRISMA 2020) del campo de los LLMs en educación para 2023–2024, sobre 507 documentos de la WoS.
- Triangulación metodológica entre mapas temáticos bibliométricos, LDA y BERTopic, mostrando convergencias y solapamientos transversales entre las dimensiones tecnológica, pedagógica, de calidad y ética.
- Estructuración del campo en cuatro direcciones de investigación que sirven de hoja de ruta para investigadores, docentes y responsables de políticas.
- Identificación de brechas de investigación: predominio de estudios descriptivos y de percepciones frente a evaluaciones empíricas rigurosas de eficacia pedagógica; cobertura insuficiente de ética, sostenibilidad digital y formación docente; y colaboración interdisciplinar todavía escasa.

## Metodología

Revisión sistemática conforme a PRISMA 2020 (protocolo registrado en protocols.io). Búsqueda en la WoS Core Collection combinando los términos `large_language_model*` y `education*` en título, resumen y palabras clave de autor. Del filtrado inicial (2227 documentos) se llegó a 507 tras las etapas de identificación, cribado, elegibilidad e inclusión; se excluyeron preprints y conference papers para garantizar un corpus revisado por pares. Sobre el corpus se aplicaron: análisis factorial de Keywords Plus y de bigramas, mapas temáticos (centralidad y densidad), LDA y BERTopic. Adicionalmente se reseñan en detalle los 10 artículos más citados, seleccionados por TC, TCY y NTC.

## Hallazgos clave

- El campo crece de forma acelerada (369.66% anual) con marcada multidisciplinariedad y colaboración internacional (26.04% de coautorías internacionales; media de 4.48 autores por artículo).
- LDA y mapas temáticos convergen en cuatro temas; BERTopic confirma los temas 1–3 pero no genera un cluster ético propio, sugiriendo que las preocupaciones de equidad y sesgo están dispersas y menos concentradas que las aplicaciones concretas (aprendizaje estudiantil, educación de pacientes).
- ChatGPT domina más de la mitad de los estudios; GPT-4 se prefiere para razonamiento complejo y experimentos controlados; Bard/Gemini y LLaMA aparecen en menor medida (capacidades multimodales y personalización local, respectivamente).
- Emergen paradigmas de optimización como la generación aumentada por recuperación (RAG) y la ingeniería de prompts, señal de la maduración del campo hacia integraciones contextualizadas.
- Se documenta evidencia de sesgo racial en evaluaciones generadas por ChatGPT 3.5 y riesgos como la "careless speech", junto con propuestas regulatorias.

## Limitaciones

- Restricción a una única base de datos (WoS) y a artículos revisados por pares en inglés (2023–2024), excluyendo preprints, actas y otros idiomas.
- Periodo muy corto y reciente: aunque ofrece una instantánea actual, limita el análisis de tendencias de largo plazo.
- Predominio de estudios descriptivos y de percepciones en el corpus, con escasez de evaluaciones empíricas rigurosas de eficacia pedagógica.
- Los métodos de modelado de temas dependen de decisiones de preprocesamiento y del número de temas/clusters elegido.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/educacion-superior]]
- [[concepts/evaluacion-educativa]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/integridad-academica]]
- [[concepts/etica-de-la-ia]]
- [[concepts/equidad-educativa]]
- [[concepts/ciencia-de-datos]]
