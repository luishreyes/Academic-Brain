---
type: concept
keyword: quimica-computacional
aliases: [computational chemistry, DFT, density functional theory, química teórica, ab initio]
---

# Química computacional

Uso de métodos computacionales (mecánica cuántica, mecánica molecular, dinámica molecular) para estudiar sistemas químicos; incluye cálculos DFT, campos de fuerza ab initio y simulaciones atomísticas de moléculas y materiales.

## Qué dice la literatura

Ocho notas publicadas entre 2021 y 2026 sitúan la IA generativa frente a la química computacional "clásica" que representa, en este corpus, el trabajo de Reyes y Seminario (2007): un campo de fuerzas armónico para polipéptidos de alanina derivado directamente del tensor Hessiano DFT (B3PW91/6-31G*), sin ajuste empírico, donde AMBER subestima (hasta ~50% para el C=O) y el manual CRC sobreestima frente al cálculo ab initio. Ese estándar de precisión numérica exacta es, casi dos décadas después, el listón contra el que la literatura reciente mide —y con frecuencia encuentra insuficiente— a los modelos generativos.

El patrón dominante no es sustitución sino orquestación. Ashraf et al. (2021) describen un "ciclo de vida de la ciencia de datos molecular" en el que VAE y GAN generan candidatos dentro de un espacio químico de ~166.4 mil millones de moléculas, que luego deben validarse con simulación física o filtrarse por sintetizabilidad. Zhang et al. (2025) documentan esquemas híbridos —DFT-GAN, MAGECS, OM-Diff— donde la IA generativa acelera el diseño inverso de catalizadores (frecuencias de recambio hasta diez veces mayores en aleaciones Rh-Ru para síntesis de amoníaco; 250.000 superficies generadas por MAGECS, de las cuales cinco se sintetizaron y dos resultaron activas) pero sigue apoyándose en DFT como árbitro de validez. Bran et al. (2024) llevan esta lógica al extremo con ChemCrow: un LLM que delega el cálculo químico real a 18 herramientas externas porque, sin ellas, GPT-4 solo acierta en tareas triviales memorizadas (síntesis de DEET, paracetamol) y falla en las novedosas. El dato más incómodo de esa evaluación es que los químicos humanos prefieren consistentemente a ChemCrow, mientras que un LLM-juez (EvaluatorGPT) prefiere al GPT-4 desnudo por su fluidez aparente, sin detectar sus alucinaciones.

Donde la IA generativa intenta reemplazar —no orquestar— el cálculo cuantitativo directo, el corpus documenta un fracaso medible. Xie et al. (2025), con QCBench (350 problemas en 7 subcampos, evaluados sobre 24 LLMs), muestran una degradación consistente del desempeño a medida que aumenta la dificultad matemática, evidenciando una brecha entre la fluidez lingüística y la exactitud del cálculo científico que es justo lo que el campo de fuerzas de Reyes y Seminario, por construcción, no tiene. Tiwary et al. (2025) convierten esta brecha en tesis central: los modelos generativos sobresalen interpolando y memorizando pero fallan al predecir fenómenos emergentes —el estándar real que debería exigírsele a cualquier método de la química computacional—, y proponen una agenda de "Chemistry and AI" en vez de "AI for Chemistry", incorporando mecánica estadística y cuántica dentro de los propios modelos. Decardi-Nelson et al. (2024, en dos artículos) confirman el mismo cuello de botella desde la ingeniería de procesos: la brecha entre datos computacionales y experimentales, y la ausencia de benchmarks estandarizados, limitan la aplicación de GenAI al diseño molecular y multiescala pese a su potencial ilustrado en ejemplos puntuales (dureza de nanomateriales, catalizadores optimizados vía VAE informados por DFT, diseño de proteínas con el modelo de difusión Chroma).

Finalmente, Haraldsrud y Odden (2025) trasladan la pregunta al aula: en entrevistas con 21 estudiantes que usaban ChatGPT-4.0 para interpretar y extender una simulación de dinámica molecular, los estudiantes de química interactuaron de forma productiva el 86,7% de las veces, frente a solo 53,1% en los de física. La diferencia no fue de habilidad técnica sino de conocimiento disciplinar: quienes dominaban la química de fondo podían evaluar críticamente —y corregir— las salidas del modelo (incluyendo errores como tratar al O2 como molécula polar), mientras que quienes carecían de ese anclaje cedían el control del razonamiento a la IA. Leído junto con QCBench y ChemCrow, el hallazgo sugiere que la IA generativa no está desplazando el rigor de la química computacional clásica sino demostrando, una y otra vez, cuánto de ese rigor —humano o algorítmico— sigue siendo indispensable para usarla bien.

## Notas que usan este concepto
- [[notes/papers/2007-05-18_force-constants-alanine-polypeptides]]
- [[notes/papers/2025-12-01_qcbench-quimica-cuantitativa-llms]]
- [[notes/papers/2024-05-08_chemcrow-llm-chemistry-tools]]
- [[notes/papers/2025-10-06_genai-quimica-computacional-roadmap]]
- [[notes/papers/2025-06-06_genai-catalisis-revision]]
- [[notes/papers/2021-03-12_data-science-ciencia-molecular]]
- [[notes/papers/2024-05-09_genai-process-systems-engineering]]
- [[notes/papers/2024-08-29_genai-multiescala-ingenieria-quimica]]
- [[notes/papers/2026-06-28_self-scaffolding-modelado-computacional-genai]]
