---
title: "A mathematical phase field model predicts superparamagnetic nanoparticle accelerated fusion of HeLa spheroids for field guided biofabrication"
authors: [Cristian F. Rodríguez, Valentina Quezada, Paula Guzmán-Sastoque, Juan Camilo Orozco, Luis H. Reyes, Johann F. Osma, Carolina Muñoz-Camargo, Juan C. Cruz]
year: 2025
journal: Scientific Reports
url: https://doi.org/10.1038/s41598-025-04495-2
doi: 10.1038/s41598-025-04495-2
pdf_local: sources/pdfs/nanomedicine-drug-delivery/rodriguez-2025-phase-field-esferoides-magnetica.pdf
type: paper
keywords: [simulacion-computacional, nanociencia, biomateriales]
date_added: 2026-06-26
---

# A mathematical phase field model predicts SPION-accelerated fusion of HeLa spheroids for field-guided biofabrication

## Resumen
Los modelos de tejido in vitro son cruciales para la medicina regenerativa, el descubrimiento de fármacos y la reducción de la experimentación animal. La bioimpresión 3D, en especial con manipulación magnética de esferoides celulares, ofrece control preciso de la arquitectura tisular, pero los modelos matemáticos existentes no capturan con precisión la interacción entre la dinámica biológica y las fuerzas magnéticas durante la fusión de esferoides.

Este estudio desarrolló y validó un modelo matemático de campo de fase (phase field) que simula la fusión de esferoides asistida magnéticamente, considerando la migración celular, la adhesión y los efectos de campos magnéticos externos. El modelo integra principios de mecánica celular, dinámica de fluidos y magnetostática, implementados en COMSOL Multiphysics. La validación experimental usó esferoides de células HeLa bioimpresos con nanopartículas superparamagnéticas de óxido de hierro (SPIONs), monitoreando la fusión con y sin campo magnético externo mediante microscopía confocal.

El modelo predijo con precisión la fusión acelerada bajo manipulación magnética, reduciendo el tiempo de fusión de ~7 días (sin campo) a 2 días, con altos valores de R² (>0,99 para fusión de dos esferoides y >0,97 para sistemas multiesferoide). Representa un avance de alta precisión para optimizar protocolos de bioimpresión y diseñar construcciones tisulares complejas guiadas por campo.

## Contribuciones principales
- Modelo de campo de fase validado para la fusión magnética de esferoides celulares.
- Integración de mecánica celular, dinámica de fluidos y magnetostática en COMSOL.
- Reducción del tiempo de fusión de ~7 a 2 días bajo campo magnético, con R² > 0,97.

## Metodología
Modelo matemático de campo de fase en COMSOL Multiphysics, validado con esferoides de HeLa bioimpresos con SPIONs y microscopía confocal; evaluación con métricas estadísticas (MAE, RMSE, R², Bland-Altman).

## Hallazgos clave
- La manipulación magnética acelera la fusión de esferoides (de 7 a 2 días).
- El modelo predice con alta fidelidad la fusión de dos y múltiples esferoides.

## Limitaciones
- Mayor variabilidad de error al aumentar la complejidad (sistemas de cuatro esferoides).
- Validación con una línea celular (HeLa).

## Notas relacionadas
- [[concepts/simulacion-computacional]]
- [[concepts/nanociencia]]
- [[concepts/biomateriales]]
- [[notes/papers/2024-08-22_separacion-magnetica-microfluidica-pmma]]
