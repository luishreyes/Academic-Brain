---
title: "Beyond Traditional Teaching: The Potential of Large Language Models and Chatbots in Graduate Engineering Education"
authors: [Mahyar Abedi, Ibrahem Alshybani, Muhammad Rubayat Bin Shahadat, Michael S. Murillo]
year: 2023
journal: arXiv (preprint)
url: https://arxiv.org/abs/2309.13059
doi: 10.48550/arXiv.2309.13059
pdf_local: sources/pdfs/cheme-applications/abedi_2023_chatbot-graduate-fluid-mechanics-preprint.pdf
type: paper
keywords: [tutoria-con-ia, inteligencia-artificial, educacion-en-ingenieria, educacion-superior, capacidades-de-ia, razonamiento-cuantitativo-llm, alucinaciones-de-ia, retroalimentacion-con-ia, integridad-academica, STEM]
date_added: 2026-06-27
---

# Beyond Traditional Teaching: The Potential of Large Language Models and Chatbots in Graduate Engineering Education

## Resumen

El artículo explora la integración de grandes modelos de lenguaje (LLMs) y chatbots en la educación de ingeniería de posgrado, usando un curso de mecánica de fluidos como caso de estudio. Tras situar la discusión en la historia de las disrupciones tecnológicas de la educación (imprenta, pizarra, radio, calculadoras, internet), los autores introducen los fundamentos técnicos de los LLMs —aprendizaje automático y profundo, arquitectura transformer, mecanismos de atención, GPUs/TPUs, preentrenamiento y fine-tuning— para que los instructores comprendan el funcionamiento de estas herramientas antes de adoptarlas.

El corazón del trabajo es un estudio empírico: los autores construyeron un banco de 75 preguntas de mecánica de fluidos de nivel posgrado (25 conceptuales, 25 analíticas y 25 matemáticas) y evaluaron la exactitud de ChatGPT-3.5, ChatGPT-4 y ChatGPT-4 con el plugin Wolfram Alpha. Compararon además distintas estrategias de prompting (Input/Output, Chain of Thought y Tree of Thought). Los modelos respondieron correctamente el 100% de las preguntas conceptuales y, con prompt CoT, el 100% de las analíticas; sin embargo, la mayor exactitud en preguntas matemáticas fue 84% (ChatGPT-4 con Wolfram y CoT), evidenciando una brecha entre la fluidez lingüística y la precisión numérica.

El paper documenta también las ventajas pedagógicas observadas (aprendizaje autodirigido, retroalimentación instantánea, reducción de la carga del instructor), el efecto transformador del prompting inteligente y de plugins (Wolfram, Advanced Data Analysis/Code Interpreter, AskYourPDF, ScholarAI, Custom Instructions) sobre las capacidades del chatbot. Cierra advirtiendo sobre desafíos y dimensiones éticas —alucinaciones, conocimiento desactualizado, contenido dañino, privacidad, sobredependencia, sesgos e integridad académica— y aboga por un enfoque equilibrado en el que el chatbot complemente, no reemplace, la enseñanza humana.

## Contribuciones principales

- Marco conceptual accesible para instructores sobre cómo funcionan los LLMs y chatbots (transformer, atención, temperatura, preentrenamiento/fine-tuning).
- Estudio empírico de exactitud de ChatGPT-3.5/4 y ChatGPT-4+Wolfram sobre un banco de 75 preguntas de mecánica de fluidos clasificadas por tipo cognitivo (conceptual, analítica, matemática).
- Evidencia comparativa del efecto de las estrategias de prompting (I/O vs. CoT vs. ToT) sobre el desempeño.
- Catálogo de plugins y herramientas (Wolfram, Advanced Data Analysis, AskYourPDF, ScholarAI, Custom Instructions) con aplicaciones concretas en un curso de posgrado.
- Discusión de implicaciones éticas y recomendaciones para una adopción responsable en STEM.

## Metodología

Selección aleatoria de 75 preguntas de un curso de mecánica de fluidos de posgrado (25 conceptuales, 25 analíticas, 25 matemáticas). Cada pregunta se planteó en un hilo separado, sin historial ni retroalimentación previa. Para preguntas analíticas y matemáticas se usaron prompts I/O y CoT; el prompt ToT (versión de Hulbert) solo se usó en conceptuales por su bajo desempeño en problemas analíticos/matemáticos. El criterio de evaluación fue binario (correcto/incorrecto); las respuestas parcialmente correctas se contaron como incorrectas. Se evaluaron tres configuraciones: ChatGPT-3.5, ChatGPT-4 y ChatGPT-4 con plugin Wolfram.

## Hallazgos clave

- 100% de exactitud en preguntas conceptuales para ChatGPT-3.5 y 4.
- 100% de exactitud en preguntas analíticas con prompt CoT en los tres modelos.
- Máximo 84% de exactitud en preguntas matemáticas (ChatGPT-4 + Wolfram, CoT); la brecha matemática es la limitación central.
- CoT supera consistentemente a I/O, sobre todo en preguntas matemáticas.
- El plugin Wolfram reduce sustancialmente los errores de cálculo aritmético.
- Dos fuentes principales de error matemático: razonamiento matemático incorrecto (supuestos/ecuaciones erróneas) y cálculos incorrectos en la ejecución.

## Limitaciones

- ChatGPT no leía bien datos de tablas o imágenes, por lo que se evitaron problemas que los requerían.
- Resultados atados a versiones y momento específicos del estudio; el comportamiento del modelo puede cambiar con nuevas versiones o con el tiempo.
- Naturaleza estocástica de los modelos: las salidas no son estáticas y pueden variar.
- Criterio binario de evaluación (sin crédito parcial), que puede subestimar respuestas parcialmente útiles.

## Notas relacionadas

- [[concepts/tutoria-con-ia]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/educacion-superior]]
- [[concepts/capacidades-de-ia]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/alucinaciones-de-ia]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/integridad-academica]]
- [[concepts/STEM]]
