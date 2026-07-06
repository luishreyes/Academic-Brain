---
title: "Controlled encapsulation and droplet size prediction in two-step microfluidic double emulsions"
authors: [Chen Tang, Loïc Chagot, Panagiota Angeli]
year: 2026
journal: Lab on a Chip
url: https://doi.org/10.1039/d6lc00406g
doi: 10.1039/d6lc00406g
pdf_local: sources/pdfs/microfluidics/tang-2026-doble-emulsion-microfluidica.pdf
type: paper
keywords: [microfluidica, emulsiones, ingenieria-quimica, simulacion-computacional, biomateriales]
date_added: 2026-07-05
---

# Controlled encapsulation and droplet size prediction in two-step microfluidic double emulsions

## Resumen
El trabajo estudia cómo generar de forma controlada gotas de emulsión doble agua-en-aceite-en-agua (W1/O/W2) en un dispositivo microfluídico, un sistema clave para la encapsulación y liberación controlada de materiales. Los autores emplean un proceso de flujo enfocado (flow-focusing) en dos etapas: en una primera unión hidrofóbica del microcanal se forma la gota interna agua-en-aceite y en una segunda unión hidrofílica esa gota queda encapsulada por la fase acuosa externa. El enfoque de dos etapas, frente al de una sola, desacopla la ruptura de las fases y da mayor flexibilidad para ajustar de forma independiente el tamaño del núcleo y de la cáscara. Se usa un sistema modelo bien controlado —aceite de silicona de baja viscosidad (4,6 mPa·s), fase acuosa de 52 % glicerol / 48 % agua ajustada para igualar el índice de refracción del aceite, y dodecilsulfato de sodio (SDS) como surfactante— para aislar la física subyacente.

Variando los caudales de las tres fases y la tensión interfacial (con SDS a 0,2, 0,5, 1 y 2 veces la concentración micelar crítica, CMC = 11 mM), los autores identifican y clasifican tres regímenes de formación de la gota doble: drop-in-drop (gota-en-gota, con cáscara delgada y estructura núcleo-cáscara concéntrica), drop-in-plug (gota-en-tapón, con cáscara oleosa más gruesa y posible excentricidad del núcleo) y drop-in-thread (gota-en-hilo, en el que el aceite forma un hilo continuo y ya no se producen emulsiones dobles estables). Con estos datos construyen mapas de patrones de flujo que definen la ventana operativa para cada régimen y muestran que el caudal de la fase oleosa media y la tensión interfacial (modulada por el surfactante) son los parámetros de control determinantes.

La contribución cuantitativa es un modelo semi-empírico para predecir el tamaño de gota en el régimen drop-in-drop, el más relevante para encapsulación por su geometría núcleo-cáscara bien definida y predecible. Partiendo de correlaciones previas basadas en el balance entre fuerzas de corte y capilares, modelan el volumen de la gota doble como suma del volumen del núcleo y del volumen de la cáscara oleosa. Para condiciones con C/CMC ≥ 1 (tensión interfacial en equilibrio) el modelo predice con errores porcentuales absolutos medios (MAPE) de 8,16 % para las gotas núcleo y 9,54 % para las gotas dobles. A concentraciones de surfactante bajas, donde la tensión interfacial no alcanza el equilibrio durante la formación de la gota, incorporar la tensión interfacial dinámica (DIT) mejora ligeramente la predicción del tamaño de la gota doble (MAPE de 8,17 % frente a 9,54 %). El resultado ofrece un marco cuantitativo y guías operativas para la generación controlada de gotas encapsuladas.

## Contribuciones principales
- Identificación y clasificación de tres regímenes de formación de gotas dobles W1/O/W2 en microfluídica de dos etapas (drop-in-drop, drop-in-plug, drop-in-thread) y construcción de mapas de patrones de flujo en función de caudales y tensión interfacial.
- Desarrollo de un modelo semi-empírico que predice el tamaño de la gota núcleo y de la gota doble en el régimen drop-in-drop, con MAPE de 8,16 % y 9,54 % respectivamente.
- Análisis del papel de la tensión interfacial dinámica (DIT) a baja concentración de surfactante, mostrando que mejora marginalmente la predicción (MAPE 8,17 %) pero que los valores de equilibrio bastan para buenas estimaciones con el SDS usado.

## Metodología
Los experimentos se realizaron en un microcanal de vidrio de doble cruce (Dolomite) con una primera sección hidrofóbica (formación de gotas primarias W1/O) y una segunda hidrofílica (encapsulación y formación de la doble emulsión). La fase orgánica fue aceite de silicona (920 kg/m³, 4,6 mPa·s) y la acuosa una solución de 52 % glicerol / 48 % agua (índice de refracción igualado al del aceite para minimizar distorsión óptica), con SDS a concentraciones de 0,2 a 2 veces la CMC. Los caudales se controlaron con bomba de jeringa (fase interna) y bomba de presión multicanal (fase oleosa media y fase acuosa externa), manteniendo la formación de la gota interna en régimen de goteo (dripping) para asegurar monodispersidad. La formación de gotas se registró con cámara de alta velocidad (Phantom v1310, 10 kHz) e iluminación LED; las imágenes se procesaron en MATLAB midiendo las gotas internas por ajuste de contorno y las externas por detección de la interfaz o-w2. El modelo predictivo se construyó a partir de correlaciones semi-empíricas basadas en números de capilaridad (Ca) y balances de fuerzas de corte-capilares, validado contra los datos experimentales mediante el MAPE.

## Hallazgos clave
- Se observan tres regímenes de formación —drop-in-drop, drop-in-plug y drop-in-thread— cuyas fronteras dependen fuertemente de los caudales, en especial del caudal de la fase oleosa media (Qo).
- Al disminuir la tensión interfacial (mayor concentración de surfactante), el área del régimen drop-in-plug crece y la del drop-in-drop se estrecha; por encima de la CMC y con caudal externo bajo el patrón deja de cambiar (interfaz saturada).
- El régimen drop-in-drop produce estructuras núcleo-cáscara concéntricas de cáscara delgada, ideales para encapsulación controlada; el modelo semi-empírico predice sus tamaños con MAPE de 8,16 % (núcleo) y 9,54 % (doble).
- La tensión interfacial dinámica es más alta que la de equilibrio a tiempos cortos de formación para 0,2 y 0,5 CMC; incluirla reduce el MAPE de la gota doble de 9,54 % a 8,17 %, una mejora pequeña.
- Existe una fuerte correlación entre el tamaño de la gota núcleo y el de la gota externa, base de la aditividad de volúmenes usada en el modelo.

## Limitaciones
- Los resultados se obtienen con un sistema de fluidos modelo (aceite de silicona / agua-glicerol / SDS); su aplicabilidad a fluidos complejos y a sistemas de encapsulación prácticos aún debe examinarse.
- El estudio se restringe al rango de caudales y condiciones interfaciales considerado, y el modelo predictivo se desarrolla solo para el régimen drop-in-drop (no para drop-in-plug).
- No se caracterizan los campos de flujo internos ni los patrones de circulación que afectan la deformación y ruptura de la interfaz, que quedan como trabajo futuro.

## Notas relacionadas
- [[concepts/microfluidica]]
- [[concepts/emulsiones]]
- [[concepts/ingenieria-quimica]]
- [[concepts/simulacion-computacional]]
- [[concepts/biomateriales]]
