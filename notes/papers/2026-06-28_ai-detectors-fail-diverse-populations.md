---
title: "AI Detectors Fail Diverse Student Populations: A Mathematical Framing of Structural Detection Limits"
authors: [N.A. Garland]
year: 2026
journal: arXiv preprint (arXiv:2603.06262)
url: https://arxiv.org/abs/2603.06262
doi:
pdf_local: sources/pdfs/integrity-by-design/garland_2026_structural-detection-limits.pdf
type: paper
keywords: [deteccion-de-texto-ia, integridad-academica, evaluacion-educativa, equidad-educativa, educacion-superior, inteligencia-artificial]
date_added: 2026-06-28
---

# AI Detectors Fail Diverse Student Populations: A Mathematical Framing of Structural Detection Limits

## Resumen

El paper ofrece una fundamentación matemática de por qué los detectores de texto generado por IA producen altas tasas de falsos positivos, con errores desproporcionados contra ciertas poblaciones estudiantiles (en particular hablantes de inglés como segunda lengua). El argumento central es que el trabajo teórico previo modela la detección como una prueba binaria entre dos distribuciones conocidas —una "humana" (pH) y una "de IA" (pM)—, pero esa formulación ignora un rasgo estructural de la evaluación universitaria: el evaluador no conoce la distribución de escritura del estudiante individual. Esto convierte la hipótesis nula en una hipótesis nula *compuesta*: el documento fue escrito por el estudiante i, cuya distribución pθi es desconocida.

A partir de la desigualdad variacional de la distancia de variación total (TV), el autor deriva tres resultados que cualquier detector de texto, de un solo intento (one-shot) y basado solo en texto, debe enfrentar. El Resultado 1 (compromiso promedio tamaño-potencia) muestra que si una fracción π(Θ*) de estudiantes escribe de forma cercana a la IA (dentro de una distancia TV δ), un detector con potencia β0 incurre en una tasa de falsos positivos promedio ≥ π(Θ*)·(β0 − δ). El Resultado 2 (protección en el peor caso) establece que si la universidad exige que ningún estudiante supere una FPR α0, la potencia del detector queda acotada por β ≤ α0 + δ*, donde δ* es la distancia TV al escritor humano más cercano a la IA. El Resultado 3 (cota de mezcla por subgrupos) conecta estas cantidades abstractas con subgrupos demográficos observables, mostrando que si la escritura agregada de un subgrupo está cerca de la salida de IA, cualquier detector con potencia útil producirá una FPR alta para ese subgrupo.

La tesis epistemológica clave es que la diversidad poblacional constituye una barrera estructural a la detección que es lógicamente independiente de la calidad del modelo de IA. El paper distingue dos fuentes separadas de dificultad: (1) la convergencia de calidad de la IA (la escritura de IA se acerca a la humana a medida que mejoran los LLMs) y (2) la diversidad poblacional. La fuente 2 no puede resolverse con un mejor detector: ningún detector solo-texto y de un intento puede escapar al compromiso tamaño-potencia mientras exista solapamiento distribucional. Solo cambiar la estructura de información del problema (rediseño de la evaluación, evaluación basada en procesos, perfiles longitudinales de escritura) puede abordarla.

En el plano práctico, Garland propone un protocolo de auditoría estratificada de la FPR que las instituciones pueden implementar con datos existentes —evaluar la tasa de falsos positivos sobre corpus de texto humano confirmado, separados por subgrupos (L1 vs L2, programa, año, tipo de tarea)— y fijar umbrales por estrato en lugar de un único umbral institucional. La conclusión normativa es contundente: los puntajes de detección no deben usarse como evidencia única ni primaria en procedimientos de conducta académica.

## Contribuciones principales
- Reformula la detección universitaria de IA como una prueba de hipótesis con **nula compuesta**, haciendo explícito un rasgo estructural que el trabajo teórico previo (Sadasivan et al. 2023; Chakraborty et al. 2024) omite.
- Deriva tres cotas (promedio, peor caso, mezcla por subgrupos) que limitan a cualquier detector solo-texto y de un intento, usando únicamente la desigualdad variacional de la distancia TV.
- Separa conceptualmente dos fuentes independientes de dificultad de detección: convergencia de calidad de IA vs. diversidad poblacional, con implicaciones de política distintas para cada una.
- Provee una explicación teórica para el sesgo documentado empíricamente contra hablantes no nativos (Liang et al. 2023; Hadra et al. 2026).
- Propone un protocolo concreto de auditoría estratificada de FPR antes de desplegar cualquier detector.

## Metodología
Análisis teórico-matemático. La única herramienta es la desigualdad variacional de la distancia de variación total entre distribuciones de probabilidad: |EP[ϕ] − EQ[ϕ]| ≤ TV(P,Q). Se modela cada documento como una sola extracción (one-shot, n=1) de la distribución de escritura desconocida del estudiante, y se aplica esta desigualdad a la estructura de nula compuesta para obtener cotas de tamaño-potencia. Las pruebas formales de los tres teoremas se presentan en un apéndice. El autor enfatiza que no reclama resultados nuevos en teoría de pruebas de hipótesis; la contribución es la formalización aplicada, la separación conceptual de modos de fallo y la conexión con la práctica institucional.

## Hallazgos clave
- Ejemplo ilustrativo: con π(Θ*)=0.10, δ=0.05 y potencia β0=0.80, la FPR promedio mínima es ≥0.075; en una institución de 10.000 estudiantes implica ~750 falsas acusaciones, no por mal diseño sino por la estructura matemática del problema.
- En el peor caso, si δ*=0.05 y la universidad exige FPR<1%, la potencia del detector no puede superar 0.06 (detecta a lo sumo 6% de los textos de IA).
- La cota de subgrupos explica formalmente por qué Liang et al. (2023) hallaron que siete detectores clasificaron erróneamente el 61.3% de ensayos TOEFL de no nativos como generados por IA.
- La dependencia de tarea importa: tareas restringidas (p. ej. "resume este artículo en 500 palabras") aumentan el solapamiento humano-IA y hacen la detección estructuralmente más difícil; tareas abiertas/reflexivas la facilitan para la mayoría.
- La estimación de TV vía clasificadores solo da una **cota inferior** de TV, que va en la dirección equivocada para hacer informativa la cota de FPR; por eso se recomienda auditoría directa de FPR en lugar de estimar TV.

## Limitaciones
- Las cantidades de solapamiento (π(Θ*), δ) no son directamente observables ni estimables solo desde la teoría; los valores numéricos son ilustrativos, no predicciones cuantitativas.
- Modelo de documento único: trata cada entrega como una sola extracción, ignorando estructura interna del documento y datos longitudinales del estudiante.
- Alternativa de IA fija y formulación binaria (humano vs. IA): la frontera entre "generado por IA" y "asistido por IA" es un continuo, por lo que el problema puede estar parcialmente mal planteado en sus bordes.
- El alcance de la "barrera estructural" se limita al entorno solo-texto, de un intento; protocolos que cambian la estructura de información (múltiples muestras, perfiles de escritura) quedan fuera y pueden reducir el solapamiento efectivo.

## Notas relacionadas
- [[concepts/deteccion-de-texto-ia]]
- [[concepts/integridad-academica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/equidad-educativa]]
- [[concepts/educacion-superior]]
- [[concepts/inteligencia-artificial]]
