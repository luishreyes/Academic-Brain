---
title: "Why you shouldn't fully trust ChatGPT: A synthesis of this AI tool's error rates across disciplines and the software engineering lifecycle"
authors: [Vahid Garousi]
year: 2025
journal: 
url: 
doi: 
pdf_local: sources/pdfs/capability-reliability/garousi_2025_chatgpt-error-rates-mlr.pdf
type: paper
keywords: [capacidades-de-ia, inteligencia-artificial, alucinaciones-de-ia, supervision-humana, revision-sistematica-de-literatura, educacion-en-programacion, pensamiento-critico, etica-de-la-ia]
date_added: 2026-06-27
---

# Why you shouldn't fully trust ChatGPT: A synthesis of this AI tool's error rates across disciplines and the software engineering lifecycle

## Resumen

El estudio sintetiza y cuantifica las tasas de error reportadas de ChatGPT (y otros LLM) a través de distintos dominios profesionales y de las fases del ciclo de vida de desarrollo de software (SDLC). Mediante una Revisión Multivocal de Literatura (Multivocal Literature Review, MLR), el autor agrega evidencia empírica de estudios académicos, reportes técnicos, benchmarks de la industria y literatura gris reputada publicada hasta marzo de 2025, abarcando las versiones GPT-3.5, GPT-4, GPT-4-turbo y GPT-4o. Cuando los estudios reportaban exactitud en lugar de error, esta se infirió como (100% − exactitud %).

Los resultados muestran que las tasas de error varían sustancialmente por dominio y versión del modelo. En salud, el error osciló entre 8% y 83%, con un pico en el diagnóstico de enfermedades raras (hasta 83%). En negocios y economía, el salto de GPT-3.5 a GPT-4 redujo notablemente los errores (por ejemplo, exámenes de contabilidad CPA: de ~47% a ~15%). En ingeniería, GPT-4 promedió un error del 20-30%. En ciencias de la computación, la tasa de éxito en programación alcanzó hasta 87.5%, pero las tareas de depuración complejas y las preguntas reales tipo Stack Overflow revelaron errores superiores al 50%.

En el ámbito específico de la ingeniería de software, las fases tempranas del SDLC (requisitos y diseño) mostraron las tasas de error más bajas (~5-20%), mientras que la implementación (codificación), las pruebas y el mantenimiento exhibieron mayor variabilidad (~10-50%). Un hallazgo transversal preocupante es que los usuarios tienden a sobrestimar la corrección de ChatGPT por su estilo de salida fluido y seguro; en foros de programación, respuestas incorrectas fueron calificadas como de alta calidad.

La conclusión central es que, pese a las mejoras consistentes de las versiones más recientes, ChatGPT mantiene tasas de error no despreciables que dependen del dominio, la complejidad de la tarea y la fase de uso. Sus salidas deben tratarse como borradores o artefactos asistivos, no como resultados finales autoritativos, y su despliegue en contextos críticos exige supervisión humana, validación crítica y evaluación continua.

## Contribuciones principales

- Síntesis consolidada y basada en evidencia de las tasas de error reportadas de ChatGPT a través de cinco dominios (salud, negocios, economía, ingeniería, ciencias de la computación) y cinco fases del SDLC.
- Cuantificación comparativa del efecto de las actualizaciones de versión (GPT-3.5 → GPT-4 → GPT-4-turbo/GPT-4o), mostrando reducciones consistentes pero no uniformes del error.
- Mapeo de la confiabilidad de ChatGPT a las fases del ciclo de vida del software, distinguiendo tareas de redacción estructurada de tareas de resolución de problemas sensibles al contexto.

## Metodología

Revisión Multivocal de Literatura (MLR): combina sistemáticamente publicaciones académicas y literatura gris (reportes técnicos, blogs, white papers de la industria, noticias reputadas). Búsqueda en IEEE Xplore, ACM Digital Library, SpringerLink y arXiv, además de fuentes grises (blogs de OpenAI, evaluaciones de empresas, competencias de benchmarks). Criterios de inclusión: estudios que evalúen cuantitativamente las salidas de ChatGPT (% de exactitud, error o tasas de aprobación) por dominio o tarea, mencionando la versión del modelo cuando fuera posible. Se excluyeron LLM no-OpenAI (salvo comparación directa) y piezas de opinión sin medición empírica. Los datos se agruparon por dominio y por fase del SDLC y se visualizaron mediante boxplots.

## Hallazgos clave

- Las actualizaciones de modelo reducen el error de forma consistente (p. ej., contabilidad CPA: ~47% → ~15%; economía: de calificación D a A).
- La variabilidad por dominio es alta: el diagnóstico de enfermedades raras en salud supera el 80% de error, mientras tareas estructuradas de programación bajan a ~10-20%.
- En el SDLC, requisitos y diseño exhiben error bajo (~5-20%); implementación, pruebas y mantenimiento, error más alto y variable (~10-50%).
- Riesgo de sobreconfianza: la fluidez y seguridad del estilo de salida lleva a los usuarios a sobrestimar la corrección; respuestas incorrectas son percibidas como útiles.
- El diseño de la tarea importa: la ingeniería de prompts reduce el error; consultas vagas o abiertas aumentan alucinaciones.
- El comportamiento del modelo no es estático: un estudio de Stanford observó que la calidad de generación de código de GPT-4 disminuyó meses después de su lanzamiento, lo que obliga a evaluación continua.

## Limitaciones

- Sesgo de búsqueda y selección: riesgo de omitir estudios relevantes, especialmente evaluaciones recientes no publicadas o internas de la industria; la literatura gris varía en rigor metodológico.
- Inconsistencias de reporte: los estudios primarios usaron metodologías, formatos de tarea y métricas distintos; en varios casos las tasas de error tuvieron que inferirse, introduciendo sesgo de interpretación.
- Ambigüedad de versión: no todos los estudios especificaron claramente la versión de ChatGPT, lo que obligó a inferirla por fecha o contexto.
- Validez temporal: las tasas reflejan el desempeño hasta inicios de 2025 y pueden no capturar versiones futuras.
- Subjetividad en la categorización de errores y posible sesgo de publicación (éxitos y fracasos notables se reportan más que el desempeño rutinario).

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/revision-sistematica-de-literatura]]
- [[concepts/educacion-en-programacion]]
- [[concepts/pensamiento-critico]]
- [[concepts/etica-de-la-ia]]
