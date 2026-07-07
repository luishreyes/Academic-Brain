---
type: concept
keyword: confianza-en-la-ia
aliases: [trust in AI, confianza en IA, AI trust, automation bias, sesgo de automatizacion]
---

# Confianza en la IA

Actitud de creer que un agente de IA ayudará a alcanzar los objetivos del usuario en situaciones de incertidumbre; predice la adopción y el uso rutinario de la IA y, vía sesgo de automatización, puede derivar en la aceptación acrítica de sus salidas.

## Qué dice la literatura

Cinco trabajos —tres estudios empíricos, una revisión que cita un informe de confianza pública, y un artículo de divulgación institucional— convergen en un diagnóstico compartido: la confianza en la IA rara vez está calibrada con la fiabilidad real del sistema, y esa brecha es el mecanismo que explica tanto la sobredependencia cognitiva como los riesgos éticos documentados en el corpus. El hallazgo más contundente proviene de Choudhuri et al., cuyo modelo PLS-SEM sobre 299 estudiantes STEM de cinco universidades muestra que la confianza predice fuertemente el uso rutinario de la genAI (β = 0.64) y que este, a su vez, media casi por completo (VAF > 0.8) la caída en reflexión (β = −0.66), pensamiento crítico (β = −0.41) y necesidad de comprensión (β = −0.21). El dato más inquietante de ese estudio es que los rasgos que STEM valora como indicadores de preparación profesional —tolerancia al riesgo, autoeficacia computacional, motivación tecnofílica— predicen mayor uso y, por tanto, mayor desenganche cognitivo: la confianza no protege a los mejor preparados, los expone más.

Liu, Fan y Pan documentan el mismo fenómeno desde una óptica cualitativa y en un dominio distinto (programación en Java, un semestre, teoría fundamentada). Su corpus de interacción revela una "Ilusión de Diálogo": los estudiantes narran su relación con Copilot como colaboración de un tutor 24/7, mientras los logs muestran que el 75% de los prompts fueron delegación transaccional de un solo paso. Dos patrones de confianza mal calibrada emergen según la experiencia: los novatos exhiben "Trust-but-Can't-Verify" (confían porque no tienen la base para verificar), y los estudiantes avanzados sufren el "Boilerplate Blindspot" (delegan acríticamente el código que juzgan trivial, y ahí es donde aparecen los defectos). Ambos casos son formas distintas de la misma "calibración metacognitiva atenuada": la confianza en la propia competencia se desacopla de la capacidad real sin asistencia.

Jamal Eddine et al. sitúan este mismo problema en un nivel estructural: dentro de su mapeo de evidencia sobre brecha digital y GenAI, señalan que la "sobreconfianza" estudiantil surge cuando la confianza en la adopción supera la preparación institucional y la capacitación docente, una "paradoja de adopción" que citan del Trust in AI Report 2025 (Melbourne/KPMG) y que resulta más aguda en economías emergentes. Es una lectura complementaria, no contradictoria, a la de Choudhuri y Liu et al.: donde estos últimos ven la descalibración como un fenómeno psicológico individual, Jamal Eddine la ve como un desfase institucional —la infraestructura de gobernanza no alcanza al ritmo de adopción—, y Georgieva y Stuart, desde EDUCAUSE, proponen la respuesta normativa a ese mismo desfase: la confianza no debe darse por sentada ni construirse solo por default de mercado, sino cultivarse deliberadamente mediante gobernanza (su propuesto Comité Institucional de Revisión Ética, AIERB) y principios explícitos de transparencia y rendición de cuentas, precisamente porque perciben que "acelerar la creatividad" sin marcos éticos "arriesga... erosionar relaciones educativas" y desplazar a los docentes de mentores a monitores.

El estudio de Cheung, Maier y Lieder aporta la pieza que explica por qué esa confianza acrítica es, en efecto, arriesgada: al comparar las decisiones morales de GPT-4, Llama 3.1-Instruct y Claude 3.5 Sonnet con las de participantes humanos, encuentran que los LLMs exhiben un sesgo de omisión muchísimo más marcado que las personas (~45 puntos porcentuales de diferencia entre elegir la opción de costo-beneficio según coincida con acción u omisión, frente a apenas ~5 puntos en humanos) y un "sesgo sí-no" no observado en personas, que hace que el consejo del modelo cambie según cómo se formule la pregunta. Cruzan menos de 0.7 de correlación con las respuestas humanas en la mayoría de dilemas —evidencia de que los LLMs no solo están más sesgados, sino que razonan de forma cualitativamente distinta— y localizan el origen del sesgo en el fine-tuning conversacional (RLHF), no en el preentrenamiento. Su conclusión explícita conecta directamente con el resto del corpus: la confianza acrítica en el consejo moral de un LLM puede amplificar sesgos humanos existentes e introducir sesgos enteramente nuevos. Leído junto a Choudhuri et al. y Liu et al., el conjunto sugiere que la confianza en la IA opera como un mecanismo único con manifestaciones en tres niveles —cognitivo (erosión de hábitos de pensamiento), procedimental (incapacidad de verificar lo delegado) y normativo (aceptación de juicios sesgados)— y que ninguno de los cinco estudios encuentra evidencia de que la experiencia previa, la pericia técnica o el nivel académico actúen como protección automática contra la descalibración.

## Notas que usan este concepto
- [[notes/papers/2026-06-28_genai-habitos-cognitivos-estudiantes]]
- [[notes/articles/2025-06-24_ethics-is-the-edge-ia-educacion-superior]]
- [[notes/papers/2026-01-01_genai-brecha-digital-educacion-superior]]
- [[notes/papers/2026-06-28_tool-tutor-crutch-scaffolding-offloading]]
- [[notes/papers/2026-07-02_llm-sesgos-cognitivos-decisiones-morales]]
- [[notes/papers/2026-02-09_llm-asistentes-medicos-fiabilidad-publico]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap02-etica]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap04-bienestar-infantil]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap09-salud-mental]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap12-adultos-mayores]]
- [[notes/papers/2026-07-07_never-skilling-ia-educacion-medica]]
