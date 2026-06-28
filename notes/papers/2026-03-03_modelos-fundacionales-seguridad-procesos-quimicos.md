---
title: "New Era of AI in Chemical Process Safety: Foundation Models"
authors: [Haoyu Yang, Tylee L. Kareck, Qingsheng Wang]
year: 2026
journal: ACS Chemical Health & Safety
url: https://doi.org/10.1021/acs.chas.5c00227
doi: 10.1021/acs.chas.5c00227
pdf_local: sources/pdfs/cheme-applications/yang_2026_foundation-models-process-safety.pdf
type: paper
keywords: [ingenieria-quimica, inteligencia-artificial, generacion-aumentada-por-recuperacion, vision-por-computadora, alucinaciones-de-ia, seguridad-de-ia, supervision-humana, capacidades-de-ia]
date_added: 2026-06-27
---

# New Era of AI in Chemical Process Safety: Foundation Models

## Resumen

Este Commentary, publicado en *ACS Chemical Health & Safety*, sostiene que la comunidad de seguridad de procesos químicos está entrando en una nueva era impulsada por los modelos fundacionales (foundation models), dejando atrás el aprendizaje profundo específico de tareas e intensivo en etiquetas para adoptar marcos de razonamiento preentrenados y adaptables. Los autores contrastan el paradigma del ML/DL convencional —entrenado desde cero, con grandes conjuntos de datos etiquetados y baja transferibilidad— frente a los modelos fundacionales, que se preentrenan a gran escala y se adaptan mediante prompting, ajuste fino (SFT) o recuperación, ofreciendo razonamiento explícito mediado por lenguaje y mayor auditabilidad.

Desde la perspectiva del lenguaje, los grandes modelos de lenguaje (LLMs) combinados con generación aumentada por recuperación (RAG) permiten operacionalizar la "materia oscura" de los datos industriales no estructurados —narrativas de incidentes, registros de mantenimiento, registros de gestión del cambio (MOC) y procedimientos operativos estándar (SOPs)— convirtiéndolos en salidas enlazadas a evidencia que apoyan el análisis de causa raíz (RCA) auditable y flujos de trabajo semiautomatizados de estudios HAZOP. Los autores enfatizan tratar al LLM no como un oráculo sino como una capa de razonamiento y comunicación deliberadamente restringida y anclada (grounding), apoyada en tres palancas recurrentes: ingeniería de prompts, SFT y RAG.

Desde la perspectiva de la visión, los modelos fundacionales de visión (VFMs) promptables como Segment Anything Model 3 (SAM 3) y los sistemas multimodales (MLLMs) llevan el monitoreo de seguridad más allá de la detección binaria hacia la segmentación semántica y la discriminación contextual. La segmentación a nivel de píxel preserva la morfología de las llamas (forma, continuidad, propagación), permitiendo una caracterización interpretable y consciente de la morfología de amenazas dinámicas como el fuego. Evidencia preliminar sobre el conjunto de datos público FLAME muestra que SAM 3 y un pipeline MLLM basado en Gemma-3-27B-it superan en recall y F1 a detectores de fuego convencionales sin reentrenamiento específico.

Pese a la promesa, los autores advierten que el despliegue en entornos críticos para la seguridad exige escrutinio riguroso. Identifican barreras clave —riesgos de alucinación, deriva ontológica, privacidad y restricciones de gobernanza, así como la inadecuación de los benchmarks genéricos para requisitos de grado ingenieril— y proponen una hoja de ruta centrada en "los datos como infraestructura": supervisión sintética supervisada por expertos, protocolos de evaluación y alineamiento moldeados por el dominio, y flujos híbridos que integran conocimiento físico y capas de validación. La tesis final es que los modelos fundacionales deben concebirse no como tomadores de decisiones autónomos, sino como capas de razonamiento transparentes y conscientes del contexto que empoderan a los expertos humanos.

## Contribuciones principales

- Sintetiza las aplicaciones emergentes de los modelos fundacionales en seguridad de procesos químicos bajo una óptica centrada en la modalidad (lenguaje y visión).
- Propone el uso de RAG con anclaje consciente de la estructura (structure-aware grounding) alineado con ontologías de seguridad, recuperando evidencia como elementos tipados (equipos, desviaciones, causas, consecuencias, salvaguardas, barreras).
- Plantea el HAZOP multimodal como aplicación nativa de los modelos fundacionales y un módulo de IA "advisory-only" (solo asesor) sobre la infraestructura de seguridad existente.
- Formula el principio de "datos como infraestructura" mediante datos sintéticos supervisados por expertos bajo restricciones de confidencialidad.
- Replantea el alineamiento como adherencia a estándares de ingeniería codificados, no como modelado genérico de preferencias humanas.

## Metodología

Es un artículo de tipo *Commentary / Outlook*: revisión narrativa y síntesis conceptual de la literatura emergente, no un estudio empírico. Incluye una comparación tabular entre ML/DL convencional y modelos fundacionales, ejemplos ilustrativos (un reporte de incidente público de la BSEE para RCA) y una evaluación interna ilustrativa sobre el conjunto de datos público FLAME, comparando SAM 3 y un pipeline MLLM basado en Gemma-3-27B-it contra detectores de referencia bajo el mismo protocolo.

## Hallazgos clave

- Los modelos fundacionales transfieren mejor que los modelos específicos de tarea: la baja exactitud de detectores CNN/ViT previos sobre FLAME refleja límites de transferibilidad, no de capacidad arquitectónica.
- SAM 3 y el pipeline MLLM logran mayor recall y F1 que detectores convencionales sin reentrenamiento, con ganancias pronunciadas en llamas pequeñas, parcialmente ocluidas y fondos visualmente abigarrados.
- La distinción entre detección y segmentación es "epistémica": determina si el modelo solo señala un peligro o permite razonar sobre su comportamiento físico y evolución.
- La fluidez de los modelos en entornos críticos es un pasivo, no un activo: la alucinación sigue siendo un riesgo central pese a los mecanismos de anclaje.
- Los pipelines RAG son vulnerables a inyección de prompts y envenenamiento de la recuperación; el monitoreo visual, a manipulación de cámaras e interferencia adversaria/ambiental.

## Limitaciones

- Como Commentary, no aporta validación empírica sistemática; la evaluación sobre FLAME es ilustrativa y restringida a un único conjunto de datos y protocolo.
- Existe una brecha de evaluación: faltan estándares de oro para tareas generativas abiertas (HAZOP, RCA) y métricas a nivel de píxel inadecuadas para fenómenos amorfos como fuego o dispersión de gas.
- Persiste la escasez de datos de seguridad expertos, confidenciales y rara vez etiquetados de forma estandarizada.
- El despliegue de SAM 3 y MLLMs aún requiere validación sistemática por escenario industrial, geometría de cámara y condiciones ambientales.

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/vision-por-computadora]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/seguridad-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/capacidades-de-ia]]
