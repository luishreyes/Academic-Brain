---
title: "Determination of precise harmonic force constants for alanine polypeptides"
authors: ["Luis H. Reyes", "Jorge M. Seminario"]
year: 2007
journal: "Journal of Molecular Structure: THEOCHEM"
url: https://doi.org/10.1016/j.theochem.2007.05.015
doi: 10.1016/j.theochem.2007.05.015
pdf_local: sources/pdfs/nanomedicine-drug-delivery/reyes2007-force-constants-alanine.pdf
type: paper
keywords: [quimica-computacional, modelado-molecular, bioquimica-computacional, nanociencia, ingenieria-quimica]
date_added: 2026-06-26
---

# Determination of precise harmonic force constants for alanine polypeptides

## Resumen

Este trabajo presenta un campo de fuerzas armónico de alta precisión para polipéptidos de alanina, derivado directamente del tensor Hessiano de cálculos de teoría del funcional de la densidad (DFT). Usando el funcional híbrido B3PW91/6-31G* en Gaussian-03 y el software FUERZA para extraer constantes de fuerza a partir de derivadas segundas cartesianas, los autores calcularon parámetros de enlace y ángulo para péptidos de alanina de distintos tamaños (heptámero, octámero y nonámero). El método no requiere ajuste empírico de parámetros: las constantes emergen directamente de la estructura electrónica calculada.

Los resultados muestran desviaciones estándar pequeñas entre los valores de constantes de fuerza para polipéptidos de distinta longitud, confirmando la consistencia interna del campo. Al comparar con AMBER y el Manual CRC, se encuentra que AMBER subestima sistemáticamente las constantes, mientras que el CRC reporta valores generalmente superiores; todos coinciden en que el enlace C=O doble tiene la constante más alta. Este campo de fuerzas de primeros principios reproduce el espectro vibracional de los polipéptidos y sirve de base para simulaciones de dinámica molecular orientadas a la transferencia de información a escala nanométrica.

## Contribuciones principales

- Campo de fuerzas armónico para alanina derivado directamente del tensor Hessiano DFT sin procedimientos de ajuste empírico
- Implementación mediante el programa FUERZA con el funcional B3PW91/6-31G*
- Comparación sistemática con AMBER y CRC: AMBER subestima, CRC sobreestima las constantes de enlace
- Parámetros consistentes across heptámero, octámero y nonámero de alanina

## Metodología

Optimización de geometría con B3PW91/6-31G* en Gaussian-03 → cálculo del tensor Hessiano → extracción de constantes de fuerza internas con FUERZA mediante eigenanálisis de matrices de interacción por pares atómicos. Las constantes de ángulo se obtienen de las matrices de interacción de los dos enlaces que forman el ángulo. Los valores finales son promedios sobre heptámero, octámero y nonámero.

## Hallazgos clave

- Desviaciones estándar pequeñas en constantes de fuerza entre polipéptidos de distinto tamaño
- AMBER: constantes de enlace consistentemente inferiores a las DFT (hasta ~50% menor para C=O)
- El enlace C=O doble tiene la constante de fuerza más alta en todos los campos comparados
- El campo generado reproduce el espectro vibracional requerido para simulaciones de dinámica molecular

## Limitaciones

- Resultados limitados a polipéptidos de alanina; la transferibilidad a otras secuencias requiere validación
- Base 6-31G* es moderada; bases mayores podrían refinar los valores
- No incluye validación experimental directa de las constantes de fuerza

## Notas relacionadas

- [[concepts/quimica-computacional]]
- [[concepts/modelado-molecular]]
- [[concepts/bioquimica-computacional]]
- [[concepts/nanociencia]]
- [[concepts/ingenieria-quimica]]
