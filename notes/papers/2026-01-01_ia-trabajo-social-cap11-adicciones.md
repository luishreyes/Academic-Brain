---
title: "AI in Substance Use and Addiction Prevention"
authors: [Shaddy Saba, George Leibowitz]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_11
doi: 10.1007/978-3-032-18443-6_11
pdf_local: sources/pdfs/ai-social-work/ch11-uso-sustancias-adicciones.pdf
type: paper
keywords: [trabajo-social, salud-mental, analitica-predictiva, inteligencia-artificial, procesamiento-de-lenguaje-natural, sesgo-algoritmico, justicia-social, justicia-penal, salud-y-sociedad, etica-de-la-ia]
date_added: 2026-07-05
---

# AI in Substance Use and Addiction Prevention

## Resumen
El capítulo examina la promesa y los desafíos de la IA para abordar el uso problemático de sustancias psicoactivas (alcohol, opioides, cannabis, estimulantes y otras drogas), con foco en poblaciones vulnerables. Parte de un encuadre biopsicosocial del trastorno por uso de sustancias (SUD): una condición multifactorial en la que interactúan factores biológicos, psicológicos y socioculturales, y donde el 80% de los resultados de salud se explican por determinantes sociales más que clínicos. Los autores enfatizan el rol del trabajo social y sus valores centrales —dignidad humana, justicia social y bienestar comunitario— y argumentan que la IA, éticamente implementada, puede hacer el tratamiento y la prevención más equitativos, accesibles y relevantes para poblaciones marginadas.

Tras revisar la historia de la IA en medicina y salud conductual (de ELIZA y MYCIN al aprendizaje automático y profundo), el capítulo describe las técnicas centrales y las fuentes de datos (historias clínicas electrónicas, redes sociales, datos fisiológicos de wearables, genómica) y muestra aplicaciones concretas: identificación de uso problemático actual y predicción de riesgo futuro con machine learning (incluyendo NLP sobre notas clínicas y perfiles de redes sociales, y redes neuronales de grafos temporales sobre EHR), tratamientos habilitados por IA (herramientas de apoyo a la decisión, terapéuticas digitales, chatbots con entrevista motivacional y CBT), y monitoreo en tiempo real y prevención de recaídas mediante intervenciones adaptativas just-in-time con datos de smartphones y wearables. Un caso destacado es STORM, la herramienta de estratificación de riesgo de opioides del Departamento de Asuntos de Veteranos (VA), desplegada en 140 centros médicos y asociada a una reducción significativa de la mortalidad.

La sección ética es central: la IA no es neutral y hereda los sesgos de sus datos, que suelen provenir de poblaciones blancas y de mayor nivel socioeconómico; los modelos entrenados con datos de justicia penal pueden marcar desproporcionadamente a personas negras y latinas por patrones históricos de vigilancia racializada. Los autores analizan la construcción social del riesgo (cómo se define "riesgo" y "mal resultado", en tensión con la reducción de daños), la privacidad y la vigilancia (con riesgos de discriminación laboral, pérdida de custodia o involucramiento penal, y acceso de las fuerzas del orden a datos de monitoreo), y la autonomía de clientes y proveedores. Cierran con tendencias emergentes (aprendizaje por refuerzo, IA generativa/LLM) y recomendaciones para promover la reducción de daños con IA.

## Contribuciones principales
- Encuadre biopsicosocial del SUD como marco para evaluar aplicaciones de IA, argumentando que la fortaleza de la IA multimodal reside en modelar la interacción de determinantes biológicos, psicológicos y sociales.
- Documentación de STORM (VA) como ejemplo pionero de analítica predictiva desplegada a escala, con lecciones de implementación (liderazgo, formación, integración en flujos de trabajo).
- Análisis ético centrado en poblaciones marginadas: sesgo y equidad, construcción social del riesgo, privacidad/vigilancia y autonomía, anclado en los valores del trabajo social.

## Metodología
Revisión narrativa de literatura desde la perspectiva del trabajo social. Sintetiza estudios primarios, revisiones y evaluaciones de implementación sobre identificación de riesgo, tratamiento y prevención de recaídas; no es un estudio empírico original.

## Hallazgos clave
- Machine learning predijo el desarrollo de trastorno por consumo de alcohol con 96% de exactitud a partir de datos de EHR (Ebrahimi et al., 2022) y clasificó riesgo de SUD con exactitud superior al 90% en varios estudios.
- Un modelo predijo el craving de sustancias 90 minutos en el futuro con 93% de exactitud solo con datos de GPS (Epstein et al., 2020); la reactividad al estrés medida por biosensores se asoció a recaída en la semana siguiente.
- STORM se asoció a una disminución significativa de la mortalidad a 4 meses en una evaluación aleatorizada con más de 44.000 pacientes en riesgo en los 140 centros del VA.
- La mayoría de los modelos se ha entrenado y probado en un único conjunto de datos, sin validación externa, y es susceptible de sobreajuste; los principales predictores de trastorno por opioides en EHR ("otros SUD", sobredosis, uso intenso) suelen llegar "demasiado tarde" para la prevención.
- Modelos entrenados con outcomes singulares (p. ej. abstinencia total) pueden producir cuidado menos centrado en la persona cuando el objetivo del paciente difiere (moderación, uso más seguro).

## Limitaciones
- La mayor parte del trabajo de IA para SUD permanece en fase de investigación, con aplicabilidad incierta en entornos reales y de bajos recursos.
- Baja interpretabilidad de muchos modelos ("cajas negras"), lo que dificulta la confianza y la aplicación clínica cuando población, sustancias o supuestos difieren entre contextos.
- Disparidades de acceso a las intervenciones basadas en IA (smartphones, conectividad, wearables) pueden excluir a las mismas poblaciones más vulnerables, ampliando brechas y perpetuando un sistema de dos niveles.
- Riesgo de reforzar la vigilancia punitiva y de erosionar la autonomía de clientes y clínicos si la IA se despliega imprudentemente o al servicio de tratamientos coercitivos.

## Notas relacionadas
- [[concepts/trabajo-social]]
- [[concepts/salud-mental]]
- [[concepts/analitica-predictiva]]
- [[concepts/inteligencia-artificial]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/justicia-social]]
- [[concepts/justicia-penal]]
- [[concepts/salud-y-sociedad]]
- [[concepts/etica-de-la-ia]]
