---
title: "Can large language models automate the HAZOP process without human intervention?"
authors: ["Junseo Lee", "Sunhwa Park", "Sehyeon Oh", "Byungchol Ma"]
year: 2026
journal: "Safety Science"
url: https://doi.org/10.1016/j.ssci.2025.107039
doi: 10.1016/j.ssci.2025.107039
pdf_local: sources/pdfs/cheme-applications/lee_2026_llm-automate-hazop.pdf
type: paper
keywords: [seguridad-de-procesos, ingenieria-quimica, inteligencia-artificial, capacidades-de-ia, supervision-humana, procesamiento-de-lenguaje-natural]
date_added: 2026-06-27
---

# ¿Pueden los grandes modelos de lenguaje automatizar el proceso HAZOP sin intervención humana?

## Resumen

El estudio investiga si modelos de lenguaje multimodales de última generación (LLMs) pueden ejecutar de forma autónoma el proceso completo de Estudio de Peligros y Operabilidad (HAZOP) sin intervención humana. HAZOP es una herramienta cualitativa de análisis de peligros de proceso (PHA) ampliamente usada en la industria química, tradicionalmente realizada en sesiones de lluvia de ideas dirigidas por expertos, que combinan parámetros de proceso con palabras guía para identificar desviaciones, causas, consecuencias y salvaguardas. Por su alto consumo de tiempo y dependencia de experticia, ha sido objeto de esfuerzos de automatización desde los años 80.

Se evaluaron cuatro LLMs (GPT4o, GPT4o-mini, LLAMA 3.2 y Gemini 2.0) generando hojas de trabajo HAZOP automáticas a partir de un mismo diagrama de tuberías e instrumentación (P&ID), con un prompt estandarizado y minimalista. Las salidas se compararon contra una hoja de referencia preparada por expertos (tomada de *HAZOP: Guide to Best Practice*, Crawley y Tyler, 2015) en dos dimensiones: (1) rendimiento del modelo —similitud mediante métricas BERT (precisión, recall, F1) y costo computacional— y (2) rendimiento HAZOP —validez de los escenarios generados (mediante embeddings BERT, reducción PCA y clustering K-means) y diversidad de salvaguardas (clasificadas en diseño inherentemente seguro/pasivas, activas y procedimentales)—.

Los cuatro modelos lograron alta similitud con la referencia (F1 > 86 %), confirmando capacidad para producir hojas HAZOP con buena fidelidad semántica y contextual. LLAMA fue el más económico (0.011 USD por hoja), mientras que Gemini generó el mayor número de escenarios (34.3 por hoja) y de salvaguardas (1.79 por desviación). Sin embargo, la proporción de escenarios semánticamente válidos fue baja (0.19 a 0.37) y las salvaguardas estuvieron fuertemente sesgadas hacia medidas procedimentales —las menos confiables en la jerarquía de gestión de riesgos—, evidenciando diversidad limitada en estrategias de mitigación.

Los autores concluyen que los LLMs actuales tienen potencial como herramientas asistivas en seguridad de procesos, pero no son aptos para automatización total sin supervisión humana. Recomiendan investigación futura en ingeniería de prompts avanzada, ajuste fino específico de dominio y mejores capacidades de razonamiento, así como descomponer la tarea HAZOP en pasos modulares con prompts y temperaturas dedicados.

## Contribuciones principales

- Primer estudio que evalúa la aplicabilidad de LLMs dentro de la metodología tradicional HAZOP (a diferencia de trabajos previos en STPA, FMEA o FRAM).
- Propone un marco estructurado y reproducible para evaluar LLMs en HAZOP en dos dimensiones: rendimiento del modelo (similitud + costo) y rendimiento HAZOP (validez de escenarios + diversidad de salvaguardas).
- Benchmark comparativo de cuatro LLMs líderes (GPT4o, GPT4o-mini, LLAMA 3.2, Gemini 2.0) bajo condiciones idénticas y prompt estandarizado.
- Esquema de categorización e indexación de salvaguardas (ISD/pasivas, activas, procedimentales) para evaluación cuantitativa de su diversidad.

## Metodología

Flujo de tres pasos: (1) Generación de HAZOP vía LLMs —cada modelo recibe un mismo P&ID, descripción de proceso, procedimientos operativos y guías HAZOP, y genera hojas en formato tabular (Guideword/Effect/Cause/Consequence/Safeguard); se generan 10 hojas por cada valor de temperatura (0.1, 0.5, 1.0), 120 hojas en total. (2) Word embedding —estandarización de términos y conversión a vectores numéricos con BERT. (3) Evaluación —similitud mediante alineación de filas por similitud coseno y métricas BERT (P, R, F1); costo por hoja según políticas de precios de API y hardware (Azure para LLAMA); validez de escenarios mediante PCA + clustering K-means (k=3 por método del codo) y razón de escenarios válidos; validación manual de una submuestra (120 escenarios). Salvaguardas clasificadas según la jerarquía de gestión de riesgos (Baybutt, 2016).

## Hallazgos clave

- Similitud alta y homogénea entre modelos: F1 de 86.7 % (GPT4o), 86.5 % (GPT4o-mini y Gemini), 86.2 % (LLAMA).
- Costo: LLAMA 3.2 el más barato (0.011 USD/hoja, open-source pero exige hardware); GPT4o-mini el más barato entre comerciales; Gemini 2.0 el más caro (0.115 USD) por su procesamiento multimodal.
- Cantidad de escenarios: Gemini lideró (34.3/hoja), seguido de LLAMA (22.4), GPT4o (20.3) y GPT4o-mini (16.4); solo Gemini superó las 25 escenarios de la referencia.
- Validez baja de escenarios (razón de escenarios válidos): GPT4o 37 %, Gemini 33 %, GPT4o-mini 20 %, LLAMA 19 %; existe un trade-off claro entre volumen y relevancia (LLAMA genera mucho pero con baja validez).
- La temperatura afectó principalmente la diversidad lingüística superficial (léxico, fraseo), no el razonamiento lógico estructurado requerido para los escenarios.
- Salvaguardas fuertemente sesgadas hacia medidas procedimentales, las menos robustas; diversidad limitada de estrategias de mitigación.

## Limitaciones

- Proporción baja de escenarios semánticamente válidos (0.19–0.37), insuficiente para aplicación práctica directa.
- Sesgo hacia salvaguardas procedimentales y baja diversidad de medidas de mitigación.
- Uso de un único prompt amplio para toda la hoja, limitando el efecto de la temperatura al plano estilístico.
- Sensibilidad del clustering K-means a outliers; algunos escenarios "inválidos" (p. ej., despresurización en LLAMA) podían ser plausibles pero quedaron fuera por no figurar en la referencia experta.
- Dependencia indispensable de supervisión humana: los LLMs se posicionan como herramientas asistivas, no autónomas.

## Notas relacionadas

- [[concepts/seguridad-de-procesos]]
- [[concepts/ingenieria-quimica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/capacidades-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/procesamiento-de-lenguaje-natural]]
