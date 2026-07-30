---
title: "AI in Mental Health Services"
authors: [Yuyi Yang, Dorian Traube]
year: 2026
journal: "Artificial Intelligence in Social Work (An & Lindsey, eds.), Springer"
url: https://doi.org/10.1007/978-3-032-18443-6_9
doi: 10.1007/978-3-032-18443-6_9
pdf_ref: ch09-salud-mental.pdf
sha256: a6afab27b9d8dd1df95b2ea4b652165e84d1544931d3e66b327230eb089caeac
type: paper
keywords: [salud-mental, trabajo-social, inteligencia-artificial, procesamiento-de-lenguaje-natural, confianza-en-la-ia, etica-de-la-ia, sesgo-algoritmico, regulacion-de-ia, ia-explicable, supervision-humana]
date_added: 2026-07-05
---

# AI in Mental Health Services

## Resumen
Este capítulo hace un recorrido crítico por cómo la inteligencia artificial contemporánea —desde diagnósticos multimodales de aprendizaje profundo y fenotipado digital hasta chatbots basados en grandes modelos de lenguaje (LLM) y robots socialmente asistivos (SAR)— está reconfigurando la atención en salud mental a lo largo de todo el continuo de cuidado: detección temprana, diagnóstico, personalización del tratamiento, monitoreo, respuesta a crisis y servicios para poblaciones específicas. Los autores sostienen que la IA puede mejorar accesibilidad, eficiencia y toma de decisiones basada en evidencia, pero que su adopción en la práctica psiquiátrica rutinaria ha quedado rezagada porque la atención en salud mental depende fuertemente de relaciones interpersonales y evaluaciones cualitativas.

El texto organiza las aplicaciones en una tabla-síntesis que va de la predicción de riesgo (analítica de voz Cogito, modelos de afecto de Affectiva, modelos de aprendizaje profundo sobre historias clínicas para predecir suicidio) al apoyo a la decisión clínica, las mejoras terapéuticas (farmacogenómica, terapéuticas digitales adaptativas, chatbots CBT como Wysa y Woebot), el monitoreo pasivo (Oura Ring, EMA), los agentes conversacionales, la respuesta a crisis (Crisis Text Line) y dominios poblacionales (adolescentes, adultos mayores, TEPT, adicciones). Un eje transversal es la co-producción centrada en actores: pacientes, clínicos, científicos de datos y responsables de política interactúan en bucles de datos, apoyo y gobernanza.

La segunda mitad del capítulo interroga las barreras persistentes: datos de entrenamiento escasos y poco representativos, sesgo algorítmico, amenazas a la privacidad, opacidad de los modelos ("cajas negras"), disposición de la fuerza laboral y puntos ciegos epistémicos. Discute los marcos regulatorios emergentes (EU AI Act, FDA Software-as-a-Medical-Device, guía de la OMS, ISO/IEC 42001) y advierte sobre el efecto ELIZA y el antropomorfismo excesivo de agentes conversacionales, que puede inflar expectativas de competencia clínica y llevar a una confianza insegura en escenarios de crisis. Concluye que la IA debe aumentar —no reemplazar— la alianza terapéutica, apoyándose en interpretabilidad, gobernanza inclusiva, formación de capacidades y evidencia longitudinal.

## Contribuciones principales
- Síntesis estructurada de aplicaciones de IA a lo largo de todo el continuo de atención en salud mental, con herramientas y casos ilustrativos concretos.
- Modelo de co-producción en bucles cerrados (datos, apoyo, gobernanza) entre pacientes, clínicos, técnicos y reguladores como condición para una IA clínicamente efectiva y socialmente justa.
- Mapeo de las barreras técnicas, éticas, regulatorias y humanas, con una agenda de prioridades de investigación, implementación y gobernanza (incluida la integración de LLM con RAG y calibración de incertidumbre).

## Metodología
Revisión narrativa y crítica de la literatura. Los autores integran evidencia de estudios primarios, revisiones sistemáticas, marcos regulatorios y ejemplos comerciales/clínicos para caracterizar el estado del arte y proyectar direcciones futuras; no se trata de un estudio empírico original.

## Hallazgos clave
- Modelos multimodales alcanzan AUC >0,90 en la predicción de trastornos (p. ej. de Lacy et al. combinando datos clínicos, genómicos y de sensores); el aprendizaje profundo sobre historias clínicas predice intentos de suicidio hasta un año antes.
- El triaje NLP de Crisis Text Line marca correctamente el 86% de mensajes de riesgo severo en el primer mensaje y redujo la espera de ~8 a ~3 minutos, pero rinde peor en inglés afroamericano y otros dialectos subrepresentados.
- La FDA otorgó designaciones breakthrough (ayuda diagnóstica de autismo con 98% de sensibilidad; chatbot Woebot para depresión posparto), señal de apertura regulatoria a las terapéuticas digitales.
- El antropomorfismo de agentes conversacionales aumenta la empatía percibida pero también expectativas infladas de competencia clínica; los LLM aún generan consejos inseguros en una minoría de escenarios de autolesión pese a las salvaguardas.
- La EU AI Act (Reg. 2024/1689) clasifica como alto riesgo el apoyo a la decisión clínica, el fenotipado digital y los agentes conversacionales en salud mental, exigiendo evaluaciones de conformidad y supervisión humana documentada hacia 2026.

## Limitaciones
- La mayoría de los modelos carece de validación externa y de seguimiento longitudinal o multicéntrico; su generalización a poblaciones y contextos diversos es incierta.
- La subrepresentación de minorías raciales/étnicas, adultos mayores y poblaciones socioeconómicamente diversas incrusta sesgo estructural en las salidas algorítmicas.
- La opacidad de los modelos de aprendizaje profundo limita la confianza clínica; un enfoque exclusivo en marcadores cuantificables puede marginar experiencias vividas de malestar que resisten la instrumentación.
- Muchos desarrollos se conciben sin involucramiento temprano de clínicos y pacientes, produciendo herramientas técnicamente impresionantes pero clínicamente incómodas.

## Notas relacionadas
- [[concepts/salud-mental]]
- [[concepts/trabajo-social]]
- [[concepts/inteligencia-artificial]]
- [[concepts/procesamiento-de-lenguaje-natural]]
- [[concepts/confianza-en-la-ia]]
- [[concepts/etica-de-la-ia]]
- [[concepts/sesgo-algoritmico]]
- [[concepts/regulacion-de-ia]]
- [[concepts/ia-explicable]]
- [[concepts/supervision-humana]]
- [[notes/papers/2026-02-09_llm-asistentes-medicos-fiabilidad-publico]]
