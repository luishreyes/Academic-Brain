---
title: "Exploring Emerging Norms of AI Attribution and Disclosure in Programming Education"
authors: [Runlong Ye, Jessica He, Oliver Huang, Michael Liut]
year: 2026
journal: "arXiv preprint (cs.HC)"
url: https://arxiv.org/abs/2602.04062
doi: 
pdf_local: sources/pdfs/assessment-redesign/ye_2026_ai-attribution-disclosure-programming.pdf
type: paper
keywords: [educacion-en-programacion, integridad-academica, evaluacion-educativa, inteligencia-artificial, etica-de-la-ia, regulacion-de-ia, autorregulacion-del-aprendizaje, pensamiento-critico, supervision-humana]
date_added: 2026-06-27
---

# Exploring Emerging Norms of AI Attribution and Disclosure in Programming Education

## Resumen

La IA generativa difumina las fronteras de la autoría en la educación en computación, generando incertidumbre sobre cómo deberían los estudiantes atribuir la asistencia de la IA. Para examinar estas normas emergentes, los autores realizaron un estudio factorial de viñetas con 94 estudiantes de ciencias de la computación que evaluaron 102 escenarios únicos, manipulando sistemáticamente cinco dimensiones del flujo de trabajo estudiante-IA: tipo de evaluación, nivel de asistencia de la IA, tipo de actividad, conocimiento previo y esfuerzo humano posterior a la IA.

El hallazgo central es que los juicios de atribución se rigen principalmente por la mecánica de la interacción humano-IA —el nivel de autonomía de la IA y el esfuerzo de refinamiento humano— y no por el contexto académico externo (tipo de evaluación o de tarea, que tuvieron efectos cercanos a cero). A medida que la IA pasaba de simple Q&A a generación agéntica, los estudiantes descontaban linealmente su propia autoría e iniciativa. Modificar significativamente el código generado restauraba parcialmente la percepción de propiedad, pero no bastaba para contrarrestar el efecto dominante de una mayor autonomía de la IA.

El estudio también revela una desconexión crítica entre las creencias éticas y la conducta declarada: aunque la percepción de autoría predice de forma significativa las expectativas de política (qué nivel de divulgación debería exigirse), ninguna de las percepciones internas predice la intención personal de divulgar. Los estudiantes exigen políticas más estrictas cuando la IA compromete la autoría o la equidad de la calificación, pero su disposición a divulgar parece inhibida por presiones externas como el miedo a sanciones académicas.

A partir de esto, los autores proponen un giro desde políticas de divulgación de estilo "declaración estática" hacia una atribución orientada al proceso, que convierta la divulgación en un mecanismo pedagógico —una función de forzamiento cognitivo— para fomentar el compromiso crítico con el contenido generado por IA.

## Contribuciones principales

- Identifica que el nivel de asistencia de la IA (Factor B) y el esfuerzo humano posterior (Factor E) son los impulsores primarios de los juicios de atribución, mientras que tipo de evaluación, tipo de actividad y conocimiento previo son casi irrelevantes.
- Documenta un umbral en la condición sistémica/agéntica (B4) que dispara una preferencia por "co-autoría", transformando la relación percibida de uso de herramienta a colaboración humano-IA.
- Muestra que las tareas de producción/implementación exigen citación más estricta que la planificación conceptual.
- Revela la brecha entre las políticas que los estudiantes demandan y su intención personal de divulgar.
- Propone el marco de "atribución orientada al proceso" como guardarraíl pedagógico para la educación en programación.

## Metodología

Encuesta factorial basada en viñetas (factorial vignette study) con 94 estudiantes reclutados vía Prolific, cribados para estar cursando o recién graduados de programas de computación. Cinco factores generaron 102 escenarios únicos (de 144 combinaciones, se eliminaron 42 incoherentes). Las viñetas se presentaron como presentaciones HTML interactivas además de bloques de texto; cada participante evaluó 5 viñetas. Las medidas dependientes cubrieron percepción de autoría y agencia (4 escalas Likert de 7 puntos), validez pedagógica (equidad de calificación y aprendizaje) y preferencias de divulgación (intensidad de atribución y disposición personal). El análisis usó ANOVA tipo II con eta-cuadrado parcial (RQ1a), pruebas Chi-cuadrado de Pearson (RQ1b) y regresión logística ordenada (RQ2).

## Hallazgos clave

- El nivel de asistencia de la IA fue el predictor más fuerte y consistente en todas las dimensiones (p < .001); explicó la mayor proporción de varianza en atribución del trabajo e iniciativa.
- El esfuerzo humano posterior tuvo un efecto significativo pero modesto sobre la atribución del trabajo y el aprendizaje percibido; no excusó de la obligación externa de divulgar.
- La condición agéntica (B4) provocó un salto hacia "co-autoría"; las tareas de producción exigieron citación más estricta que la planificación.
- La equidad de calificación fue el predictor negativo más fuerte de la exigencia de divulgación (β = −0.38, p < .001): cuando el uso de IA se percibía como legítimo, disminuía la demanda de divulgación estricta.
- La autoría del trabajo y la contribución de ideas predijeron positivamente la exigencia de política, pero ninguna percepción interna predijo la intención personal de divulgar.

## Limitaciones

- Las viñetas hipotéticas pueden no capturar la conducta bajo la presión de consecuencias reales de calificación.
- Posible sesgo de deseabilidad social: los participantes pudieron reportar estándares de atribución idealizados.
- La muestra refleja normas académicas occidentales; falta explorar variación entre culturas educativas.
- Solo se midieron percepciones estudiantiles; falta evaluar las expectativas de los docentes, que son quienes hacen cumplir las políticas.

## Notas relacionadas

- [[concepts/educacion-en-programacion]]
- [[concepts/integridad-academica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/inteligencia-artificial]]
- [[concepts/etica-de-la-ia]]
- [[concepts/regulacion-de-ia]]
- [[concepts/autorregulacion-del-aprendizaje]]
- [[concepts/pensamiento-critico]]
- [[concepts/supervision-humana]]
