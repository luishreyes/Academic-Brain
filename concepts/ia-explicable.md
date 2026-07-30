---
type: concept
keyword: ia-explicable
aliases: [explainable AI, XAI, interpretabilidad, Grad-CAM, saliency maps]
---

# IA explicable (XAI)

Métodos para hacer interpretables las decisiones de modelos de IA; incluye mapas de saliencia/localización (Grad-CAM), importancia de variables y explicaciones post-hoc.

## Qué dice la literatura

Los cuatro documentos del corpus —un white paper multi-actor de la EFCE/SFGP, un estudio técnico de monitoreo de biorreactores (Mao et al.), un artículo de perspectiva sobre IA generativa responsable (Daniel y Xuan) y una declaración de política profesional (NSPE)— convergen en tratar la explicabilidad no como un atributo técnico opcional sino como condición de confianza necesaria para que la IA opere en dominios de seguridad crítica de la ingeniería. La EFCE/SFGP diagnostica una "estancación de la confianza" (trust stagnation) frente a los modelos data-driven, opacos por naturaleza, y la contrapone a la causalidad transparente de los modelos físicos; su respuesta es promover modelos híbridos y técnicas post-hoc (valores de Shapley, coordenadas paralelas) para recuperar interpretabilidad sin renunciar a la capacidad predictiva del aprendizaje automático. Mao et al. materializan esa misma lógica en un caso aplicado: para que operadores de campo confíen en un clasificador de humo basado en ResNet-50, añaden mapas de calor Grad-CAM++ que localizan visualmente la región de humo detectada, lo que no solo genera confianza sino que revela una fuente sistemática de error (falsas alarmas por cielos muy brillantes), permitiendo su corrección. Daniel y Xuan generalizan el argumento: la explicabilidad (XAI) es uno de los tres pilares tecnológicos —junto con reducción de sesgos en datos y verificación de resultados— de lo que llaman "trustworthy AI" (definición de la UE: legal, ética y robusta), y advierten que los modelos de caja negra "erosionan la confianza experta", rompiendo la cadena de confianza entre entrada y salida en aplicaciones como generación de P&IDs o HAZOPs automatizados.

Donde el corpus técnico se detiene en la confianza operativa, la NSPE la eleva a un requisito de gobernanza: exige que los sistemas de IA con impacto en la seguridad pública sean "transparentes, explicables y rindan cuentas", y liga explícitamente esa exigencia al modelo de licenciatura profesional (Professional Engineer) ya existente en ingeniería. Los cuatro textos coinciden en que la explicabilidad es la bisagra entre capacidad predictiva y responsabilidad profesional: sin ella, ni el operador de planta ni el regulador pueden ejercer la supervisión humana que las cuatro fuentes —cada una desde su propio registro, técnico o normativo— consideran indispensable.

## Notas que usan este concepto
- [[notes/articles/2026-02-01_nspe-declaracion-posicion-ia]]
- [[notes/papers/2025-01-01_efce-white-paper-ia-ingenieria-quimica]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap02-etica]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap09-salud-mental]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap10-escolar]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap16-justicia-social]]
- [[notes/papers/2026-01-01_ia-trabajo-social-cap21-investigacion]]
- [[notes/papers/2026-01-01_monitoreo-visual-biomasa-genai]]
- [[notes/papers/2026-06-27_uso-responsable-ia-generativa-ingenieria-quimica]]
- [[notes/papers/2026-07-01_evidencia-medica-inteligencia-artificial]]
