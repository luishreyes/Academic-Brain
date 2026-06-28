---
title: "Undergraduate students' learning outcomes with ChatGPT: A meta-analytic study"
authors: ["Fangfang Mo", "Jing Huang", "Yao Yang", "Zafer F. Ozen", "Yukiko Maeda", "F. Richard Olenchak"]
year: 2026
journal: "Computers and Education: Artificial Intelligence"
url: https://doi.org/10.1016/j.caeai.2025.100536
doi: 10.1016/j.caeai.2025.100536
pdf_local: sources/pdfs/learning-impact-evidence/mo_2026_undergrad-chatgpt-metaanalysis.pdf
type: paper
keywords: [inteligencia-artificial, educacion-superior, retroalimentacion-con-ia, capacidades-de-ia, revision-sistematica-de-literatura, evaluacion-educativa, motivacion-y-compromiso-estudiantil, equidad-educativa, integridad-academica, STEM]
date_added: 2026-06-28
---

# Undergraduate students' learning outcomes with ChatGPT: A meta-analytic study

## Resumen

Este estudio es un meta-análisis que evalúa el efecto de las aplicaciones de ChatGPT sobre los resultados de aprendizaje de estudiantes universitarios de pregrado. A partir de una búsqueda en nueve bases de datos académicas (APA PsycArticles, ERIC, Education Full Text, Education Source, Google Scholar, ProQuest, PsycINFO, SCOPUS y Web of Science) de estudios publicados entre el 1 de enero de 2023 y el 31 de mayo de 2025, los autores identificaron 5555 estudios potenciales, de los cuales 66 cumplieron los criterios de inclusión predefinidos. La síntesis incorporó 129 tamaños de efecto derivados de 5708 casos, cubriendo una amplia variedad de disciplinas académicas.

El hallazgo central es que las aplicaciones de ChatGPT tuvieron un efecto positivo grande sobre los resultados de aprendizaje del pregrado: el tamaño de efecto promedio ponderado fue Hedges' g = 1.14 (SE = 0.185; IC 95% [0.77, 1.51]; p < .01), superando el umbral convencional de Cohen para efectos grandes (g > 0.8). Las pruebas de sensibilidad mostraron que la estimación se mantenía estable (g ≈ 1.14) bajo distintos supuestos de correlación intra-estudio (ρ = 0 a 0.9). No obstante, la heterogeneidad fue muy alta (I² = 97.62%, τ² = 1.92), con tamaños de efecto individuales que oscilaron entre −4.04 y 11.69.

El estudio se enmarca en el Integrative AI in Education (IAIE) Framework, que conceptualiza la integración de la IA en tres niveles (orientado al estudiante, al instructor y al sistema institucional). El análisis de moderadores —mediante Robust Variance Estimation (RVE) con correcciones de muestra pequeña— examinó cuatro variables: tipo de estudio, exposición previa a ChatGPT, áreas de estudio (majors) y presencia o ausencia de orientación (guidance) en el uso de la herramienta. Solo la exposición previa moderó significativamente la heterogeneidad (F = 3.59, p = .04): los estudios donde los participantes no tenían exposición previa mostraron los efectos más grandes (g = 1.73). Tipo de estudio, área disciplinar y presencia de orientación no fueron moderadores estadísticamente significativos, aunque se observó una tendencia (no confirmada) a efectos mayores en disciplinas STEM (g = 1.81).

Los autores advierten sobre la presencia de sesgo de publicación: la prueba de Egger para asimetría del funnel plot fue significativa (z = 9.06, p < .001), y los estudios con muestras pequeñas tendieron a reportar efectos positivos desproporcionadamente grandes. Pese a ello, concluyen que la evidencia disponible respalda en conjunto una experiencia globalmente positiva del estudiantado con ChatGPT, ofreciendo insumos para educadores, administradores y responsables de políticas que buscan integrar la IA en los currículos.

## Contribuciones principales

- Estimación cuantitativa agregada del efecto de ChatGPT sobre los resultados de aprendizaje del pregrado (Hedges' g = 1.14, efecto grande), basada en la síntesis más extensa hasta la fecha (66 estudios, 129 tamaños de efecto, 5708 casos).
- Análisis de moderadores que identifica la exposición previa a ChatGPT como el único factor que modera significativamente la variabilidad de los efectos.
- Aplicación del Integrative AI in Education (IAIE) Framework como marco teórico para interpretar la integración de la IA en educación.
- Comparación sistemática con meta-análisis previos (He & Cordie 2024, d = 0.60; Liu et al. 2025, g = 0.577; Chen & Xu 2024, g = 0.254; Wang & Fan 2025, g = 0.867), situando su estimación como la más alta y de mayor cobertura.

## Metodología

Meta-análisis siguiendo el protocolo PRISMA 2020. Búsqueda booleana en nueve bases de datos; cribado gestionado con Rayyan; fiabilidad entre codificadores superior al 90%. El tamaño de efecto común fue Hedges' g (con corrección de sesgo de muestra pequeña sobre Cohen's d). Los estudios con diseño de medidas repetidas (pre-/post) se convirtieron a métrica de grupos independientes mediante la fórmula de Morris y DeShon (2002). Se aplicó un modelo de efectos aleatorios con ponderación por inverso de la varianza, Robust Variance Estimation (RVE) para tamaños de efecto dependientes, prueba Q de Cochran e I² para heterogeneidad, y prueba de Egger para sesgo de publicación. Análisis realizados en R con los paquetes Metafor y Robumeta.

## Hallazgos clave

- Efecto global grande y positivo: Hedges' g = 1.14 (IC 95% [0.77, 1.51]), estable ante variaciones de ρ.
- Heterogeneidad extrema entre estudios (I² = 97.62%), con tamaños de efecto entre −4.04 y 11.69.
- La exposición previa modera el efecto: sin exposición previa, g = 1.73 (el efecto mayor); exposición mixta o no especificada se asoció con efectos menores.
- Tipo de estudio (cuantitativo vs. métodos mixtos), área disciplinar y presencia de orientación NO moderaron significativamente los efectos.
- Tendencia (no significativa) a efectos mayores en STEM (g = 1.81) frente a no-STEM.
- Evidencia de sesgo de publicación (prueba de Egger, z = 9.06, p < .001).

## Limitaciones

- Sesgo de publicación detectado: los estudios pequeños sobrerrepresentan efectos grandes, lo que puede inflar la estimación agregada.
- Heterogeneidad residual muy alta (I² > 94%) no explicada por los moderadores analizados, lo que sugiere moderadores no medidos.
- Inclusión limitada a estudios en inglés y a población de pregrado a tiempo completo (excluye K-12, posgrado y estudiantes a tiempo parcial).
- Muchos tamaños de efecto provienen de muestras pequeñas y diseños heterogéneos; codificación de variables como "majors" o "guidance" con alta proporción de "no especificado".
- Mide resultados de aprendizaje a corto plazo; no aborda efectos de largo plazo ni riesgos como la dependencia excesiva.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/evaluacion-educativa]]
- [[concepts/motivacion-y-compromiso-estudiantil]]
- [[concepts/equidad-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/STEM]]
