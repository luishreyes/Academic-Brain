---
title: "Translocating Peptides of Biomedical Interest Obtained from the Spike (S) Glycoprotein of the SARS-CoV-2"
authors: ["Henao, Maria C.", "Ocasion, Camila", "Ruiz Puentes, Paola", "González-Melo, Cristina", "Quezada, Valentina", "Cifuentes, Javier", "Yepes, Arnovis", "Burgos, Juan C.", "Cruz, Juan C.", "Reyes, Luis H."]
year: 2022
journal: Membranes
url: https://doi.org/10.3390/membranes12060600
doi: 10.3390/membranes12060600
pdf_local: sources/pdfs/nanomedicina-terapias/henao2022-peptidos-translocadores-sars-cov2.pdf
type: paper
keywords: [bioquimica-computacional, biomateriales, desarrollo-de-farmacos, modelado-molecular, nanociencia, ingenieria-quimica]
date_added: 2026-06-26
---

# Translocating Peptides of Biomedical Interest Obtained from the Spike (S) Glycoprotein of the SARS-CoV-2

## Resumen

La dificultad de entregar moléculas bioactivas al espacio intracelular es uno de los principales obstáculos en terapéutica. Este trabajo parte de la hipótesis de que la glicoproteína Spike (S) del SARS-CoV-2, conocida por su capacidad de interactuar con membranas celulares para mediar la infección, podría ser una fuente de péptidos con capacidad de translocación de membranas. Se identificaron tres secuencias candidatas —AHB-1, AHB-2 y AHB-3— a partir del análisis estructural de la proteína S, y se evaluaron computacionalmente y luego en sistemas in vitro.

Mediante simulaciones de dinámica molecular (MD) sobre un modelo de membrana DPPC (dipalmitoilfosfatidilcolina), se cuantificó la barrera energética para la translocación de cada péptido mediante muestreo de paraguas (umbrella sampling) y simulaciones de extracción de fondo plano (flat-bottom pulling). AHB-1 mostró una barrera de 14.1 kcal/mol y penetración casi completa de la membrana a los 400 ns, comparable a péptidos penetradores de células (CPPs) de referencia como TP2 y Buforin II. Los péptidos más prometedores fueron conjugados a nanopartículas de quitosano (CNPs) para mejorar su estabilidad fisiológica, y los nanoconjugados mostraron alta biocompatibilidad (hemólisis <5%, viabilidad celular >85%) y capacidad de internalización y escape endosomal en células Vero.

El trabajo valida una estrategia de ingeniería racional que utiliza el conocimiento estructural de una proteína viral para diseñar vectores de entrega intracelular, abriendo la posibilidad de usar péptidos derivados de patógenos como herramientas biomédicas para la entrega de materiales genéticos o fármacos.

## Contribuciones principales
- Identificación racional de tres péptidos translocadores (AHB-1, AHB-2, AHB-3) a partir del análisis estructural de la proteína Spike del SARS-CoV-2
- Cuantificación energética de la translocación de membrana mediante umbrella sampling y simulaciones MD de 400 ns
- Validación in vitro de la internalización y escape endosomal de los nanoconjugados CNPs-péptido

## Metodología
Análisis estructural de la proteína Spike (NCBI QHD43416.1); predicción de estructura terciaria con i-Tasser; simulaciones MD con campo de fuerza GROMOS96 53A6 sobre membrana DPPC; umbrella sampling (WHAM); síntesis de nanopartículas de quitosano por gelación iónica; evaluación de biocompatibilidad (hemólisis, agregación plaquetaria, MTT en células Vero); microscopía confocal de internalización y escape endosomal.

## Hallazgos clave
- AHB-1 penetra casi completamente la membrana DPPC a 400 ns de simulación, con ∆G de 14.1 kcal/mol
- Los nanoconjugados CNPs-AHB-1 mostraron >83% de cobertura del citosol a las 4h de exposición en células Vero
- Alta biocompatibilidad: hemólisis <5%, citotoxicidad nula (viabilidad >85%) hasta 100 µg/mL
- La estructura anfipática de AHB-1 (cabeza hidrofílica en C-terminal + cola hidrofóbica) explica su superior capacidad de translocación

## Limitaciones
- Los modelos de membrana (DPPC) son simplificaciones de la complejidad de membranas celulares reales
- Falta evaluar la entrega de cargos terapéuticos reales (plásmidos, ARN) con los nanoconjugados
- Solo se probó una línea celular (Vero); se requieren estudios en células primarias humanas

## Notas relacionadas
- [[concepts/bioquimica-computacional]]
- [[concepts/biomateriales]]
- [[concepts/desarrollo-de-farmacos]]
- [[concepts/modelado-molecular]]
- [[concepts/nanociencia]]
- [[concepts/ingenieria-quimica]]
- [[notes/papers/2021-03-01_delivery-nucleic-acids-nanocarriers]]
