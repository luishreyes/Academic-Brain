---
type: concept
keyword: vision-por-computadora
aliases: [computer vision, visión artificial, image classification, CNN, transfer learning]
---

# Visión por computadora

Campo de la IA que extrae información de imágenes y video mediante redes neuronales (CNN); incluye clasificación de imágenes, detección y localización de objetos, y aprendizaje por transferencia sobre modelos preentrenados.

## Qué dice la literatura

Las dos notas que usan este concepto aplican visión por computadora al mismo tipo de problema —detectar un evento visual anómalo en un proceso industrial continuo, con consecuencias de seguridad u operación si se falla— pero desde extremos opuestos de un mismo tránsito de paradigma. Mao et al. (2026) resuelven la detección de humo en biorreactores de biomasa con el enfoque "clásico": una CNN específica de tarea (ResNet-50) entrenada por transferencia, cuyo obstáculo central no es arquitectónico sino de datos — solo diez videos de campo, con fondos, luz y clima poco diversos, producen tasas de falsa alarma de hasta 100 % bajo evaluación realista (*shuffled video-based*). Yang, Kareck y Wang (2026), en su Commentary sobre modelos fundacionales en seguridad de procesos químicos, sostienen que ese mismo problema —transferibilidad pobre de "detectores CNN/ViT previos"— es precisamente lo que los modelos fundacionales de visión (VFMs) promptables, como SAM 3, prometen superar: sobre el conjunto FLAME, SAM 3 y un pipeline MLLM basado en Gemma-3-27B-it logran mayor recall y F1 que detectores convencionales sin reentrenamiento específico. Leídas juntas, ambas notas documentan el mismo cuello de botella —escasez de datos de entrenamiento etiquetados en dominios industriales confidenciales o de campo— desde dos respuestas distintas: Mao et al. lo resuelven *dentro* del paradigma específico de tarea, generando datos sintéticos vía IA generativa (ControlNet sobre stable diffusion) para diversificar fondos y patrones de humo, mientras que Yang et al. proponen saltar *fuera* de ese paradigma hacia modelos preentrenados a gran escala que transfieren sin reentrenamiento.

Pese a esa diferencia de estrategia, el corpus converge en que la interpretabilidad es condición de despliegue, no un añadido opcional. Mao et al. incorporan mapas de calor Grad-CAM++ para que los operadores de campo vean dónde el modelo detecta humo y puedan corregir predicciones erróneas —revelando, de paso, que buena parte de las falsas alarmas restantes se debe a condiciones de iluminación adversas, no a fallas del clasificador—. Yang et al. generalizan esa misma preocupación al plano epistémico: distinguen detección de segmentación como una diferencia "epistémica", porque la segmentación a nivel de píxel preserva la morfología del fenómeno (forma, continuidad, propagación de una llama) y permite razonar sobre su comportamiento físico, no solo señalar su presencia. Ambos trabajos coinciden, además, en que ninguno de los dos sistemas está listo para operar sin supervisión humana ni ha sido validado en condiciones reales de despliegue: el sistema de Mao et al. "aún no se ha desplegado en campo (solo se emula)", y Yang et al. advierten que SAM 3 y los MLLM requieren "validación sistemática por escenario industrial, geometría de cámara y condiciones ambientales" antes de un uso operativo, insistiendo en que estos modelos deben concebirse como capas de razonamiento asesoras y no como tomadores de decisiones autónomos.

## Notas que usan este concepto
- [[notes/papers/2026-01-01_ia-trabajo-social-cap06-discapacidad]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap10-escolar]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap13-vivienda]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap14-justicia-penal]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap15-trata-personas]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap16-justicia-social]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap17-ambiental-clima]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap19-internacional]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap21-investigacion]]
- [[notes/papers/2026-01-01_monitoreo-visual-biomasa-genai]]
- [[notes/papers/2026-03-03_modelos-fundacionales-seguridad-procesos-quimicos]]
