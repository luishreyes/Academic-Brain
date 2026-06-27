---
title: "Artificial Intelligence Index Report 2025 — Chapter 2: Technical Performance"
author: Stanford HAI
publication: Stanford Institute for Human-Centered Artificial Intelligence (HAI)
date: 2025
url: https://hai.stanford.edu/ai-index/2025-ai-index-report
pdf_local: sources/pdfs/capability-reliability/stanford-hai_2025_ai-index-ch2-technical-performance.pdf
type: article
keywords: [capacidades-de-ia, inteligencia-artificial, agentes-de-ia, geopolitica-tecnologica]
date_added: 2026-06-27
---

# Artificial Intelligence Index Report 2025 — Chapter 2: Technical Performance

## Resumen

El capítulo 2 del AI Index Report 2025 de Stanford HAI ofrece un panorama exhaustivo del avance técnico de la IA durante 2024, organizado en torno a los benchmarks que la comunidad utiliza para medir el progreso. El mensaje central es que los sistemas de IA dominan los benchmarks más rápido que nunca: en pruebas introducidas en 2023 como MMMU, GPQA y SWE-bench, el rendimiento mejoró de forma notable en un solo año (por ejemplo, SWE-bench pasó de resolver 4.4% de los problemas de código en 2023 a 71.7% en 2024). Esta saturación acelerada empuja a los investigadores a proponer evaluaciones cada vez más difíciles, como Humanity's Last Exam (donde el mejor sistema apenas alcanza 8.8%), FrontierMath (2% de problemas resueltos) y BigCodeBench (35.5% frente al estándar humano de 97%).

El informe documenta varias dinámicas de mercado y geopolíticas. Los modelos de pesos abiertos (open-weight) prácticamente cerraron la brecha con los cerrados: la ventaja del mejor modelo cerrado sobre el abierto en Chatbot Arena cayó de 8.04% (enero 2024) a 1.70% (febrero 2025), impulsada por lanzamientos como Llama 3.1 y DeepSeek-V3. La brecha entre modelos estadounidenses y chinos también se redujo drásticamente (en MMLU, MMMU, MATH y HumanEval pasó de 17.5, 13.5, 24.3 y 31.6 puntos a 0.3, 8.1, 1.6 y 3.7 puntos), y el lanzamiento de DeepSeek-R1 —entrenado con una fracción del hardware habitual— sembró dudas sobre la efectividad de los controles de exportación de semiconductores de EE. UU. Además, el rendimiento converge en la frontera: la diferencia entre el primer y el décimo modelo de Chatbot Arena cayó de 11.9% a 5.4%, señal de un mercado más competitivo sin foso tecnológico defensible.

Dos tendencias técnicas destacan. Primero, los modelos más pequeños rinden cada vez más: el modelo más pequeño que supera 60% en MMLU pasó de PaLM (540 mil millones de parámetros, 2022) a Phi-3-mini de Microsoft (3.8 mil millones, 2024), una reducción de 142 veces. Segundo, surgen nuevos paradigmas de razonamiento basados en cómputo en tiempo de inferencia (test-time compute): los modelos o1 y o3 de OpenAI razonan iterativamente sobre sus salidas, con o1 obteniendo 74.4% en un examen clasificatorio de la Olimpiada Internacional de Matemáticas frente al 9.3% de GPT-4o, aunque a costa de ser casi seis veces más caro y treinta veces más lento.

El capítulo advierte limitaciones de fondo. El razonamiento complejo sigue siendo un problema: pese a mecanismos como la cadena de pensamiento, los LLM no resuelven de forma fiable tareas con soluciones demostrablemente correctas (aritmética, planificación), sobre todo en instancias mayores que las vistas en entrenamiento, lo que afecta su confiabilidad en aplicaciones de alto riesgo. Los agentes de IA muestran promesa temprana: en RE-Bench con horizontes cortos (2 horas) superan a expertos humanos cuatro veces, pero con presupuestos de 32 horas los humanos los superan dos a uno. El informe también cuestiona la calidad de los propios benchmarks (contaminación de datos, prompting no estándar, deficiencias metodológicas documentadas en BetterBench) y señala que la era de los benchmarks académicos tradicionales podría estar terminando.

## Puntos clave

- La IA supera benchmarks cada vez más rápido: ganancias de 18.8 y 48.9 puntos en MMMU y GPQA en un año; SWE-bench de 4.4% a 71.7%.
- Los modelos open-weight casi alcanzaron a los cerrados (brecha de 8.04% a 1.70% en Chatbot Arena).
- La brecha entre modelos de EE. UU. y China se redujo drásticamente; DeepSeek-R1 cuestionó la efectividad de los controles de exportación de chips.
- El rendimiento converge en la frontera: más proveedores ofrecen modelos de alta calidad, erosionando el foso tecnológico.
- Modelos más pequeños rinden más: reducción de 142 veces en parámetros para superar 60% en MMLU (PaLM → Phi-3-mini).
- El cómputo en tiempo de inferencia (o1, o3) mejora el razonamiento, pero es mucho más costoso y lento.
- El razonamiento complejo y la planificación siguen siendo poco fiables, con implicaciones para usos de alto riesgo.
- Los agentes de IA destacan en tareas de horizonte corto pero pierden frente a humanos en horizontes largos.
- Los benchmarks mismos sufren saturación, contaminación y deficiencias metodológicas; se proponen pruebas más rigurosas (Humanity's Last Exam, FrontierMath).

## Contexto

El AI Index de Stanford HAI es un informe anual de referencia (no revisado por pares) que sintetiza el estado de la IA con datos cuantitativos. Este capítulo es la fuente canónica para entender qué pueden y qué no pueden hacer los sistemas de IA actuales, y por qué las afirmaciones de capacidad deben leerse con cautela: el propio informe documenta cómo los benchmarks que sustentan esas afirmaciones tienen fallos de diseño, contaminación y reportes inconsistentes. Importa para cualquier discusión sobre la fiabilidad de la IA, su despliegue en contextos críticos y la competencia geopolítica por el liderazgo tecnológico.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/geopolitica-tecnologica]]
