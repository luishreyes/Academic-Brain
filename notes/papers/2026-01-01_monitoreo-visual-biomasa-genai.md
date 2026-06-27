---
title: Visual process monitoring of biomass conversion reactors using transfer learning and generative AI
authors: [Qiangqiang Mao, Boris Yip, Chuanhao Xu, Sagar Garg, Pengcheng Guo, Yankai Cao]
year: 2026
journal: Computers and Chemical Engineering
url: https://doi.org/10.1016/j.compchemeng.2025.109464
doi: 10.1016/j.compchemeng.2025.109464
pdf_local: sources/pdfs/capability-reliability/mao_2026_visual-monitoring-biomass-genai.pdf
type: paper
keywords: [biomasa-lignocelulosica, economia-circular, ingenieria-quimica, sostenibilidad, desarrollo-rural, vision-por-computadora, ia-explicable, inteligencia-artificial]
date_added: 2026-06-27
---

# Visual process monitoring of biomass conversion reactors using transfer learning and generative AI

## Resumen

El estudio aborda el monitoreo visual automatizado de pequeños biorreactores termoquímicos (de bajo costo, portátiles, basados en torrefacción) que convierten biomasa residual —astillas de madera, residuos forestales, cáscaras de pecán— en biochar en el sitio. Estos reactores descentralizados buscan integrar a comunidades rurales remotas en el ciclo de la economía circular basada en biomasa, evitando los altos costos de transporte de la biomasa suelta y húmeda hacia plantas centralizadas. Su operación continua depende de mantener una condición de reacción pobre en oxígeno; cuando esa condición se altera, el reactor emite humo (especialmente humo negro) por la chimenea, señal de que la biomasa se está convirtiendo en ceniza en lugar de biochar. Detectar ese humo a tiempo permite ajustes menores en la alimentación y la composición de gas.

Los autores formulan el problema como una clasificación de imágenes de "humo / sin humo" usando una red neuronal convolucional (ResNet-50). El desafío central es la clasificación de humo en el régimen *shuffled video-based*: el modelo se entrena con grabaciones de unos pocos experimentos de campo y debe aplicarse a escenarios nuevos y no vistos (distintas ubicaciones, luz, clima, fondos). Con solo diez videos de campo disponibles, la escasa diversidad de fondos provoca un desempeño pobre y tasas de falsa alarma altísimas (hasta 100 % en una corrida). Los autores muestran que el régimen alternativo *shuffled image-based*, común en la literatura, alcanza una exactitud casi perfecta de forma engañosa por fuga de datos (data leakage), y por ello no es realista.

Para superar la falta de diversidad, el trabajo emplea IA generativa (ControlNet sobre stable diffusion, con preprocesadores Canny Edge y Depth Map) para crear imágenes virtuales sintéticas con y sin humo, variando objetos de fondo y patrones de humo mientras se preserva la estructura del reactor y la chimenea. Sobre los datos aumentados aplica una estrategia de aprendizaje por transferencia adaptada: en lugar de reentrenar todo el modelo o solo la capa totalmente conectada, ajusta la cuarta capa residual junto con la capa totalmente conectada de ResNet-50 preentrenada. Finalmente, para generar confianza en los operadores de campo y permitirles corregir errores, añade explicabilidad mediante mapas de calor de localización de humo (Grad-CAM++).

Los resultados muestran que la combinación de aumento con muestras virtuales y la estrategia de transferencia mejora la exactitud promedio de 95.05 % a 98.3 %, reduce la tasa de falsas alarmas de 7.8 % a 0.6 % y eleva el F1-score a 98.19 %, eliminando los casos extremos de falsas alarmas. Esto es clave para la operación continua confiable de los reactores de conversión de biomasa y para el éxito de la descarbonización dentro de una economía circular basada en biomasa.

## Contribuciones principales

- Marco de monitoreo visual automatizado para detección de humo durante la conversión termoquímica de biomasa a biochar en reactores portátiles.
- Uso de IA generativa (ControlNet + stable diffusion) para aumentar la diversidad de fondos y patrones de humo con imágenes virtuales sintéticas, sin comprometer la integridad del conjunto de prueba.
- Estrategia de aprendizaje por transferencia a medida sobre ResNet-50 (ajuste de la cuarta capa residual + capa totalmente conectada) que supera tanto el ajuste completo como el ajuste solo de la capa final.
- Explicabilidad mediante mapas de calor Grad-CAM++ para localizar el humo, generar confianza en operadores y permitir corrección de predicciones erróneas.

## Metodología

Se recolectaron diez videos de campo con eventos de humo bajo distintos escenarios (vid1–vid10); de cada uno se extrajeron 200 imágenes con humo y 200 sin humo, recortadas a la región de interés (ROI) alrededor de la chimenea. Se adopta una evaluación rotacional: cada video sirve una vez como conjunto de prueba mientras los otros nueve forman el entrenamiento (10 corridas), bajo el régimen *shuffled video-based*. ControlNet genera 400 imágenes sintéticas con humo y 400 sin humo por escenario de entrenamiento (denoising strength 0.55, control weight 0.95 en Stable Diffusion WebUI). El clasificador es ResNet-50 preentrenada, ajustada por transferencia. Métricas: exactitud, tasa de falsa alarma (FAR) y F1-score; se comparan también métodos tradicionales de segmentación (watershed, segmentación HSV) en apéndices.

## Hallazgos clave

- El régimen *shuffled image-based* alcanza ~98 % de exactitud de manera engañosa por fuga de datos; el régimen realista *shuffled video-based* parte de ~63.8 % de exactitud promedio con FAR de hasta 100 %.
- Ajustar la cuarta capa residual + capa totalmente conectada eleva la exactitud a 95.05 % (10.33 % más que ajustar solo la capa final; 31.22 % más que ajustar el modelo completo).
- El aumento con muestras virtuales generadas por IA eleva la exactitud a 98.3 %, baja la FAR a 0.6 % y sube el F1-score a 98.19 %, eliminando casos extremos de falsas alarmas.
- Grad-CAM++ localiza correctamente el humo alrededor de la chimenea y revela que las falsas alarmas suelen deberse a condiciones de iluminación adversas (cielo demasiado blanco o brillante).

## Limitaciones

- Las imágenes generadas no siempre siguen estrictamente los prompts ni las restricciones de la imagen de condicionamiento, en especial al generar humo alrededor de la chimenea.
- Persiste el equilibrio difícil entre la similitud con las imágenes de entrada y la necesidad de diversidad de fondos de campo.
- A pesar de las mejoras, aún se observan corridas con falsas alarmas (p. ej., 75 % en Run 7 sin aumento), por la limitada diversidad de los diez escenarios; el sistema de detección en tiempo real aún no se ha desplegado en campo (solo se emula).

## Notas relacionadas

- [[concepts/biomasa-lignocelulosica]]
- [[concepts/economia-circular]]
- [[concepts/ingenieria-quimica]]
- [[concepts/sostenibilidad]]
- [[concepts/desarrollo-rural]]
- [[concepts/vision-por-computadora]]
- [[concepts/ia-explicable]]
- [[concepts/inteligencia-artificial]]
