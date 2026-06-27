---
title: "Estimation and prediction of the air–water interfacial tension in conventional and peptide surface-active agents by random Forest regression"
authors: ["Fabián Ricardo", "Paola Ruiz-Puentes", "Luis H. Reyes", "Juan C. Cruz", "Oscar Alvarez", "Diego Pradilla"]
year: 2022
journal: "Chemical Engineering Science"
url: "https://doi.org/10.1016/j.ces.2022.118208"
doi: "10.1016/j.ces.2022.118208"
pdf_local: sources/pdfs/peptides-proteins/ricardo-2022-tension-superficial-random-forest.pdf
type: paper
keywords: [ingenieria-quimica, ciencia-de-datos, biosurfactantes]
date_added: 2026-06-26
---

# Estimation and prediction of the air–water interfacial tension in conventional and peptide surface-active agents by random Forest regression

## Resumen
La tensión superficial en la concentración micelar crítica (STCMC) es un descriptor clave para surfactantes en aplicaciones cosméticas, farmacéuticas y alimentarias, pero su medición experimental es costosa y lenta. Este trabajo desarrolló un modelo predictivo de Random Forest (RF) entrenado con 691 surfactantes convencionales y 9 aminoácidos para estimar la STCMC de agentes tensoactivos, incluyendo péptidos biosurfactantes.

El modelo fue evaluado mediante validación cruzada de cinco pliegues y comparado directamente con valores experimentales de la literatura para péptidos. Se realizaron predicciones para permutaciones de péptidos cortos con el fin de identificar secuencias con alta actividad interfacial. Los resultados revelaron que el modelo es más preciso para péptidos cortos, donde la influencia de estructuras secundarias es menor. Para péptidos más largos, las estructuras secundarias complejas limitan la capacidad predictiva del algoritmo.

El análisis de importancia de variables identificó a los aminoácidos hidrofóbicos leucina, isoleucina y fenilalanina como los principales determinantes de una alta actividad superficial en péptidos. Este trabajo proporciona una herramienta computacional rápida para el tamizaje de biosurfactantes peptídicos, reduciendo la necesidad de síntesis y medición experimental.

## Contribuciones principales
- Modelo Random Forest validado para predicción de STCMC en 691 surfactantes convencionales y péptidos
- Relaciones estructura-actividad para moléculas tensoactivas peptídicas
- Identificación de secuencias de aminoácidos con potencial alta actividad interfacial

## Metodología
Entrenamiento de modelo Random Forest con base de datos de 691 surfactantes y 9 aminoácidos. Validación cruzada de cinco pliegues. Comparación de predicciones con mediciones experimentales de literatura. Predicción de permutaciones de péptidos cortos.

## Hallazgos clave
- El modelo RF estima con precisión la STCMC de surfactantes convencionales
- Para péptidos cortos la predicción es más robusta; la precisión disminuye con la longitud del péptido
- Leucina, isoleucina y fenilalanina son los aminoácidos hidrofóbicos más relevantes para actividad interfacial
- El modelo puede usarse para tamizaje computacional de biosurfactantes peptídicos

## Limitaciones
- El modelo pierde precisión para péptidos largos por efecto de estructuras secundarias
- La base de datos no incluye todos los tipos estructurales de biosurfactantes
- Las predicciones se limitan a la tensión superficial aire-agua, no a interfaces líquido-líquido

## Notas relacionadas
- [[concepts/ingenieria-quimica]]
- [[concepts/ciencia-de-datos]]
- [[concepts/biosurfactantes]]
- [[notes/papers/2022-12-07_biosurfactantes-peptidos-diseno-racional]]
