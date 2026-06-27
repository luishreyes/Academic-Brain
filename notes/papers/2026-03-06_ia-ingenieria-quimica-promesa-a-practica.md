---
title: "AI in chemical engineering: From promise to practice"
authors: [Jia Wei Chew, Ronnie Andersson, Thomas Bierweiler, Patrik Ryttestal, Torsten Wik]
year: 2026
journal: AIChE Journal
url: https://doi.org/10.1002/aic.70358
doi: 10.1002/aic.70358
pdf_local: sources/pdfs/capability-reliability/chew_2026_ai-chemeng-promise-to-practice.pdf
type: paper
keywords: [inteligencia-artificial, ingenieria-quimica, simulacion-computacional, capacidades-de-ia, regulacion-de-ia, supervision-humana, sostenibilidad, educacion-en-ingenieria, adopcion-de-tecnologia]
date_added: 2026-06-27
---

# AI in chemical engineering: From promise to practice

## Resumen

Esta revisión y artículo de perspectiva, centrado en la industria, sostiene que la inteligencia artificial (IA) en ingeniería química ha pasado "de la promesa a la práctica". Tomando como punto de referencia una perspectiva de 2019 ("¿está aquí, finalmente?"), los autores evalúan los desarrollos técnicos y organizacionales posteriores: los modelos físicamente informados (gray-box / caja gris) ganan terreno, el aprendizaje por refuerzo (RL) complementa al control predictivo basado en modelos (MPC), y la IA generativa potencia la documentación, la digitalización de P&ID/PFD y los flujos de trabajo de seguridad. El valor a corto plazo surge donde la IA *aumenta* —no reemplaza— la práctica de ingeniería de sistemas de proceso (PSE), por ejemplo mediante soft sensing y modelos sustitutos (surrogates).

La tesis central es que el cuello de botella decisivo no es la capacidad algorítmica sino el *despliegue confiable*: los modelos de IA deben tratarse como cualquier otro sistema de ingeniería, con validación, monitoreo y gobernanza. Capacidades como operaciones autónomas, análisis HAZOP totalmente automatizado y descubrimiento mecanicista a gran escala permanecen en etapa de investigación, mientras que el soft sensing, el monitoreo, el modelado híbrido y el soporte a la decisión ya son prácticos. Encuestas recientes confirman la brecha de adopción: el 40% de los encuestados considera la IA poco confiable, el 92% reporta escasez de expertos en IA y solo el 16% alcanzó su objetivo relacionado con IA.

El artículo distingue explícitamente las capacidades "de grado investigación" de las "listas para industria" y ancla sus recomendaciones a marcos regulatorios emergentes (EU AI Act, NIST AI Risk Management Framework). Aborda en detalle el modelado mecanicista y explicable (PINNs, operadores neuronales, SINDy/UDE), el control de procesos en la era del RL (incluyendo el caso real de Yokogawa/JSR con el algoritmo FKDPP operando 35 días de forma autónoma), MLOps para industrias de proceso, análisis de ciclo de vida (LCA) prospectivo asistido por ML, gobernanza/estándares (IEC 61511, IEC 62443, ISO/IEC 42001, AMLAS) y la integración de la IA en la educación en ingeniería química.

La conclusión es optimista pero condicionada: con laboratorios incubadora, benchmarks abiertos y pipelines educativos rediseñados, la IA puede convertirse en un "co-trabajador" seguro, confiable y sostenible en las industrias de proceso en cuestión de años.

## Contribuciones principales

- Síntesis centrada en la industria que vincula los avances recientes de IA con los requisitos prácticos para un despliegue seguro, confiable y escalable, en contraste con revisiones previas enfocadas en algoritmos aislados.
- Marco conceptual sobre el "grayness" (grado de gobernanza física) de los modelos: trade-off entre costo computacional (white-box) y requerimiento de datos (black-box), con el gray-box como punto medio robusto en entornos con datos escasos.
- Distinción explícita entre capacidades de grado investigación y capacidades listas para la industria, anclada a flujos de trabajo reales (control, seguridad, sostenibilidad, educación).
- "Scorecard" que evalúa las predicciones de la perspectiva de 2019 frente a lo que efectivamente se materializó (soft sensing y diagnóstico se volvieron rutina; GenAI superó las expectativas; los modelos híbridos superaron a los puramente black-box).
- Protocolo operacional para MLOps industrial (modo "shadow", capas de seguridad, monitoreo de drift, requalificación por triggers, despliegue CI/CD con artefactos versionados y aprobaciones auditables).

## Metodología

Revisión narrativa y perspectiva, no sistemática. Los autores (academia — Chalmers — junto con Siemens) sintetizan literatura técnica reciente, casos comerciales reportados por proveedores y marcos regulatorios/de estándares. Organizan el análisis en torno a dominios de trabajo de ingeniería reales (GenAI, IA mecanicista/explicable, control con RL, MLOps, LCA, gobernanza y educación) e ilustran con ejemplos comerciales que explícitamente no constituyen respaldos a proveedores específicos.

## Hallazgos clave

- El cuello de botella es el despliegue confiable, no la capacidad algorítmica; los modelos de IA deben gestionarse como ciclos de vida de ingeniería (commissioning, monitoreo, detección de drift, requalificación, redespliegue).
- Los modelos gray-box (físicamente informados) superan a los black-box en entornos con datos escasos y restricciones estrictas, ofreciendo mejor generalización y extrapolación más segura.
- El RL complementa —no reemplaza— al MPC/PID clásico; el "control-informed RL" (que incorpora estructura de control clásica y certificados de estabilidad) es el punto medio pragmático. El despliegue industrial a gran escala sigue siendo limitado.
- La GenAI ya es creíble para copilotos de documentos, digitalización de P&ID/PFD (salida compatible con DEXPI/ISO 15926) y soporte a HAZOP, pero el HAZOP automatizado completo no reemplaza el trabajo experto.
- El consenso industrial es mantener los sistemas de ML como *advisory* o supervisorios, preservando los interlocks de seguridad existentes y el control de cambios con comportamiento fail-safe.
- La gobernanza pasó de opcional a esperada: EU AI Act (en vigor desde el 1 de agosto de 2024, con obligaciones escalonadas 2025–2027) y NIST AI RMF como complemento voluntario.

## Limitaciones

- Es una perspectiva narrativa, no una revisión sistemática; selección de fuentes y casos sujeta a criterio de los autores.
- Varios casos industriales provienen de materiales reportados por proveedores; la validación independiente revisada por pares sigue siendo limitada.
- Coautoría con Siemens (Industrial Copilot, COMOS) implica un posible interés; los autores aclaran que los ejemplos comerciales ilustran capacidades y no son respaldos.
- La integridad y disponibilidad de datos a escala de planta siguen siendo barreras no resueltas (setpoints inconsistentes, intervenciones manuales mal registradas, transferencia laboratorio→industria).

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/capacidades-de-ia]]
- [[concepts/regulacion-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/sostenibilidad]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/adopcion-de-tecnologia]]
