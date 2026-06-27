---
title: "AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting"
authors: [Greg Kestin, Kelly Miller, Anna Klales, Timothy Milbourne, Gregorio Ponti]
year: 2025
journal: Scientific Reports
url: https://doi.org/10.1038/s41598-025-97652-6
doi: 10.1038/s41598-025-97652-6
pdf_local: sources/pdfs/ai-education/kestin2025-tutoria-ia-supera-activo.pdf
type: paper
keywords:
  - alucinaciones-de-ia
  - aprendizaje-activo
  - educacion-superior
  - ensayo-controlado-aleatorio
  - inteligencia-artificial
  - personalizacion-del-aprendizaje
  - psicologia-educativa
  - STEM
  - supervision-humana
  - tutoria-con-ia
date_added: 2026-06-25
---

# AI tutoring outperforms in-class active learning: an RCT introducing a novel research-based design in an authentic educational setting

## Resumen

Este paper reporta un ensayo controlado aleatorio de diseño cruzado (*crossover*) realizado en Harvard durante el otoño de 2023 en un curso introductorio de física para ciencias de la vida (Physical Sciences 2, N=194). El estudio compara los resultados de aprendizaje y las percepciones de los estudiantes cuando el mismo contenido se presenta a través de un tutor de IA personalizado versus una clase presencial con metodología de aprendizaje activo de alta calidad. La contribución central es que el tutor de IA fue diseñado siguiendo exactamente las mismas buenas prácticas pedagógicas que informan la clase presencial, controlando la variable del diseño pedagógico para aislar el efecto del medio de instrucción.

La distinción respecto a estudios anteriores sobre IA en educación es el diseño pedagógico explícito del tutor. En lugar de usar ChatGPT sin guía (que produce resultados mixtos o negativos), los autores construyeron un sistema con prompts de ingeniería detallada para: (i) facilitar aprendizaje activo, (ii) gestionar la carga cognitiva, (iii) promover mentalidad de crecimiento, (iv) andamiar el contenido, (v) garantizar precisión mediante soluciones paso a paso pre-escritas, (vi) dar retroalimentación personalizada y oportuna, y (vii) permitir autopaceo. El sistema fue construido sobre GPT-4 con una plataforma propia ("PS2 Pal") que guía al estudiante secuencialmente por cada parte de cada problema. Los resultados muestran que el grupo con IA aprendió significativamente más en menos tiempo que el grupo con aprendizaje activo presencial, con mayor engagement y motivación.

## Contribuciones principales

- Primer RCT en contexto educativo auténtico que compara un tutor de IA pedagogicamente diseñado vs. aprendizaje activo presencial de calidad
- Marco de 7 principios pedagógicos para diseñar tutores de IA efectivos (aprendizaje activo, carga cognitiva, mentalidad de crecimiento, andamiaje, precisión, retroalimentación oportuna, autopaceo)
- Evidencia empírica sólida de que la IA bien diseñada supera —no solo iguala— el aprendizaje activo presencial
- La personalización y el autopaceo como ventajas estructurales del tutor de IA sobre cualquier modalidad grupal
- Propuesta de modelo híbrido: IA para introducción de material + clase presencial para habilidades de orden superior

## Metodología

Diseño cruzado donde cada estudiante experimenta ambas condiciones. Temas: tensión superficial (semana 1) y flujo de fluidos (semana 2). Pre-test antes de cada condición, post-test después. El tutor de IA se construyó sobre GPT-4 con prompts ricos y soluciones paso a paso pre-escritas para evitar alucinaciones; la plataforma guía al estudiante secuencialmente por cada subproblema. Controles estadísticos via regresión lineal (controlando por: pre-test, examen previo del curso, FCI, experiencia con ChatGPT, tema del contenido, versión del test, tiempo en la tarea, clustering por estudiante) y regresión cuantílica para abordar el efecto techo. Aprobado por IRB de Harvard (no. IRB23-0797). Datos disponibles en GitHub.

## Hallazgos clave

- Mediana post-test: IA = 4.5 vs. aprendizaje activo = 3.5 (línea base pre-test = 2.75)
- Ganancias de aprendizaje del grupo IA más del **doble** que el grupo presencial (p < 10⁻⁸)
- Tiempo mediano en tarea con IA: **49 min** vs. 60 min en clase; sin correlación entre tiempo y puntaje post-test (el autopaceo beneficia a todos los niveles)
- Efecto grande estimado: **0.73 a 1.3 desviaciones estándar** (corregido por efecto techo)
- Mayor **engagement** (4.1 vs. 3.6, p < 0.0001) y **motivación** (3.4 vs. 3.1, p < 0.001) en grupo IA
- **83%** de estudiantes calificaron las explicaciones del tutor IA como iguales o mejores que las del instructor humano
- El efecto se sostiene para estudiantes con FCI < 40% y > 40%, y para actitudes científicas no-expertas y expertas

## Limitaciones

- Aplicado a material introductorio (comprensión, aplicación y análisis en Taxonomía de Bloom) — no probado para síntesis compleja ni pensamiento crítico de orden superior
- La precisión del tutor dependió de soluciones pre-escritas, no de razonamiento autónomo del LLM
- Contexto específico: física introductoria en Harvard, instructores con evaluaciones por encima del promedio departamental
- Aleatoriedad a nivel de grupos de instrucción entre pares (2–3 estudiantes), no individual
- No mide efectos a largo plazo, retención o impacto sobre habilidades de colaboración

## Notas relacionadas

- [[notes/articles/2026-05-21_ia-no-puede-hacer-ciencia-sin-humanos]] — Nature editorial que argumenta que la IA no puede reemplazar a los humanos; este paper muestra que la IA bien diseñada *sí* puede superar metodologías humanas en un dominio específico — la tensión entre los dos textos es productiva
- [[notes/articles/2026-06-25_ciencia-necesita-humanidades]] — ambos cuestionan la relación óptima entre humanos y tecnología; Fan argumenta por el complemento humanístico, este paper por el complemento pedagógico de la IA
- [[concepts/tutoria-con-ia]]
- [[concepts/aprendizaje-activo]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/STEM]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/ensayo-controlado-aleatorio]]
- [[concepts/psicologia-educativa]]
- [[concepts/personalizacion-del-aprendizaje]]
- [[concepts/supervision-humana]]
