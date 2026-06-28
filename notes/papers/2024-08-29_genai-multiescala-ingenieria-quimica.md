---
title: "Generative artificial intelligence in chemical engineering spans multiple scales"
authors: ["Benjamin Decardi-Nelson", "Abdulelah S. Alshehri", "Fengqi You"]
year: 2024
journal: "Frontiers in Chemical Engineering"
url: https://doi.org/10.3389/fceng.2024.1458156
doi: 10.3389/fceng.2024.1458156
pdf_local: sources/pdfs/cheme-applications/decardinelson_2024_genai-multiscale-cheme.pdf
type: paper
keywords: [inteligencia-artificial, ingenieria-quimica, descubrimiento-cientifico, modelado-molecular, quimica-computacional, simulacion-computacional, agentes-de-ia, proteinas-recombinantes, alucinaciones-de-ia, sostenibilidad]
date_added: 2026-06-27
---

# Generative artificial intelligence in chemical engineering spans multiple scales

## Resumen

Este artículo de perspectiva (Frontiers in Chemical Engineering, 2024) argumenta que la inteligencia artificial generativa (GenAI), en particular los grandes modelos de lenguaje (LLMs), está impactando la ingeniería química a través de múltiples escalas, desde la mecánica cuántica hasta la optimización macroscópica a nivel de empresa. Los autores sostienen que las representaciones textuales de procesos químicos y biológicos pueden tratarse como lenguajes no estructurados codificados, lo que crea un paralelismo con las tareas de procesamiento de lenguaje natural y permite aplicar GenAI más allá del NLP convencional.

Los autores describen el panorama de modelos GenAI grandes: LLMs, modelos grandes de visión-lenguaje (LVLMs) y modelos grandes de decisión (LDMs), construidos sobre arquitecturas de aprendizaje profundo como redes generativas adversarias (GANs), autoencoders, modelos autorregresivos (Transformers), modelos de difusión y modelos de flujo. Cada arquitectura captura patrones de datos distintos y genera nuevas instancias.

A lo largo de las escalas, presentan ejemplos concretos: a nivel cuántico y molecular, GenAI acelera el descubrimiento de productos novedosos (mejora de dureza de nanomateriales en esmalte dental mediante modelos generativos con regresión de imágenes; generación de catalizadores con energías de enlace optimizadas vía autoencoders variacionales informados por DFT; diseño de proteínas funcionales con el modelo de difusión Chroma). A escalas mayores, GenAI mejora el diseño de procesos y la eficiencia operativa, e integrado en plataformas robóticas autónomas (GPT-Lab) puede transformar la planificación y ejecución de experimentos químicos hacia laboratorios autodirigidos. La GenAI interpretable también enriquece la comprensión científica de fenómenos complejos en fluidos e interfaces.

El artículo cierra discutiendo retos y oportunidades: la calidad y disponibilidad de datos de dominio (frecuentemente propietarios, escasos o inconsistentes), la interpretabilidad y la tendencia a alucinar de los modelos, y las implicaciones éticas y regulatorias del despliegue de sistemas autónomos. Los autores proponen colaboración internacional, estándares de representación de datos, plataformas abiertas, benchmarks específicos del dominio y la integración con modelado de primeros principios para mejorar la confiabilidad.

## Contribuciones principales

- Marco conceptual que organiza las aplicaciones de GenAI en ingeniería química a lo largo de cinco escalas: cuántica, molecular, unidad de proceso, planta y empresa.
- Tabla de aplicaciones que asocia disciplinas de ingeniería química (ingeniería biomolecular, análisis ambiental, ingeniería de reacciones, ingeniería de procesos, control de procesos, materia blanda, separaciones, fenómenos de transporte, termodinámica) con técnicas generativas concretas.
- Identificación de áreas prometedoras: modelos fundacionales adaptables a tareas diversas, sistemas multimodales que integran datos heterogéneos y modelos de lenguaje para extracción de conocimiento.

## Metodología

Artículo de perspectiva (no experimental): revisión y síntesis crítica de la literatura reciente sobre GenAI aplicada a la ingeniería química, ilustrada con ejemplos representativos y una tabla de mapeo disciplina-técnica generativa.

## Hallazgos clave

- GenAI es intrínsecamente multiescala en ingeniería química: una misma familia de técnicas generativas sirve desde el diseño molecular hasta la optimización de cadenas de suministro a nivel empresarial.
- Los modelos de difusión (p. ej. Chroma) son especialmente efectivos para el diseño de proteínas y estados de transición; las GANs y autoencoders variacionales destacan en materiales, sensores blandos y estructuras cristalinas.
- La integración de GenAI con plataformas robóticas (GPT-Lab, flujo Analysis-Retrieval-Mining-Feedback-Execution) acerca la autonomía de proceso completo en laboratorios autodirigidos.
- La integración con modelado de primeros principios mejora interpretabilidad y confiabilidad.

## Limitaciones

- Es un artículo de perspectiva con ejemplos ilustrativos limitados, no una revisión sistemática ni un estudio empírico.
- Persisten barreras críticas: datos de dominio escasos/propietarios, falta de interpretabilidad y alucinaciones, y ausencia de benchmarks y métricas específicas para aplicaciones críticas de seguridad.
- Las implicaciones éticas, de privacidad y seguridad del despliegue de sistemas GenAI autónomos quedan sin resolver y requieren marcos regulatorios.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/descubrimiento-cientifico]]
- [[concepts/modelado-molecular]]
- [[concepts/quimica-computacional]]
- [[concepts/simulacion-computacional]]
- [[concepts/agentes-de-ia]]
- [[concepts/proteinas-recombinantes]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/sostenibilidad]]
