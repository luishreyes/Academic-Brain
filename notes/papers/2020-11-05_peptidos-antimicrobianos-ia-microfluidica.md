---
title: "Design, Screening, and Testing of Non-Rational Peptide Libraries with Antimicrobial Activity: In Silico and Experimental Approaches"
authors: ["Paola Ruiz Puentes", "María C. Henao", "Carlos E. Torres", "Saúl C. Gómez", "Laura A. Gómez", "Juan C. Burgos", "Pablo Arbeláez", "Johann F. Osma", "Carolina Muñoz-Camargo", "Luis H. Reyes", "Juan C. Cruz"]
year: 2020
journal: Antibiotics
url: https://doi.org/10.3390/antibiotics9120854
doi: 10.3390/antibiotics9120854
pdf_local: sources/pdfs/modeling-simulation/ruiz2020-peptidos-antimicrobianos-ia.pdf
type: paper
keywords: [biologia-molecular, bioquimica-computacional, inteligencia-artificial, ingenieria-quimica]
date_added: 2026-06-26
---

# Design, Screening, and Testing of Non-Rational Peptide Libraries with Antimicrobial Activity: In Silico and Experimental Approaches

## Resumen

La resistencia antimicrobiana (AMR) es una amenaza global creciente: para 2050 se proyectan más de 10 millones de muertes anuales atribuibles a patógenos resistentes. Los péptidos antimicrobianos (AMPs) son una alternativa prometedora a los antibióticos convencionales, ya que pueden superar mecanismos de resistencia bacteriana. Sin embargo, el diseño y screening de nuevas bibliotecas de AMPs presenta desafíos computacionales y experimentales significativos. Este trabajo revisa y propone un flujo de trabajo de cuatro etapas que integra inteligencia artificial, dinámica molecular, expresión superficial en microorganismos y microfluídica para diseñar, seleccionar y validar AMPs no racionales derivados de la diversidad genómica bacteriana.

La propuesta combina: (1) algoritmos de clasificación de deep learning (capas convolucionales + unidades recurrentes GRU) para identificar candidatos AMP en bases de datos genómicas; (2) simulaciones de dinámica molecular para caracterizar interacciones con bicapas lipídicas bacterianas; (3) expresión superficial recombinante en microorganismos para screening masivo; y (4) estrategias microfluídicas basadas en gotas para identificar AMPs con las capacidades líticas deseadas. El enfoque no racional aprovecha la diversidad inherente del genoma bacteriano como fuente de diversidad de bibliotecas, diferenciándose de los enfoques racionales basados en reglas de diseño.

## Contribuciones principales

- Marco de cuatro etapas para diseño, screening y validación de AMPs no racionales
- Algoritmo de clasificación deep learning (CNN + GRU) para identificar candidatos AMP en genomas bacterianos
- Integración de dinámica molecular para evaluar interacciones peptídico-membrana
- Estrategias microfluídicas para screening de alta densidad de bibliotecas de AMPs

## Metodología

Búsqueda in silico de candidatos AMP con CNN+GRU → simulaciones de dinámica molecular de interacciones con bicapas lipídicas → expresión superficial recombinante en microorganismos → screening vía microfluídica de gotas → validación experimental de actividad lítica.

## Hallazgos clave

- Los enfoques no racionales basados en genómica bacteriana generan bibliotecas de AMPs con mayor diversidad que los enfoques racionales
- Los algoritmos CNN+GRU superan limitaciones de los enfoques de análisis de distribuciones multi-espacio en bases de datos grandes
- La dinámica molecular permite discriminar candidatos con buena interacción con membranas bacterianas antes de síntesis experimental
- El framework es extensible a otras aplicaciones de péptidos bioactivos más allá de los antimicrobianos

## Limitaciones

- Revisión conceptual y metodológica: los resultados experimentales de la biblioteca completa son parciales al momento de publicación
- La validación in vivo de los AMPs identificados no se reporta
- La escalabilidad del proceso microfluídico a grandes bibliotecas requiere optimización adicional

## Notas relacionadas

- [[concepts/biologia-molecular]]
- [[concepts/bioquimica-computacional]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
