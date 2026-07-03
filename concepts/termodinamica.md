---
type: concept
keyword: termodinamica
aliases: [thermodynamics, termodinámica, equilibrio de fases, phase equilibrium]
---

# Termodinámica

Rama de la ingeniería química y la física que estudia la energía, el calor, el trabajo y el equilibrio de fases; asignatura núcleo de la ingeniería química usada como dominio de prueba para evaluar el razonamiento de los LLMs.

## Qué dice la literatura

Las tres notas del corpus tratan la termodinámica como el terreno de prueba por excelencia para medir hasta dónde llega el razonamiento de los LLM, pero llegan a un diagnóstico más matizado que la simple narrativa de "las máquinas ya superan a los humanos". Loubet et al. (2025), del grupo de Termodinámica de Ingeniería de la RPTU Kaiserslautern, reportan que o3 resolvió en modo zero-shot un examen real de Termodinámica I —con una tasa de reprobación estudiantil del 58% y donde el sobresaliente es casi inexistente— obteniendo un puntaje entre los mejores de más de 10.000 exámenes administrados desde 1985. Los autores leen esto como un punto de inflexión ("no chispas, sino un incendio") y sitúan el salto frente a los modelos de otoño 2024 (GPT-3.5/4/4o, Llama 3.1, Le Chat), que solo superaban el 90% en problemas simples.

Geißler et al. (2025), con el benchmark UTQA de 50 preguntas sobre gas ideal, entropía y reversibilidad, tienden a matizar —más que a contradecir— ese entusiasmo. Bajo una evaluación sistemática y estricta, ningún modelo de la generación 2025 cruza el umbral de fiabilidad del 95% que los autores fijan como mínimo para tutoría no supervisada; el mejor de los 19 modelos comparados, de nuevo gpt-o3, se queda en 82%. La clave para reconciliar ambos resultados está en el tipo de tarea y el criterio de evaluación: el examen de Loubet et al. se calificó con una rúbrica generosa que premia el planteamiento correcto de ecuaciones aun con errores gráficos menores —precisamente donde o3 perdió la mayoría de sus puntos—, mientras que UTQA aísla el razonamiento sobre diagramas (p–V, T–S, H–p) y encuentra ahí un desempeño que se desploma a 32%, cercano al azar, frente a 67% en ítems de solo texto. Ambos trabajos, leídos juntos, sugieren que la "inteligencia" que exhiben estos modelos en termodinámica es desigual: sólida en la manipulación simbólica y algebraica de problemas canónicos, pero frágil en vincular una representación gráfica con su significado físico, un patrón de fallo que Geißler et al. documentan también en errores recurrentes de contabilidad de entropía y en el uso indebido de plantillas cuasiestáticas ante procesos de tasa finita.

Santos-Guevara et al. (2026) aportan una tercera capa, ya no sobre la capacidad bruta del modelo sino sobre su uso pedagógico en termodinámica: 53 estudiantes de ingeniería de primer año usaron ChatGPT como tutor socrático —no como fuente de respuestas— para razonar sobre el proceso adiabático, con niveles altos y consistentes de aprendizaje percibido y compromiso (medias de constructo por encima de 4.5/5). Aun sin medir precisión técnica, este estudio reporta el mismo tipo de falla que los otros dos cuantifican con más rigor: cerca de 18% de los grupos experimentó momentos en que la IA malinterpretó sus respuestas o mostró vaguedad conceptual, y los autores señalan que el modelo aún no diagnostica la comprensión del estudiante en tiempo real. No hay en el corpus una progresión temporal clara de mejora (los tres trabajos se ubican entre 2025 y comienzos de 2026), pero sí una convergencia: la termodinámica —por su núcleo teórico compacto y sus distinciones conceptuales sutiles (calor vs. trabajo, reversible vs. irreversible)— expone de forma consistente que la competencia de los LLM es real pero desigual, fuerte en el álgebra de los principios y todavía débil en su articulación visual y diagnóstica.

## Notas que usan este concepto
- [[notes/papers/2026-06-27_superstudent-llm-termodinamica]]
- [[notes/papers/2026-06-27_utqa-benchmark-llm-termodinamica]]
- [[notes/papers/2026-01-24_dialogo-socratico-chatgpt-fisica]]
