---
title: "An exploratory study of the use of artificial intelligence-based virtual patients to enhance dentist-patient communication training"
authors: [Yixuan Xie, Zhanpeng Ou, Yuanding Huang, Hong Huang, Xiongwen Ran, Hongwei Dai, Bo Huang, Linjing Shu]
year: 2026
journal: BMC Medical Education
url: https://doi.org/10.1186/s12909-026-09518-8
doi: 10.1186/s12909-026-09518-8
pdf_local: sources/pdfs/ai-education/xie_2026_ai-virtual-patients-dental-communication.pdf
type: paper
keywords: [educacion-medica, pacientes-virtuales, inteligencia-artificial, agentes-de-ia, retroalimentacion-con-ia, aprendizaje-activo, ensayo-controlado-aleatorio, psicometria]
date_added: 2026-06-30
---

# Pacientes virtuales basados en IA para mejorar la formacion en comunicacion odontologo-paciente

## Resumen

Este estudio exploratorio, realizado en la Universidad Medica de Chongqing (China), evalua si pacientes virtuales construidos sobre un modelo de lenguaje grande (LLM) pueden mejorar las habilidades de comunicacion odontologo-paciente en estudiantes de odontologia. La comunicacion clinica efectiva es central para la precision diagnostica y la eficacia del tratamiento, pero la formacion tradicional —clases magistrales y pacientes estandarizados (SP)— ofrece pocas oportunidades de practica repetida y es costosa y logisticamente exigente. Los autores desarrollaron un agente de IA con el modelo DeepSeek (en la plataforma Coze) que simula tres pacientes con presentaciones clinicas distintas, cada uno con perfil de personalidad, historia clinica, hallazgos de examen oral e imagenes cargados en su base de conocimiento, y con modos de interaccion por texto, voz y telefono.

Se trata de un ensayo controlado aleatorizado de un solo centro con 38 estudiantes de cuarto año, asignados al azar a un grupo experimental (instruccion teorica + consultas con pacientes virtuales de IA) o a un grupo control (instruccion teorica + role-play entre pares), con 19 participantes por grupo. La competencia comunicativa se midio con consultas frente a pacientes estandarizados, puntuadas con la escala SEGUE (Set, Elicit, Give, Understand, End; total de 100 puntos) por un unico evaluador ciego a la asignacion. Tras la intervencion se aplicaron el Chatbot Usability Questionnaire (CUQ) y un cuestionario de experiencia de uso (Cronbach alfa = 0.83).

Sin diferencias significativas al inicio (ambos grupos por debajo del umbral de aprobacion de 60 puntos), el grupo experimental supero significativamente al control tras la intervencion (mediana 70 [IQR 66-78] vs 60 [IQR 59-61]; U = 51.50, p < 0.001, r = 0.61, efecto grande). Las mayores ganancias se dieron en la etapa de preparacion (r = 0.46) y, sobre todo, en el cierre de la consulta (r = 0.72), atribuidas a la retroalimentacion inmediata y referida a criterios que entrega el agente al terminar cada sesion. Las dimensiones de dar informacion y empatia/comprension no mostraron diferencias entre grupos, y la obtencion de informacion presento un efecto techo. El CUQ promedio fue 65.9 ± 10.2, ligeramente por debajo del umbral de usabilidad aceptable (68), coherente con un prototipo de primera generacion.

Los autores concluyen que la integracion de instruccion teorica con entrenamiento basado en agentes de IA muestra eficacia preliminar y promete como complemento de bajo costo a la formacion convencional, sin sustituir las practicas clinicas. Reconocen limitaciones en flexibilidad del dialogo e inteligencia emocional del agente, ademas de la baja autenticidad clinica percibida (la experiencia interactiva fue el dominio peor valorado).

## Contribuciones principales
- Primer sistema de dialogo con paciente virtual diseñado especificamente para estudiantes de odontologia reportado en la literatura, integrado con instruccion teorica.
- Demostracion empirica (RCT exploratorio) de que el entrenamiento con pacientes virtuales de IA mejora mas la comunicacion clinica que el role-play entre pares (efecto grande, r = 0.61).
- Uso de DeepSeek desplegado localmente como motor, atendiendo requisitos de gobernanza de datos y costos en instituciones con recursos limitados.
- Estimacion de tamaños de efecto utiles para dimensionar futuros ensayos confirmatorios.

## Metodologia
RCT exploratorio de un solo centro con 38 estudiantes de cuarto año de odontologia (19 por grupo, aleatorizados con Research Randomizer). Intervencion: agente de IA (DeepSeek/Coze) con tres pacientes virtuales vs role-play entre pares, manteniendo identicos el numero y duracion de sesiones, los casos y la instruccion teorica. Evaluacion ciega con la escala SEGUE en consultas con pacientes estandarizados (pre y post), por un unico evaluador con mas de 10 años de experiencia, sobre videos y transcripciones anonimizados. Cuestionarios post-intervencion: CUQ (16 items, usabilidad del chatbot) y un instrumento ad hoc de experiencia de uso. Analisis no parametrico en SPSS 26 (Mann-Whitney U entre grupos, Wilcoxon dentro de grupos; tamaño de efecto r = Z/√N).

## Hallazgos clave
- Diferencia post-intervencion significativa a favor del grupo de IA: mediana 70 vs 60, p < 0.001, r = 0.61 (efecto grande).
- Mejora mediana de +20 puntos (experimental) vs +9 puntos (control).
- Mayores diferencias por dominio SEGUE: cierre de la consulta (r = 0.72) y etapa de preparacion (r = 0.46).
- Dar informacion (r = 0.05) y empatia/comprension (r = 0.09) sin diferencia; obtencion de informacion con efecto techo.
- CUQ = 65.9 ± 10.2 (justo debajo del benchmark de 68 del SUS); el dominio de experiencia interactiva fue el peor valorado (autenticidad clinica la mas baja).
- Alta satisfaccion y aceptacion; sin diferencias por genero en la encuesta de experiencia.

## Limitaciones
- Muestra pequeña (n = 38) y un solo centro; analisis principalmente descriptivos, sin calculo de potencia a priori.
- Un unico evaluador: imposible calcular fiabilidad inter-jueces.
- Participantes voluntarios autoseleccionados (posible sesgo de seleccion y predisposicion a aceptar IA); posible efecto novedad.
- No se recogio la perspectiva del profesorado.
- Plataforma en etapa temprana: biblioteca de casos limitada en alcance y complejidad; baja flexibilidad del dialogo y modelado emocional basado en reglas; validez ecologica restringida.

## Notas relacionadas
- [[concepts/educacion-medica]]
- [[concepts/pacientes-virtuales]]
- [[concepts/inteligencia-artificial]]
- [[concepts/agentes-de-ia]]
- [[concepts/retroalimentacion-con-ia]]
- [[concepts/aprendizaje-activo]]
- [[concepts/ensayo-controlado-aleatorio]]
- [[concepts/psicometria]]
