---
title: "Optimization of glycerol consumption in wild-type Escherichia coli using central carbon modeling as an alternative approach"
authors: ["Albert Enrique Tafur Rangel", "Luis H. Reyes", "Jorge Mario Gómez Ramírez", "Andrés Fernando González Barrios"]
year: 2021
journal: Biofuels, Bioproducts and Biorefining
url: https://doi.org/10.1002/bbb.2205
doi: 10.1002/bbb.2205
pdf_local: sources/pdfs/metabolic-biotechnology/tafur2021-glicerol-ecoli-modelado-genomico.pdf
type: paper
keywords: [ingenieria-metabolica, biocombustibles, genomica, biologia-molecular, ingenieria-quimica]
date_added: 2026-06-26
---

# Optimization of glycerol consumption in wild-type Escherichia coli using central carbon modeling as an alternative approach

## Resumen

El glicerol es un subproducto abundante de la industria del biodiesel cuya sobreproducción reduce la competitividad económica del sector. Convertir el glicerol en compuestos valiosos (ácidos orgánicos, solventes, polímeros) mediante microorganismos como E. coli es una alternativa atractiva, pero requiere optimizar el medio de cultivo para maximizar el consumo de glicerol. Los enfoques experimentales de optimización de medios son costosos y lentos; este trabajo propone el modelado computacional del metabolismo central del carbono como alternativa para guiar el diseño del medio.

Usando modelos a escala genómica (genome-scale models, GSM) y análisis del plano de fases fenotípicas del metabolismo central de E. coli ATCC 8739 con glicerol como fuente de carbono, se identificaron 19 compuestos esenciales para el crecimiento y 3 reacciones críticas (asociadas a disponibilidad de nitrógeno, fósforo y oxígeno). Con base en estos resultados computacionales, se formuló un medio suplementado con NH₄Cl, Na₂HPO₄ y K₂HPO₄ que duplicó el consumo de glicerol respecto al medio LB. El análisis transcriptómico del mejor medio reveló que el alto consumo de glicerol en condiciones aerobias depende del fósforo para evitar toxicidad por acumulación de glicerol-3-fosfato.

## Contribuciones principales

- Uso de modelos a escala genómica para guiar el diseño de medios de cultivo para consumo de glicerol en E. coli
- Identificación de 3 reacciones metabólicas críticas (nitrógeno, fósforo, oxígeno) para el consumo de glicerol
- Formulación de medio optimizado que duplica el consumo de glicerol respecto al medio LB
- Análisis transcriptómico que explica el mecanismo de toxicidad por glicerol-3-fosfato bajo alta disponibilidad de fósforo

## Metodología

Modelado GSM de E. coli ATCC 8739 en glicerol → análisis de plano de fases fenotípicas → identificación de compuestos esenciales → formulación de medios suplementados → validación experimental (cultivos en glicerol) → transcriptómica del mejor medio.

## Hallazgos clave

- 19 compuestos identificados como esenciales para el crecimiento de E. coli en glicerol
- Nitrógeno, fósforo y oxígeno: las 3 reacciones más críticas para alto crecimiento y consumo de glicerol
- Medio con NH₄Cl, Na₂HPO₄ y K₂HPO₄: 2× mayor consumo de glicerol que LB
- Transcriptómica: alto consumo de glicerol aerobio depende de fósforo para evitar acumulación tóxica de glicerol-3-fosfato
- El modelado GSM reduce el espacio experimental para optimización de medios de cultivo

## Limitaciones

- Estudio en E. coli silvestre; la extensión a cepas ingenierizadas requiere validación adicional
- Los modelos GSM no capturan regulación transcripcional (se usan datos transcriptómicos a posteriori)
- La optimización de concentraciones exactas de suplementos no se abordó computacionalmente

## Notas relacionadas

- [[concepts/ingenieria-metabolica]]
- [[concepts/biocombustibles]]
- [[concepts/genomica]]
- [[concepts/biologia-molecular]]
- [[concepts/ingenieria-quimica]]
- [[notes/papers/2020-01-01_clostridium-xylose-transcriptomica]]
