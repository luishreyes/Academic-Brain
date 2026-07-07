---
title: "AI in School Social Work"
authors: [Jingyi Huang, Susan Stone]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_10
doi: 10.1007/978-3-032-18443-6_10
pdf_local: sources/pdfs/ai-social-work/ch10-trabajo-social-escolar.pdf
type: paper
keywords: [trabajo-social, educacion-k12, salud-mental, inteligencia-artificial, analitica-predictiva, procesamiento-de-lenguaje-natural, vision-por-computadora, sesgo-algoritmico, equidad-educativa, ia-explicable]
date_added: 2026-07-05
---

# AI in School Social Work

## Resumen
El capítulo explora oportunidades y desafíos de aplicar IA al trabajo social escolar, una práctica que aplica teorías y métodos del trabajo social para ayudar a estudiantes, familias y comunidades educativas a atender problemas sociales y psicológicos que dificultan el aprendizaje. Los autores estructuran la discusión según tres funciones —para los estudiantes, para los trabajadores sociales y para el sistema escolar— y sostienen que la IA puede mejorar la escalabilidad y accesibilidad de los servicios, ayudando a cerrar brechas de recursos en escuelas desfavorecidas, siempre que se aborden limitaciones técnicas y de despliegue.

En la práctica, revisan tres ámbitos. Primero, oportunidades de aprendizaje personalizado y apoyo en salud mental y aprendizaje socioemocional: chatbots que ofrecen apoyo anónimo y bajo demanda para ansiedad, depresión y estrés (con evidencia de reducción de síntomas y alianzas terapéuticas más fuertes), junto con advertencias sobre despersonalización, aprendizaje superficial y erosión del pensamiento crítico por sobredependencia. Segundo, vigilancia e identificación temprana de estudiantes en riesgo mediante monitoreo de actividad (cámaras, micrófonos, visión por computadora para detectar violencia o comportamientos peligrosos; GPT-4 identificando factores de salud mental en foros; modelos BERT para detectar gaslighting y abuso verbal) y mediante chatbots que marcan indicadores de riesgo para revisión humana. Tercero, evaluación integral y optimización de estrategias de intervención con analítica de datos multimodales.

La última parte examina desafíos y riesgos éticos organizados en torno a la adecuación de los datos, del modelo y de la evaluación. Profundiza en la tensión entre la coincidencia de patrones correlacional de la IA y el razonamiento causal que define la decisión del trabajador social, agravada por el fenómeno de "caja negra"; en el sesgo y la paradoja de la neutralidad tecnológica (con bias de diseño, de contexto de despliegue y de consolidación a largo plazo, incluyendo el riesgo de marcar desproporcionadamente a jóvenes LGBTQ+ o de menor puntuación a estudiantes negros); y en la privacidad y seguridad de datos, con problemas de consentimiento informado bajo dinámicas de poder desiguales, minimización de datos y "function creep". Propone el diseño centrado en el usuario y la supervisión humana significativa como mitigaciones.

## Contribuciones principales
- Marco organizador de las aplicaciones de IA en trabajo social escolar según sus funciones para estudiantes, profesionales y sistema escolar.
- Distinción conceptual entre la capacidad correlacional de la IA y el razonamiento causal person-centered del trabajador social, y por qué la interpretabilidad ("caja negra") es crítica en decisiones de expertos.
- Análisis del sesgo en tres niveles (diseño, contexto de despliegue, consolidación temporal) y de la privacidad estudiantil (consentimiento, minimización, function creep), con el diseño centrado en el usuario como estrategia de mitigación.

## Metodología
Revisión narrativa de literatura. Integra evidencia de investigación académica (ensayos, revisiones sistemáticas, estudios de caso y reportes como los de RAND) sobre servicios estudiantiles, identificación de riesgo y apoyo a la decisión; no es un estudio empírico original.

## Hallazgos clave
- Un chatbot CBT redujo notablemente síntomas depresivos en 16 semanas y ansiedad en las primeras 4 semanas, superando a la biblioterapia y generando alianzas terapéuticas más fuertes (Liu et al., 2022).
- Modelos de detección alcanzan alta exactitud: 85% para gaslighting y 87% para abuso verbal (BERT, Yoon 2024); 97,6% para violencia en campus mediante detección de objetos en cámaras; predicciones de chatbots coincidentes con autoinformes/expertos en ~90% de los casos.
- La detección por monitoreo de actividad es pasiva, fragmentada y dependiente del contexto, lo que limita la valoración precisa del estado emocional; los chatbots ofrecen una alternativa más interactiva.
- Escuelas K-12 adoptaron monitoreo de riesgo de suicidio con IA tras la pandemia, pero a menudo carecen de recursos para atender los casos identificados (RAND).
- Un sistema de IA asignó menores puntuaciones a ensayos de estudiantes negros que a los de estudiantes blancos con contenido comparable, reflejando sesgos societales en los datos de entrenamiento.

## Limitaciones
- La aplicación de IA a la evaluación integral y la optimización de intervenciones sigue siendo un campo emergente que requiere sustancial guía y supervisión humana.
- La calidad y neutralidad de las salidas están fundamentalmente limitadas por los datos de entrenamiento; datos sesgados o incompletos pueden perpetuar inequidades y malidentificar estudiantes en riesgo.
- Los arquitecturas tipo Transformer tienen dificultades con tareas de razonamiento multi-paso, lo que explica alucinaciones en tareas complejas.
- Riesgo de ampliar la inequidad educativa entre escuelas bien y mal dotadas, y de convertir una herramienta de apoyo en instrumento de vigilancia y control.

## Notas relacionadas
- [[concepts/trabajo-social]]
- [[concepts/educacion-k12]]
- [[concepts/salud-mental]]
- [[concepts/inteligencia-artificial]]
- [[concepts/analitica-predictiva]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/vision-por-computadora]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/equidad-educativa]]
- [[concepts/ia-explicable]]
