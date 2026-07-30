---
title: "Transient pores account for cell-penetrating peptide and homeoprotein translocation"
authors: [Evgeniya Trofimenko, Nicolas Gervasi, Sylvie Perez, Nicolas Rodriguez, Delphine Ravault, Sophie Cribier, Hugues Berry, Laurent Venance, Sandrine Sagan]
year: 2026
journal: "Proceedings of the National Academy of Sciences"
url: "https://doi.org/10.1073/pnas.2602649123"
doi: "10.1073/pnas.2602649123"
pdf_ref: trofimenko2026-poros-transitorios-cpp.pdf
sha256: a758882bf9f63ef87fd0bc8c7ff098d3055022868365f8eb9bfd02b68d3c1755
type: paper
keywords: [peptidos-bioactivos, biologia-molecular, desarrollo-de-farmacos, nanomedicina, neurociencia, biofisica-de-membranas, electrofisiologia]
date_added: 2026-07-07
---

# Transient pores account for cell-penetrating peptide and homeoprotein translocation

## Resumen

Este artículo en PNAS resuelve un debate de larga data sobre cómo los péptidos penetradores de células (CPPs) y las homeoproteínas (HPs) cruzan la membrana plasmática por translocación directa, un mecanismo distinto de la endocitosis. Mediante un novedoso protocolo de doble patch-clamp en célula única, los autores demuestran que los CPPs (Tat, R9, penetratina y R6W3) y las HPs (En2 y Otx2) forman poros transitorios submilisegundo en la membrana celular, con una duración de ~500-800 µs — entre 1,000 y 40,000 veces más rápidos que cualquier proceso de endocitosis conocido.

El abordaje electrofisiológico combina una pipeta en configuración whole-cell para controlar el potencial de membrana y una segunda pipeta en configuración cell-attached conteniendo el CPP/HP para monitorear corrientes iónicas unitarias. Los experimentos fueron realizados en células CHO-K1 y derivadas, y en neuronas piramidales de corteza somatosensorial de ratón en rebanadas cerebrales agudas. Los resultados muestran que la hiperpolarización de la membrana potencia dramáticamente la translocación (10-100×), mientras que la despolarización tiene efecto mínimo. Crucialmente, los glicosaminoglicanos (GAGs) de superficie celular son obligatorios para la formación de poros: en células pgsA-745 (deficientes en GAGs) las corrientes inducidas por CPPs se redujeron drásticamente, mientras que en células SKOV3 (sobreexpresión de GAGs) se incrementaron. La translocación se confirmó por microscopía de dos fotones a 22 °C, entrega de un cargo tóxico (KRAKLAK) al citosol, y registros electrofisiológicos a 11 °C (temperatura que abole la endocitosis).

## Contribuciones principales

- Desarrollo de un protocolo de doble patch-clamp que permite resolver eventos de translocación a escala submilisegundo en células individuales
- Demostración de que CPPs y HPs forman poros transitorios de ~0.5 nm de radio con duración de 500-800 µs
- Evidencia de que la hiperpolarización potencia supralinealmente la translocación (10-100×), reclutando un pool extra de poros
- Demostración de que los GAGs son obligatorios para la translocación y que su ausencia no puede compensarse con hiperpolarización fuerte
- Validación del mecanismo en neuronas piramidales corticales de ratón, demostrando relevancia fisiológica

## Metodología

Electrofisiología de doble patch-clamp en célula única: pipeta whole-cell (voltage-clamp, control del potencial) + pipeta cell-attached (conteniendo CPP/HP, detección de corrientes transitorias). Tasa de muestreo: 20 kHz. Análisis bayesiano para extracción de parámetros cinéticos (p_on, p_off). Microscopía de dos fotones con CF-R6W3. Ensayos de citotoxicidad con cargo KRAKLAK conjugado a R6W3. Modelos celulares: CHO-K1, pgsA-745 (GAGs reducidos), SKOV3 (GAGs sobreexpresados), neuronas piramidales corticales en rebanadas cerebrales agudas de ratón (P50-60).

## Hallazgos clave

- Todos los CPPs excepto R6L3 (control negativo) generan corrientes transitorias detectables desde concentraciones nanomolares (R6W3: 10 nM)
- Las amplitudes de eventos unitarios son similares entre CPPs (~2-3 pA) y la duración de los poros no difiere significativamente (ANOVA, P = 0.087)
- Las HPs (En2, Otx2) muestran el mismo mecanismo de translocación pero requieren concentraciones ~100-1000× mayores que sus CPPs derivados
- A 11 °C (endocitosis abolida), los poros se forman con menor frecuencia pero con duración idéntica, confirmando que no son eventos endocíticos
- R6W3-KRAKLAK transloca vía poros transitorios y ejerce efectos citotóxicos, demostrando entrega funcional de cargo
- Los GAGs actúan como pieza faltante del mecanismo: concentran los CPPs cerca del core hidrofóbico de la membrana al interactuar con los grupos colina de los fosfolípidos

## Limitaciones

- La técnica de cell-attached contacta ~1 µm² de membrana, lo que limita la extrapolación cuantitativa a la célula completa
- Los registros en rebanadas cerebrales se limitaron a neuronas piramidales de corteza somatosensorial; otros tipos neuronales podrían comportarse diferentemente
- La identidad lipídica dentro del poro o en su entorno inmediato requiere investigación adicional
- El radio estimado del poro (~0.5 nm) es un cálculo basado en conductividad, no una medición directa estructural

## Notas relacionadas

- [[concepts/peptidos-bioactivos]]
- [[concepts/biologia-molecular]]
- [[concepts/desarrollo-de-farmacos]]
- [[concepts/nanomedicina]]
- [[concepts/neurociencia]]
- [[concepts/biofisica-de-membranas]]
- [[concepts/electrofisiologia]]
