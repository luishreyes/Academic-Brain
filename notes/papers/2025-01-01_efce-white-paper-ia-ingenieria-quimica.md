---
title: "White Paper: Artificial Intelligence in Chemical Engineering"
authors: [European Federation of Chemical Engineering (EFCE), Société Française de Génie des Procédés (SFGP)]
year: 2025
journal: EFCE / SFGP White Paper (5th European Forum on New Technologies, Paris, 13 December 2024)
url:
doi:
pdf_local: sources/pdfs/faculty-development-implementation/efce_2025_ai-cheme-white-paper.pdf
type: paper
keywords: [ingenieria-quimica, inteligencia-artificial, simulacion-computacional, ia-explicable, agentes-de-ia, seguridad-de-procesos, educacion-en-ingenieria, ciencia-de-datos, supervision-humana, desarrollo-de-farmacos]
date_added: 2026-06-28
---

# White Paper: Artificial Intelligence in Chemical Engineering

## Resumen

Este White Paper de la European Federation of Chemical Engineering (EFCE) y la Société Française de Génie des Procédés (SFGP) sintetiza las ponencias y discusiones del 5.º European Forum on New Technologies, celebrado en París el 13 de diciembre de 2024. El evento reunió a unos 130 participantes de 17 países, con representación equilibrada entre academia e industria (cerca del 50/50) y la participación de 42 empresas, para debatir el papel de la inteligencia artificial (IA) y el aprendizaje automático en la ingeniería química. El documento describe aplicaciones de la IA en distintas áreas del campo y ofrece directrices y advertencias sobre las precauciones necesarias al implementarla.

La primera parte ofrece una visión general de la IA para la ingeniería de procesos: cómo las empresas infrautilizan sus datos, las barreras de la integración de datos heterogéneos (sistemas fragmentados, falta de datos en tiempo real, brecha de conocimiento entre especialistas en datos y operadores), y el papel del feature engineering apoyado en conocimiento de dominio. Se subraya la tensión entre modelos físicos (causalmente explicables) y modelos data-driven (opacos), la importancia de la calidad —no solo cantidad— de los datos, el riesgo de introducir sesgos humanos en la selección de variables, y la "estancación de la confianza" ("trust stagnation") frente a las simulaciones. La explicabilidad (técnicas como Shapley, coordenadas paralelas) se presenta como condición central para evitar nuevos "inviernos de la IA".

La segunda parte aborda la IA generativa en la ingeniería de procesos: detección y autocorrección de diagramas P&ID/PFD, generación de flow-sheets, traducción PFD-a-P&ID y HAZOP aumentado con IA. Se discute si la ingeniería de procesos es un dominio de "big data" (los datos son escasos y propietarios), por lo que emergen modelos híbridos que combinan principios físicos con aprendizaje automático para reducir requisitos de datos. Se describen representaciones de datos (grafos vs. cadenas de caracteres), arquitecturas (transformers, redes neuronales de grafos, redes recurrentes), casos como la generación de ciclos CO2 Brayton en EDF, y la visión de un sistema multi-agente (PILOT) de LLMs que colaboran en síntesis de procesos.

La tercera parte presenta aplicaciones concretas: modelado híbrido y gemelos digitales en la producción de clínker (cemento) con 84 % de exactitud predictiva; caracterización 3D online de cristales en suspensión mediante aprendizaje automático (sistema DISCO); predicción de límites de solubilidad de ingredientes farmacéuticos con redes neuronales de grafos y transfer learning; y métodos de deep learning (CNN) para evaluar la estabilidad física de líquidos formulados industriales (caso Procter & Gamble, dataset "Fluid" publicado en GitHub). El documento cierra con una mesa redonda sobre si la IA puede potenciar la creatividad en ingeniería de procesos, cómo integrarla mejor en los currículos de ingeniería química (Python, ciencia de datos, datos reales, proyectos con empresas) y el futuro de la colaboración IA-humano, con un consenso recurrente: la IA como herramienta de apoyo, no como sustituto del juicio del ingeniero.

## Contribuciones principales

- Síntesis multi-actor (academia + industria) del estado y los retos de la IA en ingeniería química, basada en presentaciones del European Forum on New Technologies 2024.
- Diagnóstico de las barreras prácticas de la implementación industrial: datos fragmentados y propietarios, deuda técnica, jerarquías de automatización rígidas, conservadurismo por seguridad y falta de explicabilidad.
- Hoja de ruta para la IA generativa en procesos: autocompletado de flow-sheets, traducción PFD→P&ID, autocorrección de P&IDs y HAZOP aumentado con IA.
- Casos de aplicación concretos: gemelo digital de producción de clínker, caracterización 3D de cristales (DISCO), predicción de solubilidad farmacéutica con GNN/transfer learning, y detección de inestabilidad en líquidos formulados (P&G) con CNN.
- Recomendaciones para integrar IA y ciencia de datos en los currículos de ingeniería química.

## Metodología

White Paper de carácter de síntesis de proceedings: el documento no presenta un estudio empírico propio, sino que recoge y organiza las ponencias orales y discusiones de un foro de un día estructurado en tres sesiones y una mesa redonda final. Cada sección resume el contenido y las conclusiones de expertos de academia e industria sobre un aspecto específico de la IA en ingeniería química.

## Hallazgos clave

- El valor de la IA en procesos proviene en gran medida del feature engineering y del conocimiento de dominio (física, química), no solo del entrenamiento del modelo; el preprocesamiento es el puente entre el conocimiento físico y el aprendizaje automático.
- Los modelos físicos aportan causalidad y explicabilidad; los modelos data-driven carecen de transparencia, lo que limita la confianza; los modelos híbridos (física + ML) reducen los requisitos de datos y mejoran la generalización.
- La gestión totalmente autónoma de procesos mediante IA sigue siendo un horizonte lejano; persisten barreras de seguridad, ética y regulación, especialmente en entornos sensibles como plantas industriales o nucleares; los LLMs actuales no están diseñados para operar instalaciones automatizadas.
- La escasez y el carácter propietario de los datos (P&IDs, PFDs) es el cuello de botella central; iniciativas de digitalización y colaboración industria-academia ("data rooms", Digico) son esenciales.
- En casos aplicados, las redes neuronales de grafos destacan para propiedades moleculares y las CNN para análisis de imágenes; el transfer learning combina datasets grandes de química cuántica de baja exactitud con datasets pequeños experimentales de alta exactitud.
- Consenso en modernizar el currículo de ingeniería química: incorporar Python, ciencia de datos, gestión de datos reales y proyectos con empresas, manteniendo los fundamentos de ingeniería química; aprendizaje continuo y formación en el puesto como inevitables.

## Limitaciones

- Documento de síntesis de proceedings, no un estudio empírico con metodología verificable; sus afirmaciones recogen opiniones de expertos sin evaluación sistemática.
- Sesgo geográfico hacia la comunidad europea (EFCE/SFGP, foros en París, Nancy, Breda) y hacia sectores específicos (química, energía, farmacéutica, cemento, bienes de consumo).
- Las aplicaciones reportadas son en su mayoría pruebas de concepto o proyectos en curso; muchas de las capacidades discutidas son prospectivas (horizonte de 2 a 5 años).
- La metodología de cada caso se describe de forma resumida, sin acceso a datos primarios ni a métricas detalladas de validación.

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/inteligencia-artificial]]
- [[concepts/simulacion-computacional]]
- [[concepts/ia-explicable]]
- [[concepts/agentes-de-ia]]
- [[concepts/seguridad-de-procesos]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/ciencia-de-datos]]
- [[concepts/supervision-humana]]
- [[concepts/desarrollo-de-farmacos]]
