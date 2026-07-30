---
type: concept
keyword: grafos-de-conocimiento
aliases: [knowledge graph, grafo de conocimiento, labeled property graph, LPG, Neo4j, property graph]
---

# Grafos de conocimiento

Estructuras de datos que representan entidades como nodos y sus relaciones como aristas etiquetadas (property graphs / Neo4j); usadas para modelar dominios estructurados y servir de contexto recuperable a sistemas de IA.

## Qué dice la literatura

Cuatro estudios publicados entre 2025 y 2026 aplican grafos de conocimiento a problemas de ingeniería de procesos con baja tolerancia al error, y dos de ellos forman una progresión explícita de la misma línea de investigación. Alimin, Goldstein, Schulze Balhorn y Schweidtmann (TU Delft, ESCAPE 35, 2025) sientan el pipeline base: convertir P&IDs en formato DEXPI a grafos de propiedades etiquetadas en Neo4j vía pyDEXPI, y consultarlos con LLMs mediante graph-RAG. Su aporte técnico central es la condensación —podar el grafo completo (212 nodos, ~67.000 tokens) a una versión de alto nivel (53 nodos, ~9.000 tokens) sin perder información recuperable, lo que mejora un 20% el reconocimiento de patrones. Un año después, Alimin y Schweidtmann (2026, arXiv) extienden directamente ese trabajo con ChatP&ID: mantienen el mismo pipeline DEXPI→pyDEXPI→Neo4j pero lo convierten en un agente LangGraph con cuatro herramientas de recuperación (ContextRAG, VectorRAG, PathRAG, CypherRAG) y tres niveles de abstracción del grafo. Los números confirman y amplían la promesa del primer paper: las representaciones basadas en grafos superan en 18% la exactitud de leer la imagen cruda del P&ID y reducen el costo en tokens un 85%; GPT-5-mini con ContextRAG llega a 91% de exactitud por 0,004 USD por tarea. En ambos papers, CypherRAG y la validación del motor Neo4j actúan como salvaguarda explícita contra alucinaciones —el grafo no solo aporta contexto sino que rechaza sintaxis inventada.

Yang, Amin, Sajid y Khan (2026) usan grafos de conocimiento de forma distinta pero convergente: no para recuperación sino para generación. Codifican diagramas de flujo de proceso como grafos dirigidos con una red de isomorfismo de grafos (GIN) acoplada a un decodificador transformer (graph-to-sequence), generando cadenas causales de escenarios de peligro para el análisis cuantitativo de riesgos (QRA). El paralelo con los papers de P&ID es metodológico y filosófico: ambos tratan el grafo como la representación fiel del sistema de proceso que un modelo generativo por sí solo no puede inferir de forma confiable, y ambos insertan verificación humana explícita (los autores puntúan escenarios 0–5 con el Ordinal Priority Approach) precisamente porque el modelo "aprende patrones estadísticos, no reglas lógicas explícitas."

Loubet et al. (2026) proveen el contraste que ata el corpus: evalúan LLMs puros, sin grafo, resolviendo problemas de termodinámica y documentan una caída de rendimiento de ~87-89% en problemas simples a 41-55% en avanzados, con alta varianza entre repeticiones idénticas del mismo prompt. Su punto de comparación, KnowTD, es exactamente el tipo de sistema que los otros tres papers construyen: una ontología/grafo de conocimiento que resuelve los problemas simples de forma exacta y trazable, aunque sin cobertura de los avanzados. La conclusión que atraviesa las cuatro notas es la misma: en dominios técnicos de ingeniería de procesos, los LLMs solos son rápidos pero poco fiables, y el grafo de conocimiento —ya sea como fuente de recuperación (P&ID), como espacio de codificación generativa (QRA) o como sistema de referencia externo (termodinámica)— es el mecanismo que se repite para acotar las alucinaciones y anclar las respuestas a la estructura real del proceso.

## Notas que usan este concepto
- [[notes/papers/2025-07-06_talking-like-pids]]
- [[notes/papers/2026-03-25_chatpid-graphrag-diagramas-ingenieria]]
- [[notes/papers/2026-05-09_genai-generacion-escenarios-peligro-qra]]
- [[notes/papers/2026-08-17_llm-problemas-termodinamica-textbook]]
