---
title: Talking like Piping and Instrumentation Diagrams (P&IDs)
authors: [Achmad Anggawirya Alimin, Dominik P. Goldstein, Lukas Schulze Balhorn, Artur M. Schweidtmann]
year: 2025
journal: Systems and Control Transactions (ESCAPE 35 — European Symposium on Computer Aided Process Engineering)
url: https://doi.org/10.69997/sct.159477
doi: 10.69997/sct.159477
pdf_local: sources/pdfs/capability-reliability/alimin_2025_talking-like-pids-escape35.pdf
type: paper
keywords: [inteligencia-artificial, agentes-de-ia, alucinaciones-de-ia, capacidades-de-ia, ingenieria-quimica, grafos-de-conocimiento, generacion-aumentada-por-recuperacion]
date_added: 2026-06-27
---

# Talking like Piping and Instrumentation Diagrams (P&IDs)

## Resumen

El artículo propone una metodología para comunicarse en lenguaje natural con los Diagramas de Tuberías e Instrumentación (P&IDs), documentos centrales en la ingeniería de procesos cuya consulta manual es lenta y propensa a errores. La propuesta representa los P&IDs mediante el modelo de datos DEXPI como grafos de propiedades etiquetadas (Label Property Graphs) y los integra con grandes modelos de lenguaje (LLMs) a través de una técnica de generación aumentada por recuperación basada en grafos (graph-RAG). El objetivo es permitir que ingenieros de procesos recuperen e interpreten información de los diagramas conversando con ellos.

El enfoque consta de tres partes: 1) convertir P&IDs en formato DEXPI a una representación de grafo usando el paquete Python pyDEXPI (parseando el XML a instancias de clase y construyendo un grafo NetworkX con nodos de equipo, tubería e instrumentación, y aristas de relaciones de dominio y léxicas); 2) generar un grafo de conocimiento (Neo4j LPG) añadiendo semántica mediante etiquetas heredadas de las clases pyDEXPI y propiedades clave-valor; y 3) integrar ese grafo de conocimiento con LLMs mediante graph-RAG, usando un agente construido con LangChain con módulo de memoria y respuesta en streaming.

Un aporte clave es un método de condensación que genera una representación de grafo de alto nivel (podando información de dominio, condensando nodos de baja información y eliminando propiedades no relacionadas con el proceso). En el caso de estudio DEXPI, esto reduce el grafo de 212 a 53 nodos y de 405 a 57 relaciones, bajando el uso de tokens de unos 67.000 a unos 9.000, lo que mejora la eficiencia y la legibilidad del grafo para el LLM.

La evaluación compara distintos LLMs (entre ellos GPT-4o y los modelos Sonnet 3.5 y Haiku 3 de Anthropic) y el grafo completo frente al grafo de alto nivel, sobre tres tareas: reconocimiento de patrones (describir el proceso de entrada a salida), completitud de recuperación (listar todas las válvulas y sus especificaciones) e inferencia de conocimiento (recomendaciones de seguridad de proceso). Los resultados muestran que los LLMs más grandes producen respuestas más completas y precisas, que el grafo de alto nivel mejora en promedio un 20% el reconocimiento de patrones, y que el enfoque mitiga (sin eliminar) las alucinaciones. Los autores señalan la baja tolerancia a errores de la ingeniería de procesos como limitación central y proyectan aplicaciones futuras de IA generativa sobre P&IDs, como la autocorrección y los estudios HAZOP asistidos por IA.

## Contribuciones principales

- Una metodología de extremo a extremo para "conversar" con P&IDs en lenguaje natural integrando el modelo de datos DEXPI con LLMs vía graph-RAG.
- Una tubería para transformar P&IDs DEXPI en grafos de propiedades etiquetadas (Neo4j) usando el paquete pyDEXPI, distinguiendo relaciones de dominio (jerárquicas) y léxicas (interacción entre componentes).
- Un método de condensación de grafos de conocimiento a representaciones de alto nivel que reduce drásticamente el uso de tokens (~67.000 → ~9.000) preservando las relaciones clave.

## Metodología

Estudio de caso sobre un P&ID de muestra en formato DEXPI. El P&ID se parsea con pyDEXPI a un grafo NetworkX y luego se convierte en un grafo de conocimiento Label Property Graph en Neo4j, con nodos etiquetados según las clases pyDEXPI y propiedades de diseño en pares clave-valor. Para la recuperación, el grafo de alto nivel se exporta a un archivo graphml que se inserta como contexto en el prompt de sistema de un agente LLM construido con LangChain (con memoria y streaming). Se evalúan varios LLMs de distinto tamaño y dos versiones del grafo (completo vs. alto nivel) mediante una secuencia de tres preguntas que miden reconocimiento de patrones, completitud de recuperación e inferencia.

## Hallazgos clave

- Los LLMs de mayor tamaño generan respuestas más completas y precisas; los modelos pequeños tienen dificultades para leer el grafo y son más propensos a alucinar o a negarse a responder.
- El grafo de alto nivel mejora en promedio un 20% la capacidad del modelo de describir secuencialmente el proceso de entrada a salida frente al grafo completo.
- En completitud, ambos tipos de grafo recuperaron el mismo número de válvulas (las 11), lo que muestra que el grafo condensado preserva la información; Sonnet 3.5 dio los mejores resultados, recuperando además actuadores y sus acciones fail-safe.
- En inferencia, el grafo de alto nivel conduce a recomendaciones de seguridad más específicas del flowsheet; Sonnet 3.5 produjo las recomendaciones más detalladas (válvulas de seguridad, amortiguadores de pulsación en bombas reciprocantes), por encima de GPT-4o y Haiku 3.
- El enfoque graph-RAG extiende la capacidad del LLM de recuperar datos contextuales del P&ID y mitiga las alucinaciones, aunque no las elimina.

## Limitaciones

- La ingeniería de procesos tiene baja tolerancia a errores y los modelos de IA generativa aún exhiben alucinaciones y fallos (p. ej. omitir equipos o dar respuestas imprecisas pero correctas y por tanto poco útiles).
- Ninguno de los LLMs fue afinado (fine-tuned) para leer flowsheets en formato de grafo de conocimiento, por lo que el desempeño refleja sobre todo el tamaño del modelo.
- La evaluación es un estudio de caso sobre un único P&ID de muestra, con métricas aún poco desarrolladas; se requieren métricas de evaluación más comprehensivas.
- Trabajo futuro necesario en métodos de recuperación, esquema del grafo de conocimiento e integración de base de datos para mejorar exactitud y fiabilidad.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/capacidades-de-ia]]
- [[concepts/ingenieria-quimica]]
- [[concepts/grafos-de-conocimiento]]
- [[concepts/generacion-aumentada-por-recuperacion]]
