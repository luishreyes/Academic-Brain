---
title: "Automating Excel Tasks with Generative AI: Supporting Innovation in Mass Transfer Separations Education"
authors: ["Moisés García-Morales"]
year: 2026
journal: Journal of Chemical Education
url: https://pubs.acs.org/doi/10.1021/acs.jchemed.5c01531
doi: 10.1021/acs.jchemed.5c01531
pdf_local: sources/pdfs/cheme-applications/garcia-morales_2026_genai-excel-vba-mass-transfer-separations.pdf
type: paper
keywords: [ingenieria-quimica, educacion-en-ingenieria, inteligencia-artificial, aprendizaje-activo, simulacion-computacional, educacion-en-programacion, pensamiento-critico, supervision-humana]
date_added: 2026-06-27
---

# Automatizar tareas de Excel con IA generativa: apoyo a la innovación en la enseñanza de Separaciones por Transferencia de Masa

## Resumen

Este reporte técnico, publicado en el *Journal of Chemical Education*, describe cómo la creación de macros VBA (Visual Basic for Applications) asistida por IA generativa puede mejorar la enseñanza de las Separaciones por Transferencia de Masa en ingeniería química. El autor argumenta que, frente a simuladores comerciales como Aspen Plus o Aspen Hysys —costosos, complejos y propensos a generar un "efecto caja negra" en el que el estudiante no percibe las ecuaciones ni la estrategia de solución—, una hoja de cálculo en Excel programada por el propio estudiante prioriza el valor educativo y obliga a involucrarse con los cálculos subyacentes.

Para demostrar el potencial del enfoque, se diseñó un simulador casero de destilación fraccionada multietapa con una interfaz gráfica atractiva en Excel, capaz de identificar condiciones óptimas y límite de operación en una columna de destilación de etapas en equilibrio. El simulador emplea un método paso a paso (en lugar de los métodos matriciales de los simuladores comerciales), funciones lógicas anidadas ("IF", "AND"), el comando "GoalSeek" y macros grabadas para resolver balances de masa, temperaturas, número de etapas y razón de reflujo. La IA (Copilot de Microsoft, gratuita; también ChatGPT o Gemini) se usa de forma iterativa para generar y depurar el código VBA a partir de descripciones precisas de la funcionalidad deseada, refinándolo en sucesivas rondas hasta lograr el comportamiento buscado.

El trabajo también reporta una implementación en aula durante el curso 2024-25 con estudiantes de tercer año del Grado en Ingeniería Química Industrial de la Universidad de Huelva (España), en un ejercicio más sencillo: el cálculo del perfil de composición y la altura de columna en un sistema de absorción empacado. Ninguno de los estudiantes tenía experiencia previa con macros VBA. Se propone un marco estructurado y replicable de seis pasos (definir un problema repetitivo, resolverlo manualmente, introducir VBA de forma incremental, incorporar IA generativa, asignar tareas, y fomentar la escritura de código propio), con una progresión scaffolded de cuatro etapas (grabación de macros, replicación manual, bucles asistidos por IA, y detección dinámica de rangos).

El autor sostiene que el enfoque produce un aprendizaje más significativo (la IA explica el código generado) e inclusivo (accesible incluso a quienes tienen conocimientos limitados de programación), y que cierra una brecha curricular frecuente: la programación introductoria (típicamente en C++) rara vez se conecta con aplicaciones disciplinares. Los estudiantes reportaron unánimemente que escribir VBA fue más práctico que su curso introductorio de programación de primer año.

## Contribuciones principales

- Presenta un simulador de destilación fraccionada multietapa programado íntegramente en Excel/VBA, con interfaz gráfica, como alternativa pedagógica de bajo costo a Aspen Plus, con resultados consistentes con el software profesional.
- Propone un marco estructurado y replicable de seis pasos para integrar la programación VBA asistida por IA generativa en cursos técnicos de ingeniería.
- Describe una secuencia scaffolded de cuatro etapas (grabación de macro, replicación manual, bucles con ayuda de IA, detección dinámica de rangos) para un ejercicio de absorción empacada.
- Documenta la naturaleza iterativa del trabajo con IA (cinco rondas de refinamiento de Copilot ilustradas en la Figura 2) como parte del proceso de aprendizaje.

## Metodología

Reporte técnico de tipo demostrativo y experiencia docente. Combina (1) el desarrollo de un simulador de destilación basado en un método paso a paso aplicable a mezclas multicomponente bajo dos restricciones (ausencia de componentes no clave HNK/LNK, y ausencia de componentes distribuidos entre clave pesado y clave ligero), usando funciones lógicas, GoalSeek y macros VBA generadas iterativamente con Copilot; y (2) una implementación en aula (curso 2024-25, Universidad de Huelva, ~estudiantes de tercer año sin experiencia en VBA) de un ejercicio más simple sobre absorción empacada, con una sesión de 90 minutos suficiente para completarlo. La evaluación es exploratoria y cualitativa (retroalimentación de los estudiantes), sin diseño experimental controlado.

## Hallazgos clave

- Es posible reproducir cálculos de separación profesionales en Excel/VBA con resultados consistentes con Aspen Plus, manteniendo la transparencia de las ecuaciones.
- La IA generativa permite a estudiantes sin conocimientos de VBA crear y depurar macros funcionales mediante prompts precisos y refinamiento iterativo.
- Usar Copilot gratuito para generar código VBA (que el estudiante debe copiar, interpretar y adaptar) fomenta mayor compromiso con los conceptos de programación que los add-ins de IA que ocultan el manejo de módulos.
- Los estudiantes valoraron el VBA como más práctico y útil a corto plazo que su curso introductorio de programación (C++), especialmente para proyectos de fin de grado.

## Limitaciones

- Evaluación exploratoria y anecdótica: la "retroalimentación unánime" de los estudiantes no proviene de un instrumento validado ni de un diseño controlado.
- Muestra acotada a un curso, una institución y un autor que imparte la asignatura desde hace más de dos décadas; generalización limitada.
- Requiere que los estudiantes lleven portátiles propios y dispone de tiempo (proyectos de fin de grado), lo que puede no encajar en currículos rígidos.
- No se analizan riesgos del uso de IA (alucinaciones de código, dependencia, verificación) más allá de mencionar el refinamiento iterativo.

## Notas relacionadas

- [[concepts/ingenieria-quimica]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/inteligencia-artificial]]
- [[concepts/aprendizaje-activo]]
- [[concepts/simulacion-computacional]]
- [[concepts/educacion-en-programacion]]
- [[concepts/pensamiento-critico]]
- [[concepts/supervision-humana]]
