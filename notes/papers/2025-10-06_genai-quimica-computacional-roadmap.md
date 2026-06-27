---
title: "Generative AI for computational chemistry: A roadmap to predicting emergent phenomena"
authors: [Pratyush Tiwary, Lukas Herron, Richard John, Suemin Lee, Disha Sanwal, Ruiyu Wang]
year: 2025
journal: Proceedings of the National Academy of Sciences (PNAS)
url: https://doi.org/10.1073/pnas.2415655121
doi: 10.1073/pnas.2415655121
pdf_local: sources/pdfs/capability-reliability/tiwary_2025_genai-computational-chemistry-roadmap.pdf
type: paper
keywords: [inteligencia-artificial, quimica-computacional, modelado-molecular, simulacion-computacional, bioquimica-computacional, capacidades-de-ia, alucinaciones-de-ia, descubrimiento-cientifico]
date_added: 2026-06-27
---

# Generative AI for computational chemistry: A roadmap to predicting emergent phenomena

## Resumen

Esta Perspective de PNAS ofrece una revisión estructurada del impacto de la IA generativa en la química computacional, enfocándose exclusivamente en la química computacional basada en simulación molecular. Los autores comienzan resumiendo los conceptos teóricos mínimos de ambos campos —superficie de energía potencial, campos de fuerza, ensambles termodinámicos, variables colectivas, coordenadas de reacción, superficies de energía libre y simulaciones de dinámica molecular (MD) por un lado; variables latentes, priors, funciones de pérdida, embeddings y mecanismos de atención por el otro— para luego recorrer los principales métodos generativos.

El núcleo metodológico repasa cinco familias de modelos: autoencoders (AE) y sus derivados (VAE, β-VAE, cuellos de botella de información), redes generativas adversarias (GANs), aprendizaje por refuerzo (RL), modelos basados en flujos (normalizing flows y modelos de difusión) y RNNs/LLMs basados en transformers. Para cada familia se describen ideas centrales, aplicaciones en química y limitaciones (inestabilidad de entrenamiento, mode collapse, dependencia de grandes conjuntos de datos, dificultad de generalización fuera de distribución).

La sección de aplicaciones cubre química cuántica ab initio y campos de fuerza de aprendizaje automático (MLFFs), modelos coarse-grained, predicción de estructura y conformaciones de proteínas (AlphaFold2, RoseTTAFold, AlphaFold3, RFDiffusion, AF2RAVE, AlphaFlow, Boltzmann generators) y predicción de estructura de RNA (AF3, RoseTTAFold-2NA, modelos de lenguaje de RNA, mapas termodinámicos). Un eje transversal es el cambio de paradigma en biología estructural: de una visión "centrada en la estructura nativa" hacia ensambles de conformeros ponderados por Boltzmann que dependen del entorno (temperatura, iones, ligandos).

La tesis central del artículo es que el objetivo último de cualquier método de simulación o teoría es predecir fenómenos no vistos antes, y que la IA generativa debe someterse a este mismo estándar antes de considerarse útil para la química. Los autores argumentan que los modelos actuales sobresalen en interpolación y memorización pero fallan al capturar fenómenos emergentes ("More Is Different", Anderson). La solución propuesta es integrar principios químicos fundamentales —especialmente mecánica estadística, mecánica cuántica y termodinámica— en los modelos de IA, en una visión de "Chemistry and AI" más que "AI for Chemistry".

## Contribuciones principales

- Marco estructurado que conecta los conceptos teóricos de la química computacional con los de la IA generativa, sirviendo como mapa de ruta para el campo.
- Taxonomía crítica de los métodos generativos (AE, GANs, RL, flujos/difusión, LLMs) con sus aplicaciones y limitaciones específicas en química.
- Identificación de la predicción de fenómenos emergentes como el estándar decisivo que la IA generativa aún no alcanza.
- Cinco "deseables" para avanzar: integración química-IA, interpretabilidad y pruebas de fiabilidad, generalización fuera de distribución en regímenes de datos escasos, repensar los datos ("más datos no son siempre mejores datos") y acoplamiento correcto a variables ambientales.

## Metodología

Artículo tipo Perspective (revisión argumentativa, no estudio empírico). Sintetiza literatura reciente de IA generativa aplicada a simulación molecular, organizándola por método y por aplicación, y articula un argumento normativo sobre los criterios que deben cumplir estos modelos. No hay datos subyacentes propios ("There are no data underlying this work").

## Hallazgos clave

- Las GANs están perdiendo vigencia en química por inestabilidad de entrenamiento y mode collapse; el campo se desplaza hacia modelos de difusión y enfoques basados en RL.
- Los modelos de difusión están profundamente enraizados en la física estadística (proceso de Ornstein-Uhlenbeck, force-matching, teoría de vidrios de espín); la teoría física distingue regímenes de generalización vs. memorización.
- Los MLFFs permiten alcanzar precisión cuántica a velocidades cercanas a MD clásica, pero generalizar más allá de los datos de entrenamiento y tratar fuerzas de largo alcance (electrostática) siguen siendo retos abiertos.
- Las medidas internas de confianza (p. ej., pLDDT de AlphaFold) muestran limitaciones para evaluar la fiabilidad de las predicciones.
- En química, las leyes de escala de los LLMs pueden no cumplirse: más datos pueden amplificar el ruido en lugar de aportar información sobre eventos raros.
- Métodos híbridos que integran IA con principios físicos (AF2RAVE, mapas termodinámicos) son prometedores para capturar dependencia ambiental y diversidad conformacional.

## Limitaciones

- Como Perspective, refleja la visión e interpretación de los autores más que una revisión sistemática exhaustiva; el alcance se restringe deliberadamente a química computacional basada en simulación molecular.
- Riesgo señalado de entrenar IA generativa sobre datos sintéticos de MD: si los modelos no respetan las leyes físicas, pueden proliferar "deepfakes" químicos y predicciones no físicas.
- La mayoría de los modelos actuales no incorporan condiciones ambientales y predicen una sola estructura por secuencia, limitando su poder predictivo en escenarios nuevos.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/quimica-computacional]]
- [[concepts/modelado-molecular]]
- [[concepts/simulacion-computacional]]
- [[concepts/bioquimica-computacional]]
- [[concepts/capacidades-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/descubrimiento-cientifico]]
