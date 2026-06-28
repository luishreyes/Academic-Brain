---
title: "Multi-Level Barriers to Generative AI Adoption Across Disciplines and Professional Roles in Higher Education"
authors: [Jianhua Yang, Kerem Öge, Adrian von Mühlenen, Abdullah Bilal Akbulut, Tanya Suzanne Carey, Chidi Okorro]
year: 2026
journal: Education Sciences
url: https://doi.org/10.3390/educsci16060838
doi: 10.3390/educsci16060838
pdf_local: sources/pdfs/faculty-development-implementation/yang_2025_multilevel-barriers.pdf
type: paper
keywords: [adopcion-de-tecnologia, educacion-superior, inteligencia-artificial, etica-de-la-ia, integridad-academica, regulacion-de-ia, psicometria, procesamiento-de-lenguaje-natural, pensamiento-critico, cultura-organizacional]
date_added: 2026-06-28
---

# Multi-Level Barriers to Generative AI Adoption Across Disciplines and Professional Roles in Higher Education

## Resumen

El estudio investiga las barreras a la adopción de la IA generativa (GenAI) en la educación superior, cuestionando la tendencia de la literatura a explicarlas únicamente mediante factores individuales (utilidad percibida, facilidad de uso, alfabetización, actitudes) propios de modelos como el TAM y el UTAUT. Los autores sostienen que estas barreras están profundamente embebidas en condiciones estructurales: las disciplinas, los roles institucionales, las normas epistémicas y las expectativas éticas. Para ello analizan una encuesta de 2025 aplicada a 272 miembros del personal —académicos y de servicios profesionales (PS)— de una universidad del Russell Group.

Metodológicamente combinan un enfoque multi-método: estadística descriptiva, regresión logística multinomial (MLR), modelado de ecuaciones estructurales (SEM) y clustering semántico de respuestas de texto libre mediante embeddings. Las barreras se clasifican en cuatro niveles: individuales, éticas, socio-culturales e institucionales. El diseño es un estudio de caso de institución única que permite aislar diferencias por disciplina y rol dentro de un mismo entorno de gobernanza y política.

Los hallazgos revelan diferencias sistemáticas y patrones claros: los académicos de áreas no-STEM reportan principalmente barreras éticas y culturales vinculadas a la integridad académica, la sobredependencia y la erosión del pensamiento crítico, mientras que el personal STEM y el de servicios profesionales enfatiza de forma desproporcionada restricciones institucionales, de gobernanza e infraestructura (licenciamiento, ambigüedad de políticas, cumplimiento del GDPR y la Ley de IA de la UE). El rol institucional resulta un predictor más fuerte de las barreras que la disciplina.

La conclusión central es que las barreras a la adopción de GenAI no son meramente individuales sino que están asociadas a los ecosistemas organizacionales y las normas epistémicas. Por ello, las universidades deben ir más allá de la capacitación generalizada y desarrollar marcos de gobernanza y apoyo específicos por rol y disciplina. Una contribución distintiva del trabajo es incluir explícitamente al personal de servicios profesionales (PS) —habitualmente ausente de la literatura— como un sitio analítico diferenciado de adopción.

## Contribuciones principales

- Uno de los pocos análisis sistemáticos transdisciplinarios que comparan directamente contextos STEM y no-STEM dentro de una misma institución.
- Extensión del análisis más allá de los académicos para incluir al personal de servicios profesionales (PS), un grupo crítico para las operaciones universitarias pero ausente en la literatura de adopción de GenAI.
- Integración de modelado cuantitativo (MLR, SEM) con clustering cualitativo asistido por LLM, pasando de catálogos descriptivos de preocupaciones a una explicación estructural multinivel.

## Metodología

Encuesta transversal (Qualtrics, junio–julio 2025) con muestreo no probabilístico voluntario a 272 miembros del personal (72 STEM, 200 no-STEM; 148 académicos, 124 PS) de una universidad del Russell Group. Variables perceptuales medidas en escalas Likert de 5 puntos (alfabetización, actitud, amenaza laboral, guía y apoyo institucional). Análisis: regresión logística multinomial con `statsmodels` (categoría de referencia: barreras culturales), SEM con SPSS Amos 31 (modelo de caminos exploratorio con mediadores), y clustering semántico de texto libre mediante embeddings de OpenAI (text-embedding-3-large, 3072 dimensiones), reducción con UMAP, clustering con HDBSCAN y etiquetado de clusters con gpt-5-mini.

## Hallazgos clave

- Los académicos no-STEM concentran la mayor proporción de barreras éticas (integridad académica, sobredependencia, erosión del pensamiento crítico); los STEM las reportan con menor frecuencia.
- El personal PS, especialmente en unidades administrativas no-STEM, reporta más barreras institucionales (licenciamiento, ambigüedad de políticas, gobernanza, infraestructura).
- MLR: la disciplina y el rol se asocian significativamente con la distribución de categorías de barreras; el rol tiene mayor poder explicativo. Los PS tienen mayores odds de barreras institucionales que los académicos (OR = 2.198, p = 0.016).
- SEM: el rol predice directamente barreras éticas e institucionales, guía y alfabetización; la disciplina predice barreras culturales; la alfabetización predice barreras individuales; la amenaza laboral predice barreras éticas.
- El clustering de texto libre identificó temas que complementan la estructura cuantitativa: resistencia normativa, riesgo epistémico/pedagógico, restricciones de gobernanza/infraestructura (p. ej. la frustración por la política de "solo Copilot") y preocupaciones transversales de exactitud y confianza.

## Limitaciones

- Poder explicativo modesto de los modelos MLR (pseudo-R² bajos): el rol y la disciplina son predictores significativos pero incompletos; variables no medidas (antigüedad, intensidad docente, cultura departamental) podrían influir.
- El SEM tuvo ajuste mixto (RMSEA = 0.096, PCLOSE = 0.017) y debe interpretarse como análisis de caminos exploratorio: respalda asociaciones, no causalidad.
- Diseño de institución única, transversal y con muestreo no probabilístico, lo que limita la generalización.
- La distinción binaria STEM vs. no-STEM colapsa variación interna sustancial entre campos con tradiciones metodológicas distintas.
- El clustering con LLM depende del ajuste de parámetros, que influye en la granularidad e interpretación de los clusters.

## Notas relacionadas

- [[concepts/adopcion-de-tecnologia]]
- [[concepts/educacion-superior]]
- [[concepts/inteligencia-artificial]]
- [[concepts/etica-de-la-ia]]
- [[concepts/integridad-academica]]
- [[concepts/regulacion-de-ia]]
- [[concepts/psicometria]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/pensamiento-critico]]
- [[concepts/cultura-organizacional]]
