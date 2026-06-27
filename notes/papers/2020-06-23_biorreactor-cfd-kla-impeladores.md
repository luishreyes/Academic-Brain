---
title: "CFD and Experimental Characterization of a Bioreactor: Analysis via Power Curve, Flow Patterns and kLa"
authors: ["Luis A. Ramírez", "Edwar L. Pérez", "Cesar García Díaz", "Dumar Andrés Camacho Luengas", "Nicolas Ratkovich", "Luis H. Reyes"]
year: 2020
journal: Processes
url: https://doi.org/10.3390/pr8070878
doi: 10.3390/pr8070878
pdf_local: sources/pdfs/engineering-education/ramirez2020-biorreactor-cfd-kla.pdf
type: paper
keywords: [ingenieria-quimica, simulacion-computacional]
date_added: 2026-06-26
---

# CFD and Experimental Characterization of a Bioreactor: Analysis via Power Curve, Flow Patterns and kLa

## Resumen

Las operaciones de mezcla en procesos biológicos son críticas para el escalado y la transferencia de calor y masa. Este trabajo caracteriza un biorreactor de banco (bench-top) con distintas configuraciones de impeladores, velocidades de agitación y tasas de transferencia de oxígeno, combinando simulaciones CFD (dinámica de fluidos computacional) con experimentos. El objetivo es demostrar cómo el tipo de impelador y el régimen de flujo afectan drásticamente la operación del biorreactor.

El biorreactor con impelador tipo Rushton genera un kLa de 0.0056 s⁻¹ a 250 RPM y 5 L/min de aireación, con un consumo de energía considerable. Se demuestra que el diámetro del agitador es determinante: con propeladores de menor diámetro se reduce el consumo energético y la tasa máxima de cizalla. Los valores de kLa obtenidos para distintas configuraciones se comparan con los rangos máximos de cizalla tolerables por diferentes cultivos celulares, poniendo en perspectiva el impacto en aplicaciones biotecnológicas.

## Contribuciones principales

- Caracterización experimental + CFD de biorreactor de banco con múltiples configuraciones de impelador
- Determinación de kLa para distintas configuraciones y condiciones de agitación y aireación
- Análisis de consumo energético en función del diámetro y tipo de impelador
- Comparación de valores de cizalla con tolerancias de diferentes cultivos celulares para guía de diseño

## Metodología

Simulaciones CFD en ANSYS Fluent de biorreactor con distintos impeladores (Rushton, propeladores de distintos diámetros) → validación experimental de curvas de potencia y patrones de flujo → medición experimental de kLa → comparación entre configuraciones.

## Hallazgos clave

- Rushton (10 cm, 250 RPM, 5 L/min): kLa = 0.0056 s⁻¹; alto consumo energético
- Propeladores de menor diámetro: menor consumo energético, menor cizalla máxima (0.723 vs. 2.376 s⁻¹)
- El tipo de impelador y el régimen de flujo afectan drásticamente el kLa y la cizalla
- Los resultados CFD validados por experimentos ofrecen herramienta de diseño confiable
- Impacto directo en diseño de biorreactores para procesos biotecnológicos sensibles a la cizalla

## Limitaciones

- Estudio en biorreactor de banco; el escalado a nivel industrial puede cambiar los patrones de flujo
- Los modelos CFD utilizan simplificaciones (fluido newtoniano, geometría ideal) que pueden diferir en caldos reales
- No se evaluaron cultivos celulares reales; los valores de cizalla se comparan con datos de literatura

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
