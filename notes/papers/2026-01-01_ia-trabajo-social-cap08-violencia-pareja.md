---
title: "AI in Sexual and Domestic Partner Violence"
authors: [Yue Fang, Judy L. Postmus]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_8
doi: 10.1007/978-3-032-18443-6_8
pdf_ref: ch08-violencia-sexual-domestica.pdf
sha256: c9ab785e64de5cd4870a4c5098f1cc18b0bd74c03269e7695a33b121361c82ad
type: paper
keywords: [trabajo-social, violencia-de-genero, salud-mental, inteligencia-artificial, procesamiento-de-lenguaje-natural, analitica-predictiva, trauma-y-salud, sesgo-algoritmico]
date_added: 2026-07-05
---

# AI in Sexual and Domestic Partner Violence

## Resumen
El capítulo aborda la violencia sexual y de pareja íntima (S/IPV) como problema global de salud pública y violación de derechos humanos, con impactos profundos y multifacéticos: consecuencias de salud física y mental de largo plazo (dolor crónico, depresión, ansiedad, TEPT, ideación suicida) y un costo económico estimado en casi 3,6 billones de dólares a lo largo de la vida de las víctimas en EE. UU. La OMS estima que cerca del 30% de las mujeres a nivel mundial han sufrido violencia física o sexual por parte de una pareja o violencia sexual por un tercero. Los autores plantean que, frente a barreras persistentes (limitaciones de financiamiento, acceso a datos sensibles, fragmentación de la prevención), la IA ofrece una oportunidad transformadora por su escalabilidad y capacidad de procesar grandes volúmenes de datos, identificar patrones y predecir riesgos, siempre que se atienda cuidadosamente al diseño ético.

El núcleo del capítulo mapea las aplicaciones de IA en tres fases progresivas. Detección de riesgo: modelos NLP (BioBERT, RoBERTa) que extraen información de violencia de historias clínicas (precisión del 89–98%) y de redes sociales, y sistemas de detección de mensajes de crisis en telesalud. Vigilancia poblacional: herramientas como GBVMeter (que analizó 12.693 noticias sobre violencia de género) o el análisis de 43.488 registros policiales de abuso doméstico durante la COVID-19, que revelan patrones temporales complejos. Predicción: clasificadores de aprendizaje automático que distinguen casos letales de no letales (83% de exactitud) o que estiman riesgo de perpetración —siempre acotados a contextos de investigación con datos desidentificados y agregados, no para decisiones sobre individuos. También revisa herramientas de evaluación e intervención: LLM que clasifican en tiempo real las necesidades informativas de sobrevivientes (F1 de 0,705 en ocho categorías), sistemas de triaje que reducen la mediana de tiempo de 9 horas a 8–13 minutos, y chatbots orientados a sobrevivientes (Aimee Says, Keepit, ChattyCuz).

La tercera parte desarrolla el empoderamiento de sobrevivientes (teoría de empoderamiento de Dutton) y las consideraciones éticas: violaciones de privacidad por deepfakes y ataques de re-identificación, riesgo de retraumatización, sesgo en los datos (sobrerrepresentación de la violencia de género contra mujeres que invisibiliza otras formas), y falta de transparencia. Los autores proponen anclar el desarrollo en enfoques informados por el trauma y la violencia (TVIC) y en principios de "safety-by-design", con marcos de auditoría trauma-informados y co-diseño con sobrevivientes. Concluyen con recomendaciones diferenciadas para investigadores, profesionales y responsables de política.

## Contribuciones principales
- Taxonomía de aplicaciones de IA en S/IPV organizada como progresión detección → vigilancia → predicción, con distinción explícita entre uso individual y poblacional.
- Revisión de herramientas de evaluación/intervención (triaje con LLM, chatbots para sobrevivientes) y de su valor para la práctica clínica y de servicios.
- Articulación de un marco ético centrado en el trauma y la violencia (TVIC) y en "safety-by-design" para guiar la adopción responsable de IA en este dominio sensible.
- Recomendaciones concretas para investigadores/desarrolladores, profesionales y responsables de política.

## Metodología
Capítulo de revisión narrativa que sintetiza la literatura reciente sobre IA aplicada a S/IPV (estudios de NLP, aprendizaje automático, LLM y chatbots) junto con marcos teóricos (teoría del aprendizaje social de Bandura, transmisión intergeneracional de la violencia, empoderamiento de Dutton, TVIC). No aporta datos empíricos primarios.

## Hallazgos clave
- El NLP sobre texto no estructurado (historias clínicas, redes sociales, documentos legales) detecta S/IPV con alta precisión (p. ej., 99,5% en identificación de IPV en urgencias; F1 de 0,76 en reportes de IPV en Twitter/X).
- La vigilancia con IA revela patrones no evidentes: contra lo esperado, el abuso doméstico no aumentó durante el primer confinamiento en el Reino Unido, sino de forma sostenida tras levantarse las restricciones.
- Modelos computacionales de severidad mitigan el sesgo humano, que tiende a subestimar la violencia psicológica.
- Los LLM pueden clasificar en tiempo real las necesidades informativas de sobrevivientes y reducir drásticamente los tiempos de triaje de mensajes de crisis.
- Riesgos éticos centrales: deepfakes y abuso sexual basado en imágenes, re-identificación que amenaza la seguridad física, retraumatización, y sesgo por datos que sobrerrepresentan la violencia contra mujeres e invisibilizan otras formas de IPV.

## Limitaciones
- La mayoría de las intervenciones se han evaluado solo como prototipos de investigación o pilotos acotados, con muestras modestas y poca diversidad demográfica; falta evidencia longitudinal y de impacto en el mundo real.
- El encuadre de "predicción" del riesgo puede desplazar el foco hacia conductas individuales, reforzando el estigma o la culpabilización de la víctima y obscureciendo los determinantes interseccionales.
- Persisten problemas de "última milla": los chatbots aún no logran vinculación fluida con recursos comunitarios, jurídicos y de salud, y quedan abiertos los temas de privacidad, consentimiento y mitigación de sesgo.

## Notas relacionadas
- [[concepts/trabajo-social]]
- [[concepts/violencia-de-genero]]
- [[concepts/salud-mental]]
- [[concepts/inteligencia-artificial]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/analitica-predictiva]]
- [[concepts/trauma-y-salud]]
- [[concepts/sesgo-algoritmico]]
