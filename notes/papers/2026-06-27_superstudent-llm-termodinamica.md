---
title: "Superstudent intelligence in thermodynamics"
authors: [Rébecca Loubet, Pascal Zittlau, Marco Hoffmann, Luisa Vollmer, Sophie Fellenz, Heike Leitte, Fabian Jirasek, Johannes Lenhard, Hans Hasse]
year: 2025
journal: arXiv (preprint)
url: https://arxiv.org/abs/2506.09822
doi:
pdf_local: sources/pdfs/cheme-applications/loubet_2025_superstudent-thermodynamics-preprint.pdf
type: paper
keywords: [capacidades-de-ia, razonamiento-cuantitativo-llm, inteligencia-artificial, educacion-en-ingenieria, ingenieria-quimica, evaluacion-educativa, futuro-del-trabajo, termodinamica]
date_added: 2026-06-27
---

# Superstudent intelligence in thermodynamics

## Resumen

En esta nota breve, el grupo de Termodinámica de Ingeniería de la RPTU Kaiserslautern reporta y analiza un hecho llamativo: el modelo de razonamiento o3 de OpenAI superó a los 90 estudiantes que presentaron un examen universitario de termodinámica en la primavera de 2025. El examen, perteneciente al primer curso de termodinámica para ingeniería, es considerado un obstáculo difícil: las tasas de reprobación son muy altas (58 % en esta edición) y las calificaciones A son extremadamente raras. Los autores sostienen que una A en este examen suele tomarse como prueba indiscutible de capacidades intelectuales excepcionales, porque los problemas son siempre nuevos y no pueden resolverse por aprendizaje de patrones, sino solo combinando creativamente los principios de la termodinámica.

A o3 se le dio exactamente el mismo examen que a los estudiantes (en alemán, incluyendo entradas y salidas gráficas), evaluado con los mismos criterios. En modo zero-shot, sin ingeniería de prompts especial, o3 resolvió correctamente los tres problemas en tres corridas independientes con resultados casi idénticos, obteniendo un puntaje global situado entre los mejores observados por el autor de correspondencia en más de 10.000 exámenes similares desde 1985. El único error mayor de o3 apareció en el Problema 3, relacionado con un tema especial (las propiedades calóricas de un fluido de densidad constante); las demás pérdidas de puntos se debieron a representaciones gráficas menores. Este resultado contrasta con un estudio previo del mismo grupo (otoño 2024), donde modelos como GPT-3.5, GPT-4, GPT-4o, Llama 3.1 70B y Le Chat solo superaban el 90 % en problemas simples y fallaban en los avanzados.

Los autores enmarcan el hallazgo como un punto de inflexión: las máquinas ahora destacan en tareas complejas que se tomaban como prueba de capacidad intelectual humana, por lo que proponen llamarlas "inteligentes", apelando al test de Turing y al trabajo de Bubeck et al. sobre "chispas de AGI" en GPT-4 (en o3 ven "no chispas, sino un incendio"). El examen funciona como un atajo del test de Turing: si algo puede imitar exitosamente a un estudiante brillante, basta para considerarlo inteligente.

La discusión se centra en las consecuencias para la ingeniería y la educación. Anticipan equipos mixtos de ingenieros humanos y "colegas de IA", con retos sobre asignación de tareas, confianza en resultados, responsabilidad legal y la alta "rotación" de modelos cada vez más capaces. Para la educación argumentan que el perfil del ingeniero se desplazará: la comprensión fundamental será más importante que la excelencia operativa, y habilidades de input (prompting, formular bien las preguntas) y de output (decidir si confiar y aplicar los resultados) serán esenciales. Advierten que estos cambios pueden amplificar desigualdades en la comunidad de ingeniería y plantean preguntas abiertas para la epistemología de la ingeniería: si la máquina aprueba un examen diseñado para verificar comprensión, ¿hay que admitir que la máquina "comprende" la termodinámica?, y ¿aprendió los principios o se beneficia de haber visto muchas aplicaciones?

## Contribuciones principales

- Documenta el primer caso, en el corpus del grupo, en que un LLM de razonamiento (o3) supera a todos los estudiantes (90) en un examen real de termodinámica de ingeniería, evaluado con los mismos criterios.
- Sitúa el puntaje de o3 entre los mejores de más de 10.000 exámenes equivalentes administrados desde 1985.
- Contrasta este desempeño con el de modelos previos (otoño 2024), mostrando el salto cualitativo de o1 a o3 en problemas avanzados.
- Plantea un marco interpretativo (examen como "atajo" del test de Turing) y una agenda de consecuencias para la práctica y la educación en ingeniería.

## Metodología

Estudio observacional comparativo de un solo evento. Se administró el mismo examen de Termodinámica I (07.04.2025, en alemán, con entrada/salida gráfica) a 90 estudiantes y al modelo o3 de OpenAI. Prompting zero-shot, sin entrenamiento ni ingeniería de prompts especial; cada uno de los tres problemas se prompteó secuencialmente. Se realizaron tres corridas independientes con o3. La evaluación de las respuestas de o3 se hizo a mano, con los mismos criterios y rúbrica que los estudiantes (puntos por análisis, formulación de ecuaciones aplicables y su combinación; pocos puntos por el resultado numérico). El examen y su solución se incluyen como información suplementaria.

## Hallazgos clave

- o3 resolvió esencialmente sin errores los Problemas 1 y 2; el único error mayor fue en el Problema 3 (propiedades calóricas de un fluido de densidad constante).
- Tasa de reprobación de los estudiantes: 58 %; solo un estudiante obtuvo A — o3 lo superó.
- Resultados de las tres corridas de o3 casi idénticos, a diferencia de la mayor variabilidad observada en estudios anteriores con modelos más débiles.
- El idioma (alemán vs. inglés) tiene poca influencia en el desempeño de los LLMs en estos problemas, según estudios previos del grupo.
- o3 supera a los modelos de razonamiento (o1-preview, o1-mini) reportados en estudios recientes sobre Olimpiada de Física y física de pregrado.

## Limitaciones

- Es una nota breve sobre un único examen y un único modelo (o3); no es un estudio sistemático con múltiples evaluaciones o modelos.
- La evaluación se hizo manualmente, lo que limita la escalabilidad y reproducibilidad, aunque los autores la consideran directa y de alta confianza para este caso.
- Los propios autores reconocen que extrapolar del desempeño en exámenes académicos a tareas reales de ingeniería es arriesgado: los LLMs están mejor adaptados a los primeros que a las segundas.
- Los sistemas basados en conocimiento (p. ej., KnowTD del mismo grupo) garantizan corrección pero tienen alcance limitado; cómo combinarlos con LLMs queda como problema abierto.

## Notas relacionadas

- [[concepts/capacidades-de-ia]]
- [[concepts/razonamiento-cuantitativo-llm]]
- [[concepts/inteligencia-artificial]]
- [[concepts/educacion-en-ingenieria]]
- [[concepts/ingenieria-quimica]]
- [[concepts/evaluacion-educativa]]
- [[concepts/futuro-del-trabajo]]
- [[concepts/termodinamica]]
