---
title: "When evidence meets artificial intelligence"
authors: [Gustavo Adolfo Cruz-Suarez, Daniela Hincapié-Ayala, Felipe Ocampo Osorio, María Camila Gómez-Ayala, Sergio Alzate-Ricaurte, Fredy Ariza, Santiago Esteban, Sohyeon Jeon, Leo Anthony Celi]
year: 2026
journal: The Lancet Regional Health - Americas
url: https://doi.org/10.1016/j.lana.2026.101472
doi: 10.1016/j.lana.2026.101472
pdf_local:
type: paper
keywords: [medicina-basada-en-evidencia, inteligencia-artificial, ciencia-de-datos, ensayo-controlado-aleatorio, supervision-humana, confianza-en-la-ia, ia-explicable, sesgo-algoritmico, regulacion-de-ia, salud-y-sociedad, brecha-digital, publicacion-academica]
date_added: 2026-07-09
---

# When evidence meets artificial intelligence

## Resumen
La medicina basada en evidencia (MBE), tal como la definieron Sackett y colegas en 1996, integra la experiencia clínica, los valores del paciente y la mejor evidencia disponible. Tres décadas después, sus herramientas clásicas —el ensayo controlado aleatorio (ECA), la revisión sistemática, los marcos como GRADE— enfrentan límites persistentes: generalizabilidad restringida, predominio de la significancia estadística sobre la clínica, sesgos de publicación y financiación, y dificultad para trasladar hallazgos poblacionales al paciente individual. Al mismo tiempo, el crecimiento exponencial de datos biomédicos (historias clínicas electrónicas, dispositivos digitales, ómicas, archivos de imagen) ha expuesto y ampliado esas fronteras. Esta revisión de estado del arte, escrita por un grupo de la Fundación Valle del Lili y la Universidad Icesi (Cali, Colombia) junto con colaboradores de Argentina, Corea del Sur y el MIT, examina cómo la inteligencia artificial (IA) está reconfigurando los fundamentos metodológicos y éticos de la MBE.

El argumento central es que la IA no reemplaza el razonamiento epidemiológico sino que lo extiende: es una capa analítica integradora, no una ruptura. Los autores recorren tres desplazamientos metodológicos —la integración de datos multimodales, la emulación de ensayos objetivo (target trial emulation / ensayos clínicos emulados) y el modelado por simulación, incluidos los gemelos digitales— y en cada uno insisten en la misma advertencia epistémica: el rendimiento predictivo no garantiza validez causal ni beneficio clínico. La inferencia causal sigue dependiendo de supuestos explícitos y de conocimiento de dominio que el aprendizaje automático no puede automatizar; incluso métodos avanzados como el double machine learning mejoran la eficiencia sin resolver el problema de identificabilidad causal. La tabla conceptual del artículo separa con nitidez tres regímenes —aprendizaje automático predictivo, inferencia causal y métodos prescriptivos/de optimización— por su objetivo epistémico, sus requisitos de datos, sus modos de fallo y su foco de validación.

La segunda mitad del artículo desplaza el problema de lo técnico a lo estructural. Los despliegues reales (como el CDSS "Brilliant Doctor" en clínicas rurales de China) muestran desalineaciones humano-máquina, fricción de flujo de trabajo y brechas de interoperabilidad: la efectividad depende tanto del diseño sociotécnico como de la sofisticación algorítmica. La interpretabilidad post-hoc (mapas de saliencia, SHAP) ofrece garantías limitadas y puede encubrir dependencia de atajos espurios; los autores la desplazan como salvaguarda central en favor de la auditoría rigurosa de errores, el análisis por subgrupos, el monitoreo continuo y marcos de reporte e implementación (TRIPOD+AI, CONSORT-AI, SPIRIT-AI, CFIR, RE-AIM). Un capítulo paralelo aplica el mismo escepticismo a la ciencia abierta: la apertura por sí sola no redistribuye poder epistémico y puede habilitar prácticas extractivas como la "helicopter research".

El diagnóstico regional es explícito y es lo que da al artículo su acento latinoamericano. En las Américas, la segmentación y fragmentación de los sistemas de salud y la desigual infraestructura digital limitan la representatividad de los datos del mundo real y la equidad del despliegue: poblaciones enteras quedan sistemáticamente invisibles en los conjuntos de datos, y los ensayos emulados o los gemelos digitales pueden amplificar esos vacíos en lugar de corregirlos. La conclusión es que la IA no transformará la MBE por sí sola; su aporte constructivo exige reforma de gobernanza, validación transparente y cambio estructural en la propiedad de los datos, la rendición de cuentas institucional y la coordinación regulatoria. Sin ello, la IA optimizará las jerarquías de conocimiento y acceso existentes antes que corregirlas. El clínico queda situado no como usuario pasivo sino como supervisor responsable y custodio ético de sistemas digitales complejos, capaz de interrogar, contextualizar y refutar recomendaciones algorítmicas.

## Contribuciones principales
- Sitúa la IA dentro de los fundamentos epistemológicos y metodológicos de la MBE, en lugar de tratarla como un problema técnico, ético o regulatorio aislado; la tabla comparativa con revisiones previas explicita ese vacío.
- Reformula el sesgo algorítmico no como un defecto técnico sino como una limitación epistémica heredada de la MBE tradicional, que exige reforma estructural y no solo algorítmica.
- Conceptualiza los ensayos clínicos emulados y los gemelos digitales como la evolución necesaria para la crisis de generalizabilidad de la MBE, y a la vez delimita sus condiciones de validez.
- Desplaza la interpretabilidad del centro de las salvaguardas de confianza hacia la auditoría de errores, el análisis por subgrupos y el monitoreo posdespliegue.
- Aporta una lectura regional (Américas, con énfasis en América Latina y el Caribe) sobre cómo la fragmentación de sistemas de salud e información condiciona la representatividad y la equidad de la evidencia generada con IA.
- Traza el paralelo estructural entre los límites de la ciencia abierta y los de la IA: ambos son sistemas sociotécnicos insertos en asimetrías de poder, no reformas técnicas neutrales.

## Metodología
Revisión de estado del arte (state-of-the-art review) siguiendo la metodología de seis pasos de Barry y colegas, organizada en un marco temporal de "dónde estamos", "cómo llegamos aquí" y "hacia dónde debemos ir". Búsqueda estructurada en PubMed y Scopus de artículos publicados entre enero de 2000 y febrero de 2026, combinando términos MeSH y texto libre ("evidence-based medicine", "artificial intelligence", "machine learning", "deep learning", "natural language processing", "clinical decision support systems", "causal inference", "big data", "precision medicine"). Se complementó con literatura gris de la OMS, la FDA y la Comisión Europea, y preprints de GreyGuide, medRxiv y arXiv, más búsqueda manual en listas de referencias. De ~7.700 registros iniciales se aplicó un cribado por niveles: título y resumen evaluados por alineación conceptual con la evolución metodológica de la MBE, ~150 artículos a texto completo, cribado por consenso iterativo entre tres autores. La síntesis conceptual final se apoyó en 73 fuentes sobre metodologías y aplicaciones clínicas de IA más 33 referencias históricas y epidemiológicas. Dada la naturaleza conceptual de la revisión, los estudios no se ponderaron cuantitativamente y no se buscó cobertura exhaustiva sino síntesis crítica.

## Hallazgos clave
- El rendimiento predictivo no implica validez causal ni beneficio clínico: la brecha entre exactitud algorítmica y desenlaces demostrados sigue siendo la barrera central de implementación.
- Los ensayos clínicos emulados pueden reproducir resultados de ECAs cuando el diseño es riguroso: RCT-DUPLICATE replicó diez ensayos cardiovasculares con datos del mundo real y ocho arrojaron hazard ratios consistentes con los originales.
- Infraestructuras como OHDSI/OMOP y el marco LEGEND permiten generación observacional reproducible a escala mediante modelos de datos comunes y protocolos compartidos, mitigando el reporte selectivo.
- Los gemelos digitales alcanzan su mayor fidelidad solo en poblaciones bien representadas y pueden volverse peligrosamente engañosos para grupos subrepresentados: dos pacientes pueden parecer "digitalmente idénticos" y ser clínicamente muy distintos por variables no capturadas.
- Las discrepancias entre ECAs y emulación de ensayo objetivo deben leerse como reflejo de variación contextual y limitaciones de datos, no como validación o invalidación de un método sobre otro.
- La interpretabilidad post-hoc (saliencia, mapas de calor, SHAP) da garantías limitadas de validez y puede ocultar dependencia de correlatos espurios.
- Los sistemas algorítmicos pueden inducir tanto sesgo de automatización como aversión al algoritmo; la explicabilidad sola no garantiza supervisión significativa, que requiere además comunicación calibrada de la incertidumbre, responsabilidad institucional y capacidad del clínico de contextualizar y disputar recomendaciones.
- La apertura (open science) no redistribuye por sí misma el poder epistémico: sin gobernanza, la compartición irrestricta de datos puede habilitar "helicopter research" e injusticia epistémica.
- En las Américas, las capacidades regulatorias e institucionales para gobernar IA evolucionan de forma desigual; sin estrategias regionales coordinadas, el despliegue puede ensanchar la brecha entre centros terciarios altamente digitalizados y sistemas públicos con pocos recursos.

## Limitaciones
- Es una revisión conceptual de estado del arte: no genera ni analiza datos nuevos, no pondera cuantitativamente los estudios incluidos y no pretende cobertura exhaustiva de la literatura.
- El cribado de ~7.700 registros a ~150 textos completos se basó en juicio de alineación conceptual por consenso de tres autores, lo que introduce selectividad no reproducible por criterios explícitos de calidad.
- Las capacidades más prometedoras que describe (gemelos digitales, simulación individualizada) siguen siendo aspiracionales en la mayoría de los entornos reales; el artículo lo reconoce pero no las evalúa empíricamente.
- El foco regional en las Américas, aunque es una fortaleza analítica, limita la transferibilidad del diagnóstico estructural a otros contextos.
- Las propuestas de reforma de gobernanza se formulan en términos programáticos, sin evaluación de intervenciones concretas ni evidencia sobre su efectividad.

## Notas relacionadas
- [[concepts/medicina-basada-en-evidencia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/ciencia-de-datos]]
- [[concepts/ensayo-controlado-aleatorio]]
- [[concepts/supervision-humana]]
- [[concepts/confianza-en-la-ia]]
- [[concepts/ia-explicable]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/regulacion-de-ia]]
- [[concepts/salud-y-sociedad]]
- [[concepts/brecha-digital]]
- [[concepts/publicacion-academica]]
