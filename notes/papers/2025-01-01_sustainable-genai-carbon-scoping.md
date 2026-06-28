---
title: "Toward Sustainable Generative AI: A Scoping Review of Carbon Footprint and Environmental Impacts Across Training and Inference Stages"
authors: [Min-Kyu Kim, Tae-An Yoo, Ji-Bum Chung]
year: 2025
journal: 
url: 
doi: 
pdf_local: sources/pdfs/risks-overreliance-equity/kim_2025_sustainable-genai-carbon-scoping.pdf
type: paper
keywords: [inteligencia-artificial, huella-ambiental-de-la-ia, sostenibilidad, revision-sistematica-de-literatura, regulacion-de-ia, capacidades-de-ia]
date_added: 2026-06-28
---

# Toward Sustainable Generative AI: A Scoping Review of Carbon Footprint and Environmental Impacts Across Training and Inference Stages

## Resumen

Este artículo realiza una revisión de alcance (scoping review) de las metodologías, herramientas y tendencias de investigación para evaluar la huella de carbono y los impactos ambientales de la IA generativa. Los autores parten de una constatación: la literatura previa se ha concentrado en la fase de entrenamiento, intensiva en energía, mientras que la huella ambiental acumulada durante la operación a gran escala —en particular la fase de inferencia— ha recibido mucha menos atención. Dado que los LLMs procesan miles de millones de peticiones diarias, la inferencia puede representar más del 90 % del ciclo completo de cómputo de un modelo y emerge como el principal motor de consumo eléctrico a largo plazo, por encima del entrenamiento.

El trabajo organiza los conceptos y fronteras del cálculo de emisiones. Distingue entre el análisis de huella de carbono (centrado en una sola categoría de impacto, el cambio climático, vía ISO 14067 y el GHG Protocol) y el análisis de ciclo de vida (LCA), más amplio (agua, toxicidad, uso de suelo, agotamiento de recursos), en una perspectiva cradle-to-grave. Clasifica las emisiones según el GHG Protocol (Scope 1, 2, 3) y según el momento de generación: emisiones incorporadas (embodied, de fabricación de GPUs, TPUs, servidores e infraestructura) frente a emisiones operacionales (entrenamiento e inferencia), que suelen dominar el total. La huella operacional se calcula como Energía × Intensidad de carbono, donde Energía ≈ Potencia × Tiempo × PUE.

La revisión cataloga las herramientas de medición en tres familias: estimación basada en modelos (Green Algorithms, ML CO2 Impact, LLMCarbon), medición basada en sensores (Intel RAPL, NVML, CodeCarbon, CarbonTracker, Experiment Impact Tracker, Zeus, Perun) e instrumentación física (medidores externos, PDUs, BMC). Para la inferencia, herramientas específicas como EcoLogits (estimación basada en modelos, orientada a la nube y a APIs, con enfoque LCA según ISO 14044) y Energy Meter (medición por sensores para LLMs locales) comienzan a aparecer. Se introducen métricas normalizadas como energía por inferencia y energía por token.

Los autores revelan limitaciones críticas en las prácticas actuales: inconsistencias metodológicas, sesgos específicos por tecnología, fronteras de sistema mal definidas y atención insuficiente a perspectivas end-to-end. Mediciones end-to-end pueden arrojar estimaciones hasta 2.4 veces mayores que las que solo miden la GPU. Sobre esa base proponen cuatro direcciones de investigación y gobernanza: (1) protocolos de medición universales, estandarizados y transparentes; (2) marcos de evaluación dinámicos que incorporen el comportamiento del usuario; (3) sistemas de monitoreo de ciclo de vida que abarquen las emisiones incorporadas; y (4) marcos de evaluación de sostenibilidad multidimensionales que equilibren el rendimiento del modelo con la eficiencia ambiental.

## Contribuciones principales

- Reencuadra la evaluación ambiental de la IA hacia la fase de inferencia, mostrando que el uso a gran escala (no el entrenamiento) domina la huella de carbono de los LLMs en el largo plazo.
- Ofrece una taxonomía de las herramientas de medición en tres familias (estimación basada en modelos, sensores, instrumentación física) con su comparativa de precisión, granularidad, coste y casos de uso.
- Sistematiza las fronteras conceptuales del cálculo de emisiones (Scope 1/2/3; emisiones incorporadas vs. operacionales; huella de carbono vs. LCA).
- Identifica las limitaciones de la contabilidad de carbono de la IA y propone una agenda de cuatro direcciones de investigación y gobernanza.

## Metodología

Revisión de alcance (scoping review) no sistemática y explícitamente no exhaustiva, con búsqueda y síntesis sobre fuentes académicas y técnicas publicadas hasta el 31 de octubre de 2025. Búsquedas en Google Scholar, Web of Science, Scopus y arXiv, complementadas con documentación técnica de librerías Python de contabilidad de carbono (CodeCarbon, CarbonTracker, MLCO2 Impact) y literatura gris/informes de política (IEA, ITU, MIT Technology Review). Los hallazgos se categorizaron en torno a tres ejes analíticos: estandarización y clasificación de metodologías y herramientas; análisis comparativo de impactos en entrenamiento e inferencia; y desafíos críticos, requisitos de transparencia y direcciones de gobernanza.

## Hallazgos clave

- En EE. UU. el consumo eléctrico de los centros de datos pasó del 1.9 % (2018) al 4.4 % (2023) del total nacional y se proyecta entre 6.7 % y 12.7 % para 2028; más de la mitad sería atribuible a la IA.
- La inferencia puede representar más del 90 % del ciclo de cómputo de un LLM; en un caso (Wu et al., 2022, datos de Facebook) la inferencia fue el 65 % de las emisiones totales frente al 35 % del entrenamiento.
- Las estimaciones de emisiones varían enormemente según el modelo, el hardware, la eficiencia del centro de datos (PUE) y la intensidad de carbono de la red; Patterson et al. (2021) mostraron que estimaciones previas estaban sobreestimadas hasta en un factor de 80.
- Las mediciones end-to-end pueden producir estimaciones de carbono hasta 2.4 veces mayores que las que solo miden la GPU, lo que hace inviable comparar valores absolutos entre estudios con fronteras distintas.
- La co-optimización hardware-software puede reducir las emisiones operacionales hasta en un factor de 800 (Wu et al., 2022).
- ISO publicó el TR 20226:2025 incorporando consideraciones de sostenibilidad para la IA a lo largo de su ciclo de vida.

## Limitaciones

- Es un scoping review no sistemático y explícitamente no exhaustivo; no pretende cubrir toda la evidencia disponible.
- La opacidad corporativa (no divulgación de datos de energía por proveedores de nube) impide verificar o reproducir muchas estimaciones reportadas.
- La ausencia de protocolos estandarizados limita la comparabilidad entre estudios; las herramientas dependen fuertemente del SO, los drivers (Intel RAPL, NVIDIA NVML) y la disponibilidad de sensores.
- El campo evoluciona rápido, por lo que predicciones que ignoren el progreso tecnológico están, en palabras citadas, "fraught with peril".

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/huella-ambiental-de-la-ia]]
- [[concepts/sostenibilidad]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/regulacion-de-ia]]
- [[concepts/capacidades-de-ia]]
