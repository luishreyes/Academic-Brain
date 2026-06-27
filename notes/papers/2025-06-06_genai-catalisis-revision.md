---
title: Application of generative artificial intelligence in catalysis
authors: [Tiantong Zhang, Haolin Cheng, Yao Nian, Jinli Zhang, Qingbiao Li, You Han]
year: 2025
journal: Chinese Journal of Chemical Engineering
url: https://doi.org/10.1016/j.cjche.2025.05.013
doi: 10.1016/j.cjche.2025.05.013
pdf_local: sources/pdfs/capability-reliability/zhang_2025_genai-catalysis.pdf
type: paper
keywords: [inteligencia-artificial, ingenieria-quimica, quimica-computacional, modelado-molecular, agentes-de-ia, alucinaciones-de-ia, descubrimiento-cientifico, ciencia-de-datos]
date_added: 2026-06-27
---

# Application of generative artificial intelligence in catalysis

## Resumen

Esta revisión (perspective) sintetiza el estado del arte de la inteligencia artificial generativa (generative AI) aplicada a la investigación en catálisis, un campo que sustenta más del 90% de los productos de la industria química. Los autores argumentan que, a diferencia de la IA discriminativa tradicional —basada en reglas y dependiente de grandes volúmenes de datos etiquetados—, la IA generativa aprende las distribuciones de datos existentes para producir muestras nuevas (moléculas, superficies, estructuras, espectros), lo que la hace especialmente adecuada para un dominio caracterizado por un vasto espacio de exploración, tipos de datos diversos y relaciones de mapeo complejas.

El trabajo introduce las cuatro familias de modelos generativos relevantes: redes generativas antagónicas (GAN), modelos de difusión (DM), autoencoders variacionales (VAE) y grandes modelos de lenguaje (LLM) basados en la arquitectura Transformer. Para cada uno se describe su mecanismo de funcionamiento y sus compromisos (por ejemplo, las GAN producen alta fidelidad pero baja diversidad; los VAE generan muestras diversas pero de menor calidad; los DM son estables pero lentos; los LLM son potentes pero propensos a la alucinación).

A continuación se presentan casos de aplicación organizados en tres ejes: (1) diseño y optimización de catalizadores, donde esquemas como DFT-GAN, VAE para complejos metálicos, OM-Diff y MAGECS aceleran el diseño inverso de catalizadores con propiedades objetivo; (2) mejora de técnicas de caracterización, donde modelos como DCGAN, ESRGAN, U-net GAN y Cycle-GAN reconstruyen estructuras 3D, mejoran la relación señal-ruido en microscopía STEM y correlacionan espectros con estructuras; y (3) nuevos paradigmas de investigación impulsados por LLM (CatBERTa, CatGPT, CMDL), incluyendo minería de literatura, predicción de energías de adsorción y agentes autónomos que diseñan, planifican y ejecutan experimentos.

Finalmente, los autores discuten los retos prácticos —establecer conjuntos de datos de alta calidad, desarrollar modelos generativos avanzados y multimodales, integrar múltiples métodos de investigación y mitigar las alucinaciones de los LLM— y delinean perspectivas futuras como el descubrimiento de nuevas rutas catalíticas, la generación multimodal y la automatización experimental con robots de laboratorio guiados por IA.

## Contribuciones principales
- Marco organizador que clasifica las aplicaciones de IA generativa en catálisis en tres dominios: diseño/optimización de catalizadores, mejora de caracterización y nuevos paradigmas de investigación.
- Síntesis comparativa de las cuatro arquitecturas generativas (GAN, DM, VAE, LLM) con sus mecanismos y compromisos para el contexto catalítico.
- Compendio de casos de estudio concretos (DFT-GAN, MAGECS, GLIDER, OM-Diff, CatGPT, etc.) que demuestran eficiencia y aplicabilidad general.
- Identificación de retos prácticos y de una agenda prospectiva para la integración de IA generativa en la investigación catalítica.

## Metodología
Revisión narrativa tipo "perspective" que recopila y organiza literatura reciente sobre IA generativa en catálisis. No realiza experimentos propios; sintetiza esquemas computacionales y experimentales de terceros, ilustrando cada categoría con casos representativos y figuras explicativas de los flujos de trabajo (DFT-GAN, MAGECS, Cycle-GAN, CatGPT, agentes autónomos basados en LLM).

## Hallazgos clave
- La combinación de modelos generativos con DFT o potenciales de redes neuronales universales (UNNP) permite el diseño dirigido de superficies de aleación con frecuencias de recambio (TOF) hasta diez veces mayores que el conjunto original (caso Rh-Ru para síntesis de amoníaco).
- El diseño inverso con VAE y modelos de difusión (OM-Diff) genera miles de catalizadores válidos y novedosos condicionados a propiedades objetivo (p. ej., energía de adición oxidativa para acoplamientos de Suzuki), con bajos errores frente a cálculos DFT.
- MAGECS generó 250000 superficies de aleación plausibles; cinco fueron sintetizadas y dos mostraron alta actividad y selectividad en la reducción de CO2.
- Los GAN aplicados a microscopía (DCGAN, ESRGAN, Cycle-GAN) reconstruyen estructuras 3D, reducen ruido y cuantifican nanopartículas, abaratando la caracterización.
- Los LLM (CatBERTa, CatGPT) predicen energías de adsorción desde texto y generan estructuras de catalizadores válidas; ChatGPT puede impulsar agentes autónomos que ejecutan experimentos de múltiples pasos.

## Limitaciones
- Las alucinaciones de los LLM (falacias lógicas, hechos fabricados, sesgos derivados de los datos) exigen verificación humana de las salidas.
- La calidad de las muestras generadas depende críticamente de la completitud y calidad del conjunto de entrenamiento; datasets simplificados introducen imprecisión "de abajo hacia arriba".
- Existe un compromiso difícil de equilibrar entre eficiencia y precisión en la generación.
- La IA generativa depende de la acumulación de datos existentes y de soluciones diseñadas por científicos, por lo que aún no automatiza la investigación sin intervención humana.
- Al ser un "perspective" sin experimentación propia, la evidencia es de carácter sintético y selectivo, no sistemático.

## Notas relacionadas
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/quimica-computacional]]
- [[concepts/modelado-molecular]]
- [[concepts/agentes-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/descubrimiento-cientifico]]
- [[concepts/ciencia-de-datos]]
