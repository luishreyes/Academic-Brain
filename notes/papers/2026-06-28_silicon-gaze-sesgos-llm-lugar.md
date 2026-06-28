---
title: "The silicon gaze: A typology of biases and inequality in LLMs through the lens of place"
authors: ["Francisco W. Kerche", "Matthew Zook", "Mark Graham"]
year: 2026
journal: "Platforms & Society"
url: https://journals.sagepub.com/home/pns
doi: 10.1177/29768624251408919
pdf_local: sources/pdfs/risks-overreliance-equity/kerche_2026_silicon-gaze-llm-place-bias.pdf
type: paper
keywords: [inteligencia-artificial, sesgo-algoritmico, etica-de-la-ia, procesamiento-de-lenguaje-natural, capacidades-de-ia]
date_added: 2026-06-28
---

# The silicon gaze: A typology of biases and inequality in LLMs through the lens of place

## Resumen

El artículo introduce el concepto de "mirada de silicio" (*silicon gaze*) para explicar cómo los grandes modelos de lenguaje (LLMs) reproducen y amplifican desigualdades espaciales históricas. Por analogía con la "mirada masculina" (*male gaze*) de la teoría feminista, los autores sostienen que la mirada de silicio no es neutral: está situada en las posiciones y asimetrías de poder de sus datos de entrenamiento, sus desarrolladores (predominantemente hombres, blancos y occidentales) y los dueños de las plataformas. Desde esta óptica, el sesgo no es una anomalía corregible sino un rasgo intrínseco de la IA generativa, enraizado en ecologías de datos históricamente desiguales y en decisiones de diseño.

La evidencia proviene de una auditoría a gran escala de ChatGPT: 20,3 millones de consultas emitidas (marzo-mayo 2025) contra la API de GPT-4o-mini, comparando geografías por pares a cuatro escalas espaciales (197 países, estados de EE. UU. y Brasil, ciudades del Reino Unido y EE. UU., y barrios de Londres, Nueva York y Río de Janeiro). Mediante prompts de elección forzada ("¿Qué país es más seguro, Alemania o Brasil?") sobre 311 comparaciones de subjetividad intermedia, los autores construyen rankings de geografías "preferidas" y "no preferidas". Las consultas más objetables (estupidez, fealdad, pereza, religión, tacañería) generaron las mayores tasas de empates y rechazos (~16% entre países), efecto que los autores atribuyen al aprendizaje por refuerzo con retroalimentación humana (RLHF) que actúa como filtro de las salidas.

A partir de los datos, el aporte central es una tipología de cinco sesgos de la mirada de silicio. (1) **Sesgo de disponibilidad**: privilegio estructural de datos fáciles de rastrear e indexar (fuentes en inglés, del Norte Global, institucionalmente codificadas); Francia encabeza rankings de "más artístico" y "mejor pan", mientras África subsahariana y la Península Arábiga quedan al fondo pese a tradiciones ricas. (2) **Sesgo de patrón**: el motor de predicción del siguiente token alinea su salida con las regularidades lingüísticas modales ("Finlandeses inteligentes"), reproduciendo jerarquías socioeconómicas y raciales (p. ej., estados ricos del sur de Brasil rankeados como "más inteligentes"). (3) **Sesgo de promediado**: condensa fuentes heterogéneas en un punto medio agradable, aplanando matices; Irán encabeza "mejor poesía" por el meme cultural de Rumi/Hafez, y el Sáhara Occidental cae por metadatos escasos confundidos con silencio cultural. (4) **Sesgo de trope**: recicla estereotipos culturales superficiales pero familiares ("suecos altos y rubios", tacañería de escoceses) que sortean los filtros de moderación por no ser abiertamente odiosos. (5) **Sesgo de proxy**: sustituye cualidades subjetivas por indicadores cuantificables (sitios UNESCO, estrellas Michelin), instaurando una lógica de ranking tecnocrática que favorece lugares ya auditados por organismos internacionales.

Los autores enmarcan estos hallazgos en los estudios críticos de datos y la geografía digital, conectándolos con trabajos previos sobre "inmutables móviles" (Latour), "agujeros negros del capitalismo informacional" (Castells) y la cartografía como instrumento de poder colonial (Harley). Su conclusión es deliberadamente política: no se trata de "arreglar" las respuestas de la IA con más datos o mejores métricas, sino de confrontar las relaciones estructurales de poder que vuelven el sesgo inevitable y que el poder de las plataformas perpetúa.

## Contribuciones principales

- Acuña el concepto de **mirada de silicio** (*silicon gaze*) como lente crítica situada para analizar cómo los sistemas de IA "ven" y representan las geografías.
- Aporta una **auditoría empírica masiva** (20,3 millones de consultas) de ChatGPT a cuatro escalas espaciales, simulando el comportamiento ordinario de usuarios mediante comparaciones por pares.
- Desarrolla una **tipología de cinco sesgos** (disponibilidad, patrón, promediado, trope, proxy) que conecta con definiciones establecidas de sesgo (Mehrabi et al., 2021; Ferrara, 2023) y las extiende al dominio espacial.
- Argumenta que el sesgo es un **rasgo intrínseco e inextricable** de la IA generativa, no una anomalía corregible.

## Metodología

Auditoría algorítmica de modelo propietario mediante métodos basados en contenido. Se construyó un motor de consultas en Python sobre la API de GPT-4o-mini (elegido tras pruebas piloto que mostraron <3% de divergencia respecto a GPT-4o pero 20 veces menos costo). Un prompt mínimo de elección forzada obligaba al modelo a seleccionar una sola geografía en comparaciones por pares; cada par se consultó dos veces invirtiendo el orden (n·(n−1) consultas por comparación; 38.612 por comparación entre los 197 países). Un sistema de puntuación (+1 si la geografía se elige en ambas direcciones, −1 si en ninguna, 0 en empates/inconsistencias) permitió rankear lugares. La repetición de la misma consulta produjo la misma respuesta el 97% de las veces, aunque la relación transitiva no se sostuvo, lo que motivó las comparaciones exhaustivas por pares.

## Hallazgos clave

- Los rankings privilegian sistemáticamente espacios occidentales, blancos y prósperos (vector centro-periferia del sesgo), relegando al resto a la "periferia epistémica".
- Francia encabeza consultas culturales ("más artístico", "mejor pan"); África subsahariana y la Península Arábiga quedan al fondo pese a tradiciones culturales y culinarias reales.
- En consultas de baja disponibilidad de datos, la sobre-representación de asociaciones específicas puede producir rankings altos (Irán en poesía, Brasil/Nigeria en música), mostrando interacciones no lineales entre sesgos de disponibilidad y promediado.
- Las consultas más ofensivas a nivel individual generan más rechazos (efecto del RLHF), mientras que las comparaciones a nivel de sociedad (seguridad, estabilidad política) se codifican como más aceptables.
- ~93% de los datos de entrenamiento de modelos GPT tempranos estaba en inglés (Brown et al., 2020), lo que invisibiliza documentación en otras lenguas.

## Limitaciones

- El diseño de elección forzada suprime ambigüedad, matiz y los posibles efectos de estrategias de desviación que aparecen en interacciones reales.
- El foco en prompts en inglés pasa por alto sesgos que pueden emerger en otras lenguas.
- Las escalas subnacionales se limitaron a Brasil, Reino Unido y EE. UU. por costos, y no se consultaron todas las escalas en los tres países (se excluyeron ciudades brasileñas y regiones del Reino Unido).
- ChatGPT es un blanco móvil: modelos, datos y capas de seguridad se actualizan, por lo que los rankings específicos pueden cambiar.
- La tipología es una interpretación situada de los autores, no una verdad universal, y no agota todas las formas de desigualdad geográfica.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/etica-de-la-ia]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/capacidades-de-ia]]
