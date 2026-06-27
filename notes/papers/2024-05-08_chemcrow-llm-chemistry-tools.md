---
title: Augmenting large language models with chemistry tools
authors: [Andres M. Bran, Sam Cox, Oliver Schilter, Carlo Baldassari, Andrew D. White, Philippe Schwaller]
year: 2024
journal: Nature Machine Intelligence
url: https://www.nature.com/articles/s42256-024-00832-8
doi: 10.1038/s42256-024-00832-8
pdf_local: sources/pdfs/capability-reliability/bran_2024_chemcrow-llm-chemistry-tools.pdf
type: paper
keywords: [agentes-de-ia, inteligencia-artificial, quimica-computacional, descubrimiento-cientifico, desarrollo-de-farmacos, alucinaciones-de-ia, capacidades-de-ia, supervision-humana, seguridad-de-ia]
date_added: 2026-06-27
---

# Augmenting large language models with chemistry tools

## Resumen

Los autores presentan ChemCrow, un agente de IA basado en un modelo de lenguaje grande (GPT-4) diseñado para resolver tareas de química a través de síntesis orgánica, descubrimiento de fármacos y diseño de materiales. El punto de partida es que, aunque los LLM destacan en muchas tareas de lenguaje, fallan sistemáticamente en problemas químicos sencillos (por ejemplo, convertir nombres IUPAC en grafos moleculares) y carecen de acceso a fuentes de conocimiento externas. La propuesta consiste en aumentar el LLM con 18 herramientas expertas (búsqueda web y de literatura, herramientas moleculares, de reacciones y de seguridad), de modo que el modelo pase de ser una fuente de información "hiperconfiada pero típicamente equivocada" a un motor de razonamiento que reflexiona, usa una herramienta adecuada, observa la respuesta y repite el ciclo.

El agente opera con el patrón Thought–Action–Action Input–Observation (heredado de los marcos ReAct y MRKL), implementado sobre LangChain. ChemCrow planificó y ejecutó de forma autónoma la síntesis de un repelente de insectos (DEET) y de tres organocatalizadores de tiourea conocidos (de Schreiner, Ricci y Takemoto) usando la plataforma robótica RoboRXN de IBM Research, demostrando una de las primeras interacciones de un agente LLM químico con el mundo físico. En un ejemplo de colaboración humano-IA, el agente entrenó un modelo de Random Forest para cribar una biblioteca de cromóforos y guió el descubrimiento de un cromóforo novedoso, posteriormente sintetizado y validado experimentalmente.

Un hallazgo central de la evaluación es la divergencia entre los evaluadores: expertos humanos prefieren consistentemente las respuestas de ChemCrow en corrección química, calidad del razonamiento y completitud de la tarea, especialmente en tareas complejas. En cambio, un evaluador automático basado en GPT-4 (EvaluatorGPT) prefiere a GPT-4 sin herramientas porque sus respuestas son más fluidas y aparentemente completas, sin detectar sus alucinaciones. Esto sugiere que un LLM no es un evaluador fiable cuando la factualidad es decisiva. El trabajo dedica además una sección a estrategias de mitigación de riesgos: comprobación de sustancias controladas y explosivas, instrucciones de seguridad codificadas, supervisión humana y consideraciones de propiedad intelectual.

## Contribuciones principales

- Diseño e implementación de ChemCrow, un agente LLM que integra 18 herramientas expertas de química bajo el paradigma ReAct/MRKL.
- Demostración de síntesis autónoma de moléculas reales (DEET, tres organocatalizadores) sobre una plataforma robótica conectada a la nube.
- Caso de colaboración humano-IA que condujo al descubrimiento experimentalmente validado de un nuevo cromóforo.
- Evidencia de que la integración de herramientas expertas mitiga las alucinaciones del LLM en tareas químicas.
- Hallazgo de que un evaluador LLM (GPT-4) no distingue respuestas químicamente erróneas de las correctas, cuestionando la autoevaluación con LLM cuando la factualidad importa.

## Metodología

ChemCrow usa GPT-4 (temperatura 0.1) como motor de razonamiento, orquestado mediante LangChain. Se le proporciona una lista de herramientas con descripciones y formato de entrada/salida, y se le instruye a seguir el bucle iterativo Thought–Action–Action Input–Observation. Las herramientas se clasifican en generales (WebSearch, LitSearch con paper-qa, Python REPL, Human), moleculares (Name2SMILES, SMILES2Price, Name2CAS, Similarity, ModifyMol, PatentCheck, FuncGroups, SMILES2Weight), de seguridad (ControlledChemicalCheck, ExplosiveCheck, SafetySummary) y de reacción (NameRXN, ReactionPredict, ReactionPlanner, ReactionExecute, estas últimas sobre la API RXN4Chemistry de IBM). La evaluación combinó un conjunto de tareas diseñadas con químicos expertos, comparando ChemCrow frente a GPT-4 solo, calificadas por EvaluatorGPT y por un panel de químicos humanos en tres dimensiones: corrección química, calidad del razonamiento y grado de completitud.

## Hallazgos clave

- ChemCrow supera a GPT-4 sin herramientas en factualidad, razonamiento y completitud, sobre todo en tareas complejas o novedosas.
- GPT-4 solo destaca únicamente en tareas fáciles basadas en memorización (síntesis de DEET, paracetamol), donde alucina menos.
- La integración de herramientas expertas reduce de forma efectiva las alucinaciones del modelo en química.
- EvaluatorGPT (GPT-4 como juez) prefiere a GPT-4 por su fluidez aparente, sin detectar errores químicos, lo que lo hace poco fiable como benchmark cuando la factualidad es clave.
- Las herramientas de seguridad permiten detener la ejecución ante sustancias controladas o explosivas.

## Limitaciones

- El rendimiento está acotado por la cantidad y calidad de las herramientas elegidas; herramientas con salidas inexactas inducen conclusiones erróneas.
- El conjunto de tareas de evaluación es limitado y puede contener sesgo implícito en su selección.
- Falta de reproducibilidad de resultados individuales por el uso de modelos cerrados vía API (control limitado).
- Las herramientas más potentes (síntesis, ejecución robótica) dependen de plataformas y APIs propietarias (RXN4Chemistry, RoboRXN, NameRxn).
- Riesgos de uso indebido y propiedad intelectual que requieren salvaguardas, supervisión humana y políticas claras.

## Notas relacionadas

- [[concepts/agentes-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/quimica-computacional]]
- [[concepts/descubrimiento-cientifico]]
- [[concepts/desarrollo-de-farmacos]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/supervision-humana]]
- [[concepts/seguridad-de-ia]]
