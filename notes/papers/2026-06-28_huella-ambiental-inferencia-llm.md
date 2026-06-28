---
title: "How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference"
authors: [Nidhal Jegham, Marwan Abdelatti, Chan Young Koh, Lassad Elmoubarki, Abdeltawab Hendawi]
year: 2025
journal: "arXiv preprint (arXiv:2505.09598)"
url: https://arxiv.org/abs/2505.09598
doi:
pdf_local: sources/pdfs/risks-overreliance-equity/jegham_2025_how-hungry-is-ai-llm-inference-footprint.pdf
type: paper
keywords: [inteligencia-artificial, sostenibilidad, capacidades-de-ia, simulacion-computacional, regulacion-de-ia, geopolitica-tecnologica, futuro-del-trabajo, huella-ambiental-de-la-ia]
date_added: 2026-06-28
---

# How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference

## Resumen

El paper presenta un marco de benchmarking "consciente de la infraestructura" para cuantificar la huella ambiental (energía, agua y carbono) de la fase de inferencia de los grandes modelos de lenguaje (LLMs) tal como se despliegan en centros de datos comerciales. A diferencia de la literatura previa, centrada mayoritariamente en el entrenamiento, los autores argumentan que la inferencia es ya el principal contribuyente al costo ambiental (hasta el 90% del uso energético del ciclo de vida de un modelo) porque ocurre de forma continua y a gran escala. El método combina métricas de rendimiento de APIs públicas (latencia y tokens por segundo) con especificaciones de potencia de GPU y sistema, e inferencia estadística de las configuraciones de hardware, escaladas mediante multiplicadores específicos de cada empresa: PUE (eficiencia de uso de energía), WUE (eficiencia de uso de agua) y CIF (factor de intensidad de carbono).

Sobre 30 modelos de OpenAI, Anthropic, Meta y DeepSeek, los autores estiman el consumo por consulta usando una formulación probabilística (cópula gaussiana y 10.000 muestras Monte Carlo) y emplean Análisis Envolvente de Datos de eficiencia cruzada (cross-efficiency DEA) para clasificar los modelos según su rendimiento relativo al costo ambiental. Los resultados muestran disparidades enormes: los modelos más intensivos superan los 29 Wh por consulta larga, más de 65 veces el sistema más eficiente. Un hallazgo central es que la infraestructura (hardware, refrigeración, mezcla eléctrica regional) suele pesar más que el diseño del modelo: los mismos modelos DeepSeek consumen ~70% menos energía en Azure que en los servidores propios de DeepSeek, y GPT-4o mini consume más que GPT-4o por correr en hardware A100 más antiguo.

Mediante un estudio de caso de GPT-4o escalado a ~772 mil millones de consultas en 2025 (700 millones diarias atribuidas a GPT-4o), el paper traduce los valores por consulta en magnitudes agregadas tangibles: entre 391.509 y 463.269 MWh anuales (comparable al consumo de 35.000 hogares estadounidenses), entre 1,33 y 1,58 millones de kilolitros de agua dulce evaporada (las necesidades anuales de bebida de 1,2 millones de personas) y entre 138.125 y 163.441 toneladas de CO2e (cuya compensación requeriría un bosque del tamaño de Chicago). Un segundo caso de estudio sobre el enrutamiento adaptativo de GPT-5 muestra que el modo de "razonamiento alto" puede multiplicar por siete el consumo respecto al modo mínimo.

La tesis articuladora es la paradoja de Jevons: a medida que la IA se vuelve más barata y rápida, la adopción global crece desproporcionadamente y el consumo agregado de recursos amenaza con desbordar las ganancias de eficiencia por tarea. Los autores proponen su metodología como base empírica estandarizada para benchmarking de sostenibilidad, rendición de cuentas y regulación, incluyendo umbrales de huella ambiental permisible por inferencia y reporte transparente a nivel de sistema.

## Contribuciones principales

- Primer marco de benchmarking consciente de la infraestructura para estimar la huella ambiental de la inferencia de LLM a nivel por consulta en centros de datos reales, integrando energía, agua y carbono simultáneamente.
- Estimación comparativa sobre 30 modelos propietarios y de código abierto, combinando datos de API públicos con especificaciones de hardware y multiplicadores PUE/WUE/CIF.
- Uso de DEA de eficiencia cruzada para contextualizar el impacto ambiental frente a la capacidad funcional del modelo (eco-eficiencia), reduciendo el sesgo de autoevaluación de los modelos CCR/BCC estándar.
- Dashboard interactivo en Power BI, actualizado a diario, que monitorea de forma continua la sostenibilidad de la inferencia e incorpora nuevos modelos automáticamente.
- Estudios de caso de GPT-4o (footprint anual escalado) y GPT-5 (variabilidad del enrutamiento adaptativo de razonamiento).

## Metodología

Marco probabilístico de estimación por consulta. Se modela la energía con una formulación estocástica: distribución conjunta de latencia (L) y tokens-por-segundo (R) mediante cópula gaussiana (ρ = -0,3) y 10.000 muestras Monte Carlo, combinando potencia de GPU y no-GPU, fracciones de utilización y el multiplicador PUE. El hardware se infiere estadísticamente (ANOVA de dos vías y Tukey HSD) para distinguir despliegues en A100/H100/H200/H800; los modelos se estratifican en cinco clases por tamaño (Nano a Large) con asignación de 1 a 8 GPUs y batch size de 8. Agua y carbono se derivan de la energía vía WUE (sitio y fuente) y CIF, limitándose a consumo operativo de Scope 2 (se excluyen Scope 1 y embodied/Scope 3). La validación se hace contra divulgaciones públicas (estimación de 0,42 Wh por consulta corta de GPT-4o, dentro del 19% de la cifra de 0,34 Wh reportada por Sam Altman; alineación con el LCA de Mistral Large 2).

## Hallazgos clave

- La inferencia, no el entrenamiento, domina el costo ambiental del ciclo de vida (hasta 90%); falta un método estándar para cuantificarla a nivel de consulta.
- Disparidad de más de 65× entre modelos: de 0,443 Wh (LLaMA-3.1-8B) a 29,078 Wh (DeepSeek-R1 en servidores propios) por consulta larga.
- La infraestructura suele pesar más que el diseño del modelo: DeepSeek-R1/V3 consumen ~70% menos energía y emiten ~85% menos en Azure que en los servidores de DeepSeek; GPT-4o mini consume más que GPT-4o por usar A100.
- A escala, GPT-4o (≈772 mil millones de consultas/año en 2025) implicaría ~391.509–463.269 MWh, 1,33–1,58 millones de kL de agua evaporada y 138.125–163.441 toneladas de CO2e anuales.
- El enrutamiento adaptativo de GPT-5 introduce gran variabilidad: el razonamiento alto puede consumir más de 7× el modo mínimo (hasta 33,8 Wh en consultas largas de alto razonamiento).
- Paradoja de Jevons: las ganancias de eficiencia por tarea no reducen el impacto total porque la adopción crece más rápido.

## Limitaciones

- Solo se contabiliza la energía de las GPUs activamente asignadas (se excluye la potencia ociosa de GPUs no utilizadas) por falta de telemetría de despliegue, lo que puede subestimar el consumo real.
- La potencia de componentes no-GPU se fija con una estimación de estudios previos en lugar de medirse directamente.
- Para modelos propietarios sin tamaño divulgado (GPT-4o, Claude), la clase de escala se infiere del rendimiento observado en la API, no de datos verificados.
- El análisis se restringe a generación de texto; imagen, video y audio (probablemente más costosos) quedan fuera.
- Se excluyen las emisiones y el agua embebidos (Scope 3) del hardware y la cadena de suministro.

## Notas relacionadas

- [[concepts/inteligencia-artificial]]
- [[concepts/sostenibilidad]]
- [[concepts/capacidades-de-ia]]
- [[concepts/simulacion-computacional]]
- [[concepts/regulacion-de-ia]]
- [[concepts/geopolitica-tecnologica]]
- [[concepts/futuro-del-trabajo]]
- [[concepts/huella-ambiental-de-la-ia]]
