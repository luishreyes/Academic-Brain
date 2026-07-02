---
title: "Labor market impacts of AI: A new measure and early evidence"
authors: ["Maxim Massenkoff", "Peter McCrory"]
year: 2026
journal: Anthropic (Economic Index)
url: https://www.anthropic.com/research/labor-market-impacts
doi:
pdf_local: sources/pdfs/ai-science-society/massenkoff-mccrory_2026_labor-market-impacts-ai.pdf
type: paper
keywords: [futuro-del-trabajo, inteligencia-artificial, capacidades-de-ia, adopcion-de-tecnologia, exposicion-laboral-a-la-ia, desigualdad-de-genero]
date_added: 2026-07-02
---

# Labor market impacts of AI: A new measure and early evidence

## Resumen

Este reporte de investigación, publicado por Anthropic el 5 de marzo de 2026, propone un nuevo marco para medir el impacto de la IA en el mercado laboral estadounidense y lo pone a prueba con datos tempranos. Los autores parten de una crítica a los enfoques previos de predicción de disrupción laboral (offshoring, robots industriales, el "China shock"), cuyo historial de precisión ha sido mediocre, y argumentan que conviene establecer una metodología ahora, antes de que los efectos de la IA sean evidentes, en lugar de analizarlos retrospectivamente.

El aporte central es una nueva métrica, "observed exposure" (exposición observada), que combina tres fuentes: la base de datos O*NET de tareas ocupacionales, las estimaciones teóricas de exposición a nivel de tarea de Eloundou et al. (2023) —que indican si un LLM podría en teoría duplicar la velocidad de una tarea— y datos reales de uso de Claude provenientes del Anthropic Economic Index. A diferencia de las métricas puramente teóricas, esta medida pondera más el uso automatizado que el augmentativo y exige evidencia real de uso laboral, no solo posibilidad técnica. Los autores muestran que la capacidad teórica de la IA supera ampliamente su uso real: por ejemplo, en la categoría "Computer & Math" el 94% de las tareas son teóricamente automatizables según Eloundou et al., pero Claude solo cubre el 33% en la práctica. Programadores, representantes de servicio al cliente y analistas financieros resultan las ocupaciones más expuestas, mientras que un 30% de los trabajadores tiene exposición nula (cocineros, mecánicos de motocicletas, salvavidas, bartenders, entre otros).

El reporte cruza esta medida con las proyecciones de crecimiento ocupacional 2024-2034 de la Oficina de Estadísticas Laborales de EE.UU. (BLS), encontrando una asociación débil pero significativa: por cada 10 puntos porcentuales de mayor exposición observada, la proyección de crecimiento del BLS cae 0.6 puntos. También caracteriza demográficamente a los trabajadores más expuestos usando la Current Population Survey (CPS): son más propensos a ser mujeres, blancos o asiáticos, tener mayor educación y ganar 47% más en promedio que los trabajadores no expuestos.

Finalmente, los autores estudian el desempleo como resultado prioritario mediante un diseño de diferencias en diferencias, comparando trabajadores en el cuartil más expuesto contra el grupo sin exposición, desde 2016 hasta la actualidad. No encuentran un aumento sistemático del desempleo en las ocupaciones más expuestas desde el lanzamiento de ChatGPT (noviembre 2022), aunque sí hallan evidencia sugestiva —débilmente significativa— de una desaceleración en la contratación de trabajadores jóvenes (22-25 años) en ocupaciones altamente expuestas, un hallazgo que hace eco de resultados previos de Brynjolfsson et al. (2025). Los autores presentan esto como un primer paso hacia un monitoreo periódico y actualizable del impacto laboral de la IA, reconociendo limitaciones metodológicas y anticipando actualizaciones futuras.

## Contribuciones principales

- Introduce "observed exposure", una nueva métrica de riesgo de desplazamiento laboral por IA que combina capacidad teórica de los LLM (Eloundou et al. 2023) con datos reales de uso profesional (Anthropic Economic Index), ponderando más el uso automatizado que el augmentativo.
- Documenta empíricamente la brecha entre lo que la IA podría hacer en teoría y lo que efectivamente hace en el mundo laboral, mostrando que la adopción real va muy por detrás de la capacidad técnica.
- Valida la nueva métrica contra una fuente independiente (proyecciones de empleo del BLS 2024-2034), encontrando una correlación negativa débil pero estadísticamente sólida.
- Caracteriza el perfil demográfico (género, raza, educación, ingresos) de los trabajadores en ocupaciones más expuestas a la IA usando la Current Population Survey.
- Aporta evidencia temprana sobre desempleo y contratación mediante un diseño de diferencias en diferencias, aplicado tanto a la fuerza laboral general como específicamente a trabajadores jóvenes.

## Metodología

Los autores construyen la medida de exposición a nivel de tarea combinando (1) la taxonomía de tareas por ocupación de O*NET (~800 ocupaciones en EE.UU.), (2) el puntaje teórico β de Eloundou et al. (2023, arXiv:2303.10130), que clasifica cada tarea como plenamente automatizable, automatizable con herramientas adicionales, o no automatizable, y (3) datos de uso real de Claude de los últimos cuatro reportes del Anthropic Economic Index (agosto y noviembre de 2025). Cada tarea se considera "cubierta" si presenta uso laboral suficiente en el tráfico de Claude, con peso completo para implementaciones automatizadas y medio peso para uso augmentativo; los puntajes de tarea se agregan a nivel ocupacional ponderando por la fracción de tiempo dedicado a cada tarea. Para el análisis de resultados laborales, los autores usan datos de la Current Population Survey (CPS) desde 2016, comparando el cuartil de mayor exposición contra el 30% de trabajadores con exposición nula, mediante un diseño de diferencias en diferencias centrado en la tasa de desempleo y, para trabajadores de 22 a 25 años, en la tasa mensual de inicio de nuevos empleos. Cruzan además su medida con las proyecciones ocupacionales 2024-2034 del BLS mediante una regresión ponderada por nivel de empleo actual.

## Hallazgos clave

- 68% del uso observado de Claude corresponde a tareas calificadas por Eloundou et al. como plenamente automatizables (β=1), y solo 3% a tareas no automatizables (β=0); el 97% del uso cae en categorías teóricamente factibles.
- La IA está lejos de alcanzar su capacidad teórica: en la categoría Computer & Math, 94% de las tareas son teóricamente automatizables pero Claude cubre solo 33% en la práctica; en Office & Admin la brecha es similar (90% teórico).
- Las ocupaciones más expuestas son Programadores de Computadoras (75% de cobertura), Representantes de Servicio al Cliente y Capturistas de Datos (67%).
- Mayor exposición observada se asocia con proyecciones de crecimiento de empleo ligeramente menores según el BLS (-0.6 puntos porcentuales de crecimiento proyectado por cada 10 puntos de exposición); esta correlación no aparece al usar solo la medida teórica de Eloundou et al., lo que sugiere que la medida de uso real aporta información adicional.
- Los trabajadores del cuartil más expuesto son 16 puntos porcentuales más propensos a ser mujeres, 11 puntos más propensos a ser blancos, casi el doble de propensos a ser asiáticos, ganan 47% más en promedio, y tienen posgrado en 17.4% de los casos frente a 4.5% en el grupo no expuesto.
- No se observa un aumento sistemático del desempleo en el grupo más expuesto desde el lanzamiento de ChatGPT (finales de 2022) hasta la fecha; el cambio en la brecha de desempleo entre grupos es pequeño y estadísticamente no significativo.
- Existe evidencia sugestiva (débilmente significativa) de una caída de 14% en la tasa de contratación de trabajadores de 22-25 años en ocupaciones altamente expuestas respecto a 2022, sin un efecto equivalente en trabajadores mayores de 25 años.

## Limitaciones

- Los propios autores reconocen que su enfoque no captura todos los canales por los que la IA podría transformar el mercado laboral, y que el historial de metodologías similares (offshoring, robots, choque comercial con China) ha sido de precisión predictiva limitada.
- La medida de Eloundou et al. refleja capacidades de LLM de comienzos de 2023, por lo que puede estar desactualizada respecto a los modelos actuales.
- El umbral de "uso suficiente" para considerar una tarea cubierta, la ponderación entre uso automatizado y augmentativo, y otros parámetros del método involucran decisiones de diseño (juicios) que podrían afectar los resultados, aunque los autores reportan alta correlación de rangos (Spearman) entre distintas especificaciones.
- Los datos de uso provienen exclusivamente de la plataforma Claude/Anthropic, lo que puede no representar el uso agregado de IA en la economía (otros proveedores, herramientas internas de empresas, etc.).
- La caída en la contratación de trabajadores jóvenes es "apenas" estadísticamente significativa y admite explicaciones alternativas (permanencia en el empleo actual, cambio a otro tipo de puesto, regreso a estudios, o error de medición en transiciones laborales dentro de la encuesta CPS).
- El estudio es observacional y de corto plazo (los efectos post-ChatGPT llevan poco más de tres años de evolución), por lo que los autores enfatizan que sus conclusiones son preliminares y sujetas a actualización periódica.

## Notas relacionadas

- [[concepts/futuro-del-trabajo]]
- [[concepts/inteligencia-artificial]]
- [[concepts/capacidades-de-ia]]
- [[concepts/adopcion-de-tecnologia]]
- [[concepts/exposicion-laboral-a-la-ia]]
- [[concepts/desigualdad-de-genero]]
