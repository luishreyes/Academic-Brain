---
title: "AI in Social Work Research"
authors: [Yuyi Yang, Jingyi Huang, Ruopeng An]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_21
doi: 10.1007/978-3-032-18443-6_21
pdf_local: sources/pdfs/ai-social-work/ch21-investigacion-trabajo-social.pdf
type: paper
keywords: [trabajo-social, inteligencia-artificial, ciencia-de-datos, procesamiento-de-lenguaje-natural, analitica-predictiva, vision-por-computadora, agentes-de-ia, generacion-aumentada-por-recuperacion, ia-explicable, sesgo-algoritmico, supervision-humana, proteccion-infantil]
date_added: 2026-07-05
---

# AI in Social Work Research

## Resumen
Este capítulo mapea el estado actual del uso de la inteligencia artificial en la investigación de trabajo social, organizando las aplicaciones a través de una "lente de diseño de investigación". Los autores distinguen cuatro grandes tradiciones metodológicas y muestran cómo la IA se inserta en cada una como un "socio metodológico modular" más que como una solución única: estudios descriptivos/exploratorios que usan minería de texto, procesamiento de lenguaje natural (NLP) y IA causal para mapear necesidades y narrativas; estudios predictivos/analíticos que modelan riesgo y resultados complejos con regresión regularizada, ensambles de árboles, aprendizaje no supervisado y modelos multimodales; estudios experimentales/de intervención que emplean robots socialmente asistenciales (SARs), agentes conversacionales y visión por computadora como componentes activos de la intervención; y estudios de síntesis/conceptuales que usan grandes modelos de lenguaje (LLM), generación aumentada por recuperación (RAG) e IA agéntica para construir teoría e integrar conocimiento.

La segunda mitad del capítulo se dedica a los desafíos transversales metodológicos, éticos y epistemológicos que la IA introduce en la investigación. Metodológicamente, subraya la necesidad de integrar la IA en diseños mixtos sin perder el matiz cualitativo, y de garantizar reproducibilidad, interpretabilidad y validez frente a modelos de "caja negra"; dedica una sección amplia a la IA interpretable y explicable (XAI) como mecanismo para auditar y corregir sistemas, no solo describirlos. Éticamente, aborda privacidad, consentimiento y gobernanza de datos sensibles, y la equidad algorítmica: los datos administrativos reproducen inequidades estructurales (racismo estructural, sesgo por proxies como el contacto previo con el sistema), y la vigilancia por visión artificial y el reconocimiento facial funcionan peor con personas racializadas.

Un hilo conductor es que la supervisión humana mitiga estos sesgos: en la Allegheny Family Screening Tool, el algoritmo por sí solo habría producido una brecha de ~18 puntos porcentuales entre niños negros y blancos, mientras que las decisiones de los trabajadores usando la herramienta redujeron esa brecha a ~7 puntos, porque anulaban puntajes de alto riesgo cuando contradecían su evaluación holística. Epistemológicamente, el capítulo advierte contra tratar las salidas de IA como hechos objetivos ("los datos hablan por sí mismos"), contra el sesgo de anclaje y el problema de la caja negra, e insiste en la reflexividad y la posicionalidad en la colaboración humano-IA. Concluye que la IA es un socio metodológico versátil cuyo valor es contingente, no inherente: depende del diseño transparente, la gobernanza equitativa de datos y una postura epistémica que trate las salidas como provisionales.

## Contribuciones principales
- Un marco organizador de la IA en investigación de trabajo social según cuatro diseños de investigación (descriptivo/exploratorio, predictivo/analítico, experimental/de intervención, síntesis/conceptual).
- Una revisión integrada de técnicas: minería de texto y NLP, IA causal (DAGs, causal forests), regresión regularizada y ensambles, aprendizaje no supervisado/multimodal y federado, SARs, agentes conversacionales, visión por computadora, LLM, RAG e IA agéntica.
- Una articulación de los desafíos metodológicos, éticos y epistemológicos (reproducibilidad, XAI, calidad de datos, privacidad, equidad, caja negra, reflexividad) centrada en el mandato de derechos humanos de la profesión.
- Una hoja de ruta práctica para investigación rigurosa, transparente y centrada en la equidad, con la colaboración humano-IA como eje.

## Metodología
Capítulo conceptual y de revisión narrativa, no un estudio empírico. Organiza la literatura reciente sobre aplicaciones de IA en investigación de trabajo social y campos afines, ilustrando cada diseño de investigación con estudios concretos (p. ej., predicción de sinhogarismo en veteranos con random forests, detección de violencia de pareja íntima con NLP en registros clínicos, ensayo controlado aleatorizado de un robot humanoide con adultos mayores, RAG para verificación de hechos sobre COVID-19, IA agéntica para análisis temático).

## Hallazgos clave
- La IA descriptiva (minería de texto, NLP, IA causal) escala la codificación cualitativa a cientos de miles de documentos manteniendo la transparencia y el juicio humano en la interpretación.
- Los modelos predictivos (regresión regularizada, ensambles) mejoran la detección temprana de riesgo en bienestar infantil y sinhogarismo, pero descansan en datos que reproducen inequidades estructurales.
- Los robots asistenciales y los agentes conversacionales sirven como instrumentos experimentales que estandarizan la entrega de intervenciones y permiten aislar mecanismos de cambio.
- Los LLM, RAG y la IA agéntica apoyan la síntesis de evidencia y la construcción de teoría, pero requieren anclaje en fuentes verificables para reducir alucinaciones.
- La supervisión humana reduce disparidades algorítmicas de forma medible (caso Allegheny), reforzando la necesidad de esquemas human-in-the-loop en lugar de decisiones plenamente automatizadas.

## Limitaciones
- Es una revisión conceptual: no ofrece evaluación empírica propia ni cuantifica el estado de adopción de las técnicas descritas.
- Varias tecnologías (aprendizaje federado, IA agéntica en trabajo social) son incipientes; la evidencia directa en el campo es escasa y muchos ejemplos provienen de disciplinas afines (salud, educación).
- La evidencia sobre SARs y agentes conversacionales está limitada por muestras pequeñas y cobertura diagnóstica estrecha.

## Notas relacionadas
- [[concepts/trabajo-social]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ciencia-de-datos]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/analitica-predictiva]]
- [[concepts/vision-por-computadora]]
- [[concepts/agentes-de-ia]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/ia-explicable]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/supervision-humana]]
- [[concepts/proteccion-infantil]]
