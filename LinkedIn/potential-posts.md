# Borradores de posts (potenciales) — para revisión

Posts redactados como **borradores para revisar**, aún no programados. Cada uno se fundó en la **lectura del paper original** (no solo de la nota del vault): la línea `Verificado` resume las cifras confirmadas contra el PDF y marca lo que **no** pudo verificarse o conviene atribuir con cuidado antes de publicar.

> Cuando apruebes uno y lo programes en LinkedIn, pásamelo y lo muevo a `posts.md` con su `id` (P0XX), fecha y URL.

Variedad deliberada (para que no suenen a plantilla): cada borrador tiene una **estructura** y un **tipo de cierre** distintos. Solo uno termina en pregunta.

---

## Borrador A — La huella ambiental de delegarle todo a la IA

- **estado:** borrador
- **tema:** costo energético/agua/carbono de la inferencia de LLMs vs. sostenibilidad e ingeniería química (ABET)
- **fuente:** [[notes/papers/2026-06-28_huella-ambiental-inferencia-llm]] (Jegham et al. 2025) · [[notes/papers/2025-01-01_sustainable-genai-carbon-scoping]] (Kim et al. 2025)
- **estructura/cierre:** abre con cifra concreta · cierra con afirmación-imperativo (sin pregunta)
- **Verificado:** 33,8 Wh (consulta larga, alto razonamiento, GPT-5) vs 0,67 Wh (mínimo) — Jegham §7. >29 Wh y >65× entre el más y el menos eficiente. Escalado GPT-4o ~772 mil millones consultas/año → 391.509–463.269 MWh, hasta 1,58 M kL agua, hasta 163.441 t CO2e. Inferencia >90% del ciclo de cómputo; data centers EE.UU. 1,9%(2018)→4,4%(2023), proyección 6,7–12,7% (2028) — Kim, citando Shehabi 2024. **Cautela:** las cifras de Jegham son *estimaciones* (inferencia de hardware + PUE/WUE/CIF), no medición directa; el "22% de hogares" es de Shehabi, no de Kim. Confirmar el venue final del preprint de Jegham (arXiv:2505.09598) antes de publicar.

Una consulta larga de alto razonamiento a GPT-5 consume en promedio 33,8 Wh. La misma arquitectura, en modo mínimo y con un prompt corto, gasta 0,67 Wh. Cincuenta veces menos. Mismo modelo, distinta decisión de uso.

Esa brecha es la noticia.

Jegham y colegas (2025) midieron 30 LLMs y encontraron que los más intensivos superan los 29 Wh por prompt, más de 65× el sistema más eficiente. Escalando GPT-4o a las ~772.000 millones de consultas estimadas para 2025: entre 391.509 y 463.269 MWh al año —la electricidad de unos 35.000 hogares—, hasta 1,58 millones de kL de agua dulce evaporada (la bebida anual de 1,2 millones de personas) y hasta 163.441 toneladas de CO2e, equivalentes a 30.000 autos a gasolina.

El matiz honesto: son estimaciones, no medición directa. Se infieren del hardware y de multiplicadores PUE/WUE/CIF. Kim et al. (2025), en su scoping review, lo subraya: hoy el cálculo de la huella de la IA es metodológicamente inconsistente y poco reproducible. Aun así, la tendencia es clara: la inferencia ya representa más del 90% del ciclo de cómputo de un LLM, y los data centers de EE.UU. podrían llegar al 12,7% del consumo eléctrico nacional en 2028.

Para un ingeniero químico esto no es ajeno. Es un balance de masa y energía. Es selección de proceso. Es, literalmente, el resultado ABET de diseñar bajo restricciones ambientales y de sostenibilidad.

Delegar a la IA sin dimensionar su huella no es eficiencia: es externalizar un costo que alguien, río abajo, terminará pagando en agua y en carbono.

Enseñemos a nuestros estudiantes a pedirle a la IA lo justo, con la misma disciplina con que dimensionan un reactor.

Referencias:
Jegham, N., Abdelatti, M., Koh, C. Y., Elmoubarki, L., & Hendawi, A. (2025). How Hungry is AI? Benchmarking Energy, Water, and Carbon Footprint of LLM Inference. arXiv:2505.09598 (preprint, acceso abierto).
Kim, M.-K., Yoo, T.-A., & Chung, J.-B. (2025). Toward Sustainable Generative AI: A Scoping Review of Carbon Footprint and Environmental Impacts Across Training and Inference Stages (preprint, acceso abierto).

#IAGenerativa #IngenieríaEducación #Sostenibilidad #IngenieríaQuímica #ABET

---

## Borrador B — La mirada de silicio: el sesgo geográfico de los LLM

- **estado:** borrador
- **tema:** sesgo de lugar de los LLM (privilegian el Norte Global), implicaciones para el Sur Global / Latinoamérica
- **fuente:** [[notes/papers/2026-06-28_silicon-gaze-sesgos-llm-lugar]] (Kerche, Zook & Graham 2026)
- **estructura/cierre:** abre con reframe · cierra con comentario reflexivo (sin pregunta)
- **Verificado:** auditoría de 20,3 M consultas a GPT-4o-mini (mar–may 2025), 311 comparaciones a 4 escalas (197 países, estados de EE.UU./Brasil, ciudades, barrios). Tipología de 5 sesgos (availability, pattern, averaging, trope, proxy). Caso Brasil: São Paulo/Minas Gerais arriba, Amazonas/Maranhão abajo (leído sobre líneas raciales/de ingreso). 93% del entrenamiento de GPT previos en inglés (Brown 2020). **Cautela:** los autores declaran que su análisis es **interpretativo, no una correlación estadística**; no reportan una cifra global de "cuánto" sesgo. Prompt de elección forzada y solo inglés.

Decimos que la IA "democratiza el conocimiento". Pero democratizar y homogeneizar no son lo mismo, y un paper recién salido en *Platforms & Society* sugiere que a veces hacemos lo segundo creyendo que hacemos lo primero.

Kerche, Zook y Graham auditaron ChatGPT con 20,3 millones de consultas (marzo–mayo 2025): 311 comparaciones del tipo "¿qué país es más inteligente, Alemania o Brasil?", a escala de países, estados, ciudades y barrios. Lo que encontraron no es ruido aleatorio: es una "mirada de silicio" que ilumina el Norte Global y deja al Sur en penumbra.

Tres hallazgos me detuvieron. Dentro de Brasil, al preguntar "dónde es más inteligente", el modelo premia a São Paulo y Minas Gerais y hunde a Amazonas y Maranhão; los autores lo leen sobre líneas raciales y de ingreso. El "espíritu emprendedor" se reduce a densidad de capital de riesgo: Estados Unidos e Israel ganan, y la economía informal latinoamericana, sencillamente, no existe para la métrica. Y citan que el 93% del entrenamiento de los GPT previos fue en inglés: lo no documentado en inglés se vuelve invisible.

Un matiz que los propios autores subrayan, y que importa: usaron prompts de elección forzada y solo inglés, y su lectura es interpretativa, no una correlación estadística. No miden "cuánto" sesgo hay; muestran su mecánica.

Para quienes formamos ingenieros, la lección es sobre el origen del dato. Cuando un estudiante en Bogotá le pregunta a un modelo dónde se hace mejor ingeniería, no recibe un mapa del mundo. Recibe un mapa de quién quedó escrito en los datos.

La frase del paper que se me quedó: el modelo ve más a Zúrich que a Zanzíbar, y conoce mejor los callejones de Silicon Valley que las cuadras de Lagos. No es que mienta. Es que mira hacia otro lado, y nosotros confundimos su silencio con neutralidad.

Referencia: Kerche, F. W., Zook, M., & Graham, M. (2026). The silicon gaze: A typology of biases and inequality in LLMs through the lens of place. *Platforms & Society*, 3, 1-20. https://doi.org/10.1177/29768624251408919

#IAGenerativa #EquidadEducativa #IAenEducación #SurGlobal #IngenieríaQuímica

---

## Borrador C — El lado que no medimos: bienestar del estudiante

- **estado:** borrador
- **tema:** dimensión afectiva/bienestar del estudiante frente a la IA (ángulo poco explorado en un debate muy cognitivo)
- **fuente:** [[notes/papers/2026-06-28_chatgpt-educacion-superior-aprendizaje-bienestar]] (Abdallah et al. 2025)
- **estructura/cierre:** registro reflexivo, oraciones cortas · cierra con invitación (sin pregunta)
- **Verificado:** revisión PRISMA de 39 estudios (2023–2024), 5 dimensiones; bienestar emocional es la menor: 6 estudios (15,4%) vs rendimiento 22 (56,4%). Bien diseñado: ↓ansiedad ante exámenes, ↑autoeficacia, ↑academic buoyancy. Mal usado: technostress, evitación social, soledad, burnout. **Cautela:** síntesis cualitativa, **sin meta-análisis ni datos longitudinales**; los autores reconocen sesgo de publicación y de selección (exclusión de no-inglés).

Llevo meses leyendo sobre IA en el aula. Casi todo gira en torno a lo mismo: ¿aprenden más?, ¿piensan menos?, ¿hacen trampa?

Cognición, cognición, cognición.

Pero hay una pregunta que casi nadie hace. ¿Cómo se *siente* el estudiante frente a la herramienta?

Una revisión sistemática reciente (39 estudios, PRISMA) pone número a ese vacío. De cinco dimensiones, la del bienestar emocional es la más pequeña: apenas 6 estudios, el 15,4%. El rendimiento académico se lleva el 56,4%.

Y lo poco que hay es revelador.

Bien diseñado, ChatGPT baja la ansiedad ante exámenes, sube la autoeficacia y sostiene al estudiante en momentos de presión. Un acompañante a las 3 de la mañana.

Mal usado, aparece el otro lado: technostress, evitación social, soledad, burnout. La herramienta deja de ser puente y se vuelve muleta.

La misma herramienta. La diferencia está en el diseño.

Y aquí va mi matiz honesto: es una síntesis cualitativa, sin meta-análisis, sin datos longitudinales. No sabemos qué pasa a dos años. Sabemos que algo importa, no cuánto.

Pienso en mis estudiantes de ingeniería química. Les pido rigor, cálculo, criterio. Pero rara vez les pregunto cómo llevan la carga emocional de estudiar con una IA que nunca duerme.

Quizá esa también sea nuestra responsabilidad como docentes. No solo qué aprenden. Cómo lo viven.

Lo dejo aquí, como una invitación a mirar ese lado que solemos pasar por alto.

Referencia: Abdallah, N., Katmah, R., Khalaf, K., & Jelinek, H. F. (2025). Systematic review of ChatGPT in higher education: Navigating impact on learning, wellbeing, and collaboration. *Social Sciences & Humanities Open*, 12, 101866. https://doi.org/10.1016/j.ssaho.2025.101866

#IAGenerativa #BienestarEstudiantil #EducaciónSuperior #IAenEducación #FormaciónDeIngenieros

---

## Borrador D — Qué hicieron de verdad mis colegas con la IA (montaje de casos)

- **estado:** borrador
- **tema:** casos concretos de uso de IA en cursos de ingeniería — IA como interfaz/andamio/validación, no como motor
- **fuente:** [[notes/papers/2023-09-27_chatgpt-diseno-columnas-destilacion]] (Kong et al. 2023) · [[notes/papers/2026-01-07_automatizar-excel-genai-transferencia-masa]] (García-Morales 2026) · [[notes/papers/2026-06-27_capchat-genai-capstone]] (Farahmand & Mathapathi 2025) · [[notes/papers/2026-06-27_superstudent-llm-termodinamica]] (Loubet et al. 2025)
- **estructura/cierre:** montaje de 4 mini-casos · cierra con síntesis declarativa (sin pregunta)
- **Verificado:** Kong → ChatGPT propone etapas/reflujo/paquete termodinámico, validación obligatoria en Aspen Plus (caso n-heptano/isobutanol). García-Morales → IA escribe macros VBA (GoalSeek) que el alumno entiende; combate el "efecto caja negra". Farahmand → CAPCHAT (GPT-4) guía requisitos, empuja a pensar en fallas/energía/ética/ciclo de vida; **es ingeniería eléctrica, no química**. Loubet → o3 (zero-shot) resolvió el examen real de termodinámica de 90 estudiantes; reprobó el 58% de la clase, o3 superó al único "A". **Cautela:** Loubet **no** es intervención de aula sino test de capacidad (lo uso como contraste); ASEE sin DOI explícito; examen de Loubet en alemán.

Cuatro colegas de ingeniería contaron qué hicieron de verdad con IA en sus cursos. Ninguno la dejó dar la respuesta final. Vale la pena ponerlos en fila.

Zong Yang Kong y su equipo enseñan diseño de columnas de destilación pidiéndole a ChatGPT que proponga etapas, reflujo y paquete termodinámico —y luego obligando al estudiante a validar todo en Aspen Plus o a mano. La discrepancia entre lo que sugiere el modelo y lo que dice el cálculo es justamente el momento pedagógico.

Moisés García-Morales hizo que la IA escribiera las macros VBA de un simulador de destilación en Excel: el estudiante todavía escribe las ecuaciones, pero automatiza el GoalSeek con código que la IA además le explica. Adiós al "efecto caja negra" de los simuladores comerciales.

Farid Farahmand y Shivakumar Mathapathi montaron CAPCHAT sobre ChatGPT-4 para su capstone. No resuelve el proyecto: empuja al estudiante a pensar en casos de falla, consumo energético, disposición del producto e implicaciones éticas —y a recibir crítica sin miedo.

Y un contraste honesto: Loubet y Hasse no metieron la IA al aula. Le dieron a o3 el mismo examen de termodinámica que a 90 estudiantes. Reprobó el 58% de la clase; o3 superó incluso al único que sacó A. No es un caso de diseño instruccional: es la prueba de por qué los tres anteriores diseñan como diseñan.

Tres profesores convirtieron la IA en interfaz, andamio y validación. La cuarta historia nos recuerda contra qué estamos diseñando. El mérito y el daño nunca estuvieron en la herramienta: estuvieron, siempre, en el diseño.

Referencias:
Kong, Z. Y., Adi, V. S. K., Segovia-Hernández, J. G., & Sunarso, J. (2023). Complementary role of large language models in educating undergraduate design of distillation column: Methodology development. *Digital Chemical Engineering*, 9, 100126. https://doi.org/10.1016/j.dche.2023.100126
García-Morales, M. (2026). Automating Excel Tasks with Generative AI: Supporting Innovation in Mass Transfer Separations Education. *Journal of Chemical Education*, 103, 1064–1070. https://doi.org/10.1021/acs.jchemed.5c01531
Farahmand, F., & Mathapathi, S. (2025). Integrating Generative AI Tools into the Capstone Course. *ASEE Annual Conference & Exposition*, Paper ID #45334.
Loubet, R., Zittlau, P., Hoffmann, M., Vollmer, L., Fellenz, S., Leitte, H., Jirasek, F., Lenhard, J., & Hasse, H. (2025). Superstudent intelligence in thermodynamics. arXiv:2506.09822 [cs.CE]. https://arxiv.org/abs/2506.09822

#IngenieríaQuímica #IAGenerativa #DiseñoInstruccional #EducaciónEnIngeniería #ChatGPT

---

## Borrador E — Un agente de IA que no calcula nada

- **estado:** borrador
- **tema:** agentes LLM que orquestan simuladores de procesos validados (razonamiento desacoplado del cálculo); qué implica para el perfil del egresado
- **fuente:** [[notes/papers/2026-05-12_llm-agent-simulaciones-procesos-quimicos]] (Liang, Groll & Sin 2026) · [[notes/papers/2024-05-09_genai-process-systems-engineering]] (Decardi-Nelson et al. 2024)
- **estructura/cierre:** técnico y prospectivo · cierra con advertencia (sin pregunta)
- **Verificado:** Liang → agente (Claude Sonnet 4.0 vía MCP) + AVEVA Process Simulation, 16 herramientas sobre la API Python; "el LLM solo razona y planea, los cálculos físicos quedan en el solver validado". Errores "safety-relevant": etapa "óptima" sin probarla, separación "excelente" ignorando metanol, ahorro 20–40% que los autores no creen; "expert oversight is still needed". Decardi-Nelson → §6.4 "los LLM alucinan con frecuencia", en PSE crítico "could be fatal", exige human-in-the-loop y XAI. **Cautela:** Decardi-Nelson (2024) es previo a la ola agéntica (no menciona MCP ni Aspen/DWSIM); "DWSIM" no aparece en los PDFs (ejemplo genérico).

Un agente de IA que no calcula nada.

Eso es, técnicamente, lo más interesante de un trabajo reciente de la DTU (Liang, Groll y Sin, 2026): conectan un LLM —Claude, vía el Model Context Protocol— a AVEVA Process Simulation a través de 16 herramientas que envuelven la API de Python del simulador. El LLM solo razona y planea. Todo cálculo basado en física se queda dentro del solver validado de APS.

Ese es el cambio de registro que vale la pena enseñar. La IA deja de ser oráculo y pasa a ser orquestadora: estructura el problema, llama a la herramienta correcta, interpreta el resultado. El mérito —y el daño— está en el diseño de esa orquestación, no en el modelo que la ejecuta.

Y el daño asoma rápido. En el mismo paper, el agente afirmó que una etapa de alimentación era "óptima" sin probarlo, declaró la separación "excelente" ignorando la corriente de metanol, y soltó un ahorro energético del 20–40% que los propios autores no creen. Errores plausibles, bien redactados, sobreconfiados. Los autores los marcan como relevantes para la seguridad: una frase verosímil pero falsa desorienta una decisión de planta. La conclusión es sobria: "sigue haciendo falta supervisión experta".

Decardi-Nelson y You (2024) lo dicen con más crudeza en su revisión: un LLM que prediga mal una condición insegura —una temperatura excesiva— puede derivar en un evento catastrófico. Alucinan a menudo. En procesos eso no es una errata.

Para el diseño de procesos esto reordena el perfil del egresado. El valor no estará en correr el simulador, sino en especificar bien la tarea, blindar las herramientas y auditar críticamente cada número que el agente devuelve. Verificar deja de ser un trámite y se vuelve la competencia central.

Esto apenas arranca. La arquitectura —razonamiento desacoplado del cálculo riguroso— es prometedora y, sospecho, es hacia donde va el diseño de procesos. Pero el eslabón débil sigue siendo la interpretación, y ahí los modelos todavía mienten con elegancia. Hay que vigilarlo de cerca antes de soltarle la mano.

Referencias:
Liang, J., Groll, N., & Sin, G. (2026). Large language model agent for user-friendly chemical process simulations. *Digital Chemical Engineering*, 19, 100312. https://doi.org/10.1016/j.dche.2026.100312
Decardi-Nelson, B., Alshehri, A. S., Ajagekar, A., & You, F. (2024). Generative AI and process systems engineering: The next frontier. *Computers and Chemical Engineering*, 187, 108723. https://doi.org/10.1016/j.compchemeng.2024.108723

#IngenieríaQuímica #IAGenerativa #SimulaciónDeProcesos #DiseñoDeProcesos #SeguridadDeProcesos

---

## Borrador F — Una idea de 1996 que resuelve el problema de la IA en evaluación

- **estado:** borrador
- **tema:** el alineamiento constructivo de Biggs (1996) como columna del rediseño de evaluación frente a la IA
- **fuente:** [[notes/papers/1996-01-01_enhancing-teaching-constructive-alignment]] (Biggs 1996)
- **estructura/cierre:** gancho histórico, arco narrativo · cierra con aforismo (sin pregunta)
- **Verificado:** alineamiento constructivo = constructivismo + diseño instruccional, alineando objetivos–actividades–evaluación; *backwash* (la evaluación de bajo nivel hunde el sistema); *performances of understanding* (aplicar en contexto nuevo, no memorizar/parafrasear); cita de Gardner "el mayor enemigo de la comprensión es la cobertura"; resultado empírico: unidad B.Ed., 82 estudiantes, >¾ por encima de conocimiento declarativo, atribuido al diseño. **Cautela:** Biggs (1996) **no menciona IA, ChatGPT ni ABET** — el puente es interpretación legítima del autor, no del paper.

En 1996, un psicólogo educativo australiano llamado John Biggs publicó una idea que hoy resuelve, sin saberlo, el problema que la IA generativa nos puso sobre la mesa.

La llamó "alineamiento constructivo". La tesis es de una simpleza incómoda: una asignatura funciona cuando tres cosas apuntan al mismo lugar —los resultados de aprendizaje, las actividades y la evaluación—. Si la evaluación pide menos de lo que el curso promete, el sistema se hunde hasta ese nivel más bajo. Biggs lo llamó *backwash*: no enseña el currículo, enseña el examen.

Y aquí está el puente con 2026. Lo que la IA resuelve trivialmente es justamente lo que Biggs ya consideraba mala evaluación en 1996: memorizar, parafrasear, cubrir contenido. Citaba a Gardner —"el mayor enemigo de la comprensión es la cobertura"—. Lo que la IA no puede falsear es lo que él llamaba *performances of understanding*: aplicar un principio en un contexto nuevo, decidir bajo incertidumbre, justificar un criterio.

El matiz honesto: el alineamiento constructivo no es un escudo anti-IA. Es trabajoso, su evidencia original es un solo curso de 82 estudiantes, y exige rediseñar tareas, no añadir un detector.

Para nosotros en ingeniería, la traducción es directa. Si nuestros *outcomes* —los de ABET, los de programa— hablan de diseñar, modelar, decidir, entonces evaluar con preguntas que una máquina contesta sola nunca fue un problema de IA. Fue siempre un problema de diseño.

La herramienta no aprueba ni reprueba a nadie. Lo hace el diseño que pusimos detrás.

Referencia: Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education, 32*, 347-364.

#EvaluaciónEnEducación #IAGenerativa #DiseñoInstruccional #EducaciónEnIngeniería #ABET

---

## Borrador G — Alfabetización en IA no es saber prompts

- **estado:** borrador
- **tema:** qué significa realmente "alfabetización en IA" (literacy vs competency) usando el marco HCAP de Chiu
- **fuente:** [[notes/papers/2026-01-15_hcap-marco-pedagogia-ia]] (Chiu 2026)
- **estructura/cierre:** desmonta un mito · cierra con reframe (sin pregunta)
- **Verificado:** marco HCAP (Human-Centric AI Pedagogy), 5 dominios (I-TK, I-CK, I-PK + Human-AI Collaboration y Ethics-K transversal); cada dominio en dos capas: *literacy* (conceptual) y *competency* (criterio práctico); ejemplo del calificador automático; AI literacy = 4 componentes (comprensión, aplicación, evaluación crítica, ética), el "uso" es solo uno; método Delphi 3 rondas, 30 docentes, 25 ítems. DOI 10.1080/10494820.2026.2615818, *Interactive Learning Environments*, autor único Thomas K. F. Chiu. **Cautela:** el paper es sobre **formación docente**, no estudiantes ni ABET; el puente es extrapolación del autor.

"Ellos ya saben usar IA, crecieron con la tecnología."

Lo escucho seguido en pasillos de ingeniería. Y es una media verdad peligrosa, porque confunde dos cosas distintas: saber *operar* una herramienta y saber *pensar* con ella.

Un marco reciente lo deja clarísimo. Thomas Chiu propone el marco HCAP (Human-Centric AI Pedagogy) y hace una distinción que debería estar en cada syllabus: la alfabetización en IA tiene una capa de *literacy* (entender qué es, qué la limita, sus sesgos) y otra de *competency* (el criterio para usarla bien). No son lo mismo.

Su ejemplo es perfecto para nosotros: un profesor con criterio "no solo usa un calificador automático de ensayos; evalúa sus criterios de calificación y lo calibra para su contexto". Esa segunda frase es la formación. La primera es apretar un botón.

Chiu organiza esto en cinco dominios —técnico, de contenido, pedagógico, de colaboración humano-IA y ético—, y coloca la ética como dominio transversal que gobierna a todos los demás. Saber detectar un sesgo, validar un output contra una fuente confiable, decidir cuándo NO usar el modelo: eso es competencia, no manejo.

El matiz honesto: el estudio es sobre formación docente, no sobre estudiantes. Trasladarlo a nuestras aulas de ingeniería es trabajo nuestro, no del paper.

Pero el puente es directo. Esto es exactamente lo que ABET nos pide formar: aprendizaje continuo, juicio ético, evaluación crítica.

Alfabetización en IA no es saber prompts. Es saber cuándo desconfiar de la respuesta.

Referencia: Chiu, T. K. F. (2026). Human-Centric Artificial Intelligence Pedagogy (HCAP) framework developed from TPACK through integration of artificial intelligence literacy and competency. *Interactive Learning Environments*. https://doi.org/10.1080/10494820.2026.2615818

#AlfabetizaciónEnIA #IngenieríaEducación #IAGenerativa #FormaciónDocente #ABET

---

## Borrador H — "La IA aprobó el examen": qué dicen los benchmarks de dominio

- **estado:** borrador
- **tema:** capacidades reales de la IA en problemas de ingeniería (no exámenes generales) según benchmarks de dominio
- **fuente:** [[notes/papers/2026-06-27_engibench-evaluacion-llms-ingenieria]] (Zhou et al. 2025) · [[notes/papers/2026-03-12_fermbench-benchmark-llms-fermentacion]] (Caccavale et al. 2026)
- **estructura/cierre:** data-forward · **cierra con pregunta** (el único de los 8 que la usa)
- **Verificado:** EngiBench → 16 LLMs zero-shot, 3 niveles; Nivel 3 (43 problemas abiertos): experto humano 8,74, mejores modelos ~7,0, ligeros <4,0; perturbación Nivel 2 cae 8,3–11,4% (Gemini 2.5 Flash solo −1,2%); Llama 4 saca 0 en decisión multiobjetivo vs 7,5 de GPT-4.1. FermBench → 118 preguntas, 5 chatbots, 9 expertos; Gemini 4,40, DeepSeek 4,27, ChatGPT 3,87 (Likert 1–5); ningún LLM significativamente mejor. **Cautela:** EngiBench es preprint arXiv (2509.17677); Nivel 1 reportado como rango 70–90% (no número limpio por modelo).

"La IA aprobó tal examen." Lo leemos cada semana. Pero un examen general no es un problema de ingeniería. Dos benchmarks de dominio acaban de mostrar la diferencia, y vale la pena mirar las cifras.

EngiBench evaluó 16 modelos en problemas reales de ingeniería, organizados por dificultad. En tareas de recuperar y aplicar una fórmula, casi todos rinden bien (70-90%). Pero en el Nivel 3 —problemas abiertos, con objetivos en conflicto e incertidumbre— el experto humano promedia 8,74, los mejores modelos rondan 7,0 y los ligeros caen por debajo de 4,0.

El dato que más me marca: con solo cambiar números y contexto de un problema (misma estructura), la exactitud de varios modelos cae entre 8% y 11%. Gemini 2.5 Flash, en cambio, solo baja 1,2%. Y en un caso de diseño, Llama 4 sacó 0 en decisión multiobjetivo por no analizar trade-offs, frente a 7,5 de GPT-4.1. Recuerdan fórmulas; no siempre razonan con ellas.

FermBench fue más amable: 118 preguntas de fermentación, 5 chatbots, 9 expertos. Gemini promedió 4,40 sobre 5; ningún modelo fue significativamente mejor que otro. El conocimiento base es sólido. Pero hubo respuestas conceptualmente incorrectas, y las respuestas curadas por expertos no siempre superaron a las generadas.

¿La lectura para mi curso de ingeniería química? A la IA le confío el andamiaje: recuperar fórmulas, redactar, explicar un fundamento. No le confío todavía el juicio: trade-offs, supuestos, robustez bajo incertidumbre. Ahí seguimos siendo nosotros.

Medir en el dominio cambia la conversación: ya no es "¿aprobó el examen?", sino "¿en qué parte del problema puedo soltarle la mano?".

¿Dónde trazan ustedes esa línea con sus estudiantes?

Referencias:
Zhou, X., Wang, X., He, Y., Wu, Y., Zou, R., Cheng, Y., Xie, Y., Liu, W., Zhao, H., Xu, Y., Gu, J., & Zhao, J. (2025). EngiBench: A Benchmark for Evaluating Large Language Models on Engineering Problem Solving. arXiv:2509.17677. https://arxiv.org/abs/2509.17677
Caccavale, F., Aouichaoui, A. R. N., Krühne, U., Gernaey, K. V., & Gargalo, C. L. (2026). FermBench: A new benchmark for measuring the capabilities of LLMs on fermentation knowledge. *Computers and Education: Artificial Intelligence*, 10, 100577. https://doi.org/10.1016/j.caeai.2026.100577

#IAGenerativa #IngenieríaQuímica #CapacidadesDeIA #EducaciónEnIngeniería #LLMs
