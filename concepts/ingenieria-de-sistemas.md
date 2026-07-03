---
type: concept
keyword: ingenieria-de-sistemas
aliases: [systems engineering, systems theory, STAMP, pensamiento sistémico, process systems engineering]
---

# Ingeniería de sistemas

Enfoque para diseñar y analizar sistemas complejos sociotécnicos considerando componentes, interacciones y propiedades emergentes; incluye la teoría de sistemas aplicada a la seguridad (STAMP/STPA) y la ingeniería de sistemas de procesos.

## Qué dice la literatura

Las tres notas que comparten esta etiqueta usan la ingeniería de sistemas de dos maneras genuinamente distintas, y conviene no forzar una convergencia que no existe entre ellas. Charalampidou et al. (2024) hacen ingeniería de sistemas en sentido estricto: aplican STPA (Systems-Theoretic Process Analysis), derivado del modelo de accidentes STAMP de Leveson, para analizar peligros en ROLFER, un dron autónomo de rescate acuático, evaluando si ChatGPT-4 puede acelerar ese análisis. El resultado es ambivalente: el LLM redujo el tiempo de 4-5 semanas a menos de 16 horas y fue útil generando escenarios de pérdida y preguntas de comprensión del sistema, pero produjo acciones de control inseguras (UCA) erróneas en casi la mitad de los casos (69 de 138, incluidas 4 alucinaciones), lo que lleva a los autores a concluir que el LLM no puede sustituir la validación humana experta, solo apoyarla.

Lee et al. (2025) y Tsakeni et al. (2025), en cambio, no aplican ingeniería de sistemas a un sistema técnico: toman prestada la Teoría General de Sistemas (GST) de Bertalanffy como marco analítico para revisiones sistemáticas de ChatGPT en educación. Lee et al. tratan a ChatGPT como un subsistema adaptativo dentro de un ecosistema educativo (sujeto, información, medio, ambiente, tecnología), con efectos de aprendizaje que —afirman— no pueden entenderse examinando componentes aislados. Tsakeni et al. combinan la GST con la teoría de la metacognición de Flavell para mapear cómo la IA anda (scaffolds) el aprendizaje autorregulado en STEM, y documentan un giro incipiente hacia marcos posthumanistas donde la regulación se piensa a nivel de sistema, no solo del estudiante individual. En ambas, la GST funciona como lente organizadora de una revisión de literatura, no como metodología de ingeniería.

Pese a esa distancia de dominio y de rigor formal —STPA es un método de ingeniería de seguridad aplicable y verificable; la GST que usan las otras dos es un marco teórico laxo—, aparece un eco conceptual genuino: las tres discuten dónde trazar el límite de autonomía de la IA dentro de un sistema de control mayor. Charalampidou et al. concluyen que el LLM no puede validar de forma autónoma un análisis de seguridad; Tsakeni et al. distinguen entre IA que "anda" la metacognición preservando la agencia del estudiante y IA que la "comparte" arriesgando sustituirla — la misma pregunta sobre supervisión humana, formalizada en clave de seguridad de procesos en un caso y en clave pedagógica en el otro. Fuera de ese eco, la etiqueta agrupa usos dispares de "sistemas": uno técnico-formal, dos teórico-educativos.

## Notas que usan este concepto
- [[notes/papers/2024-07-16_chatgpt4-stpa-analisis-de-peligros]]
- [[notes/papers/2025-09-10_chatgpt-educacion-revision-gst]]
- [[notes/papers/2026-06-28_ia-andamiaje-metacognicion-stem]]
