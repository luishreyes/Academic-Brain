---
type: concept
keyword: microfluidica
aliases: [microfluidics, lab-on-a-chip, microfluídica, micro total analysis systems, µTAS]
---

# Microfluídica

Tecnología de sistemas miniaturizados para manipular fluidos a escala de microlitros o nanolitros; permite síntesis controlada de nanopartículas, liposomas y otros sistemas de encapsulación con alta reproducibilidad y bajo consumo de materiales.

## Qué dice la literatura

Nueve notas, publicadas entre 2021 y 2026, documentan lo que es en realidad un mismo programa de investigación: Juan C. Cruz y Luis H. Reyes (Universidad de los Andes) firman las nueve, casi siempre junto a Johann F. Osma en la primera mitad de la serie (2021-2024) y, desde 2023, junto a Cristian F. Rodríguez, quien pasa de coautor a primer autor en cuatro de los trabajos más recientes. El corpus se organiza en dos líneas metodológicas que convergen hacia el final.

La primera línea es la síntesis de liposomas y magnetoliposomas para entrega de fármacos. Giraldo et al. (2021) comparan mezcladores pasivos y acústicos para encapsular nanobioconjugados y encuentran que los sistemas acústicos producen vesículas más uniformes (PDI < 0.1 frente a 0.15-0.25) y hasta 40% más eficiencia de encapsulación para cargas de alto peso molecular. Gómez et al. (2021) bajan el costo del chip en más de 10 veces para sintetizar liposomas gigantes (GUV) usados en el cribado de péptidos activos en membrana. Torres et al. (2022) integran síntesis y purificación de magnetoliposomas en un solo chip, obteniendo vesículas de 150-200 nm con PDI < 0.15 y más de 90% de eficiencia de purificación, aunque documentan desestabilización a pH 1.2 que limita la administración oral directa. Rodríguez et al. (2025), en la revisión que cierra esta línea, sitúan estos hallazgos dentro de un panorama más amplio de magnetoliposomas en nanomedicina y señalan explícitamente que la microfluídica mejora la reproducibilidad frente a la hidratación de película delgada tradicional. Reyes Marín et al. (2026) retoman la cifra de tamaño de vesícula (150-200 nm, de nuevo monodispersas) para liposomas cargados con puntos de carbono, e identifican la relación de caudales (FRR 2:1) como el parámetro dominante de la encapsulación, con la geometría "Chambers" alcanzando ~90% de eficiencia.

La segunda línea, iniciada por la revisión de Rodríguez et al. (2023) sobre alternativas de bajo costo a la sala limpia, se dedica a la separación de partículas. Rodríguez et al. (HardwareX, 2023) logran 96.14% de precisión separando micropartículas de quitosano (15-40 µm) en un chip de PMMA ablacionado por láser. El dispositivo Zweifach-Fung de Rodríguez et al. (2024) —que cita explícitamente el paper anterior— alcanza 94% ± 3% de exactitud a un caudal óptimo de 2 mL/h, con chips de menos de USD 0.90 fabricados en 15 minutos. El siguiente trabajo del mismo año, sobre separación magnética en PMMA, cita a su vez ambos estudios previos y mejora el recall de nanopartículas del 50% (modelos anteriores) al 93.3% ± 4%, reutilizando el mismo caudal óptimo de 2 mL/h como punto de comparación directo entre estudios.

Las dos líneas convergen en el material: el grupo migra del PDMS por litografía blanda (2021-2022) hacia el PMMA por ablación láser como estándar de bajo costo, adoptado primero en la línea de separación (2023-2024) y luego también en la de encapsulación, con los micromezcladores de PMMA de Reyes Marín et al. (2026). El hilo conductor declarado en la revisión de 2023 —democratizar la microfluídica fuera de la sala limpia— se cumple después en cifras concretas: costos por chip inferiores a un dólar, tiempos de fabricación de minutos y precisión que iguala o supera a los sistemas comerciales.

## Notas que usan este concepto
- [[notes/papers/2020-11-05_peptidos-antimicrobianos-ia-microfluidica]]
- [[notes/papers/2021-09-02_microfluidica-encapsulacion-liposomal-nanobioconjugados]]
- [[notes/papers/2021-11-01_microfluidica-liposomas-gigantes-peptidos]]
- [[notes/papers/2022-02-01_magnetoliposomas-microfluidica-entrega-oral]]
- [[notes/papers/2023-04-27_microfluidica-dispositivos-bajo-costo]]
- [[notes/papers/2023-11-15_microfluidica-low-cost-separacion-particulas]]
- [[notes/papers/2024-07-22_zweifach-fung-microfluidica-separacion]]
- [[notes/papers/2024-08-22_separacion-magnetica-microfluidica-pmma]]
- [[notes/papers/2025-05-12_magnetoliposomas-nanomedicina]]
- [[notes/papers/2026-04-08_microfluidica-liposomas-carbon-dots]]
