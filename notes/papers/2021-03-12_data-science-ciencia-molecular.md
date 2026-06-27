---
title: "Data Science in Chemical Engineering: Applications to Molecular Science"
authors: [Chowdhury Ashraf, Nisarg Joshi, David A.C. Beck, Jim Pfaendtner]
year: 2021
journal: Annual Review of Chemical and Biomolecular Engineering
url: https://doi.org/10.1146/annurev-chembioeng-101220-102232
doi: 10.1146/annurev-chembioeng-101220-102232
pdf_local: sources/pdfs/capability-reliability/ashraf_2021_data-science-molecular.pdf
type: paper
keywords: [ciencia-de-datos, modelado-molecular, inteligencia-artificial, quimica-computacional, ingenieria-quimica, simulacion-computacional, descubrimiento-cientifico]
date_added: 2026-06-27
---

# Data Science in Chemical Engineering: Applications to Molecular Science

## Resumen

Esta revisión introduce el campo emergente de la "ciencia de datos molecular" (molecular data science) para una audiencia amplia de ingeniería química. Los autores argumentan que la ingeniería química está siendo transformada rápidamente por las herramientas de la ciencia de datos —estadística aplicada, aprendizaje automático (ML), gestión y curaduría de datos, visualización y, cada vez más, enfoques que pueden etiquetarse como inteligencia artificial (IA)— con impacto que abarca desde el descubrimiento y diseño de nuevas moléculas hasta operaciones y manufactura. El foco del artículo está en la aplicación de estos métodos al descubrimiento y la optimización de moléculas y materiales a escala atómica, con énfasis en propiedades de moléculas pequeñas o de moléculas en fase líquida.

El artículo organiza el campo en torno al concepto de un "ciclo de vida de la ciencia de datos molecular" (molecular data science life cycle) compuesto por cinco fases distintas: (1) creación de conjuntos de datos curados, (2) representaciones moleculares e ingeniería de características, (3) predicción de propiedades basada en datos, (4) generación de nuevas moléculas mediante métodos generativos, y (5) consideraciones de factibilidad y sintetizabilidad. El ciclo se concibe como un proceso virtuoso que puede reiniciarse incorporando la información obtenida de nuevas moléculas al conjunto de datos curado.

Para la creación de datos, los autores describen tres fuentes principales: minería de literatura mediante procesamiento de lenguaje natural (NLP) y minería de texto (TM), simulaciones físicas de alto rendimiento (dinámica molecular, Monte Carlo, DFT) y experimentación de alto rendimiento con laboratorios autónomos robotizados. En representación molecular comparan métodos basados en grafos y cadenas (matrices de conectividad, SMILES, InChI), huellas moleculares (MACCS, ECFP) y representaciones continuas mediante autoencoders variacionales (VAE) que mapean el espacio molecular discreto a un espacio latente continuo y diferenciable.

Para la predicción de propiedades repasan la evolución desde modelos lineales QSAR/QSPR hasta redes neuronales profundas, clustering no supervisado y ML informado por la física (physics-informed ML). Para la generación de moléculas (problema de diseño inverso) describen algoritmos genéticos, redes generativas adversarias (GAN) y VAE. Finalmente abordan la factibilidad química (sanitización con herramientas como RDKit) y la sintetizabilidad (métricas como SAscore, SCScore, SYBA y métodos de retrosíntesis).

## Contribuciones principales

- Propone un marco conceptual unificado —el ciclo de vida de la ciencia de datos molecular— con cinco fases para organizar y entender el campo.
- Ofrece una introducción accesible al subcampo para recién llegados de la ingeniería química, conectando data science, ML e IA con el descubrimiento molecular.
- Sintetiza el estado del arte en representaciones moleculares, prediccion de propiedades y métodos generativos, con ejemplos concretos de herramientas y bases de datos (RDKit, MoSDeF, ZINC, ChEMBL, GDB-17).

## Metodología

Artículo de revisión narrativa (review) que sintetiza la literatura revisada por pares y preprints sobre la aplicación de métodos de ciencia de datos al descubrimiento y diseño molecular en ingeniería química, organizado en torno a las cinco fases del ciclo de vida propuesto.

## Hallazgos clave

- Las representaciones continuas (VAE) son generalmente preferibles a las discretas cuando es posible, porque permiten optimización basada en gradiente y la interpolación entre moléculas en el espacio latente.
- Las redes neuronales son aproximadores universales de funciones efectivos para predecir propiedades, pero las redes profundas requieren grandes conjuntos de datos y actúan como "cajas negras" con baja interpretabilidad y transferibilidad.
- El ML informado por la física mitiga las limitaciones de las cajas negras al incorporar las leyes físicas como información previa, mejorando interpretabilidad y extrapolación.
- El espacio químico es enorme (~166.4 mil millones de moléculas con máximo 17 átomos C/N/O/S/halógenos), lo que motiva el "problema de diseño inverso" abordado por métodos generativos (algoritmos genéticos, GAN, VAE).
- La factibilidad química y la sintetizabilidad son filtros indispensables: muchas moléculas generadas con propiedades atractivas resultan químicamente inválidas o difíciles de sintetizar.

## Limitaciones

- Las GAN sufren problemas como el colapso de modos (mode collapse) y la falla de convergencia.
- Los modelos de redes neuronales profundas exigen conjuntos de datos muy grandes y de alta calidad, difíciles de obtener.
- La complejidad estructural es solo un proxy imperfecto de la sintetizabilidad; ninguna métrica de accesibilidad sintética constituye una solución completa.
- Como instantánea de un campo en rápida evolución, la revisión reconoce que el ecosistema de herramientas aún está fragmentado y no consolidado en aplicaciones universales.

## Notas relacionadas

- [[concepts/ciencia-de-datos]]
- [[concepts/modelado-molecular]]
- [[concepts/inteligencia-artificial]]
- [[concepts/quimica-computacional]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/descubrimiento-cientifico]]
