---
title: Examining the potential and pitfalls of ChatGPT in science and engineering problem-solving
authors: [Karen D. Wang, Eric Burkholder, Carl Wieman, Shima Salehi, Nick Haber]
year: 2024
journal: Frontiers in Education
url: https://www.frontiersin.org/articles/10.3389/feduc.2023.1330486/full
doi: 10.3389/feduc.2023.1330486
pdf_local: sources/pdfs/capability-reliability/wang_2024_chatgpt-science-engineering-pitfalls.pdf
type: paper
keywords: [capacidades-de-ia, inteligencia-artificial, alucinaciones-de-ia, pensamiento-critico, supervision-humana, STEM, educacion-en-ingenieria, evaluacion-educativa, tutoria-con-ia]
date_added: 2026-06-27
---

# Examining the potential and pitfalls of ChatGPT in science and engineering problem-solving

## Resumen

El estudio examina la capacidad de ChatGPT (con GPT-4) para resolver problemas de física de un curso universitario de física para ingeniería. Se sometieron al modelo 40 problemas de tarea que abarcan un espectro desde problemas "bien especificados" (well-specified), donde se proporcionan todos los datos necesarios, hasta problemas "subespecificados" (under-specified) y de contexto real, donde faltan datos esenciales y el solucionador debe decidir qué información necesita y cómo obtenerla. Los problemas se caracterizan según dos dimensiones independientes: el contexto (de abstracto a real) y la especificidad de los datos (de bien especificado a subespecificado).

Los hallazgos muestran una diferencia marcada y estadísticamente significativa (prueba exacta de Fisher, p < 0.001): ChatGPT resolvió correctamente el 62.5% de los problemas bien especificados, pero solo el 8.3% de los subespecificados. Mediante una comparación entre las soluciones incorrectas del modelo y las soluciones de referencia del instructor, los autores identifican tres modos de falla distintos: (1) incapacidad de construir modelos precisos del mundo físico (especialmente relaciones espaciales y puntos de pivote), (2) incapacidad de hacer suposiciones razonables sobre datos faltantes, y (3) errores de cálculo (aritmética, trigonometría).

A pesar de sus fallas, ChatGPT mostró una fortaleza consistente: identificar correctamente los conceptos y fórmulas de física relevantes al inicio de cada solución, una habilidad en la que los estudiantes humanos suelen tener dificultad. Los autores también probaron una técnica simple de ingeniería de prompts (cadena de pensamiento de cero disparos: "resuelve el siguiente problema paso a paso"), que produjo una mejora moderada pero no estadísticamente significativa (Chi-cuadrado (1) = 0.06, p = 0.81) y no tuvo ningún efecto sobre los errores de cálculo.

El trabajo deriva implicaciones para la educación STEM —usar LLMs como tutores para identificar conceptos relevantes, priorizar la enseñanza de la toma de decisiones (modelado y recolección de datos) y diseñar problemas auténticos resilientes a la resolución automática— y para los marcos de colaboración humano-IA, donde la intervención humana sigue siendo necesaria para aportar comprensión contextual y juicio matizado.

## Contribuciones principales

- Un marco bidimensional para categorizar problemas de ciencia e ingeniería según contexto (abstracto–real) y especificidad de datos (bien especificado–subespecificado), distinto de la dicotomía clásica "bien definido"/"mal definido".
- Evidencia empírica de la brecha drástica de desempeño de GPT-4 entre problemas bien especificados (62.5%) y subespecificados (8.3%).
- Una taxonomía de tres modos de falla del modelo en problemas de física auténticos.
- Implicaciones concretas para el diseño de tareas y exámenes resilientes a la IA y para la colaboración humano-IA.

## Metodología

Se usaron 40 problemas de tarea de un curso de física 1 para ingeniería basado en cálculo, diseñados bajo la teoría de la práctica deliberada para enseñar resolución de problemas del mundo real. Cada problema se ingresó en la interfaz de ChatGPT (GPT-4, versiones de mayo a agosto de 2023) con el prompt "solve the following physics problem"; ante respuestas que pedían datos faltantes, se añadía un segundo prompt para hacer suposiciones razonables. Se eligió la interfaz de ChatGPT y no la API por validez aparente (face validity) y ecológica. La evaluación replicó el método de calificación de tareas: un evaluador experto comparó cada paso de la solución del modelo con la solución correcta del instructor para identificar el factor primario del error. En una segunda fase se aplicó la ingeniería de prompts de cadena de pensamiento ("paso a paso") a los 40 problemas.

## Hallazgos clave

- Brecha de exactitud entre problemas bien especificados (62.5%) y subespecificados (8.3%), estadísticamente significativa (p < 0.001).
- Modo de falla 1 (14 de 28 fallos): no construir modelos físicos precisos; ej., el problema de la Millennium Tower, donde ChatGPT omitió el peso de la losa de concreto y los pilotes, y el problema del cajón (dresser), donde no identifica el punto de pivote.
- Modo de falla 2 (8 fallos): no hacer suposiciones razonables sobre datos faltantes; ej., asumir una densidad incorrecta del pato flotante (950 kg/m³ en lugar de ~260 kg/m³) o un coeficiente de fricción de 1 para una taza sobre el techo del auto.
- Modo de falla 3 (6 fallos): errores de cálculo, en problemas tanto bien como subespecificados.
- Fortaleza: identificación consistente y correcta de los conceptos de física relevantes.
- Caso idiosincrásico: ChatGPT alcanzó la respuesta correcta de un problema de conversión de caballos de fuerza ignorando los datos del enunciado y usando datos de su entrenamiento, lo que sugiere que prioriza sus datos de entrenamiento sobre la información nueva.
- La ingeniería de prompts paso a paso tuvo un efecto moderado y no significativo sobre el modelado y las suposiciones, y nulo sobre los errores de cálculo.

## Limitaciones

- No hubo dos evaluadores independientes para medir el acuerdo entre jueces (inter-rater agreement); se mitigó con colaboración interdisciplinaria.
- La naturaleza probabilística de ChatGPT implica respuestas potencialmente distintas en cada ejecución; el estudio no repitió pruebas idénticas, limitando conclusiones sobre estabilidad y fiabilidad.
- Los resultados dependen de la versión específica del modelo (mayo–agosto 2023), que evoluciona con cada nueva versión.
- Los conjuntos de datos completos no son públicos por usarse como tareas del curso.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/supervision-humana]]
- [[concepts/STEM]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/evaluacion-educativa]]
- [[concepts/tutoria-con-ia]]
