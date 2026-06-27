---
title: "GraphRAG for Engineering Diagrams: ChatP&ID Enables LLM Interaction with P&IDs"
authors: [Achmad Anggawirya Alimin, Artur M. Schweidtmann]
year: 2026
journal: arXiv (preprint)
url: https://arxiv.org/abs/2603.18258
doi: 
pdf_local: sources/pdfs/capability-reliability/alimin_2026_chatpid-graphrag-engineering-diagrams.pdf
type: paper
keywords: [inteligencia-artificial, agentes-de-ia, alucinaciones-de-ia, capacidades-de-ia, ingenieria-quimica, grafos-de-conocimiento, generacion-aumentada-por-recuperacion, supervision-humana]
date_added: 2026-06-27
---

# GraphRAG for Engineering Diagrams: ChatP&ID Enables LLM Interaction with P&IDs

## Resumen

Los diagramas de tuberías e instrumentación (P&IDs) son una fuente esencial de información en la ingeniería de procesos, pero interactuar con ellos sigue siendo un cuello de botella por su estructura compleja y su dependencia de flujos de trabajo manuales. Este trabajo (preprint de TU Delft, Process Intelligence Research Group) presenta ChatP&ID, un marco agéntico que permite una interacción en lenguaje natural fundamentada y de bajo costo con P&IDs mediante Graph Retrieval-Augmented Generation (GraphRAG), un paradigma que los autores denominan "GraphRAG para diagramas de ingeniería". Los P&IDs "inteligentes" codificados en el estándar DEXPI se transforman en grafos de conocimiento estructurados (vía la librería abierta pyDEXPI y la base de datos Neo4j), que sirven como base para la recuperación y el razonamiento basados en grafos por parte de agentes LLM.

El argumento central es que procesar imágenes crudas o archivos P&ID inteligentes directamente con LLMs es costoso, ineficiente y propenso a alucinaciones: en un estudio previo, una sola página simple de P&ID requirió más de 150.000 tokens. Frente a esto, ChatP&ID construye tres niveles de abstracción del grafo (completo, de proceso y conceptual), enriquece semánticamente cada nodo con descripciones locales y globales generadas por LLM (GPT-4o) y las proyecta a embeddings (Voyage voyage-3.5-lite, 1024 dimensiones). Sobre ese grafo, el agente (orquestado con LangGraph) selecciona autónomamente entre cuatro herramientas GraphRAG: ContextRAG (contexto textual condensado desde GraphML filtrado), VectorRAG (búsqueda por similitud coseno de nodos), PathRAG (exploración de caminos "localizar y trazar" que imita el razonamiento del ingeniero) y CypherRAG (traducción de lenguaje natural a consultas Cypher validadas por el motor Neo4j).

El benchmarking sobre un P&ID de caso (DEXPIEX01) con un conjunto de 19 preguntas en cuatro categorías (consulta de grafo, exploración de caminos, inferencia de conocimiento y resumen del grafo) muestra que las representaciones basadas en grafos mejoran la exactitud en un 18% frente a entradas de imagen cruda y reducen el costo en tokens en un 85% frente a la ingestión directa de archivos P&ID inteligentes. Aunque los modelos pequeños de código abierto (Llama3.1, Qwen3, GPT-OSS, ejecutados localmente con Ollama) aún tienen dificultades para interpretar formatos de grafo de conocimiento y datos estructurados de ingeniería, integrarlos con VectorRAG y PathRAG mejora la exactitud hasta en un 40%. Destaca que GPT-5-mini combinado con ContextRAG alcanza un 91% de exactitud a un costo de solo 0,004 USD por tarea.

La interfaz ChatP&ID resultante permite interacción intuitiva en lenguaje natural con diagramas de ingeniería complejos, garantizando exactitud, transparencia y trazabilidad de la información recuperada. Los autores la presentan como base para tareas futuras de ingeniería de procesos asistida por IA, como estudios HAZOP (Hazard and Operability) y análisis multiagente.

## Contribuciones principales

- Primera aplicación, según los autores, de GraphRAG a diagramas de ingeniería estructurados como los P&IDs.
- ChatP&ID: marco agéntico (LangGraph + Neo4j) en el que el LLM selecciona e invoca autónomamente herramientas de recuperación sobre el grafo de conocimiento del P&ID.
- Cuatro herramientas GraphRAG complementarias —ContextRAG, VectorRAG, PathRAG, CypherRAG— con modos de operación configurables por el agente.
- Proceso de condensación multinivel del grafo (completo, de proceso, conceptual) y enriquecimiento semántico local/global de nodos derivados de DEXPI vía pyDEXPI.
- Evaluación comparativa amplia entre LLMs comerciales (OpenAI, Anthropic) y abiertos (Ollama) en exactitud, tiempo de cómputo y costo.

## Metodología

P&ID DEXPI convertido con pyDEXPI a un grafo de propiedades etiquetadas (LPG) alojado en Neo4j, con tres niveles de abstracción. Cada nodo se enriquece con semántica local y global (GPT-4o) y se embebe con voyage-3.5-lite. El agente, construido con LangGraph e implementado como interfaz de chat con memoria y streaming de tokens, enruta consultas a las cuatro herramientas GraphRAG. Caso de estudio: P&ID DEXPIEX01; conjunto de 19 pares pregunta-respuesta en cuatro categorías. Líneas base: lectura directa de imagen (base64, 5.485×3.186 px, 330 DPI) y del archivo DEXPI Proteus crudo. Modelos evaluados: OpenAI (GPT-4o/-mini, GPT-5/-mini), Anthropic (Haiku 3.5, Sonnet 3.7, Sonnet 4, Opus 4.1) y modelos Ollama (Llama3.1:8B, Qwen3:4B/8B/14B, GPT-OSS:20B). Evaluación con similitud semántica coseno y LLM-as-a-Judge (GPT-5-mini) con rúbrica de cuatro criterios (relatedness, completeness, correctness, coherence), usando LangSmith.

## Hallazgos clave

- Las representaciones basadas en grafos mejoran la exactitud un 18% frente a entradas de imagen cruda.
- El enfoque por grafo reduce el costo en tokens un 85% frente a la ingestión directa de archivos P&ID inteligentes.
- GPT-5-mini + ContextRAG logra 91% de exactitud a 0,004 USD por tarea.
- Los modelos pequeños de código abierto fallan al interpretar grafos de conocimiento y datos estructurados, pero VectorRAG + PathRAG elevan su exactitud hasta un 40%.
- CypherRAG aporta seguridad: el motor Neo4j rechaza sintaxis malformada o alucinada en lugar de devolver datos incorrectos.
- PathRAG ("localizar y trazar") refleja el flujo cognitivo del ingeniero para responder consultas topológicas (aislamiento, rutas de flujo).

## Limitaciones

- Caso de estudio único y pequeño (DEXPIEX01), con parámetros de exploración acotados (breadth 2, depth 3) por el tamaño del P&ID.
- Cada herramienta se llama una sola vez por test (sin iteración) para evaluar su desempeño aislado, lo que no captura el potencial completo del bucle agéntico.
- Conjunto de evaluación reducido (19 preguntas, dos ejecuciones) para limitar costos; persiste variabilidad estocástica.
- LLM-as-a-Judge puede alucinar al puntuar; se mitiga exigiendo justificación paso a paso, pero introduce dependencia de un evaluador automático.
- Modelos abiertos pequeños siguen siendo poco fiables con formatos de grafo y datos de ingeniería estructurados.
- Requiere que el P&ID exista en formato inteligente DEXPI; la mayoría de P&IDs industriales aún son PDFs o planos físicos.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/ingenieria-quimica]]
- [[concepts/grafos-de-conocimiento]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/supervision-humana]]
