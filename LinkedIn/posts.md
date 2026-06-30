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
