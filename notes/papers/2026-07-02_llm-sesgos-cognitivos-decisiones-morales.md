---
title: Large language models show amplified cognitive biases in moral decision-making
authors: ["Vanessa Cheung", "Maximilian Maier", "Falk Lieder"]
year: 2025
journal: Proceedings of the National Academy of Sciences (PNAS)
url: https://doi.org/10.1073/pnas.2412015122
doi: 10.1073/pnas.2412015122
pdf_local: sources/pdfs/ai-science-society/cheung_2025_llm-cognitive-biases-moral-decisions.pdf
type: paper
keywords: [sesgo-cognitivo, etica-de-la-ia, inteligencia-artificial, alineamiento-de-ia, confianza-en-la-ia, sobredependencia-de-la-ia, capacidades-de-ia]
date_added: 2026-07-02
---

# Large language models show amplified cognitive biases in moral decision-making

## Resumen

Este artículo investiga qué tan bien los grandes modelos de lenguaje (LLMs) toman o asesoran decisiones morales, comparando sus respuestas con las de muestras representativas de participantes humanos en Estados Unidos. Los autores utilizan un enfoque tomado de la psicología experimental: presentan a GPT-4-turbo, GPT-4o, Llama 3.1-Instruct y Claude 3.5 Sonnet una serie de dilemas morales realistas (basados en eventos históricos y en publicaciones del foro de Reddit r/AmItheAsshole) y problemas de acción colectiva (donde el interés propio compite con el bien común), para luego contrastar sus decisiones con las de participantes humanos reclutados en Prolific.

A lo largo de cuatro estudios (dos preregistrados), los autores documentan dos sesgos sistemáticos en los LLMs. Primero, un sesgo de omisión amplificado: los modelos prefieren la inacción sobre la acción en dilemas morales de forma mucho más marcada que los humanos (una diferencia de ~45 puntos porcentuales en los LLMs frente a ~5 en humanos). Segundo, un "sesgo sí-no" no observado en personas: la mayoría de los LLMs tienden a responder "no" independientemente del contenido moral de la pregunta, de modo que su decisión o consejo cambia según cómo esté formulada la pregunta (violando el principio de invariancia). En los problemas de acción colectiva, en cambio, los LLMs mostraron consistentemente más altruismo que los participantes humanos.

En el Estudio 4, los autores comparan versiones de Llama 3.1 con distinto tipo de post-entrenamiento (el modelo preentrenado, Llama 3.1-Instruct ajustado mediante RLHF, y Centaur, ajustado con datos de comportamiento humano en experimentos psicológicos) para aislar el origen de estos sesgos. Los resultados sugieren que tanto el sesgo de omisión amplificado como el sesgo sí-no surgen del proceso de fine-tuning orientado a convertir el modelo preentrenado en un chatbot conversacional, y no de la arquitectura de red ni del corpus de preentrenamiento en sí.

Los autores concluyen que la confianza acrítica en las decisiones y consejos morales de los LLMs podría amplificar sesgos humanos existentes e introducir sesgos nuevos y potencialmente problemáticos (como el sesgo sí-no), y proponen que el fine-tuning de los LLMs debería incorporar mecanismos explícitos para premiar la consistencia lógica de las respuestas ante reformulaciones equivalentes de una misma pregunta moral.

## Contribuciones principales

- Introduce un método objetivo para evaluar la calidad de las decisiones morales de un LLM: probar la consistencia de sus respuestas ante preguntas lógicamente equivalentes (reencuadres acción/omisión y sí/no), en lugar de depender de la valoración subjetiva de las personas sobre qué tan "buena" les parece la respuesta.
- Documenta, en cuatro estudios independientes (dos preregistrados) y con dilemas tanto clásicos como extraídos de publicaciones reales de Reddit, que los LLMs muestran un sesgo de omisión sistemáticamente más fuerte que el de los humanos.
- Identifica un sesgo nuevo, no reportado antes en la literatura ni presente en humanos: el "sesgo sí-no", por el cual los LLMs tienden a responder "no" independientemente del contenido moral de la pregunta.
- Mediante la comparación de Llama 3.1 preentrenado vs. Llama 3.1-Instruct (RLHF) vs. Centaur (ajustado con datos psicológicos humanos), aporta evidencia de que estos sesgos son inducidos por el fine-tuning para aplicaciones de chatbot, no por el preentrenamiento ni la arquitectura.
- Muestra que, en problemas de acción colectiva (no dilemas morales de acción/omisión), los LLMs son sistemáticamente más altruistas que los humanos.

## Metodología

Diseño experimental comparativo entre LLMs (GPT-4-turbo, GPT-4o, Llama 3.1-Instruct, Claude 3.5 Sonnet, y en el Estudio 4 también Llama 3.1 preentrenado y Centaur) y muestras representativas de participantes humanos de EE.UU. reclutados en Prolific. Estudio 1 (N=285): 13 dilemas morales y 9 problemas de acción colectiva, con reencuadre de acción/omisión no confundido con la opción "costo-beneficio" (CBR) vs. "regla" moral. Estudio 2 (N=474, preregistrado): reencuadre sistemático de seis dilemas para separar el sesgo de omisión del sesgo sí-no (reencuadres Sí↔No y Acción↔Omisión). Estudio 3 (N=491, preregistrado): réplica con dilemas cotidianos, de bajo riesgo, adaptados de publicaciones del foro AmItheAsshole en Reddit. Estudio 4: comparación de Llama 3.1 preentrenado, Llama 3.1-Instruct y Centaur en los mismos dilemas reencuadrados, para aislar el efecto del fine-tuning. Se usaron múltiples formulaciones de prompt (participante estándar, dador de consejo, rol de experto, muestreo "silicon sampling") como pruebas de robustez. Se ejecutaron 500 iteraciones de cada viñeta por modelo.

## Hallazgos clave

- Los LLMs eligieron la opción costo-beneficio 97% de las veces cuando coincidía con la omisión, pero solo 53% cuando coincidía con la acción (diferencia de 45 puntos), frente a una diferencia de apenas 5 puntos en humanos (55% vs. 50%).
- Tres de los cuatro LLMs (GPT-4-turbo, Llama 3.1-Instruct, Claude 3.5) mostraron un sesgo significativo hacia responder "no" ante reformulaciones lógicamente equivalentes de la misma pregunta; los participantes humanos no mostraron este sesgo.
- En problemas de acción colectiva, todos los LLMs dieron decisiones y consejos más altruistas que los humanos (p<0.001 en todos los casos).
- El modelo Llama 3.1 preentrenado (sin fine-tuning para chatbot) no mostró estos sesgos amplificados, mientras que Llama 3.1-Instruct (ajustado con RLHF) sí, lo que sugiere que el fine-tuning orientado a producir un chatbot "útil y alineado" es la fuente de los sesgos, no el preentrenamiento ni la arquitectura del modelo.
- Centaur (ajustado con datos de comportamiento humano en experimentos psicológicos) no mostró el sesgo sí-no, pero tampoco capturó bien la variabilidad de respuestas humanas entre distintos dilemas, respondiendo de forma casi constante (~50% costo-beneficio) en todos los casos.
- Las correlaciones entre las respuestas de los LLMs y las de los humanos fueron generalmente débiles (r<0.7 en la mayoría de los casos para dilemas morales), lo que indica que los LLMs no solo son más sesgados sino que razonan moralmente de forma cualitativamente distinta a las personas.

## Limitaciones

- Las muestras humanas, aunque estratificadas por edad, sexo, etnicidad y afiliación política vía Prolific, no son representativas en todas las dimensiones (p. ej. afiliación religiosa) ni necesariamente reflejan a la población que efectivamente consulta a LLMs (que probablemente sesga hacia personas más jóvenes y con mayor uso de internet).
- El estudio se enfoca en solo dos factores moralmente irrelevantes (encuadre sí/no y acción/omisión); no explora otros factores potencialmente distorsionantes como el orden de presentación de la información, la distancia espacial/temporal o la identificabilidad de las víctimas.
- Los autores no tuvieron acceso a los modelos preentrenados de GPT ni de Claude 3.5, por lo que la inferencia de que sus sesgos también provienen del fine-tuning es especulativa (basada solo en el caso de Llama 3.1).
- El estudio no determina qué respuesta es moralmente "correcta" bajo ningún marco ético particular; solo evalúa consistencia lógica, que es necesaria pero no suficiente para un razonamiento moral sólido.

## Notas relacionadas

- [[concepts/sesgo-cognitivo]]
- [[concepts/etica-de-la-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/alineamiento-de-ia]]
- [[concepts/confianza-en-la-ia]]
- [[concepts/sobredependencia-de-la-ia]]
- [[concepts/capacidades-de-ia]]
