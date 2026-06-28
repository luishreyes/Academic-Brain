---
title: "MetaCLASS: Metacognitive Coaching for Learning with Adaptive Self-regulation Support"
authors: [Naiming Liu, Shashank Sonkar, Richard Baraniuk]
year: 2026
journal: arXiv preprint (arXiv:2602.02762)
url: https://arxiv.org/abs/2602.02762
doi:
pdf_local: sources/pdfs/scaffolding-socratic-metacognition/liu_2026_metaclass_arxiv.pdf
type: paper
keywords: [tutoria-con-ia, autorregulacion-del-aprendizaje, psicologia-educativa, capacidades-de-ia, razonamiento-cuantitativo-llm, retroalimentacion-con-ia, sobredependencia-de-la-ia, aprendizaje-activo]
date_added: 2026-06-28
---

# MetaCLASS: Metacognitive Coaching for Learning with Adaptive Self-regulation Support

## Resumen

Los grandes modelos de lenguaje (LLMs) generan explicaciones fluidas, pero una tutoría efectiva exige apoyar el *proceso de pensamiento* del estudiante, no solo entregar contenido correcto. MetaCLASS es un marco fundamentado en las ciencias del aprendizaje que reformula la tutoría con IA como un problema de *selección de movimientos* (move selection) sobre un espacio de 11 acciones interpretables alineadas con los procesos de aprendizaje autorregulado (SRL): planificación, monitoreo, depuración (debugging) y evaluación. La idea central es que la tutoría metacognitiva no consiste en intervenir constantemente, sino en decidir *cuándo* intervenir y *cuándo* permanecer en silencio para preservar el "fracaso productivo" del estudiante; por eso el marco trata "No_intervention" (silencio) como una acción pedagógica de primera clase.

El sistema usa una arquitectura de dos fases. La Fase 1 (planificación pedagógica) construye una trayectoria condicionada a perfiles de estudiante modelados en dos dimensiones ortogonales —calibración (sobreconfiado, subconfiado, bien calibrado) y búsqueda de ayuda (evasivo, ejecutivo, dependiente)— más un análisis del problema (brechas de conocimiento, estrategia, monitoreo y ejecución). Cada evento de la trayectoria se estructura como una cadena Evento → Señal → Movimiento → Efecto. La Fase 2 genera el diálogo estudiante-coach respetando estrictamente ese plan, de modo que el lenguaje suene natural pero la lógica pedagógica quede fija. Con GPT-5.1 se generó un dataset de 1.015 conversaciones (7.711 turnos) sobre los datasets matemáticos GSM8K, MATH y AIME, anotado a nivel de turno y validado en contingencia del scaffolding (97,3%) y adherencia a la trayectoria (99,8%).

El aporte empírico clave es el benchmark de *Coach Move Prediction*: dado un problema y el historial de diálogo, el modelo debe predecir el siguiente movimiento metacognitivo óptimo. Sobre nueve LLMs open-source, el mejor (Qwen3-80b-Think) alcanza solo 43,2% de exactitud, muy por debajo de su competencia documentada en tutoría basada en contenido. El hallazgo más crítico es un *sesgo de intervención compulsiva*: aunque el silencio (NI) es la etiqueta verdadera más frecuente (41,7% de los casos), los modelos lo predicen apenas el 4,2% de las veces (sesgo de −37,5 puntos), y sobreproducen movimientos de alta intervención.

El paper concluye que saber explicar no equivale a saber tutorar metacognitivamente: el ajuste estándar por instrucción (instruction-tuning) genera patrones de intervención profundamente arraigados que el prompting no logra anular. Los modelos actuales producen entre 8 y 10 veces más intervenciones de las apropiadas, lo que entrena a los estudiantes a esperar pistas en lugar de desarrollar habilidades transferibles de planificación, monitoreo y depuración. MetaCLASS se posiciona como un banco de pruebas para desarrollar tutores que fomenten la autorregulación en lugar de premiar la mera capacidad de respuesta.

## Contribuciones principales

- **Marco MetaCLASS:** primer marco fundamentado en ciencias del aprendizaje para tutoría metacognitiva con LLMs, que operacionaliza el Metacognitive Awareness Inventory (MAI) en 11 movimientos de coach interpretables y los mapea sistemáticamente a las fases de razonamiento internas de los LLMs (DEFINE, BLOOM, CYCLE, FINAL). Trata No_intervention como acción pedagógica de primera clase.
- **Dataset y análisis:** 1.015 conversaciones de coaching metacognitivo (7.711 turnos) sobre GSM8K, MATH y AIME, anotadas a nivel de turno con movimientos del coach y perfiles de estudiante (calibración, búsqueda de ayuda), con validación rigurosa de calidad pedagógica (contingencia y adherencia a trayectoria).
- **Benchmark y hallazgos:** la tarea Coach Move Prediction sobre nueve LLMs revela un sesgo de intervención compulsiva que el prompt explícito no corrige, evidenciando una brecha fundamental entre generar explicaciones y ejecutar coaching metacognitivo.

## Metodología

Diseño en dos fases. **Fase 1 (planificación):** modelado del estudiante en dos dimensiones (calibración × búsqueda de ayuda, generando 8 perfiles válidos), análisis del problema en cuatro tipos de brecha, generación de estructuras de soporte metacognitivo por factor MAI, y construcción de una trayectoria como secuencia de cadenas Evento → Señal → Movimiento → Efecto. **Fase 2 (generación de diálogo):** un LLM (GPT-5.1) genera la conversación estudiante-coach respetando el plan. El sistema de ayuda entrega pistas (de contenido o de scaffolding) solo cuando el estudiante las solicita explícitamente. **Evaluación:** benchmark de predicción del siguiente movimiento (espacio de 11 acciones), medido por exactitud agregada y por movimiento, más una tasa de detección de NI; se comparan prompts Full (con definiciones y guías) vs. Minimal (solo nombres de movimientos) sobre nueve LLMs open-source de cuatro familias.

## Hallazgos clave

- El mejor modelo alcanza solo 43,2% de exactitud en predicción de movimientos; la competencia en tutoría de contenido no se transfiere a la tutoría metacognitiva.
- **Sesgo de intervención compulsiva:** NI es la etiqueta más común (41,7%) pero se predice solo 4,2% de las veces (sesgo −37,5); los modelos sobrepredicen movimientos de alta intervención (p. ej., REFLECT_OUTCOME, +19,3).
- Los modelos con razonamiento ("thinking") detectan NI 5× mejor que los instruction-tuned (29,0% vs. 5,7%), pero aun así intervienen en más del 70% de los casos donde el silencio es apropiado.
- Los prompts Full superan consistentemente a los Minimal: los LLMs carecen de capacidad metacognitiva inherente y no despliegan estrategias de coaching efectivas sin instrucciones detalladas.
- Patrones de confusión: los movimientos de depuración se clasifican erróneamente como monitoreo (59%); SA/RS se confunden con verificación de consistencia (CC); PROMPT_RESOURCE es casi invisible (9% de exactitud), dejando a estudiantes evasivos sin la intervención adecuada.
- Los modelos producen entre 8 y 10 veces más intervenciones de las apropiadas, sesgo invisible para las métricas estándar de utilidad o satisfacción.

## Limitaciones

- Es un benchmark diagnóstico limitado a la selección de movimientos en diálogos de resolución de problemas matemáticos (GSM8K, MATH, AIME); prioriza interpretabilidad y evaluación controlada sobre amplitud de dominios y modalidades.
- Usa un único movimiento objetivo derivado de una trayectoria pedagógica explícita; contextos que admiten varios movimientos pedagógicamente razonables no reciben crédito bajo el emparejamiento estricto.
- Los resultados deben interpretarse como evidencia de la capacidad actual de los LLMs para seguir políticas de intervención metacognitiva fundamentadas en teoría, bajo un entorno controlado.

## Notas relacionadas

- [[concepts/tutoria-con-ia]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/psicologia-educativa]]
- [[concepts/capacidades-de-ia]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/sobredependencia-de-la-ia]]
- [[concepts/aprendizaje-activo]]
