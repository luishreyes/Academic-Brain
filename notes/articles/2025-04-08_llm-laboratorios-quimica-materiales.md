---
title: Integrating Large Language Models into the Chemistry and Materials Science Laboratory Curricula
author: Annalise E. Maughan, Eric S. Toberer, Alexandra Zevalkink
publication: Chemistry of Materials (ACS)
date: 2025-04-08
url: https://doi.org/10.1021/acs.chemmater.5c00111
type: article
keywords: [inteligencia-artificial, educacion-superior, tutoria-con-ia, generacion-aumentada-por-recuperacion, agentes-de-ia, alucinaciones-de-ia, pensamiento-critico, retroalimentacion-con-ia, aprendizaje-activo, etica-de-la-ia, equidad-educativa]
date_added: 2026-06-27
---

# Integrating Large Language Models into the Chemistry and Materials Science Laboratory Curricula

## Resumen

Este editorial, publicado en *Chemistry of Materials* (ACS), sintetiza las conclusiones de un taller de dos días financiado por la National Science Foundation (NSF) que reunió a 41 participantes —estudiantes de posgrado, investigadores postdoctorales y profesorado— con experiencia en química de materiales, educación química y ciencias de la computación. El objetivo fue ordenar el "salvaje oeste" actual en que educadores individuales experimentan de forma ad hoc con modelos de lenguaje grandes (LLMs) en sus aulas, proponiendo un marco más coherente para compartir éxitos y fracasos al integrar estas herramientas en cursos de laboratorio de química (química general, orgánica, fisicoquímica) y ciencia de materiales.

Los autores parten de una crítica conocida: los laboratorios tradicionales tienden a ser demasiado prescriptivos ("cookbook"), lo que limita la comprensión conceptual profunda y el pensamiento crítico. Frente a esto, exploran cómo los LLMs podrían reformar el arco completo del laboratorio —preparación pre-lab, apoyo durante la sesión y tareas post-lab— mediante "Asistentes Virtuales de Enseñanza" (VTAs). La segunda mitad del taller fue un hackathon donde los equipos prototiparon herramientas concretas: un "Agent-Supported Pre-lab Assistant" que guía sin entregar respuestas, un "Study Buddy" basado en RAG que recupera contenido del curso cargado por el instructor para reducir alucinaciones, GPTs personalizados entrenados en procedimientos operativos estándar y manuales de equipo, y el uso del "Data Analyst" de ChatGPT para visualizar y analizar datos experimentales (curvas de calibración con la ley de Beer, cinética química) sin necesidad de programar.

El editorial dedica atención sustancial a los riesgos. Las alucinaciones son la preocupación principal: imprecisiones conceptuales, omisión de detalles de seguridad o procedimientos erróneos presentados con confianza. Citan que ChatGPT-3.5 explicó 85 mecanismos de reacción orgánica con solo ~28% de exactitud, y que el ingeniería de prompts mejora la sofisticación pero no necesariamente la precisión. RAG y prompts optimizados mitigan pero no eliminan el problema. También advierten sobre el desplazamiento de la tutoría entre pares y la mentoría humana —notan anecdóticamente que la asistencia a horas de oficina cae conforme los estudiantes usan más los LLMs— además de problemas de integridad académica y equidad de acceso.

Finalmente, los autores discuten cómo los LLMs apoyan a los instructores (planeación de lecciones, generación y calificación de exámenes, módulos de capacitación para TAs, diseño inclusivo y accesible de laboratorios) y cómo pueden viabilizar formatos alternativos como laboratorios computacionales (DFT, modelado en Python/MATLAB) y experiencias de investigación de pregrado basadas en cursos (CUREs). Concluyen que estas herramientas no son una panacea: requieren supervisión vigilante, ingeniería de prompts robusta y pensamiento crítico de los estudiantes, pero pueden ser un beneficio neto si se integran de forma consciente, y subrayan la necesidad de una comunidad de educadores que comparta buenas prácticas y advertencias.

## Puntos clave

- Marco organizado en tres preguntas: cómo los LLMs impactan el aprendizaje estudiantil, cómo afectan la entrega de cursos (diseño, andamiaje, evaluación), y si facilitan estructuras alternativas como las CUREs.
- Concepto central de los "Asistentes Virtuales de Enseñanza" (VTAs) que cubren el arco completo del laboratorio: pre-lab, en-lab y post-lab.
- Primer técnico para educadores sobre términos clave: agentes, RAG, fine-tuning, ingeniería de prompts y razonamiento en cadena de pensamiento (chain-of-thought).
- Prototipos del hackathon: asistente pre-lab basado en agentes que guía sin dar la respuesta; "Study Buddy" con RAG anclado al contenido del curso; GPTs personalizados para troubleshooting y seguridad.
- Demostración de análisis de datos por lenguaje natural con ChatGPT-4o (espectroscopía de absorción, ley de Beer, cinética química) sin conocimiento previo de código.
- Las alucinaciones son el riesgo más crítico en laboratorio (seguridad, conceptos, procedimientos); RAG y prompts las mitigan pero no las eliminan.
- Riesgo de desplazar la mentoría humana y la interacción entre pares, donde se forja la identidad científica y el pensamiento crítico.
- Estrategia pedagógica emergente: usar las propias alucinaciones como ejercicio, pidiendo a los estudiantes evaluar la exactitud de las respuestas de la IA.
- Apoyo a instructores: planeación de lecciones, generación y calificación de exámenes, capacitación de TAs, diseño accesible e inclusivo de laboratorios.
- Los LLMs pueden viabilizar laboratorios computacionales (DFT, modelado) y CUREs al reducir barreras de programación y carga logística.

## Contexto

Este editorial conecta el debate general sobre IA generativa en educación superior con un dominio disciplinar específico y poco cubierto: los cursos de laboratorio de química y ciencia de materiales, donde los riesgos de las alucinaciones se vuelven particularmente graves por sus implicaciones de seguridad. Aporta una visión práctica y "desde la trinchera" (prototipos concretos de un hackathon respaldado por la NSF) sobre cómo arquitecturas como RAG y los agentes pueden anclar las salidas de un LLM al currículo, y articula con claridad la tensión entre la escalabilidad de los VTAs y la preservación de la mentoría humana y el aprendizaje basado en indagación.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/tutoria-con-ia]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/agentes-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/aprendizaje-activo]]
- [[concepts/etica-de-la-ia]]
- [[concepts/equidad-educativa]]
