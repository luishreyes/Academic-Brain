---
title: "Generative Artificial Intelligence: A New Engine for Advancing Environmental Science and Engineering"
author: Yipeng Wu, Ming Xu, Shuming Liu
publication: Environmental Science & Technology
date: 2024-09-29
url: https://doi.org/10.1021/acs.est.4c07216
type: article
keywords: [inteligencia-artificial, agentes-de-ia, generacion-aumentada-por-recuperacion, ingenieria-ambiental, sostenibilidad, supervision-humana, alucinaciones-de-ia, descubrimiento-cientifico]
date_added: 2026-06-27
---

# Generative Artificial Intelligence: A New Engine for Advancing Environmental Science and Engineering

## Resumen

Este "Viewpoint" publicado en *Environmental Science & Technology* (vol. 58, pp. 17524–17528) por Yipeng Wu, Ming Xu y Shuming Liu, de la Escuela de Medio Ambiente de la Universidad de Tsinghua, examina las aplicaciones actuales y potenciales de la IA generativa en la ciencia y la ingeniería ambiental, así como los obstáculos que aún limitan su adopción. Los autores contrastan la IA discriminativa tradicional —centrada en aprender fronteras de decisión entre categorías y ya muy aplicada en predicción de calidad del agua y detección de contaminación— con la nueva frontera de la IA generativa, que crea nuevas instancias de datos a partir de distribuciones aprendidas (LLMs como ChatGPT, modelos texto-a-imagen como DALL-E).

El artículo organiza el panorama en tres niveles de madurez creciente. Primero, la IA generativa como herramienta para potenciar la IA discriminativa: redes generativas adversariales (GAN) que aumentan datos de entrenamiento escasos, como la augmentación de señales acústicas para detectar fugas en tuberías de agua. Segundo, los chatbots ambientales basados en LLM, que sirven de repositorio de conocimiento especializado para investigación, docencia y formación; el ejemplo central es Kaiwu GPT, construido sobre el proyecto open-source TianGong AI con un marco de generación aumentada por recuperación (RAG) que recupera información relevante de fuentes externas antes de generar respuestas, mejorando exactitud y permitiendo actualización dinámica sin reentrenar el modelo. Tercero, los agentes inteligentes impulsados por LLM, capaces de planificar y ejecutar tareas de forma autónoma e interactuar entre sí (tecnología multi-agente); se cita OceanGPT, entrenado desde cero con datos del dominio marino y cuyas instrucciones se generaron automáticamente mediante colaboración multi-agente (más de 150 000 instrucciones a partir de 10 000 curadas por expertos).

Los autores prospectan aplicaciones donde cada agente LLM representa un actor con un rol (científico, ingeniero, entidad gubernamental, hogar) para diseñar nuevos procesos de tratamiento de aguas residuales y gases, operar modelos ambientales mecanísticos o basados en datos como un "centro de control", y evaluar políticas ambientales simulando respuestas de distintos grupos demográficos. Finalmente discuten los principales retos: derechos de autor y privacidad de datos, la costosa construcción de conjuntos de datos de entrenamiento (incluido el alineamiento multimodal imagen-texto, p. ej. asociar la imagen de un lago con una capa verde al término "algal bloom"), y el aseguramiento de la exactitud para prevenir la difusión de hallazgos erróneos. Concluyen que la IA generativa debe verse como herramienta para potenciar la eficiencia y nunca como sustituto de la investigación centrada en el ser humano.

## Puntos clave

- La IA generativa amplía el rol de la IA en lo ambiental más allá de la predicción discriminativa: aumentación de datos con GAN, chatbots de conocimiento y agentes autónomos.
- RAG es clave para chatbots ambientales precisos y actualizables (caso Kaiwu GPT / TianGong AI), evitando reentrenar el modelo base y reduciendo errores.
- La tecnología multi-agente permite generar datos/instrucciones de entrenamiento a escala (caso OceanGPT) y simular interacciones entre actores para diseño de procesos, modelado y evaluación de políticas.
- Hasta donde saben los autores, aún no se han reportado aplicaciones de agentes para la toma automatizada de decisiones directas en el campo ambiental.
- Retos centrales: copyright y privacidad de datos, construcción costosa de datasets especializados (incluido alineamiento multimodal), y aseguramiento de exactitud frente a salidas incorrectas.
- La supervisión experta es indispensable: revisión obligatoria para áreas de alto riesgo, modelos guiados por expertos vía aprendizaje por refuerzo y mecanismos de retroalimentación humana continua.

## Contexto

El texto importa porque sintetiza, desde una revista de referencia en ingeniería ambiental, cómo la IA generativa y los sistemas multi-agente pueden reconfigurar la práctica investigadora de un dominio aplicado concreto (agua, aire, residuos, políticas), frente a desafíos de sostenibilidad como el cambio climático, el acceso a agua limpia y la pérdida de biodiversidad. Conecta debates transversales sobre RAG, agentes autónomos, alucinaciones y la necesidad de mantener al humano en el bucle con un caso de aplicación sectorial específico.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/generacion-aumentada-por-recuperacion]]
- [[concepts/ingenieria-ambiental]]
- [[concepts/sostenibilidad]]
- [[concepts/supervision-humana]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/descubrimiento-cientifico]]
