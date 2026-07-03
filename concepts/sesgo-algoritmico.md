---
type: concept
keyword: sesgo-algoritmico
aliases: [algorithmic bias, sesgo algorítmico, AI bias, algorithmic fairness, equidad algorítmica, fairness en IA, geographic bias, place bias]
---

# Sesgo algorítmico

Reproducción y amplificación sistemática de desigualdades por parte de sistemas algorítmicos y de IA (sesgos demográficos, geográficos, de género o de representación), y el estudio de la equidad (fairness) para medirlos y mitigarlos; incluye auditoría de algoritmos y definiciones formales de justicia.

## Qué dice la literatura

Los cuatro estudios convergen en el mismo mecanismo aplicado a dominios distintos: el sesgo no es un error técnico corregible sino un reflejo de la composición desigual de los datos de entrenamiento. Kerche et al., tras auditar 20,3 millones de consultas a GPT-4o-mini, lo nombran "sesgo de disponibilidad" (privilegio de fuentes anglófonas del Norte Global) y "sesgo de patrón" (la predicción del siguiente token reproduce regularidades modales, como "finlandeses inteligentes"). Gerteis describe el mismo fenómeno sin tipificarlo: los LLM "heredan el emplotment" sobrerrepresentado en enciclopedias, aplanando la historia hacia un cierre reconciliatorio aunque el archivo resista — disponibilidad y patrón operando sobre narrativa, no geografía. Yin et al. sitúan la misma raíz en la educación: el sesgo histórico de admisiones que favorecen escuelas privilegiadas y el sesgo de medición que califica más bajo el inglés vernáculo afroamericano son, como en Kerche et al., desigualdades ya existentes codificadas en los datos.

Yin et al. y Tomisu et al. comparten además un riesgo educativo concreto: penalizar estilos retóricos no estándar. Yin et al. lo documentan empíricamente; Tomisu et al. lo anticipan, sin probarlo, como límite reconocido de su propio TQI. El corpus se bifurca en la solución: Yin et al. confían en métricas formales de fairness (SPD, EO, Concordance Imparity), mientras Kerche et al. las rechazan —el sesgo es "intrínseco e inextricable", un problema de poder— y Gerteis, desde la historia, tampoco confía en la corrección algorítmica sino en la responsabilidad humana auditable.

## Notas que usan este concepto
- [[notes/papers/2024-11-02_fairaied-equidad-sesgo-etica-ia-educativa]]
- [[notes/papers/2026-06-28_silicon-gaze-sesgos-llm-lugar]]
- [[notes/papers/2025-10-09_cognitive-mirror-metacognicion-ia]]
- [[notes/papers/2026-01-01_writing-against-the-machine]]
