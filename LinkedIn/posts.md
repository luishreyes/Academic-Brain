# Registro de publicaciones de LinkedIn

Documento único que almacena **todas** las publicaciones de LinkedIn (redactadas, programadas o ya publicadas) con sus metadatos. A medida que se creen nuevas, se añaden aquí como una entrada más.

## Esquema de metadatos (por publicación)

Cada entrada usa estos campos:

| Campo | Significado |
|---|---|
| `id` | Identificador correlativo (`P001`, `P002`, …) |
| `estado` | `borrador` · `programado` · `publicado` |
| `fecha_programada` | Fecha y hora en que está programada en LinkedIn (con zona horaria) — vacío si no aplica |
| `fecha_publicacion` | Fecha real de publicación — vacío si aún no se publica |
| `url` | Enlace al post en LinkedIn — vacío hasta que se publica |
| `fuente` | Nota o boletín del vault del que proviene (ej. `Noticias/2026-06-29-boletin.md`) — vacío si es original |
| `fecha_creacion` | Fecha en que se redactó/aprobó el texto |
| `tags` | Temas/keywords libres para búsqueda |

**Estados:** `borrador` = redactado y en revisión · `programado` = aprobado y agendado en LinkedIn (clic en el reloj) · `publicado` = ya visible en el feed.

---

<!--
PLANTILLA — copiar para cada nueva publicación:

## P00X — Título corto

- **estado:** borrador
- **fecha_programada:**
- **fecha_publicacion:**
- **url:**
- **fuente:**
- **fecha_creacion:** YYYY-MM-DD
- **tags:** []

Texto del post tal como va (o fue) en LinkedIn.

---
-->

<!-- Las publicaciones se añadirán debajo de esta línea. -->

## P001 — IA, descarga cognitiva y el diseño de la consigna

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-15 01:23 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_ai-tools-in-society-activity-7472096494037217280-NNXF
- **fuente:** [[notes/papers/2025-01-03_ia-descarga-cognitiva-pensamiento-critico]] (Gerlich 2025) · [[notes/papers/2026-06-28_brain-on-chatgpt-deuda-cognitiva]] (Kosmyna 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [pensamiento-critico, descarga-cognitiva, ia-en-educacion, educacion-en-ingenieria, ia-generativa, diseno-de-evaluacion]

¿Y si la herramienta que promete potenciar el aprendizaje estuviera debilitando, en silencio, el músculo que más nos importa formar?

Vengo siguiendo la evidencia reciente sobre IA generativa y pensamiento crítico, y hay un patrón que ningún docente de ingeniería debería ignorar.

Un estudio con 666 participantes (Gerlich, 2025) encontró una asociación negativa entre el uso frecuente de IA y la capacidad de razonar críticamente. El mecanismo tiene nombre: descarga cognitiva. Delegamos el esfuerzo mental, y ese esfuerzo es justamente donde ocurre el aprendizaje. Un trabajo del MIT lo midió con electroencefalografía y observó menor conectividad cerebral en quienes escribían apoyados por el modelo.

Aclaro algo importante. Esa evidencia es correlacional y todavía discutida. No demuestra que la herramienta cause daño permanente.

Pero la lección pedagógica es clara y la asumo en mis cursos: el riesgo no vive en la IA, vive en el diseño de la actividad. Si la consigna permite entregar la respuesta de la máquina, el estudiante la entrega. Si la consigna exige justificar, refutar y reconstruir esa respuesta, la IA se vuelve un detonante del pensamiento y no un sustituto.

El verdadero rediseño curricular no consiste en prohibir, consiste en pedir aquello que la herramienta no puede hacer por nosotros.

¿Qué están haciendo ustedes para que sus estudiantes piensen con la IA y no en lugar de ella?

(Dejo las referencias en el primer comentario.)

#IAenEducación #IngenieríaEducación #PensamientoCrítico #EducaciónSuperior #IAGenerativa

**Primer comentario (referencias):**

Gerlich, M. (2025). AI Tools in Society: Impacts on Cognitive Offloading and the Future of Critical Thinking. Societies, 15(1), 6. https://doi.org/10.3390/soc15010006 (acceso abierto)

Kosmyna, N., Hauptmann, E., Yuan, Y. T., Situ, J., Liao, X. H., Beresnitzky, A. V., Braunstein, I., & Maes, P. (2025). Your Brain on ChatGPT: Accumulation of Cognitive Debt when Using an AI Assistant for Essay Writing Task. arXiv:2506.08872. https://arxiv.org/abs/2506.08872 (preprint)

Stanković, M., Hirche, E., Kollatzsch, S., & Doetsch, J. N. (2026). Comment on: Your Brain on ChatGPT. arXiv:2601.00856. https://arxiv.org/abs/2601.00856 (crítica metodológica)

---

## P002 — PO-PBL: el proyecto como evaluación resiliente a la IA

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-16 19:45 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_talk-is-cheap-activity-7472736235418128385-w2-C
- **fuente:** [[notes/papers/2025-05-15_evaluacion-estructural-genai]] (Corbin, Dawson & Liu 2025) · [[notes/papers/2025-01-11_po-pbl-operaciones-unitarias]] · [[notes/papers/2024-07-20_ia-catalizador-pbl-operaciones-unitarias]]
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [evaluacion-educativa, evaluacion-estructural, pbl, educacion-en-ingenieria, ingenieria-quimica, integridad-academica, ia-generativa, acreditacion-academica]

No diseñé mi curso para defenderme de la IA. Cuando llegó, me di cuenta de que ya estaba listo, y no por mérito mío.

Operaciones Unitarias se convirtió en Proyecto de Operaciones Unitarias en la reforma curricular de Ingeniería Química en los Andes. Aproveché ese cambio para montar el curso sobre PO-PBL: un proyecto que atraviesa las dieciséis semanas. Este semestre, una planta de alcohol por destilación con residuos colombianos. Café, piña, ñame, arroz de rechazo. El próximo será otro.

La teoría está, pero siempre aterriza en el proyecto. Los estudiantes aprenden haciendo, documentan en bitácoras, sustentan avances y cierran defendiendo un póster ante audiencia externa.

Corbin, Dawson y Liu (2025) separan los cambios discursivos en evaluación, que comunican reglas, de los estructurales, que rediseñan la tarea. Uso ambos. Tengo una escala de uso de IA por actividad y pido declaración en cada entrega. Pero eso es lo discursivo, y solo no aseguraría nada.

Lo que sostiene el aprendizaje es el proyecto. Una respuesta generada no aguanta una sustentación donde alguien repregunta.

Me queda una duda honesta sobre el origen de esa robustez. Tal vez no es el proyecto en sí. Tal vez es que cada semestre cambio el problema.

¿Ustedes rediseñaron sus tareas, o solo ajustaron las reglas alrededor de ellas?

(Referencia en el primer comentario.)

#EvaluaciónEnEducación #IngenieríaEducación #IAGenerativa #ABET

**Primer comentario (referencia):**

Corbin, T., Dawson, P., & Liu, D. (2025). Talk is cheap: why structural assessment changes are needed for a time of GenAI. Assessment & Evaluation in Higher Education, 50(7), 1087-1097. https://doi.org/10.1080/02602938.2025.2503964

---

## P003 — La IA no nivela, ensancha: equidad y la brecha que crece por debajo

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-19 14:15 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_equidadeducativa-ingenieraedaeducaciaejn-activity-7473740155930181632-Rz2p
- **fuente:** [[notes/papers/2025-10-06_danos-ia-educacion-programacion]] (Bernstein et al. 2025) · [[notes/papers/2024-08-13_widening-gap-ia-novatos]] (Prather et al. 2024)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [equidad-educativa, brecha-digital, educacion-en-programacion, educacion-en-ingenieria, ia-generativa, sobredependencia-de-la-ia, autorregulacion-del-aprendizaje, acreditacion-academica]

La promesa más repetida sobre la IA en educación es que democratiza el aprendizaje. La evidencia en ingeniería y computación apunta en la dirección contraria.

Una revisión sistemática reciente (Bernstein y colegas, 2025) filtró 1.677 estudios a 224 sobre ACM y IEEE, para mapear los daños del uso de IA generativa en la formación. Un patrón se repite.

La IA no nivela. Ensancha.

Los estudiantes que llegan con más base y mejor autorregulación sacan más provecho de la herramienta. Los que ya batallan se apoyan en ella, entregan algo decente y terminan con una ilusión de competencia, sin que la nota los delate (Prather y colegas, 2024). La brecha crece por debajo de la superficie.

En los cursos por proyectos y en equipo el riesgo es mayor, porque el grupo puede tapar al que se quedó atrás.

Hay que matizar. La evidencia sigue siendo limitada, con muchos estudios pequeños y escasos seguimientos a lo largo del tiempo. El efecto depende del andamiaje que demos y de cuánto enseñemos a usar la IA con criterio.

Una media que sube alcanza a esconder dos cosas a la vez: la aceleración para el fuerte y la erosión para el que se quedó.

Antes de celebrar que las notas subieron, mire quién subió y quién se quedó.

Referencias:
Bernstein, S., Rahman, A., Sharifi, N., Terbish, A., & MacNeil, S. (2025). Beyond the Benefits: A Systematic Review of the Harms and Consequences of Generative AI in Computing Education. Koli Calling '25. https://lnkd.in/d7urBFwN
Prather, J., et al. (2024). The widening gap: The benefits and harms of generative AI for novice programmers. ICER '24. https://lnkd.in/eaSMdxe2

#EquidadEducativa #IngenieríaEducación #IAGenerativa #InclusiónEducativa #ABET

---

## P004 — El tutor de IA de Harvard: el mérito era del diseño pedagógico

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-22 14:45 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_ai-tutoring-activity-7474834834264276992-kMK0
- **fuente:** [[notes/papers/2025-06-03_tutoria-ia-supera-aprendizaje-activo-rct]] (Kestin et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [tutoria-con-ia, ensayo-controlado-aleatorio, aprendizaje-activo, diseno-instruccional, educacion-en-ingenieria, ia-generativa, alucinaciones-de-ia, acreditacion-academica]

Un tutor de IA logró que estudiantes de física de Harvard aprendieran más del doble en menos tiempo que en una clase de aprendizaje activo bien diseñada. El titular es bien tentador. Pero la letra pequeña es lo que importa.

El estudio (Kestin y colegas, 2025, en Scientific Reports) es un experimento aleatorizado. Cerca de 194 estudiantes alternaron entre dos maneras de aprender el mismo tema: una sesión en clase con métodos activos y otra con un tutor de IA. Midieron el aprendizaje antes y después de cada sesión. Quienes usaron el tutor aprendieron más, en menos tiempo y se sintieron más motivados.

Aquí está la advertencia para quien quiera replicarlo. Ese tutor no era ChatGPT abierto. Era un sistema construido con el mismo diseño pedagógico de una buena clase: andamiaje paso a paso, pistas en lugar de respuestas servidas, frenos contra las alucinaciones. Esa ventaja pertenece a la pedagogía que le programaron adentro, no a la IA en sí.

Conviene mirar los límites. Población muy seleccionada, dos temas, intervención breve. Y los autores lo dicen sin ambigüedades: no proponen reemplazar al profesor.

Lo que me queda es simple: el aprendizaje vino del diseño pedagógico que vivía en el tutor, y ese diseño todavía hay que hacerlo a mano.

La IA se llevó el titular, pero el mérito era del diseño pedagógico que alguien había hecho antes.

Referencia:
Kestin, G., Miller, K., Klales, A., Milbourne, T., & Ponti, G. (2025). AI tutoring outperforms in-class active learning. Scientific Reports, 15, 17458. https://lnkd.in/ddPrcVnw

#IAGenerativa #IngenieríaEducación #DiseñoInstruccional #InnovaciónEducativa #ABET

---

## P005 — La firma de diseño: que la verificación nunca salga del estudiante

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-25 14:45 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_harnessing-generative-ai-in-chemical-engineering-activity-7475922003623993344-iiia
- **fuente:** [[notes/papers/2025-01-13_genai-ingenieria-quimica-laboratorio]] (Keith et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ingenieria-quimica, ia-generativa, educacion-en-ingenieria, diseno-instruccional, pensamiento-critico, supervision-humana, evaluacion-educativa, acreditacion-academica]

Hay una manera de usar la IA en ingeniería que construye criterio en lugar de erosionarlo. Tiene una firma de diseño y es más simple de lo que parece.

En los estudios de ingeniería química que reportan un beneficio real, todos siguen el mismo patrón. La IA genera el problema o actúa como interlocutor. El estudiante deriva, valida, critica y defiende la respuesta. La verificación nunca sale de sus manos.

Un ejemplo limpio es un laboratorio de primer año sobre el vaciado de un tanque (Keith y colegas, 2025). Los estudiantes usan la IA para derivar el modelo de drenaje y luego lo validan en el experimento y lo critican. Copiar a la máquina no sirve: si el modelo está mal, el agua del tanque lo delata.

La lógica se aplica a cualquier curso de diseño. Una sustentación oral, una bitácora que muestra el proceso, un balance que el estudiante tiene que defender, todo eso mantiene el pensamiento del lado correcto.

Para nuestra disciplina el matiz pesa. El modelo es fuerte recordando y flojo analizando y entrega números equivocados con total aplomo. Hacer que cada salida pase por la verificación del estudiante convierte esa debilidad en un ejercicio de criterio.

La misma herramienta, usada para entregar la solución, cae al lado contrario y desgasta lo que queríamos formar.

Cuando la IA responde en su curso, ¿qué le queda por pensar al estudiante?

Referencia: Keith, M., et al. (2025). Harnessing generative AI in chemical engineering education. Education for Chemical Engineers, 51, 20-33. https://lnkd.in/d9FpvAmG

#IngenieríaQuímica #IAGenerativa #IngenieríaEducación #DiseñoInstruccional #ABET

---

## P006 — Tutores de IA: ¿aciertan o enseñan? Sycophancy y seguridad pedagógica

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-27 02:53 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_iagenerativa-ingenieraedaeducaciaejn-tutoraedaconia-activity-7476467814569029632-COJD
- **fuente:** [[notes/papers/2026-03-18_safetutors-seguridad-pedagogica-ia]] (Hazra et al. 2026) · [[notes/papers/2026-05-14_sycophancy-tutores-llm-riesgo]] (Kasneci & Kasneci 2026) · [[notes/papers/2026-06-18_adaptive-prompting-tutoria-secundaria]] (Chang et al. 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [tutoria-con-ia, ia-generativa, seguridad-de-ia, alineamiento-de-ia, educacion-en-ingenieria, diseno-instruccional, capacidades-de-ia, acreditacion-academica]

La pregunta sobre tutores de IA dejó de ser si aciertan. Es si enseñan, y la evidencia reciente dice que un modelo servicial puede ser un mal profesor.

El benchmark SafeTutors (Hazra y colegas, 2026) evaluó once modelos en matemáticas, física y química, sobre una taxonomía de once dimensiones de daño y 48 subriesgos tomados de la ciencia del aprendizaje. El daño aquí no es la toxicidad que solemos asociar con los riesgos de la IA. Es algo más silencioso: revelar la respuesta en lugar de guiar, reforzar un error conceptual en vez de corregirlo, abandonar el acompañamiento apenas el estudiante presiona un poco. Daños que no se ven en una sola pregunta, pero que erosionan el aprendizaje con el uso.

El dato que importa aparece en la conversación larga, que es el escenario real de un estudiante. Las fallas pedagógicas saltan del 17,7% en un solo turno al 77,8% a lo largo del diálogo. Ningún modelo se salva, y escalar el tamaño no lo arregla. Una herramienta que parece segura en una prueba rápida puede fallar sistemáticamente cuando de verdad se usa.

Detrás de esto hay un nombre que vale la pena conocer: sycophancy, la complacencia del modelo. Es su tendencia a darnos la razón, a ablandar la corrección, a decir lo que queremos oír. Y es escurridiza justamente porque se siente bien. Un tutor que nos felicita y nos confirma resulta agradable, y rara vez sospechamos de algo que nos deja satisfechos. El problema es que aprender exige lo contrario: que alguien nos muestre el error que no queríamos ver.

Un position paper le pone mecanismo (Kasneci y Kasneci, 2026). Lo llaman la paradoja razonamiento-complacencia: un modelo puede resistir un argumento técnico sofisticado y, aun así, rendirse cuando el estudiante apela a la autoridad ("mis notas dicen que tengo razón") o al afecto ("por favor, no me digas que estoy equivocado"). La presión social derriba lo que la presión lógica no pudo. Así desaparece la fricción correctiva, esa incomodidad que un buen profesor sostiene cuando uno está equivocado y no quiere oírlo, y que es justo donde ocurre el aprendizaje.

Hay un primer camino de salida. Un equipo de Leiden (Chang y colegas, 2026) probó un sistema que detecta en tiempo real cómo va el estudiante y cambia de estrategia, de explicar a acompañar, en lugar de usar un prompt fijo. Lo desplegaron con 359 estudiantes de bachillerato. El sistema adaptativo sostuvo la calidad pedagógica con menos interacciones, una señal temprana de que la adaptación dinámica importa.

Para quienes ya llevamos estas herramientas al aula de ingeniería, la distinción no es teórica. Un tutor entrenado para agradar y uno entrenado para enseñar tiran en direcciones opuestas, y por ahora ganar lo primero cuesta lo segundo.

#IAGenerativa #IngenieríaEducación #TutoríaConIA #DiseñoInstruccional #ABET

Referencias:
Hazra, R., Ghuku, B., Marchenko, I., Tokarieva, Y., Layek, S., Banerjee, S., Stoyanovich, J., & Pechenizkiy, M. (2026). SafeTutors: Benchmarking Pedagogical Safety in AI Tutoring Systems. arXiv:2603.17373. https://arxiv.org/abs/2603.17373 (preprint)
Kasneci, E., & Kasneci, G. (2026). Sycophancy is an Educational Safety Risk: Why LLM Tutors Need Sycophancy Benchmarks. arXiv:2605.14604. https://arxiv.org/abs/2605.14604 (preprint)
Chang, P.-C., Hogan, N., Plaat, A., & van der Meer, M. T. (2026). Learning to Prompt: Improving Student Engagement with Adaptive LLM-based High-School Tutoring. arXiv:2606.20138. https://arxiv.org/abs/2606.20138 (preprint)

---

## P007 — Sin guardrails la IA daña el aprendizaje: el daño depende del diseño

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-28 14:30 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_genai-without-guardrails-activity-7477005403499814912-90yt
- **fuente:** [[notes/papers/2025-06-25_genai-sin-guardrails-puede-danar-aprendizaje]] (Bastani et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ia-generativa, diseno-instruccional, aprendizaje-activo, sobredependencia-de-la-ia, ensayo-controlado-aleatorio, educacion-k12, evaluacion-educativa, acreditacion-academica]

Un experimento preinscrito con cerca de mil estudiantes de secundaria deja una de las lecciones más claras que tenemos sobre IA y aprendizaje (Bastani y colegas, 2025).

Tres grupos al azar. Uno estudió con libros, otro con un chatbot abierto y otro con un tutor configurado para dar pistas, pero nunca la solución completa.

Mientras practicaban con la herramienta, ambos grupos con IA superaron al grupo de libros. El chatbot abierto rindió un 48% más; el tutor un 127%. Parecía que la IA ganaba sin discusión.

Entonces les quitaron la herramienta y les pusieron un examen sin asistencia. Ahí se vio la verdad. El grupo del chatbot abierto quedó cerca de un 17% por debajo del de libros. El grupo del tutor que retenía la respuesta quedó igual que el de los libros: el daño desapareció.

Hay un detalle inquietante. Los del chatbot abierto creían haber rendido mejor, cuando rindieron peor.

La conclusión va por otro lado. El daño depende del diseño y puede eliminarse deliberadamente. No hacer daño deja de ser un eslogan y pasa a ser una meta de ingeniería alcanzable.

Pruebe su tutor de IA con la misma vara del estudio: quíteselo al estudiante y vea qué sabe hacer sin él.

Referencia: Bastani, H., et al. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122, e2422633122. https://lnkd.in/d96H9Wwh

#IAGenerativa #IngenieríaEducación #DiseñoInstruccional #AprendizajeActivo #ABET

---

## P008 — La paradoja de integración curricular: formar docentes casi no mueve la aguja

- **estado:** publicado
- **fecha_programada:**
- **fecha_publicacion:** 2026-06-29 18:09 UTC (extraída del ID de actividad de LinkedIn)
- **url:** https://www.linkedin.com/posts/luishreyes_iagenerativa-educaciaejnsuperior-desarrollodocente-activity-7477422887520370688-Hyp4
- **fuente:** [[notes/papers/2026-03-23_genai-educacion-superior-revision-paradoja-integracion]] (Segura Altamirano et al. 2026) · [[Noticias/2026-06-29-boletin]] (boletín que lo discute)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ia-generativa, educacion-superior, formacion-docente, tpack, diseno-instruccional, revision-sistematica-de-literatura, adopcion-de-tecnologia]

Las universidades invierten en formar a sus profesores en IA. Esa inversión casi no se traduce en cambio pedagógico real.

Una revisión sistemática reciente (Segura Altamirano y colegas, 2026) sintetizó 125 estudios empíricos publicados entre 2020 y 2025, con metodología PRISMA y el marco TPACK. De ahí sale un hallazgo que los autores bautizan como la paradoja de integración curricular: la correlación entre el desarrollo docente y la integración de la IA en el currículo es de apenas r=0,12. Prácticamente nula.

Se capacita y se capacita, y el aula sigue casi igual.

El dato del lado estudiantil completa el cuadro. El 73% reporta uso ocasional de IA generativa, pero solo el 25% la usa de forma intensiva. Uso amplio, apropiación superficial. Muchos aceptan lo que el modelo entrega sin verificarlo.

La lectura cómoda sería culpar a la herramienta o a la falta de acceso. La revisión apunta a otro lado. El problema no es técnico. Los talleres enseñan a operar la herramienta, no a rediseñar qué se enseña y cómo se evalúa. Sin ese rediseño, la IA entra al aula y no cambia nada de fondo.

Conviene un matiz. La evidencia todavía es joven, con pocos ensayos controlados y casi ningún seguimiento en el tiempo, así que esto describe un patrón robusto, no una relación causal cerrada.

Aun así, el patrón incomoda. Si formar profesores no mueve la aguja, quizás los estamos formando en lo que no era.

#IAGenerativa #EducaciónSuperior #DesarrolloDocente #DiseñoInstruccional #TransformaciónPedagógica

Referencia:
Segura Altamirano, S. F., Maquen-Niño, G. L. E., Guzmán Roldán, C. M., Pérez Herrera, A., & Castro Cárdenas, D. M. (2026). Generative artificial intelligence in higher education: A systematic review of perceptions, implementation and pedagogical transformation. Review of Education, 14, e70152. https://doi.org/10.1002/rev3.70152

---

## P009 — Mimetismo cognitivo: dónde ayuda ChatGPT y dónde no (y por qué importa en procesos)

- **estado:** programado
- **fecha_programada:** 2026-07-02
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-02-05_chatgpt-bloom-ingenieria-quimica]] (Shahid & Walmsley 2026) · [[notes/papers/2024-01-18_chatgpt-potential-pitfalls-physics]] (Wang et al. 2024) · [[notes/papers/2024-05-09_genai-process-systems-engineering]] (Decardi-Nelson et al. 2024)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ingenieria-quimica, ia-generativa, seguridad-de-procesos, educacion-en-ingenieria, taxonomia-de-bloom, capacidades-de-ia, alucinaciones-de-ia, supervision-humana, pensamiento-critico, acreditacion-academica]

Le pidieron a ChatGPT resolver 110 problemas de ingeniería química, ordenados por nivel cognitivo (Shahid y Walmsley, 2026). El resultado dibuja con precisión dónde ayuda y dónde no.

La exactitud cayó de forma sostenida con la dificultad: 95% en recordar, 41% en crear. Fuerte en lo memorístico, débil justo en analizar y sintetizar, que es donde se forma el ingeniero. Los autores lo llaman mimetismo cognitivo, no comprensión.

Hay algo más serio para nuestra disciplina. En problemas mal especificados, similares a los reales, la exactitud de un modelo se derrumbó: 62% en los bien planteados, 8% en los mal definidos (Wang y colegas, 2024). Y los problemas de diseño en ingeniería química suelen estar mal especificados por naturaleza.

El verdadero riesgo está en la forma del error: números equivocados, bien formateados, presentados como correctos. En procesos, un valor alucinado que se cuela en una cadena de cálculo puede resultar fatal (Decardi-Nelson y colegas, 2024).

Por eso aquí la IA sirve como interfaz hacia herramientas validadas, no como motor de respuestas. Cada número pasa por la verificación del estudiante.

Formar un ingeniero hoy incluye enseñarlo a desconfiar del número que se ve bien.

Referencias:
Shahid, S., & Walmsley, S. (2026). Evaluating ChatGPT's cognitive performance in chemical engineering education. Information, 17, 162. https://lnkd.in/dN6X8CyT
Wang, K. D., Burkholder, E., Wieman, C., Salehi, S., & Haber, N. (2024). Examining the potential and pitfalls of ChatGPT in science and engineering problem-solving. Frontiers in Education, 8, 1330486. https://lnkd.in/efH2-ygV
Decardi-Nelson, B., Alshehri, A. S., Ajagekar, A., & You, F. (2024). Generative AI and process systems engineering: The next frontier. Computers & Chemical Engineering, 187, 108723. https://lnkd.in/eeYzJsSb

#IngenieríaQuímica #IAGenerativa #SeguridadDeProcesos #IngenieríaEducación #ABET

---

## P032 — Los matemáticos ya tienen el debate que a los ingenieros nos espera

- **estado:** programado
- **fecha_programada:** 2026-07-05
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/articles/2026-06-25_ia-matematicas-que-significa-ser-matematico]] (Skuse, IEEE Spectrum 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ia-generativa, capacidades-de-ia, razonamiento-cuantitativo-llm, descarga-cognitiva, pensamiento-critico, futuro-del-trabajo, educacion-en-ingenieria, epistemologia]

La IA sacó medalla de oro en la Olimpiada Internacional de Matemáticas. Un sistema de OpenAI refutó una conjetura de geometría combinatoria digna de una revista mayor. Y un agente llamado Gauss formalizó, casi solo y en dos semanas, la prueba de 24 dimensiones que le valió a Maryna Viazovska una Medalla Fields.

Uno esperaría que la comunidad matemática estuviera discutiendo cómo ganarle a la máquina. No es lo que pasa.

Un reportaje reciente de IEEE Spectrum recoge el debate real, y es otro: no "¿qué puede hacer la IA?", sino "¿para qué sirven las matemáticas si la respuesta deja de ser el problema?". Los matemáticos no defienden su velocidad ni su exactitud —ahí ya perdieron—. Defienden algo más difícil de automatizar: la comprensión.

La frase que me detuvo es de Maia Fraser, matemática y experta en machine learning. Que una conjetura pueda ser probada por una IA, dice, ya es información útil; pero sigue siendo un problema abierto encontrar una prueba humana, elegante y bella. Que la máquina tenga la respuesta no cierra la pregunta. Buscar entenderla sigue valiendo la pena.

Cambien "prueba" por "cálculo de diseño" y están hablando de nuestros cursos.

Cuando la IA entrega el número —el factor de fricción, el balance, el dimensionamiento—, lo que queda por enseñar no es el número. Es el porqué: si el estudiante puede reconstruirlo, defenderlo, saber cuándo desconfiar de él. Los matemáticos, en el dominio más abstracto que existe, llegaron a la misma conclusión que venimos rumiando en ingeniería: el valor nunca estuvo en tener la respuesta, sino en comprenderla.

Con una diferencia que a nosotros nos aprieta más. En matemáticas, una prueba que ningún humano entiende del todo sigue siendo, al menos, una curiosidad. En ingeniería, un número que nadie comprende no es un cálculo: es una apuesta con la seguridad de alguien.

Referencia: Skuse, B. (2026, 25 de junio). What it Means to Be a Mathematician When AI Does the Math. *IEEE Spectrum*. https://spectrum.ieee.org/ai-in-mathematics

#IAGenerativa #IngenieríaEducación #PensamientoCrítico #FuturoDelAprendizaje #ABET

---

## P010 — Los detectores de IA no deberían decidir: integridad en la tarea, no en la herramienta

- **estado:** programado
- **fecha_programada:** 2026-07-07
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2023-06-28_testing-detection-tools-ai-text]] (Weber-Wulff et al. 2023) · [[notes/papers/2026-06-28_confiabilidad-detectores-aigc-trabajo-academico]] (Sun et al. 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [integridad-academica, deteccion-de-texto-ia, ia-generativa, educacion-en-ingenieria, evaluacion-educativa, equidad-educativa, escritura-academica, acreditacion-academica]

Si su plan contra la IA es un detector, vale la pena revisar los números antes de confiar en él.

En una evaluación de catorce herramientas, ninguna superó el 80% de exactitud y, al usar paráfrasis, cayó al 15% (Weber-Wulff y colegas, 2023). Los autores fueron tajantes: no deberían usarse para decidir.

Un estudio más amplio lo confirmó en más de 280.000 trabajos reales de estudiantes (Sun y colegas, 2026). Los detectores quedaron cerca del azar en código, con falsos positivos por encima del 40% en textos cortos y hasta un 88% de evasión con una edición ligera.

El dato que más debería inquietarnos en ingeniería: los estudiantes que escriben de manera precisa y formulada, como se escribe en nuestra disciplina, son los que más riesgo corren de ser señalados por error. El falso positivo se concentra justo donde reside la escritura de ingeniería.

La salida está en otro lado: construir la integridad en la tarea. Evidencia de proceso, borradores, historial de versiones, entregas por etapas, defensa oral. El detector, a lo sumo, corrobora.

¿En qué parte de su evaluación copiar a la IA todavía rinde frutos?

Referencias:
Weber-Wulff, D., et al. (2023). Testing of detection tools for AI-generated text. International Journal for Educational Integrity, 19, 26. https://lnkd.in/dqakyjRs
Sun, Y., Liao, Y., & Ma, X. (2026). Trusting AI to detect AI? A systematic evaluation of the reliability and robustness of current AIGC detection tools for student academic work. Computers & Education, 249, 105616. https://lnkd.in/eZa95hWQ

#IntegridadAcadémica #IAGenerativa #IngenieríaEducación #EvaluaciónEnEducación #ABET

---

## P011 — Cuatro decisiones de diseño que distinguen a un tutor que enseña

- **estado:** programado
- **fecha_programada:** 2026-07-10
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2025-06-25_genai-sin-guardrails-puede-danar-aprendizaje]] (Bastani et al. 2025) · [[notes/papers/2026-06-28_metaclass-coaching-metacognitivo]] (Liu & Baraniuk 2026) · [[notes/papers/2025-12-04_reflection-satisfaction-tradeoff-hints-ia]] (Choi et al. 2025) · [[notes/papers/2026-06-28_ia-feedback-srl-meta-analisis]] (Huang et al. 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [tutoria-con-ia, diseno-instruccional, autorregulacion-del-aprendizaje, retroalimentacion-con-ia, sobredependencia-de-la-ia, descarga-cognitiva, ia-generativa, educacion-en-ingenieria, acreditacion-academica]

Por defecto, un modelo de lenguaje intenta dar una respuesta. Formar criterio exige pelear contra ese instinto. La investigación señala cuatro decisiones de diseño que distinguen a un tutor que enseña de uno que solo reemplaza.

1. Retener la respuesta como arquitectura y no como cortesía del prompt. Un chatbot sin frenos dejó a los estudiantes peor en el examen sin asistencia (Bastani y colegas, 2025).

2. Restricción y desvanecimiento del apoyo. Los modelos sobreayudan: el mejor eligió la jugada pedagógica correcta solo en el 43% de las veces, y cuando lo correcto era callar, callaron apenas en el 4% de las veces (Liu y Baraniuk, 2026).

3. Reflexión previa a la ayuda, en la fase de planificación. Pedir que el estudiante reflexione antes de recibir la pista mejora la calidad de esa reflexión, aunque disminuya su satisfacción (Choi y colegas, 2025).

4. Retroalimentación con andamiaje, no solo corrección. Acompañar el razonamiento rinde más que señalar el error (Huang y colegas, 2026).

Hay una trampa en todo esto. La métrica que no sirve para optimizar un tutor es la satisfacción del estudiante, porque los diseños que protegen el aprendizaje suelen percibirse como más incómodos. Y el aprendizaje es incómodo. Debe serlo.

Elija una de las cuatro y aplíquela en su próxima clase; las otras tres pueden esperar.

Referencias:
Bastani, H., et al. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. PNAS, 122, e2422633122. https://lnkd.in/d96H9Wwh
Liu, N., & Baraniuk, R. (2026). MetaCLASS: Metacognitive coaching for learning with adaptive self-regulation support. https://lnkd.in/dY9crgcP
Choi, H., Phung, T., Wu, M., Singla, A., & Brooks, C. (2025). Reflection-satisfaction tradeoff: Investigating impact of reflection on student engagement with AI-generated programming hints. https://lnkd.in/e9R_4XtZ
Huang, C. Q., et al. (2026). Effects of artificial intelligence feedback on students' self-regulated learning in higher education: A three-level meta-analysis. Educational Psychology Review, 38, 64. https://lnkd.in/eckn9GDN

#IAGenerativa #DiseñoInstruccional #IngenieríaEducación #TutoríaConIA #ABET

---

## P012 — La responsabilidad no se delega: verificar como deber profesional

- **estado:** programado
- **fecha_programada:** 2026-07-13
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/articles/2025-01-01_icheme-codigo-conducta-etica]] (IChemE 2025) · [[notes/articles/2026-02-01_nspe-declaracion-posicion-ia]] (NSPE 2026) · [[notes/articles/2024-07-18_asce-ps573-ia-responsabilidad-ingenieria]] (ASCE 2024)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [profesion-de-la-ingenieria, seguridad-de-procesos, etica-de-la-ia, ingenieria-quimica, ia-generativa, supervision-humana, regulacion-de-ia, acreditacion-academica, educacion-en-ingenieria]

Hay una diferencia incómoda entre usar IA para escribir un ensayo y usarla para dimensionar una válvula de alivio.

En muchas carreras, un error de la IA cuesta una nota. En ingeniería química, los cálculos alimentan el dimensionamiento de alivios, el HAZOP, el LOPA. Cadenas en las que un error que nadie detecta no se mide en puntos, sino en vidas.

La profesión empezó a nombrarlo. El código de conducta de IChemE (2025) exige a sus miembros que muestren cómo utilizaron la IA y qué controles de calidad y de seguridad aplicaron. La posición de la NSPE (2026) sostiene que quien supervisa IA con impacto en la seguridad responde al mismo estándar que el de una licencia profesional. La ASCE (2024) lo dice sin rodeos: la IA no puede asumir responsabilidad ni reemplazar el juicio de un ingeniero licenciado.

La responsabilidad es personal y no se delega. Un graduado que le entregó al chatbot la competencia de fondo no es un estudiante más flojo: es un problema de conducta profesional.

Por eso, enseñar a verificar pertenece a la formación profesional, no a la decoración pedagógica.

El estudiante que hoy le cree al chatbot sin verificar, mañana firma con su nombre lo que la máquina calculó.

Referencias:
Institution of Chemical Engineers (2025). Code of Conduct and Ethics. https://www.icheme.org
National Society of Professional Engineers (2026). Artificial Intelligence (Position Statement No. 03-1774). https://www.nspe.org
American Society of Civil Engineers (2024). Policy Statement 573: Artificial Intelligence and Engineering Responsibility. https://www.asce.org

#IngenieríaQuímica #SeguridadDeProcesos #IAGenerativa #ÉticaProfesional #ABET

---

## P013 — El vacío de la acreditación: ABET y EUR-ACE callan, los códigos profesionales no

- **estado:** programado
- **fecha_programada:** 2026-07-16
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/articles/2024-10-25_abet-eac-criterios-acreditacion-ingenieria-2025-2026]] (ABET Criteria 2025-2026) · [[notes/articles/2025-01-01_abet-acreditacion-inteligencia-artificial]] (ABET AI policy) · [[notes/articles/2021-01-01_eur-ace-marco-acreditacion-ingenieria]] (ENAEE EUR-ACE 2021) · [[notes/articles/2025-01-01_icheme-codigo-conducta-etica]] (IChemE 2025) · [[notes/articles/2026-02-01_nspe-declaracion-posicion-ia]] (NSPE 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [acreditacion-academica, profesion-de-la-ingenieria, educacion-en-ingenieria, ia-generativa, etica-de-la-ia, alfabetizacion-en-ia, ingenieria-quimica, regulacion-de-ia]

En los criterios de acreditación de ingeniería de ABET 2025-2026, la expresión inteligencia artificial no aparece ni una sola vez. Tampoco aparecen generativa ni aprendizaje de máquina. Los siete resultados de los estudiantes siguen siendo neutros respecto a la tecnología.

El marco europeo EUR-ACE guarda el mismo silencio. Y no es un descuido: en su declaración sobre IA, la propia ABET aclara que no prescribirá si las instituciones usan IA ni cómo hacerlo.

Mientras tanto, los códigos profesionales ya la nombran. El de IChemE (2025) exige documentar los controles de calidad y de seguridad al utilizarla. La NSPE (2026) responsabiliza, mediante un estándar de licencia, a quien supervisa la IA con impacto en la seguridad.

Queda un desajuste curioso. El graduado carga con una obligación de conducta profesional sobre el uso de IA, y el sistema que acredita su programa no dice una palabra sobre cómo enseñarla.

Ese vacío lo podemos llenar sin esperar criterios nuevos. Los resultados que ya tenemos alcanzan: resolver problemas como antídoto contra el traslado del pensamiento; diseño y seguridad como verificación; ética como transparencia; aprendizaje continuo como alfabetización en IA.

¿Cuál de sus siete resultados de programa ya le exige enseñar a usar la IA con criterio?

Referencias:
ABET (2025). Criteria for Accrediting Engineering Programs, 2025-2026. https://www.abet.org
ABET (2025). Accreditation and Artificial Intelligence (declaración de política). https://lnkd.in/etiWmKiB
ENAEE (2021). EUR-ACE Framework Standards and Guidelines. https://www.enaee.eu
Institution of Chemical Engineers (2025). Code of Conduct and Ethics. https://www.icheme.org
National Society of Professional Engineers (2026). Artificial Intelligence (Position Statement No. 03-1774). https://www.nspe.org

#ABET #IngenieríaEducación #IAGenerativa #Acreditación #IngenieríaQuímica

---

## P014 — El mapa de capacidades cambia cada mes; el diseño que protege el juicio permanece

- **estado:** programado
- **fecha_programada:** 2026-07-19
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/articles/2025-04-16_openai-o3-o4-mini-system-card]] (OpenAI 2025) · [[notes/articles/2025-04-07_ai-index-2025-rendimiento-tecnico]] (Stanford HAI AI Index 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [capacidades-de-ia, ia-generativa, diseno-instruccional, tutoria-con-ia, alucinaciones-de-ia, supervision-humana, pensamiento-critico, educacion-en-ingenieria, acreditacion-academica]

Hace un año, un modelo de frontera rondaba el 12% de exactitud en matemáticas de competencia. Hoy supera el 90% (OpenAI, 2025). El AI Index de Stanford (2025) documenta ese mismo ritmo en varios frentes. Cualquier afirmación sobre lo que la IA no puede hacer tiene fecha de vencimiento.

Eso desplaza la pregunta a otro lugar: ¿qué decisiones de diseño nuestras siguen en pie cuando la herramienta puede más?

Algunas son robustas. Retener la respuesta y pedir reflexión protegen el pensamiento del estudiante por más capaz que sea el modelo.

Otras son frágiles. La restricción cuidadosamente diseñada puede volverse innecesaria si los modelos la incorporan por sí mismos. Y aparece un riesgo nuevo: un tutor que retiene la respuesta con elegancia, pero suelta una pista termodinámica sutilmente equivocada, resulta más peligroso que uno que responde de frente.

Hay algo que no desaparece cuando los modelos mejoran. El error con aplomo no se va; se concentra en fallas más raras y de mayor consecuencia. Un modelo acertado el 99% de las veces que se equivoca en el cálculo crítico número cien es más peligroso que uno obviamente malo, porque ya le enseñó al estudiante a confiar.

Por eso conviene apostarle a lo que protege el juicio del estudiante y no al mapa de capacidades de este mes, que ya estará vencido cuando termine de leer esta frase.

Referencias:
OpenAI (2025). Introducing OpenAI o3 and o4-mini (informe técnico). https://openai.com
Stanford Institute for Human-Centered AI (2025). Artificial Intelligence Index Report 2025. https://lnkd.in/eDWT9WfW

#IAGenerativa #IngenieríaEducación #FuturoDelAprendizaje #DiseñoInstruccional #ABET

---

## P015 — La adopción rebasó a la pedagogía: reforma de la evaluación por disciplina

- **estado:** programado
- **fecha_programada:** 2026-07-22
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-05-21_genai-misuse-assessment-reform]] (Chirikov, Smirnov & Kizilcec 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ia-generativa, evaluacion-educativa, educacion-superior, adopcion-de-tecnologia, integridad-academica, educacion-en-ingenieria, evaluacion-estructural, acreditacion-academica]

Una encuesta a más de 95.000 estudiantes de veinte universidades públicas de investigación arroja un dato difícil de ignorar (Chirikov y colegas, 2026). Cerca de dos tercios ya usan IA generativa y un 37% la usa con frecuencia.

La adopción rebasó a la pedagogía. Los estudiantes llegaron antes que nuestras decisiones de diseño.

Hay un matiz que cambia el debate. El uso y el mal uso varían muchísimo por disciplina: en computación la usa con frecuencia el 62%, en artes el 24%. Tratar el problema con una única regla para toda la universidad ignora esa diferencia.

Por eso los autores no piden prohibiciones generales ni detectores universales. Solicitan una reforma de la evaluación específica por disciplina.

En ingeniería química el mal uso no se parece al de humanidades, y las tareas tampoco. La respuesta tiene que salir de la disciplina, no de una circular general.

No espere a la política de la universidad; rediseñe una evaluación de su curso para este semestre.

Referencia:
Chirikov, I., Smirnov, I., & Kizilcec, R. F. (2026). Generative AI use and misuse call for assessment reform in higher education. Science, 392, 818-820. https://lnkd.in/e7-mU9is

#IAGenerativa #IngenieríaEducación #EvaluaciónEnEducación #EducaciónSuperior #ABET

---

## P016 — No es cuánta IA, sino qué función cognitiva se cede

- **estado:** programado
- **fecha_programada:** 2026-07-25
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2024-05-13_impacto-llm-educacion-programacion]] (Joŝt, Taneski & Karakatič 2024)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [educacion-en-programacion, ia-generativa, descarga-cognitiva, sobredependencia-de-la-ia, diseno-instruccional, pensamiento-critico, supervision-humana, educacion-en-ingenieria, acreditacion-academica]

Medir cuánta IA usan los estudiantes dice poco. Lo que de verdad pesa es qué parte del trabajo le entregan.

Un estudio en un curso de programación lo muestra con claridad (Joŝt y colegas, 2024). Cuanto más usaban el modelo para generar código y depurarlo, peores eran sus notas finales. La correlación fue clara y significativa.

Pero hubo una excepción importante. Usar el modelo para pedir explicaciones y entender conceptos no se asoció con peores resultados.

La línea divisoria la marca la función cognitiva que se cede, no la herramienta. Delegar la producción y la verificación hizo daño; delegar la comprensión, no.

El estudio es pequeño y correlacional, así que conviene leerlo como señal y no como ley. Aun así, la señal coincide con lo que muestran experimentos más sólidos.

Para nuestros cursos, la tarea es definir, tarea por tarea, qué pensamiento debe quedar del lado del estudiante, sin necesidad de prohibir la herramienta.

¿Sabe en qué partes de su curso los estudiantes están delegando justo el trabajo que debían aprender a hacer?

Referencia:
Joŝt, G., Taneski, V., & Karakatič, S. (2024). The impact of large language models on programming education and student learning outcomes. Applied Sciences, 14, 4115. https://lnkd.in/emZV9igm (acceso abierto)

#IAGenerativa #IngenieríaEducación #DiseñoInstruccional #AprendizajeActivo #ABET

---

## P017 — Descualificar o elevar: el propósito de uso decide, no la cantidad

- **estado:** programado
- **fecha_programada:** 2026-07-28
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-06-28_deskilling-reskilling-upskilling-ia-generativa]] (Yang, Sun, Zeng & Li 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ia-generativa, sobredependencia-de-la-ia, futuro-del-trabajo, diseno-instruccional, descarga-cognitiva, educacion-en-ingenieria, pensamiento-critico, acreditacion-academica]

¿La IA va a descualificar a sus estudiantes? Depende y depende de algo que el diseño del curso puede controlar.

Un trabajo con tres estudios encadenados lo separa con cuidado (Yang y colegas, 2026). La dependencia de la IA, por sí sola, predice la pérdida de habilidades. Hasta ahí, la versión pesimista.

Pero el modo de uso cambia el destino. Si la IA sustituye el trabajo del estudiante, es grave. Si lo provoca y lo acompaña, recalifica y eleva las habilidades sin una pérdida significativa.

Lo notable es que el nivel de dependencia puede ser el mismo en ambos casos. Lo que separa el deterioro del crecimiento es el propósito de su uso, no su cantidad.

El resultado depende de cómo pedimos usar la herramienta, más que de la herramienta en sí o de su uso.

Un curso que deja a la IA hacer el trabajo forma graduados más débiles; uno que la usa para empujar el pensamiento, más fuertes. La misma tecnología, dos trayectorias opuestas, y entre una y otra no hay un modelo mejor: hay una consigna mejor.

Referencia:
Yang, B., Sun, Y., Zeng, Z., & Li, Q. (2026). Deskilling, reskilling, or upskilling? Unpacking the pathways of student adaptation to generative artificial intelligence. International Journal of Information Management, 87, 103002. https://lnkd.in/eHw-82kp

#IAGenerativa #IngenieríaEducación #FuturoDelTrabajo #DiseñoInstruccional #ABET

---

## P018 — Que el modelo no haga la aritmética: IA como orquestadora de solvers

- **estado:** programado
- **fecha_programada:** 2026-07-31
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-01-08_llm-ecuaciones-ingenieria]] (Kodathala & Vunnam 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ingenieria-quimica, ia-generativa, razonamiento-cuantitativo-llm, capacidades-de-ia, alucinaciones-de-ia, diseno-instruccional, seguridad-de-procesos, educacion-en-ingenieria, acreditacion-academica]

La IA se equivoca en los números, justo en los cálculos que más importan en ingeniería. Existe una forma directa de contenerlo: que el modelo no haga la aritmética.

El modelo plantea las ecuaciones y un solver numérico clásico realiza el cálculo.

En cien problemas de ingeniería con cálculo iterativo, incluido el factor de fricción, esa división del trabajo redujo el error promedio entre un 68% y un 82% frente a pedirle directamente el número al modelo (Kodathala y Vunnam, 2026). Los autores lo resumen bien: los modelos brillan en manipular símbolos y recuperar conocimiento, pero fallan en la aritmética iterativa de alta precisión.

Conviene enseñar la IA como orquestadora de herramientas validadas, no como un motor de respuestas. Que formule, que estructure, que explique y que el cálculo crítico viva en una herramienta que sí calcula bien.

Vale señalar un límite: en problemas sencillos, donde el reconocimiento de patrones ya bastaba, la ganancia fue mínima. La técnica suma donde la precisión iterativa importa, lo cual en nuestra disciplina es casi todo.

El modelo razona en símbolos y tropieza con la aritmética; el diseño sensato lo deja en lo que hace bien.

Piensen en pregrado vs. posgrado.

Referencia:
Kodathala, S. V., & Vunnam, R. (2026). Can large language models solve engineering equations? A systematic comparison of direct prediction and solver-assisted approaches. arXiv:2601.01774. https://lnkd.in/et-azcQC

#IngenieríaQuímica #IAGenerativa #DiseñoInstruccional #SeguridadDeProcesos #ABET

---

## P019 — Los ceros importan: la etiqueta "tutor" no hace el andamiaje

- **estado:** programado
- **fecha_programada:** 2026-08-03
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-01-15_autorregulacion-genai-rct-k12]] (Fütterer et al. 2026) · [[notes/papers/2025-12-15_socratic-ai-k12-ciencias-rct]] (Kao et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [tutoria-con-ia, autorregulacion-del-aprendizaje, diseno-instruccional, ensayo-controlado-aleatorio, ia-generativa, pensamiento-critico, educacion-k12, educacion-en-ingenieria, acreditacion-academica]

Agregar funciones de IA a un curso no garantiza nada. A veces no produce ningún efecto, y ese resultado vacío revela más de lo que parece.

Un experimento controlado con 371 estudiantes evaluó apoyos de IA diseñados para fortalecer la autorregulación frente a un grupo que usaba un chatbot estándar (Fütterer y colegas, 2026). El resultado fue un cero limpio. Ninguna ventaja en esfuerzo, en conocimiento ni en estrategias de estudio.

Otro estudio, con un tutor socrático, logró mejoras en la argumentación y el pensamiento crítico, pero no en la autorregulación (Kao y colegas, 2025).

¿Por qué importan los ceros? Porque desmontan la idea de que basta con la etiqueta. Poner la palabra «tutor» encima de un chatbot o pegarle indicaciones de autorregulación no hace el trabajo. Lo que mueve la aguja es la profundidad del diseño: retener la respuesta, forzar el esfuerzo, desvanecer la ayuda y, sobre todo, nuestra experiencia como docentes.

Antes de comprar una herramienta que dice ser un tutor, conviene preguntar qué hace por dentro.

La intención de andamiar y el andamiaje real son cosas distintas.

¿Qué evidencia le pediría a un proveedor antes de creerle que su herramienta es un tutor?

Referencias:
Fütterer, T., Bardach, L., Kuhn, J., Keller, S. D., & Gerjets, P. (2026). Enhancing school students' self-regulated learning through generative AI support: A randomized controlled trial. Educational Psychology Review, 38, 42. https://lnkd.in/enUTsV9N
Kao, S., Grant, P., & Woltering, S. (2025). Socratic AI in K-12 science classrooms: Effects on critical thinking, motivation, and self-regulation in a randomized controlled trial. Research Square. https://lnkd.in/e5qRMGU6

#IAGenerativa #DiseñoInstruccional #IngenieríaEducación #TutoríaConIA #ABET

---

## P020 — La casilla no produce honestidad: la transparencia se diseña con confianza

- **estado:** programado
- **fecha_programada:** 2026-08-06
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2024-10-20_no-cumplimiento-declaraciones-ia]] (Gonsalves 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [integridad-academica, ia-generativa, evaluacion-educativa, etica-de-la-ia, educacion-superior, educacion-en-ingenieria, confianza-en-la-ia, acreditacion-academica]

El 79% de los estudiantes usó IA. El 74% no lo declaró. Y había una casilla obligatoria para hacerlo.

Ese contraste proviene de un estudio realizado en una escuela de negocios (Gonsalves, 2025) y debería hacernos dudar de una solución muy popular: la declaración obligatoria del uso de la IA en cada entrega.

La casilla por sí sola no produce honestidad. Los estudiantes callaron por miedo a ser sancionados, por la ambigüedad sobre qué se consideraba uso indebido, por las reglas que cada profesor aplicaba de manera distinta y por lo que hacían sus compañeros.

La declaración funciona, pero solo dentro de una cultura que la sostenga. Reglas claras, parejas y no punitivas. Un ambiente donde declarar el uso no se sienta como una confesión que perjudica a quien la hace.

Esto importa para nuestros cursos. Pedir una declaración de uso de IA es razonable. Pero si la convertimos en una trampa, el estudiante aprende a esconderse, no a ser transparente.

La transparencia se diseña con confianza, no se exige con un formato. La casilla pregunta; la cultura es la que responde.

Referencia:
Gonsalves, C. (2025). Addressing student non-compliance in AI use declarations: implications for academic integrity and assessment in higher education. Assessment and Evaluation in Higher Education, 50, 592-606. https://lnkd.in/eU7pVZH5

#IntegridadAcadémica #IAGenerativa #IngenieríaEducación #EvaluaciónEnEducación #ABET

---

## P021 — El prompting no se asume, se enseña y se evalúa

- **estado:** programado
- **fecha_programada:** 2026-08-09
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2024-07-01_prompting-quimica-preservice]] (Tassoti 2024)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [alfabetizacion-en-ia, ingenieria-de-prompts, ia-generativa, ingenieria-quimica, educacion-en-ingenieria, confianza-en-la-ia, pensamiento-critico, evaluacion-educativa, acreditacion-academica]

Los estudiantes calificaron el 75% de sus prompts como específicos. Los evaluadores, solo el 15%.

Esa brecha, según un estudio sobre educación en química (Tassoti, 2024), desmonta un supuesto cómodo: que los jóvenes ya saben usar la IA porque crecieron con la tecnología.

Saber abrir una herramienta no es saber interrogarla. Escribir un buen prompt exige precisión, contexto y criterio para evaluar lo que devuelve, y eso es justo lo que falta cuando el estudiante sobrestima su propia habilidad.

El riesgo es doble. Un prompt pobre produce una respuesta pobre y un estudiante convencido de que lo hizo bien no la cuestiona. La confianza mal calibrada apaga la verificación.

El prompting no se asume, se enseña y se evalúa, igual que enseñamos a plantear un balance o a leer un diagrama. Mostrar ejemplos buenos y malos, pedir que justifiquen sus prompts, calificar la calidad de la pregunta y no solo del resultado.

Tratar la alfabetización en IA como algo que ya traen puesto deja un vacío justo donde más criterio se necesita.

¿Cuándo calificó por última vez la calidad de un prompt y no solo la respuesta?

Referencia:
Tassoti, S. (2024). Assessment of students' use of generative artificial intelligence: Prompting strategies and prompt engineering in chemistry education. Journal of Chemical Education, 101, 2475-2482. https://lnkd.in/esuYJke8

#IAGenerativa #AlfabetizaciónEnIA #IngenieríaEducación #IngenieríaQuímica #ABET

---

## P022 — Problemas encadenados y defensa oral: evaluación que la IA no infla

- **estado:** programado
- **fecha_programada:** 2026-08-12
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-01-21_evaluaciones-resilientes-ia-problemas-interconectados]] (Ding 2026) · [[notes/papers/2026-03-14_evaluacion-resiliente-ia-examenes-verbales]] (Perkins 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [evaluacion-educativa, evaluacion-estructural, ia-generativa, ingenieria-quimica, integridad-academica, educacion-en-ingenieria, pensamiento-critico, acreditacion-academica]

Hay una forma de evaluación que la IA no infla con facilidad: los problemas encadenados.

Un estudio comparó tareas modulares, sueltas, con problemas en los que cada paso alimenta al siguiente (Ding, 2026). En las modulares, la IA infló las notas al 90-100%. Esa inflación cayó en cerca de 30 puntos en el examen vigilado. Los problemas encadenados, en cambio, conservaron su validez: medían de verdad lo que decían medir.

La razón es intuitiva. Una tarea aislada se resuelve con un prompt. Una cadena en la que un error temprano se propaga obliga a entender el conjunto.

La cadena de ingeniería química ya tiene esa forma. Balance de masa que alimenta el balance de energía, que alimenta el dimensionamiento de equipos, que alimenta la economía. Encadenar esos pasos en una sola evaluación resiste mejor a la IA que ocho ejercicios sueltos y se parece más al trabajo real.

A eso se suma la jugada más fuerte de todas: la evaluación oral. Defender una solución frente a quien repregunta asegura la comprensión y fomenta la comunicación profesional al mismo tiempo (Perkins, 2026).

La cadena y la defensa oral no exigen tecnología nueva, solo rediseñar la tarea.

Un examen que se aprueba con buenos prompts y sin entender el conjunto no estaba midiendo ingeniería.

Referencias:
Ding, K. (2026). Designing AI-resilient assessments using interconnected problems: A theoretically grounded and empirically validated framework. arXiv:2512.10758. https://lnkd.in/e_aw79ES
Perkins, G. (2026). Resilient assessment in the age of AI: authentic design and the case for verbal examinations in business education. Assessment and Evaluation in Higher Education. https://lnkd.in/efidsS93

#IngenieríaQuímica #EvaluaciónEnEducación #IAGenerativa #DiseñoInstruccional #ABET

---

## P023 — El paciente virtual es un cliente virtual: simulación para habilidades blandas

- **estado:** programado
- **fecha_programada:** 2026-08-15
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-06-30_pacientes-virtuales-ia-comunicacion-odontologica]] (Xie et al. 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [pacientes-virtuales, educacion-medica, ia-generativa, agentes-de-ia, educacion-en-ingenieria, diseno-instruccional, aprendizaje-activo, acreditacion-academica]

Un paper de educación médica publicado en mayo (Xie et al., Chongqing, odontología) probó una idea simple: usar un agente de IA que simula pacientes para que los estudiantes practiquen comunicación clínica. El agente se construyó sobre DeepSeek. Con 38 estudiantes repartidos en grupo experimental y control, la mejora en las puntuaciones de consulta simulada fue estadísticamente significativa (p < 0,001), con ganancias especialmente marcadas en la fase de preparación y en el cierre de la consulta.

Conviene leerlo con cautela. Es un estudio exploratorio, de un solo centro, con una muestra pequeña y un solo evaluador, así que estima un tamaño de efecto, no cierra una relación causal. Aun así, el patrón es claro y los autores lo reconocen.

Lo que hace relevante esta línea para la ingeniería no es el contenido (comunicación médico-paciente) sino la arquitectura pedagógica: un entorno donde el error no tiene consecuencias reales, donde el estudiante repite el escenario tantas veces como necesite y donde la retroalimentación es inmediata. En formación de ingenieros, los laboratorios virtuales llevan años cumpliendo esa función para lo técnico.

La pregunta que abre la IA conversacional es si el mismo principio sirve para las habilidades que los perfiles de egreso siempre declaran y rara vez entrenan con la intensidad del cálculo o la termodinámica: comunicación con clientes, negociación de requisitos, presentación de resultados ante audiencias no técnicas. Un paciente virtual es, al final, un cliente virtual con otro nombre.

Referencia:
Xie, Y., Ou, Z., Huang, Y., Huang, H., Ran, X., Dai, H., Huang, B., & Shu, L. (2026). An exploratory study of the use of artificial intelligence-based virtual patients to enhance dentist-patient communication training. BMC Medical Education. https://lnkd.in/eMRugDim

#IAGenerativa #EducaciónEnIngeniería #HabilidadesBlandas #AprendizajeBasadoEnSimulación #DiseñoInstruccional

---

## P024 — El lado que no medimos: bienestar del estudiante

- **estado:** programado
- **fecha_programada:** 2026-08-18
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-06-28_chatgpt-educacion-superior-aprendizaje-bienestar]] (Abdallah et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [bienestar-academico, ia-generativa, educacion-superior, motivacion-y-compromiso-estudiantil, revision-sistematica-de-literatura, formacion-docente, educacion-en-ingenieria, etica-de-la-ia]

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

## P025 — La mirada de silicio: el sesgo geográfico de los LLM

- **estado:** programado
- **fecha_programada:** 2026-08-21
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-06-28_silicon-gaze-sesgos-llm-lugar]] (Kerche, Zook & Graham 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [sesgo-algoritmico, ia-generativa, equidad-educativa, brecha-digital, procesamiento-de-lenguaje-natural, etica-de-la-ia, educacion-superior]

Decimos que la IA "democratiza el conocimiento". Pero democratizar y homogeneizar no son lo mismo, y un paper recién salido en *Platforms & Society* sugiere que a veces hacemos lo segundo creyendo que hacemos lo primero.

Kerche, Zook y Graham auditaron ChatGPT con 20,3 millones de consultas (marzo–mayo 2025): 311 comparaciones del tipo "¿qué país es más inteligente, Alemania o Brasil?", a escala de países, estados, ciudades y barrios. Lo que encontraron no es ruido aleatorio: es una "mirada de silicio" que ilumina el Norte Global y deja al Sur en penumbra.

Tres hallazgos me detuvieron. Dentro de Brasil, al preguntar "dónde es más inteligente", el modelo premia a São Paulo y Minas Gerais y hunde a Amazonas y Maranhão; los autores lo leen sobre líneas raciales y de ingreso. El "espíritu emprendedor" se reduce a densidad de capital de riesgo: Estados Unidos e Israel ganan, y la economía informal latinoamericana, sencillamente, no existe para la métrica. Y citan que el 93% del entrenamiento de los GPT previos fue en inglés: lo no documentado en inglés se vuelve invisible.

Un matiz que los propios autores subrayan, y que importa: usaron prompts de elección forzada y solo inglés, y su lectura es interpretativa, no una correlación estadística. No miden "cuánto" sesgo hay; muestran su mecánica.

Para quienes formamos ingenieros, la lección es sobre el origen del dato. Cuando un estudiante en Bogotá le pregunta a un modelo dónde se hace mejor ingeniería, no recibe un mapa del mundo. Recibe un mapa de quién quedó escrito en los datos.

La frase del paper que se me quedó: el modelo ve más a Zúrich que a Zanzíbar, y conoce mejor los callejones de Silicon Valley que las cuadras de Lagos. No es que mienta. Es que mira hacia otro lado, y nosotros confundimos su silencio con neutralidad.

Referencia: Kerche, F. W., Zook, M., & Graham, M. (2026). The silicon gaze: A typology of biases and inequality in LLMs through the lens of place. *Platforms & Society*, 3, 1-20. https://doi.org/10.1177/29768624251408919

#IAGenerativa #EquidadEducativa #IAenEducación #SurGlobal #IngenieríaQuímica

---

## P026 — Qué hicieron de verdad mis colegas con la IA (montaje de casos)

- **estado:** programado
- **fecha_programada:** 2026-08-24
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2023-09-27_chatgpt-diseno-columnas-destilacion]] (Kong et al. 2023) · [[notes/papers/2026-01-07_automatizar-excel-genai-transferencia-masa]] (García-Morales 2026) · [[notes/papers/2026-06-27_capchat-genai-capstone]] (Farahmand & Mathapathi 2025) · [[notes/papers/2026-06-27_superstudent-llm-termodinamica]] (Loubet et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ingenieria-quimica, ia-generativa, diseno-instruccional, educacion-en-ingenieria, evaluacion-educativa, supervision-humana, acreditacion-academica]

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

## P027 — Un agente de IA que no calcula nada

- **estado:** programado
- **fecha_programada:** 2026-08-27
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-05-12_llm-agent-simulaciones-procesos-quimicos]] (Liang, Groll & Sin 2026) · [[notes/papers/2024-05-09_genai-process-systems-engineering]] (Decardi-Nelson et al. 2024)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [ingenieria-quimica, ia-generativa, agentes-de-ia, simulacion-computacional, seguridad-de-procesos, supervision-humana, alucinaciones-de-ia, diseno-instruccional]

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

## P028 — Una idea de 1996 que resuelve el problema de la IA en evaluación

- **estado:** programado
- **fecha_programada:** 2026-08-30
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/1996-01-01_enhancing-teaching-constructive-alignment]] (Biggs 1996)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [evaluacion-educativa, evaluacion-estructural, ia-generativa, diseno-instruccional, educacion-en-ingenieria, acreditacion-academica, pensamiento-critico]

En 1996, un psicólogo educativo australiano llamado John Biggs publicó una idea que hoy resuelve, sin saberlo, el problema que la IA generativa nos puso sobre la mesa.

La llamó "alineamiento constructivo". La tesis es de una simpleza incómoda: una asignatura funciona cuando tres cosas apuntan al mismo lugar —los resultados de aprendizaje, las actividades y la evaluación—. Si la evaluación pide menos de lo que el curso promete, el sistema se hunde hasta ese nivel más bajo. Biggs lo llamó *backwash*: no enseña el currículo, enseña el examen.

Y aquí está el puente con 2026. Lo que la IA resuelve trivialmente es justamente lo que Biggs ya consideraba mala evaluación en 1996: memorizar, parafrasear, cubrir contenido. Citaba a Gardner —"el mayor enemigo de la comprensión es la cobertura"—. Lo que la IA no puede falsear es lo que él llamaba *performances of understanding*: aplicar un principio en un contexto nuevo, decidir bajo incertidumbre, justificar un criterio.

El matiz honesto: el alineamiento constructivo no es un escudo anti-IA. Es trabajoso, su evidencia original es un solo curso de 82 estudiantes, y exige rediseñar tareas, no añadir un detector.

Para nosotros en ingeniería, la traducción es directa. Si nuestros *outcomes* —los de ABET, los de programa— hablan de diseñar, modelar, decidir, entonces evaluar con preguntas que una máquina contesta sola nunca fue un problema de IA. Fue siempre un problema de diseño.

La herramienta no aprueba ni reprueba a nadie. Lo hace el diseño que pusimos detrás.

Referencia: Biggs, J. (1996). Enhancing teaching through constructive alignment. *Higher Education, 32*, 347-364.

#EvaluaciónEnEducación #IAGenerativa #DiseñoInstruccional #EducaciónEnIngeniería #ABET

---

## P029 — Alfabetización en IA no es saber prompts

- **estado:** programado
- **fecha_programada:** 2026-09-02
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-01-15_hcap-marco-pedagogia-ia]] (Chiu 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [alfabetizacion-en-ia, tpack, formacion-docente, ia-generativa, etica-de-la-ia, educacion-en-ingenieria, acreditacion-academica]

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

## P030 — "La IA aprobó el examen": qué dicen los benchmarks de dominio

- **estado:** programado
- **fecha_programada:** 2026-09-05
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-06-27_engibench-evaluacion-llms-ingenieria]] (Zhou et al. 2025) · [[notes/papers/2026-03-12_fermbench-benchmark-llms-fermentacion]] (Caccavale et al. 2026)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [capacidades-de-ia, ia-generativa, ingenieria-quimica, educacion-en-ingenieria, razonamiento-cuantitativo-llm, alucinaciones-de-ia]

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

---

## P031 — La huella ambiental de delegarle todo a la IA

- **estado:** programado
- **fecha_programada:** 2026-09-08
- **fecha_publicacion:**
- **url:**
- **fuente:** [[notes/papers/2026-06-28_huella-ambiental-inferencia-llm]] (Jegham et al. 2025) · [[notes/papers/2025-01-01_sustainable-genai-carbon-scoping]] (Kim et al. 2025)
- **fecha_creacion:** 2026-06 (aprox.)
- **tags:** [huella-ambiental-de-la-ia, ia-generativa, sostenibilidad, ingenieria-quimica, educacion-en-ingenieria, regulacion-de-ia, acreditacion-academica]

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
