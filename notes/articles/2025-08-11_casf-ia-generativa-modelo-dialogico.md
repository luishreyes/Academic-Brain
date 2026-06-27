---
title: "Integrating Generative AI with the Dialogic Model in Education: The Cognitive-AI Synergy Framework (CASF)"
author: David S. Ramos, Ignacio Chaparro, Jesse Padilla, Rubby Casallas, Juan C. Cruz, Luis H. Reyes
publication: Preprints.org (preprint, no revisado por pares)
date: 2025-08-11
url: https://doi.org/10.20944/preprints202508.0727.v1
type: article
keywords: [inteligencia-artificial, educacion-superior, evaluacion-educativa, integridad-academica, autorregulacion-del-aprendizaje, pensamiento-critico, agentes-de-ia, formacion-docente, etica-de-la-ia, equidad-educativa]
date_added: 2026-06-27
---

# Integrating Generative AI with the Dialogic Model in Education: The Cognitive-AI Synergy Framework (CASF)

## Resumen

Este preprint (Preprints.org, no revisado por pares) propone el **Cognitive-AI Synergy Framework (CASF)**, un marco para integrar la IA generativa (GenAI) en la educación superior de manera alineada con el desarrollo cognitivo del estudiante. CASF sintetiza dos marcos previos: el **modelo pedagógico dialógico de Julián De Zubiría** —que articula seis etapas de desarrollo cognitivo (nocional, proposicional, conceptual, formal, categorial y metacognitivo) y equilibra autoestructuración y heteroestructuración— y la **Artificial Intelligence Assessment Scale (AIAS)** de Perkins et al. (2024), que define cinco niveles de involucramiento de la IA en la evaluación (desde "sin IA" hasta "IA total"). La premisa central es que la decisión sobre cómo integrar IA debe estar guiada por la pericia pedagógica del docente, no por su competencia técnica.

El marco mapea los niveles de la AIAS a las etapas cognitivas de De Zubiría: en los niveles fundacionales (nocional, proposicional) se desaconseja o se supervisa estrictamente el uso de IA para preservar la construcción de habilidades básicas, mientras que en los niveles avanzados (categorial, metacognitivo) se habilita el uso autónomo de la IA en todas las modalidades (generación de ideas, edición, ejecución de tareas). El rol docente evoluciona de instrucción directa a mentoría estratégica a medida que el estudiante progresa.

Para demostrar su aplicación práctica, los autores presentan el **CASF Implementation Assistant**, una herramienta construida en n8n con arquitectura multi-agente: un flujo de gestión de conversación (orquestado por Gemini 2.5-Pro) y un flujo de recuperación de conocimiento (RAG con Gemini 1.5-Flash y vector store en memoria sobre tres documentos curados), accesible vía un frontend de Open WebUI. El asistente guía a docentes por un flujo de siete fases alineado con la plantilla de prompts TRACE(SE) (Task, Requirement, Action, Context, Example, Output Format, Assessment) para diseñar actividades adaptadas al nivel cognitivo del curso.

La validación consistió en un taller con nueve docentes universitarios de ingeniería, evaluado con una encuesta Likert (18 indicadores en cinco categorías). La satisfacción global fue alta (4.5/5), con el mayor puntaje en alineamiento con CASF (4.75/5) y el menor en desarrollo cognitivo (4.16/5), donde "promovió el pensamiento crítico" obtuvo el puntaje más bajo (3.75/5) —una tensión que los autores reconocen como área clave de refinamiento.

## Puntos clave

- CASF alinea los **niveles de uso de IA (AIAS)** con las **etapas de desarrollo cognitivo (De Zubiría)**: poca o ninguna IA en niveles fundacionales, integración plena y autónoma en niveles avanzados (metacognitivo).
- La pericia **pedagógica** del docente —no su competencia técnica— es el principal motor de las decisiones de integración de IA; la tecnología sirve a los objetivos de aprendizaje, no los dicta.
- El **CASF Implementation Assistant** (n8n + arquitectura multi-agente + RAG + Open WebUI) traduce el marco a una herramienta conversacional que genera actividades y prompts TRACE(SE) adaptados al contexto.
- La validación (taller, n=9 docentes de ingeniería) reportó satisfacción global de 4.5/5; el punto más débil fue la promoción del pensamiento crítico de orden superior (3.75/5).
- Riesgos centrales identificados: **descarga cognitiva** (cognitive offloading) y **sobredependencia** de la IA, especialmente en niveles fundacionales; CASF exige que todo uso de GenAI ocurra en el aula bajo supervisión docente directa.
- Consideraciones éticas explícitas: equidad de acceso a herramientas de IA, sesgo algorítmico, privacidad de datos del estudiante y transparencia sobre los límites del uso de IA.
- Limitaciones reconocidas: dificultad de identificar con precisión el nivel cognitivo en grupos heterogéneos, barreras técnicas e institucionales (políticas inconsistentes de IA, necesidad de equipos de desarrollo para personalizar el asistente), y validación preliminar (muestra pequeña, sin estudios longitudinales).

## Contexto

El paper se inscribe en el debate sobre cómo incorporar IA generativa en la educación superior sin erosionar el desarrollo de habilidades fundamentales y el pensamiento crítico. Su aporte conceptual es ofrecer un puente operativo entre teoría pedagógica (desarrollo cognitivo) y práctica de integración de IA (niveles de evaluación), con una herramienta agentica concreta como prueba de implementación. Es un preprint no revisado por pares y la validación empírica es preliminar; los autores plantean estudios longitudinales y comparativos como trabajo futuro. Uno de los coautores (Luis H. Reyes) es el responsable de este vault.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/evaluacion-educativa]]
- [[concepts/integridad-academica]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/pensamiento-critico]]
- [[concepts/agentes-de-ia]]
- [[concepts/formacion-docente]]
- [[concepts/etica-de-la-ia]]
- [[concepts/equidad-educativa]]
