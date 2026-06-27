---
title: Contra generative AI detection in higher education assessments
authors: [Cesare Giulio Ardito]
year: 2023
journal: 
url: 
doi: 
pdf_local: sources/pdfs/assessment-redesign/ardito_2023_contra-genai-detection.pdf
type: paper
keywords: [integridad-academica, evaluacion-educativa, inteligencia-artificial, educacion-superior, etica-de-la-ia, equidad-educativa, alfabetizacion-en-ia, pensamiento-critico, supervision-humana, regulacion-de-ia]
date_added: 2026-06-27
---

# Contra generative AI detection in higher education assessments

## Resumen

Ardito presenta un análisis crítico de las herramientas de detección de IA generativa empleadas para proteger la integridad académica en la educación superior. Partiendo de la rápida masificación de ChatGPT desde noviembre de 2022 y la proliferación de detectores comerciales (Turnitin, GptZero, CopyLeaks, ZeroGPT, entre otros), el autor argumenta que confiar en la detección es una estrategia fundamentalmente defectuosa y desalineada con un panorama educativo en el que la IA tiene un rol cada vez más amplio.

El paper sintetiza evidencia de estudios, artículos periodísticos y testimonios de estudiantes para mostrar dos clases de problemas. La primera es técnica: los detectores son vulnerables a ataques de paráfrasis, estrategias de prompting, ajuste de parámetros (temperatura, top-P) y servicios de prueba y error; además, dado que el núcleo de la IA es la automatización, cualquier vulnerabilidad puede reproducirse y difundirse en días. A medida que los modelos mejoran (GPT-4 frente a GPT-3.5), la detección se convierte en un juego del gato y el ratón siempre un paso atrás, hasta el punto asintótico en que la detección se vuelve paradójica (la "Biblioteca de Babel" de Borges). También señala el sesgo contra hablantes no nativos de inglés (baja perplejidad, como ocurre al marcar la Constitución de EE. UU. como generada por IA), la contaminación de datasets post-2023 y la inviabilidad del watermarking.

La segunda clase de problemas es más profunda y filosófica: los detectores están desalineados con el objetivo real (discernir la contribución original del estudiante, no la similitud con la salida de un LLM) y no son falsables, ya que no aportan evidencia verificable —comparado con la situación kafkiana de "El proceso" de Josef K., donde el acusado no puede probar su inocencia—. Con una tasa de falsos positivos del 1 %, un estudiante con 70 entregas a lo largo de su carrera tiene un 50,5 % de probabilidad de ser acusado erróneamente al menos una vez, lo que genera ansiedad, erosiona la confianza y reproduce los problemas de la vigilancia tipo proctoring durante la COVID-19. Los detectores tampoco distinguen el uso bueno del malo (caso de Alice vs. Bob), son incompatibles con la cocreación y obstaculizan la tecnología de accesibilidad.

Como alternativa, Ardito propone enseñar el uso crítico y ético de la IA generativa. Recurre a la analogía histórica de la calculadora: en lugar de detección post-hoc, se rediseñaron los objetivos de aprendizaje y se crearon condiciones controladas (exámenes presenciales) para las competencias que deben evaluarse sin IA. Aboga por evaluaciones auténticas, hitos con interacción humana directa, métodos alternativos (evaluaciones grupales, presentaciones, exámenes orales, revisión por pares, portafolios), divulgación transparente del uso de IA y políticas alineadas con los principios del Russell Group. Cita a la Universidad de Manchester y Vanderbilt como instituciones que ya prohibieron o desaconsejaron los detectores.

## Contribuciones principales

- Sistematiza las vulnerabilidades técnicas de los detectores de IA (paráfrasis, prompting, ajuste de parámetros, contaminación de datasets, fragilidad del watermarking).
- Argumenta que la detección de IA es estructuralmente distinta de la detección de plagio: no falsable, sin verificación independiente y desalineada con el objetivo educativo real.
- Cuantifica el riesgo de falsos positivos acumulados a lo largo de una carrera académica (50,5 % con FPR del 1 % y 70 entregas).
- Propone un marco alternativo basado en enseñar el uso crítico/ético de la IA, evaluación auténtica y reincorporación del elemento humano.

## Metodología

Análisis crítico y argumentativo (no empírico). Sintetiza estudios académicos, artículos de prensa, testimonios de estudiantes, políticas institucionales y casos documentados; incorpora la experiencia del autor como docente de matemáticas y participante en grupos focales con estudiantes.

## Hallazgos clave

- Los humanos sobreestiman su capacidad de detectar texto generado por IA, por lo que el juicio docente no es fiable.
- Toda vulnerabilidad de un detector se vuelve crítica porque puede automatizarse y difundirse rápidamente; la detección queda permanentemente rezagada frente a modelos más capaces.
- Los detectores pueden marcar desproporcionadamente a hablantes no nativos de inglés por su menor perplejidad (aunque la evidencia sobre el sesgo aún es insuficiente y disputada).
- Los detectores no distinguen el uso legítimo (cocreación, refinamiento, accesibilidad) del fraudulento, penalizando paradójicamente al estudiante que usa la IA de forma honesta para pulir su texto.
- Las políticas de detección y vigilancia (incluido el prompt sharing y el fingerprinting) generan ansiedad, desconfianza y normalizan la vigilancia, en detrimento de la libertad académica.
- La analogía con la calculadora muestra que la respuesta correcta es rediseñar objetivos y evaluaciones, no detectar post-hoc.

## Limitaciones

- Es un ensayo argumentativo, no un estudio empírico: no aporta datos primarios propios sobre tasas de detección.
- El cálculo del 50,5 % asume una tasa de falsos positivos uniforme del 1 %, una simplificación.
- La evidencia sobre el sesgo contra no nativos es reconocida como aún insuficiente y disputada (estudio de Stanford vs. blog de Turnitin).
- Propone un marco general sin prescribir soluciones concretas de evaluación, dejándolas a investigación futura.

## Notas relacionadas

- [[concepts/integridad-academica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-superior]]
- [[concepts/etica-de-la-ia]]
- [[concepts/equidad-educativa]]
- [[concepts/alfabetizacion-en-ia]]
- [[concepts/pensamiento-critico]]
- [[concepts/supervision-humana]]
- [[concepts/regulacion-de-ia]]
