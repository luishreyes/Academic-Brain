---
title: Toward automatic generation of control structures for process flow diagrams with large language models
authors: [Edwin Hirtreiter, Lukas Schulze Balhorn, Artur M. Schweidtmann]
year: 2024
journal: AIChE Journal
url: https://doi.org/10.1002/aic.18259
doi: 10.1002/aic.18259
pdf_local: sources/pdfs/capability-reliability/hirtreiter_2024_pfd-control-structures-llm.pdf
type: paper
keywords: [inteligencia-artificial, ingenieria-quimica, simulacion-computacional]
date_added: 2026-06-27
---

# Hacia la generación automática de estructuras de control para diagramas de flujo de procesos con grandes modelos de lenguaje

## Resumen

El desarrollo de Diagramas de Tuberías e Instrumentación (P&IDs) es un paso crucial y laborioso en el diseño de plantas químicas. Los autores proponen un método basado en datos para predecir estructuras de control descentralizado, inspirado en los modelos de traducción de lenguaje natural de extremo a extremo basados en transformers. La idea central es plantear la predicción de la estructura de control como una tarea de traducción: el "idioma fuente" es un Diagrama de Flujo de Proceso (PFD) sin estructura de control y el "idioma destino" es el mismo PFD con su estructura de control. Para ello, la topología de los PFDs se representa como cadenas de texto mediante la notación SFILES 2.0, lo que permite aplicar técnicas de procesamiento de lenguaje natural (NLP).

El modelo —una versión reducida del transformer T5 con solo ~7,9 millones de parámetros— se preentrena con PFDs generados artificialmente para aprender la estructura gramatical de SFILES 2.0, y luego se afina (fine-tuning) mediante transfer learning sobre un conjunto de 312 PFDs reales recolectados de fuentes públicas. Sobre datos generados, el modelo alcanzó una exactitud top-5 del 74,8% con 10.000 PFDs de entrenamiento y del 89,2% con 100.000 PFDs, usando beam search para devolver las cinco estructuras de control más probables.

Los resultados sobre datos sintéticos constituyen una prueba de concepto exitosa, pero la evaluación sobre PFDs reales arrojó una exactitud top-5 del 0%, evidenciando que el conjunto de datos reales (312 diagramas) es demasiado pequeño y heterogéneo para aplicaciones industriales. Los autores concluyen que se necesita un conjunto de datos mucho mayor y soluciones de IA híbrida que integren principios de ingeniería de procesos.

## Contribuciones principales

- Plantear la predicción de estructuras de control descentralizado en PFDs como una tarea de traducción secuencia-a-secuencia, novedosa respecto a trabajos previos centrados en la autocompletación de diagramas incompletos.
- Uso de la notación textual SFILES 2.0 para representar la topología de PFDs (incluyendo unidades, reciclos de material y conexiones de señal) y habilitar modelos NLP.
- Algoritmo de generación de PFDs sintéticos con estructuras de control descentralizado mediante un muestreo tipo cadena de Markov de primer orden, usado para el preentrenamiento.
- Tokenizador propio de SFILES 2.0 (inspirado en tokenizadores de SMILES) que preserva la estructura inherente de la notación.
- Prueba de concepto que demuestra la viabilidad de la predicción sobre datos sintéticos, con publicación abierta de datos y código.

## Metodología

Modelo transformer encoder-decoder (T5-small reducido a tamaño de embedding 128 y dos capas de encoder/decoder). El flujo: PFD → SFILES 2.0 → tokenización → preentrenamiento sobre PFDs generados (cadenas de Markov con heurísticas de diseño de control) → fine-tuning por transfer learning sobre 312 PFDs reales digitalizados con LabelGraph. Se aplica aumentación de datos generando SFILES 2.0 no canónicos (alterando la decisión de ramificación). La evaluación usa la métrica top-k accuracy con beam search (ancho 5).

## Hallazgos clave

- Exactitud top-5 de 74,8% (10.000 muestras) y 89,2% (100.000 muestras) sobre datos generados; el desempeño crece con el tamaño del dataset.
- 100 o 1.000 muestras de entrenamiento son insuficientes; se requieren al menos ~10.000 PFDs generados para resultados razonables.
- La aumentación de datos SFILES 2.0 mejora el desempeño, especialmente con datasets de 10.000 muestras.
- El modelo puede aprender también a posicionar válvulas (no solo la estructura de control) cuando se entrena removiéndolas del input.
- Sobre 312 PFDs reales, la exactitud top-5 fue 0%, mostrando la insuficiencia del dataset real.

## Limitaciones

- El modelo solo considera información topológica del PFD; ignora componentes presentes, flujos de material, puntos de operación, dinámica del proceso y dimensionamiento de equipos, todos críticos para una estructura de control segura (p. ej., columnas de destilación).
- Escasez de datos reales de PFDs/P&IDs, en su mayoría confidenciales y propietarios en la industria.
- El dataset generado usa solo control descentralizado con patrones pequeños añadidos, sin dependencias de largo alcance, lo que puede producir arquitecturas de control no significativas.
- No aplicable aún a contextos industriales; el control es safety-critical y requiere validación humana (los autores citan a la UNESCO sobre que la IA no reemplaza la responsabilidad humana en decisiones críticas de seguridad).

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
