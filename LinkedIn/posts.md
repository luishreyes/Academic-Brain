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

Por eso conviene apostarle a lo que protege el juicio y no al mapa de capacidades de este mes.

El mapa de capacidades cambia cada mes; el diseño que protege el juicio del estudiante permanece en pie.

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
