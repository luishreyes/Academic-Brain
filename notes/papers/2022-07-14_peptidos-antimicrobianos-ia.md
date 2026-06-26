---
title: "Rational Discovery of Antimicrobial Peptides by Means of Artificial Intelligence"
authors: ["Ruiz Puentes, Paola", "Henao, Maria C.", "Cifuentes, Javier", "Muñoz-Camargo, Carolina", "Reyes, Luis H.", "Cruz, Juan C.", "Arbeláez, Pablo"]
year: 2022
journal: Membranes
url: https://doi.org/10.3390/membranes12070708
doi: 10.3390/membranes12070708
pdf_local: sources/pdfs/ruiz-puentes2022-peptidos-antimicrobianos-ia.pdf
type: paper
keywords: [inteligencia-artificial, bioquimica-computacional, desarrollo-de-farmacos, modelado-molecular, ingenieria-quimica]
date_added: 2026-06-26
---

# Rational Discovery of Antimicrobial Peptides by Means of Artificial Intelligence

## Resumen

La resistencia a antibióticos es una crisis global de salud pública; sin embargo, la industria farmacéutica ha reducido su inversión en nuevos antibióticos por su baja rentabilidad. Los péptidos antimicrobianos (AMPs) son una alternativa prometedora con tasas de resistencia mucho menores, pero su descubrimiento por tamizaje extensivo in vitro es tedioso y costoso. Este trabajo propone un enfoque de inteligencia artificial (IA) para acelerar la identificación de AMPs con alta actividad, reduciendo la experimentación necesaria.

El modelo AMPs-Net es una red neuronal profunda (deep learning) basada en grafos moleculares que supera el estado del arte en un 8.8% en precisión media para predecir la actividad antimicrobiana y antiviral de péptidos. El modelo fue aplicado para explorar una gran biblioteca virtual de secuencias peptídicas, identificando dos motivos antimicrobianos nuevos y dos péptidos novedosos asociados a ellos. Combinando IA con simulaciones de dinámica molecular (MD), se identificó un péptido multifuncional con propiedades terapéuticas prometedoras, validando el pipeline propuesto.

El trabajo establece una cadena metodológica —predicción computacional → análisis MD → validación experimental— que puede acortar sustancialmente el ciclo de descubrimiento de AMPs. Esto es relevante dado el contexto de resistencia antibiótica y la urgencia de nuevas moléculas con mecanismos de acción distintos a los antibióticos convencionales.

## Contribuciones principales
- Modelo AMPs-Net (deep learning sobre grafos moleculares) que supera el estado del arte en +8.8% de precisión media
- Identificación de dos motivos antimicrobianos y dos AMPs novedosos no reportados previamente
- Identificación de un péptido multifuncional (antimicrobiano + antiviral) mediante la combinación de IA y MD
- Validación del pipeline IA → MD → experimento para el descubrimiento eficiente de AMPs

## Metodología
Red neuronal profunda tipo AMPs-Net sobre representaciones de grafos moleculares de secuencias peptídicas; entrenamiento sobre bibliotecas de AMPs con actividad conocida; búsqueda virtual en espacio de secuencias; simulaciones de dinámica molecular para caracterizar los candidatos más prometedores; validación experimental parcial.

## Hallazgos clave
- AMPs-Net supera el estado del arte en predicción de actividad antimicrobiana y antiviral de péptidos
- Se descubrieron dos motivos secuenciales antimicrobianos nuevos mediante el análisis de los mejores candidatos predichos
- El péptido multifuncional identificado combina actividad antibacteriana y antiviral en una sola molécula
- La combinación IA + MD reduce el espacio experimental a explorar y aumenta la tasa de éxito de los candidatos

## Limitaciones
- La validación experimental completa de los péptidos identificados requiere síntesis química y ensayos biológicos adicionales
- Los modelos de IA dependen de la calidad y diversidad de los datos de entrenamiento disponibles sobre AMPs
- La traducción clínica de AMPs enfrenta desafíos de toxicidad, estabilidad in vivo y síntesis a escala

## Notas relacionadas
- [[concepts/inteligencia-artificial]]
- [[concepts/bioquimica-computacional]]
- [[concepts/desarrollo-de-farmacos]]
- [[concepts/modelado-molecular]]
- [[concepts/ingenieria-quimica]]
- [[notes/papers/2022-06-10_peptidos-translocadores-sars-cov2-spike]]
