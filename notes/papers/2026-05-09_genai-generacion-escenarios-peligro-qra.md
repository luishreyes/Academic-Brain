---
title: "Generative artificial intelligence (Gen-AI)-driven method for hazard scenario generation in chemical process systems"
authors: [Chen Yang, Tanjin Amin, Zaman Sajid, Faisal Khan]
year: 2026
journal: Process Safety and Environmental Protection
url: https://doi.org/10.1016/j.psep.2026.108977
doi: 10.1016/j.psep.2026.108977
pdf_local: sources/pdfs/cheme-applications/yang_2026_genai-hazard-scenario-generation-qra.pdf
type: paper
keywords: [ingenieria-quimica, inteligencia-artificial, agentes-de-ia, grafos-de-conocimiento, supervision-humana, simulacion-computacional, descubrimiento-cientifico]
date_added: 2026-06-27
---

# Generación de escenarios de peligro en sistemas de proceso químicos mediante IA generativa (Gen-AI)

## Resumen

La generación precisa y exhaustiva de escenarios de peligro es el primer paso del análisis cuantitativo de riesgos (QRA) en la industria de procesos químicos. Los enfoques tradicionales (HAZOP, árboles de fallos, árboles de eventos, bowtie, redes bayesianas) dependen fuertemente de expertos, lo que los hace lentos, costosos y poco escalables; además, los escenarios suelen presentarse en forma descriptiva, con poca información sobre cómo se desarrollan causalmente dentro del sistema. Este trabajo propone un marco que combina IA generativa con conocimiento humano para abordar estas brechas.

El método genera automáticamente nuevos escenarios a partir de diagramas de flujo de proceso (PFD) y escenarios predefinidos, usando una red de isomorfismo de grafos (GIN) como codificador acoplada a un decodificador transformer secuencial (arquitectura graph-to-sequence). El PFD se representa como un grafo dirigido donde los nodos son operaciones unitarias con 14 parámetros (vaporización, fase, presión, temperatura, ignición, confinamiento, toxicidad, etc.) y las aristas indican el flujo de material. Los estados textuales de los nodos se convierten en embeddings mediante el tokenizador y codificador T5 de Google. El escenario de salida se modela como una cadena causal de condiciones parámetro–estado que conecta una condición inicial con una consecuencia final (incendio, explosión o toxicidad).

Posteriormente, expertos humanos verifican y puntúan los escenarios generados (escala 0–5), con pesos asignados mediante el Ordinal Priority Approach (OPA). Así, el marco integra las fortalezas de la generación automática (velocidad, exhaustividad, capacidad de proponer escenarios novedosos) con la validación experta (plausibilidad lógica). El modelo se entrenó con 7600 pares grafo-texto generados por un marco basado en reglas (división 8:1:1: 5985 entrenamiento, 855 validación, 760 prueba).

Dos estudios de caso basados en informes reales de la U.S. Chemical Safety Board (CSB) —la explosión de nube de vapor confinada en CAI Inc. (Danvers, 2006) y el incendio de GLP en la refinería Valero–McKee (Sunray, 2007)— demuestran que el método puede mejorar la robustez de la identificación de peligros y la generación de escenarios. Es una prueba de concepto que establece la viabilidad de integrar aprendizaje sobre grafos y modelado generativo para la construcción estructurada de escenarios de peligro.

## Contribuciones principales

- Introduce la IA generativa (Gen-AI) en el análisis de peligros de procesos (process hazard analysis).
- Combina las fortalezas de la IA y del juicio humano en lugar de depender de uno solo de los dos enfoques.
- Proporciona un medio más rápido y confiable de generación de escenarios, acelerando potencialmente el proceso QRA.
- Permite visualizar múltiples peligros en forma causal (gráfico causal), algo valioso pero generalmente ausente en métodos convencionales como HAZOP.
- Demuestra la capacidad del modelo de generar escenarios de accidente novedosos no presentes en el conjunto de datos ni en la base de conocimiento experta.

## Metodología

Marco integrado humano-IA en cuatro pasos: (1) construcción de una base de datos de escenarios a partir de PFDs y conocimiento de dominio; (2) desarrollo y validación del modelo Gen-AI; (3) generación de escenarios de peligro en forma causal; (4) evaluación y verificación por expertos.

El modelo es un graph-to-sequence: un codificador GIN (con la expresividad del test de isomorfismo de Weisfeiler–Lehman, agregación inyectiva y MLPs) codifica el PFD al espacio latente, y un decodificador transformer autorregresivo genera la secuencia de la cadena causal mediante atención cruzada sobre los embeddings de los nodos. El entrenamiento usa teacher-forcing y pérdida de entropía cruzada. La inferencia emplea beam search para producir un conjunto diverso de escenarios de alta probabilidad (cinco por PFD, ~10 s). La evaluación usa una métrica personalizada de pares causales (precisión, recall, F1) además de BLEU-4 y ROUGE-2. Implementado en PyTorch con Deep Graph Library; entrenamiento de 100 épocas (~1 h 16 min) con AdamW en GPU RTX 4060.

## Hallazgos clave

- El modelo alcanza alto desempeño: F1 promedio ~0.96, BLEU-4 ~0.977 y ROUGE-2 F1 ~0.98 en los conjuntos de entrenamiento, validación y prueba.
- En el caso 1 (explosión de nube de vapor), el escenario correcto recibió la puntuación experta más alta (4.8/5); escenarios alternativos físicamente inconsistentes recibieron puntuaciones bajas, pero algunos representaban cadenas causales coherentes no observadas previamente (capacidad de generación novedosa).
- En el caso 2 (incendio jet en la unidad de desasfaltado con propano), el modelo predijo correctamente el peligro y la vía de evolución; varios escenarios de explosión de nube de vapor por vías distintas resultaron plausibles dado que distribuciones complejas de planta pueden crear confinamiento localizado.
- La verificación experta es esencial porque los modelos generativos aprenden patrones estadísticos, no reglas lógicas explícitas, y pueden producir salidas fluidas pero causalmente incorrectas.

## Limitaciones

- Prueba de concepto con PFDs simplificados y un conjunto reducido de tipos de peligro (incendio, explosión, toxicidad).
- Todos los parámetros se discretizan en estados categóricos, cada uno con un solo estado en un momento dado; no se modelan estados probabilísticos.
- No se consideran explícitamente las variaciones espacio-temporales, el comportamiento termodinámico complejo ni las interacciones dinámicas del proceso; en procesos altamente dinámicos la suposición de estados estáticos limita la representación de mecanismos de escalada temporal.
- Las interacciones entre parámetros se rigen por un marco basado en reglas predefinido, no por modelos físicos detallados.
- Se requieren mejoras adicionales antes de aplicar el marco en la práctica industrial.

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/grafos-de-conocimiento]]
- [[concepts/supervision-humana]]
- [[concepts/simulacion-computacional]]
- [[concepts/descubrimiento-cientifico]]
