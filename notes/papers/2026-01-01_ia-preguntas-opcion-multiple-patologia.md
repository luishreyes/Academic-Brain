---
title: "Evaluating artificial intelligence-generated multiple-choice questions in clinical pathology"
authors: [A. Aziz Ould Ismail, Weijie Ma, Nancy M. Dunbar, K. Aaron Geno, Jeremiah X. Karrs, Isabella W. Martin]
year: 2026
journal: Academic Pathology
url: https://doi.org/10.1016/j.acpath.2026.100275
doi: 10.1016/j.acpath.2026.100275
pdf_ref: ouldismail-2026-ia-preguntas-patologia.pdf
sha256: dc510462511e5d1ba3275930f80b4179c5fd9a8fe2585b24c5b5d223913d6a8d
type: paper
visibility: public
keywords: [educacion-medica, evaluacion-educativa, capacidades-de-ia, ingenieria-de-prompts, supervision-humana, alucinaciones-de-ia, inteligencia-artificial]
date_added: 2026-07-05
---

# Evaluating artificial intelligence-generated multiple-choice questions in clinical pathology

## Resumen
La generación de ítems de evaluación en patología clínica es lenta y requiere alta pericia, lo que crea cuellos de botella en el desarrollo curricular de la residencia. Este estudio, realizado en el Dartmouth Hitchcock Medical Center durante el año académico 2024–2025, evalúa de forma prospectiva si un LLM puede aliviar esa carga generando preguntas de opción múltiple (MCQ) de calidad. Los autores usaron GPT-4 (vía ChatGPT Pro, con conocimiento limitado a junio de 2024) con un protocolo de prompting estandarizado que pedía viñetas clínicas de ~257 caracteres, cuatro opciones A–D con una única respuesta correcta, paridad de longitud entre opciones para minimizar pistas (cueing) y una justificación breve. Cuando se disponía de fuentes (referencias de subespecialidad, materiales CAP/CLIA), el prompt restringía la generación a esos documentos.

Un total de 260 MCQ generadas por IA en seis subespecialidades (química clínica, hematopatología, microbiología clínica, patología molecular, bioinformática y medicina transfusional) fueron revisadas por 19 educadores de patología usando una rúbrica común que puntuaba claridad y exactitud (escala 1–5) y asignaba una disposición: conservada tal cual, conservada con ediciones, o descartada. De los 260 ítems, 108 (41,5%) se conservaron sin revisión, 86 (33,1%) con ediciones y 66 (25,4%) se descartaron —es decir, casi tres cuartas partes resultaron utilizables tras revisión experta. El rendimiento varió por subespecialidad: la patología molecular alcanzó la mayor retención (60% sin editar), mientras que la microbiología clínica tuvo una tasa de descarte relativamente alta (41,7%).

El estudio posiciona a la IA generativa no como reemplazo del autor de ítems sino como un amplificador de la capacidad experta, ejemplificado por la categoría "conservada con ediciones", donde cayó más de un tercio de los ítems. Modela además un marco pragmático que integra la redacción asistida por IA dentro de una conferencia educativa semanal existente sin añadir carga docente. La conclusión central es que la IA acelera la redacción de borradores estructurados, pero la supervisión experta sostenida es indispensable, sobre todo en dominios donde la precisión y la actualidad son críticas y donde existe riesgo de desalineación con estándares regulatorios (CAP, CLIA, ACGME).

## Contribuciones principales
- Evaluación sistemática y prospectiva (260 ítems, 6 subespecialidades, 19 revisores) de la calidad de MCQ de patología clínica generadas por GPT-4 con un protocolo de prompting estandarizado.
- Marco pragmático de disposición de ítems (conservado tal cual / con ediciones / descartado) ligado a parámetros evaluativos estandarizados (claridad y exactitud), embebido en un flujo docente semanal sin aumentar la carga del profesorado.
- Documentación del rendimiento desigual entre subespecialidades y de los modos de fallo más frecuentes de los ítems generados por IA.

## Metodología
Evaluación prospectiva en un gran centro médico académico. Todos los ítems se produjeron con GPT-4 mediante un prompt uniforme que fijaba formato de viñeta, longitud, cuatro opciones, respuesta única, justificación y diversificación de foco (diagnóstico, métodos, control de calidad, informática/regulación, interpretación). Cada sesión generaba diez ítems. La revisión, en su mayoría por un único experto emparejado por subespecialidad, usó una rúbrica con dos dominios (claridad y exactitud, 1–5) y una disposición ordinal. El análisis combinó estadística descriptiva, pruebas t entre ítems conservados sin revisión y descartados, ANOVA entre subespecialidades, un modelo de regresión ordinal de odds proporcionales (disposición como desenlace ordenado, con claridad y exactitud como predictores) y un análisis temático cualitativo de los comentarios de los revisores con clustering jerárquico de las razones de descarte. Los análisis se hicieron en Python (pandas, scipy, statsmodels).

## Hallazgos clave
- De 260 ítems: 41,5% conservados tal cual, 33,1% con ediciones, 25,4% descartados (≈75% utilizables tras revisión).
- Variación por subespecialidad: patología molecular con la mayor retención (60% sin editar); microbiología clínica con alta tasa de descarte (41,7%).
- Claridad y exactitud medias globales de 4,5 (DE 0,6) y 4,4 (DE 0,9); ambas variaron significativamente por subespecialidad (P < 0,001).
- En la regresión ordinal, cada punto adicional de claridad aumentó un 68% las probabilidades de una disposición favorable (OR 1,68; IC 95% 1,12–2,54; P = 0,013); la exactitud mostró una tendencia no significativa (OR 1,31; P = 0,066).
- Los fallos más frecuentes en los descartes: adecuación educativa (42,4%; sobre todo ítems demasiado fáciles), decisiones estratégicas/curriculares (31,8%; foco educativo incorrecto) y exactitud técnica (21,2%; sobre todo respuestas correctas ausentes y errores factuales).
- Los revisores favorecieron contenido práctico y aplicado sobre la mera memorización de hechos, y señalaron fallos de calibración de dificultad, falta de relevancia para exámenes de junta y desconexión de la práctica de laboratorio real.

## Limitaciones
- Restringido a GPT-4 en 2024–2025; el rendimiento puede diferir con versiones más nuevas o modelos con fine-tuning de dominio, y las salidas son probabilísticas (varían entre ejecuciones).
- Subjetividad de los revisores pese a la rúbrica, con amplia variación de experiencia (de casi 30 años a residentes de 4.º año); algunas subespecialidades quedaron representadas por pocos ítems, generados intencionalmente para atacar brechas de conocimiento, lo que limita la generalización de las comparaciones entre subespecialidades.
- No se evaluaron desenlaces del aprendiz (rendimiento en pruebas, índices de discriminación de ítems, retención a largo plazo), por lo que no se puede afirmar si los ítems son pedagógicamente efectivos.

## Notas relacionadas
- [[concepts/educacion-medica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/capacidades-de-ia]]
- [[concepts/ingenieria-de-prompts]]
- [[concepts/supervision-humana]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/inteligencia-artificial]]
