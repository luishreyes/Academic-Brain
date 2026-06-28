---
title: "From Co-Design to Metacognitive Laziness: Evaluating Generative AI in Vocational Education"
authors: [Amir Yunus, Gay Peng Rend, Lee Oon Teng]
year: 2025
journal: 
url: 
doi: 
pdf_local: sources/pdfs/learning-impact-evidence/yunus_2025_codesign-metacognitive-laziness.pdf
type: paper
keywords: [retroalimentacion-con-ia, autorregulacion-del-aprendizaje, equidad-educativa, generacion-aumentada-por-recuperacion, personalizacion-del-aprendizaje, diseno-universal-para-el-aprendizaje, formacion-docente, motivacion-y-compromiso-estudiantil, inteligencia-artificial, evaluacion-educativa]
date_added: 2026-06-28
---

# Del codiseño a la pereza metacognitiva: evaluación de la IA generativa en educación vocacional

## Resumen

El estudio documenta el desarrollo y despliegue de una prueba de concepto (POC) de IA generativa diseñada para apoyar a docentes en un instituto de educación vocacional de Singapur. Usando un proceso de diseño centrado en el usuario y métodos mixtos, los autores co-desarrollaron con los docentes un chatbot llamado *StudyBuddy* para atender retos instruccionales recurrentes durante los periodos de preparación de exámenes: gestionar preguntas repetidas y mejorar la eficiencia de la retroalimentación. La metodología se organizó en tres fases (investigación con educadores, co-desarrollo mediante talleres de design thinking, y despliegue/evaluación) con 20 docentes. La POC cumplió su propósito original: los docentes reportaron flujos de trabajo más ágiles, menor carga cognitiva y mayor confianza de los estudiantes para navegar el contenido del curso.

Inesperadamente, el despliegue reveló hallazgos críticos sobre las conductas de aprendizaje de los estudiantes. Pese a la mejora en los procesos de enseñanza, los datos de desempeño no mostraron mejoras significativas en los resultados generales de los estudiantes. El análisis de los exámenes (módulos Software Development Practices y AI Ethics and Bias) arrojó paridad de desempeño en lugar de inflación de notas: el grupo con acceso a IA igualó o quedó ligeramente por debajo de las cohortes de mejor rendimiento sin IA, pero con menor variabilidad (desviaciones estándar más bajas) y mejor precisión de medición (SEM más bajos). Es decir, los beneficios de la IA fueron más de proceso (consistencia, andamiaje, estabilidad) que de puntaje bruto.

Un análisis más profundo identificó patrones preocupantes: dependencia de la IA modulada por la autoeficacia, descarga metacognitiva (*metacognitive offloading* / "pereza metacognitiva", citando a Fan et al., 2025), y un uso divergente entre estudiantes fuertes (estratégico, con verificación crítica de respuestas) y débiles (engagement intensivo pero con poca verificación). El índice de discriminación mejoró ligeramente en el grupo con IA, lo que sugiere que los estudiantes más capaces aprovecharon mejor la herramienta, ampliando potencialmente las brechas de rendimiento en lugar de reducirlas.

El trabajo concluye que, aunque la IA generativa puede mejorar sustancialmente los procesos de enseñanza, lograr ganancias de aprendizaje significativas exige atender más a fondo la conducta del estudiante, los procesos cognitivos, la autorregulación y el diseño equitativo de los entornos de aprendizaje asistidos por IA. Plantea preguntas de diseño y pedagógicas sobre cómo minimizar la dependencia, fortalecer el desarrollo metacognitivo, calibrar el apoyo según el nivel de habilidad y garantizar oportunidades equitativas.

## Contribuciones principales
- Documenta un caso completo de codiseño centrado en el usuario (educadores + investigadores) de una herramienta de IA generativa para educación vocacional, desde la investigación de necesidades hasta el despliegue.
- Aporta evidencia de que una intervención de IA enfocada en el docente mejora la experiencia de enseñanza sin traducirse automáticamente en mejores resultados de aprendizaje de los estudiantes.
- Caracteriza empíricamente patrones de conducta del aprendiz: dependencia ligada a la autoeficacia, descarga metacognitiva, y uso estratégico vs. no estratégico.
- Señala una preocupación de equidad: la IA puede ampliar la brecha entre estudiantes de alta y baja habilidad en lugar de cerrarla.
- Reinterpreta los beneficios de la IA como orientados al proceso (consistencia, fiabilidad de medición) más que al puntaje.

## Metodología
Diseño secuencial de métodos mixtos en tres fases con 20 docentes de educación vocacional en Singapur. Fase 1 (investigación con educadores): encuestas pre-implementación con escalas Likert de 5 puntos y entrevistas semiestructuradas. Fase 2 (co-desarrollo): talleres de design thinking de 90 minutos con grupos de 4-6 participantes (análisis de problemas, mapeo de actores, personas, ideación, prototipado de baja fidelidad), guiados por principios de Don Norman, las reglas de oro de Shneiderman, el Diseño Universal para el Aprendizaje y la Zona de Desarrollo Próximo de Vygotsky. Implementación técnica del chatbot *StudyBuddy* sobre Open WebUI con inferencia vLLM, ingeniería de prompts con personas estructuradas, y RAG con organización jerárquica del conocimiento y re-ranking. Fase 3 (despliegue y evaluación): pruebas en aula durante preparación de exámenes; analítica de logs de chat anonimizados; encuestas post-implementación comparables con las iniciales; y comparación de desempeño en exámenes entre grupos con y sin acceso al chatbot, con análisis psicométrico (media, mediana, SD, alfa de Cronbach, SEM, índice de discriminación, normalidad).

## Hallazgos clave
- La POC cumplió su objetivo principal: los docentes reportaron menor repetición de preguntas, mayor eficiencia, mejor confianza estudiantil y reducción de carga cognitiva; las puntuaciones post-implementación mejoraron en confianza para apoyar pensamiento crítico (+1.30), retroalimentación personalizada (+1.95) y evaluación de respuestas de IA (+1.40).
- No hubo mejora significativa en los resultados generales de aprendizaje: en SDP el grupo con IA (68.83%) quedó casi idéntico a la mejor cohorte sin IA (68.00%); en AIEB el grupo con IA (37.87%) fue ligeramente inferior al control (38.72%).
- El grupo con IA mostró menor variabilidad (reducciones de SD de hasta ~17%) y mejor precisión de medición (SEM hasta ~81% menor), lo que sugiere beneficios de consistencia y estabilidad más que de puntaje.
- Patrones de conducta divergentes: estudiantes fuertes usaron la herramienta estratégicamente y verificaron respuestas; los débiles mostraron engagement intensivo con poca verificación crítica.
- Posible ampliación de brechas: el índice de discriminación aumentó levemente en el grupo con IA, indicando que los más capaces aprovecharon mejor la herramienta (preocupación de equidad).
- Persistieron preocupaciones de los docentes sobre dependencia (especialmente en estudiantes débiles), impacto en el pensamiento crítico y exactitud, pese a las experiencias positivas.

## Limitaciones
- Estudio de caso de una sola institución vocacional de Singapur; generalización limitada.
- La intervención se enfocó en el docente; la conexión con resultados de aprendizaje de los estudiantes emergió como hallazgo secundario, no como objetivo de diseño con poder estadístico planificado.
- Tamaños y composición de grupos no plenamente equivalentes; comparaciones de exámenes sin pruebas de significancia inferencial robustas en varios casos.
- Las entrevistas se registraron solo con notas escritas (sin grabación de audio) para proteger la privacidad, lo que puede limitar la fidelidad del análisis temático.
- Limitaciones técnicas reconocidas: dependencia del hardware, fragilidad de los prompts y restricciones de escalabilidad con datasets grandes en CSV.

## Notas relacionadas
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/equidad-educativa]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/personalizacion-del-aprendizaje]]
- [[concepts/diseno-universal-para-el-aprendizaje]]
- [[concepts/formacion-docente]]
- [[concepts/motivacion-y-compromiso-estudiantil]]
- [[concepts/inteligencia-artificial]]
- [[concepts/evaluacion-educativa]]
