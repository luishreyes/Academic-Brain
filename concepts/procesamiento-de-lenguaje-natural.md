---
type: concept
keyword: procesamiento-de-lenguaje-natural
aliases: [natural language processing, NLP, PLN, word embeddings, BERT, text embeddings]
---

# Procesamiento de lenguaje natural

Campo de la IA que permite a las máquinas analizar, interpretar y generar lenguaje humano; incluye embeddings (BERT, Word2Vec, TF-IDF), clasificación y clustering de texto, y modelos de lenguaje.

## Qué dice la literatura

A nivel de mecanismo, los detectores de texto generado por IA son clasificadores binarios entrenados o calibrados sobre una señal estadística concreta: la perplejidad, es decir, cuán predecible resulta la siguiente palabra para un modelo de lenguaje de referencia. Weber-Wulff et al. (2023) prueban 14 de estas herramientas como sistemas de clasificación puros —sin mirar aún a quién clasifican— y muestran que su exactitud (ninguna supera 80%) colapsa ante perturbaciones adversariales del texto: la paráfrasis automática con Quillbot la hunde a ~26%. Liang et al. (2023) identifican el mecanismo causal exacto: los detectores dependen de la perplejidad, y basta pedirle a ChatGPT que "eleve" el registro léxico de un texto para desplazar su perplejidad y evadir la detección casi por completo. Al Ali, Helcl y Libovický (2026) llevan el análisis técnico un paso más allá construyendo ellos mismos tres familias de detectores para checo —un clasificador clásico (Naïve Bayes sobre características TF-IDF), un transformer afinado (RobeCzech) y un sistema comercial de caja negra— y midiendo directamente la correlación entre entropía y salida del detector (|ρ| ≤ 0.2): encuentran que los detectores contemporáneos ya no dependen sustancialmente de la perplejidad, y que la propia estimación de entropía es sensible a la elección del modelo de referencia (Llama 3.2 1B en vez de GPT-2, que rinde mal en checo por su morfología).

El modelado automatizado de tópicos revela otra capa del mecanismo: cómo el PLN estructura un corpus sin intervención humana directa. Cibu et al. (2025) triangulan dos técnicas de naturaleza distinta —LDA, que asigna documentos a temas mediante distribuciones probabilísticas de palabras (bag-of-words), y BERTopic, que agrupa por similitud semántica en un espacio de embeddings— sobre 507 papers: ambas convergen en tres de cuatro temas, pero BERTopic no aísla un clúster ético propio, evidencia de que el "significado" que captura un modelo basado en embeddings no es idéntico al que captura un modelo basado en co-ocurrencia léxica. La misma lógica de embeddings-más-clustering aparece como instrumento metodológico en otras notas: Yang et al. (2026) vectorizan respuestas abiertas de encuesta con embeddings de OpenAI (3072 dimensiones), reducen con UMAP y agrupan con HDBSCAN, dejando que un LLM etiquete los clústeres resultantes; Lee et al. (2026) usan embeddings BERT para alinear y puntuar por similitud coseno hojas HAZOP generadas por IA frente a una referencia experta, y PCA + K-means para juzgar la validez semántica de los escenarios generados (con tasas de validez de apenas 19-37%); Prilop et al. (2025) combinan un modelo de análisis de sentimiento preentrenado (Asent) con un LLM (Llama 3.1 8b) como apoyo al análisis temático cualitativo.

Finalmente, el propio mecanismo generativo —predicción del siguiente token— deja huellas medibles en el texto producido. Kerche, Zook y Graham (2026) describen el "sesgo de patrón" como consecuencia directa de que el motor de LLMs optimiza por la continuación estadísticamente modal, mecánicamente reforzando regularidades léxicas del corpus de entrenamiento. Kosmyna et al. (2025) observan esa misma huella empíricamente en los ensayos del grupo que escribió con ChatGPT: mediante reconocimiento de entidades nombradas, n-gramas y ontología de temas encuentran una homogeneidad marcada entre ensayos, convergentes hacia la respuesta "por defecto" del modelo — el rastro lingüístico directo del mecanismo autorregresivo, no ya su efecto cognitivo (cubierto en otro concepto).

## Notas que usan este concepto
- [[notes/papers/2026-06-27_llm-automatizan-hazop]]
- [[notes/papers/2025-11-27_llm-educacion-revision-sistematica-topic-analysis]]
- [[notes/papers/2026-06-28_genai-formadores-docentes-triada-ai-literacy]]
- [[notes/papers/2026-05-27_barreras-multinivel-adopcion-genai]]
- [[notes/papers/2023-06-28_testing-detection-tools-ai-text]]
- [[notes/papers/2026-03-26_sesgo-detectores-gpt-no-nativos-checo]]
- [[notes/papers/2023-07-14_detectores-gpt-sesgados-no-nativos]]
- [[notes/papers/2026-06-28_brain-on-chatgpt-deuda-cognitiva]]
- [[notes/papers/2026-06-28_silicon-gaze-sesgos-llm-lugar]]
