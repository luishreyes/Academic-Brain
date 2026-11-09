---
type: concept
keyword: orden-del-turno
aliases: [turn order, orden del turno, quién habla primero, who goes first, secuencia estudiante-máquina, ubicación de la reflexión, attempt-first, answer-first]
---

# Orden del turno

Posición del aporte del modelo respecto de la producción del estudiante dentro de una misma actividad: si el estudiante intenta, explica o emite su veredicto antes de ver la salida de la máquina, o si la recibe primero y trabaja sobre ella. Es una variable de diseño de la secuencia, no una capacidad del aprendiz: se instancia cuando un estudio manipula, contrabalancea o declara ese orden.

## Qué dice la literatura

La página nace con cuatro notas porque el criterio es estrecho a propósito: no basta que un estudio use IA en una actividad secuenciada, hace falta que el orden sea la variable que se manipula o, al menos, que se declare. Esa estrechez es el hallazgo. De las 393 notas del vault, cuatro cumplen, y entre las descartadas hay diseños excelentes cuya sección de métodos no permite saber quién habló primero.

Choi, Phung, Wu, Singla y Brooks (2025) es el único experimento que aísla la variable y la aísla bien. Aleatorizaron la ubicación de la reflexión respecto de la pista generada por IA en dos cursos de Python, y el efecto sobre la conducta es grande: pedir la reflexión antes elevó la proporción de reflexiones no vacías al 67,3 % contra 37,5 % cuando se pedía después, con χ² de 8,90 y p de 0,003. El desempeño inmediato no se movió, y la satisfacción bajó, 54,0 % contra 61,0 % del control, sin alcanzar significación. Reflexionar después derivó en evaluar la utilidad de la pista en lugar del propio proceso, lo cual es la forma precisa de decir que cuando la máquina habla primero el estudiante juzga la máquina y no su trabajo. Conviene no exagerar el resultado: menos del 10 % de las reflexiones explicaba por qué importaba el problema, así que lo que el orden duplica es la emisión del juicio, no su profundidad.

Bastani y colegas (2025) manipulan el orden sin nombrarlo, y de ahí sale la mejor evidencia de que importa para el aprendizaje y no solo para la conducta. Sus dos brazos de IA se diferencian en que GPT Tutor retiene la solución y empuja al estudiante a producir, mientras GPT Base responde de entrada. En la práctica asistida los dos ganan, GPT Base un 48 % y GPT Tutor un 127 % sobre el control. En el examen sin asistencia, preregistrado como análisis primario, GPT Base cae un 17 % y GPT Tutor queda indistinguible del control, con un coeficiente un orden de magnitud menor. El detalle que cierra el argumento es que los errores lógicos de GPT Base, que acierta apenas el 51 % de las veces, afectan la práctica y no se trasladan al examen pareado: el patrón es consistente con copiar, no con aprender de una fuente equivocada. Leídos juntos, Choi y Bastani dicen cosas compatibles en niveles distintos. Poner al estudiante primero duplica el juicio que emite y no cuesta desempeño inmediato; dejar que la máquina vaya primero no cuesta desempeño asistido y se cobra la competencia cuando se retira la herramienta.

Kosmyna y colegas (2025) aportan la única medición fisiológica y el único contrabalanceo entre sesiones. Con 54 participantes en tres grupos y 18 en una cuarta sesión con reasignación cruzada, el orden de exposición deja de ser un detalle de procedimiento y se vuelve el objeto: lo que se mide es qué le pasa a quien escribió primero con la herramienta y luego sin ella, y al revés. Es también la nota que marca el límite del eje, porque su granularidad es la sesión y no el turno dentro de la tarea.

Tomisu, Ueda y Yamanaka (2025) son el caso teórico y el más incómodo de clasificar. Su Espejo Cognitivo invierte el orden por diseño: el bucle de cuatro pasos obliga al estudiante a presentar su explicación antes de consultar, y la ignorancia del modelo se esculpe a propósito para que el aporte de la máquina llegue en segundo lugar y en forma de reflejo. Pero el propio artículo declara que su demostración con 36 estudiantes de secundaria es ilustrativa y no un estudio controlado, así que la nota entra como especificación de diseño y no como evidencia.

Lo que el conjunto deja sin responder es si la ventaja sobrevive a la actividad que la produjo. Ninguna de las cuatro notas mide el orden del turno y la retirada de la herramienta en el mismo diseño con una posprueba diferida de la misma habilidad. Choi mide conducta y desempeño inmediato; Bastani mide competencia residual pero no declara el orden como su variable; Kosmyna cruza condiciones entre sesiones sin posprueba de contenido; Tomisu no mide. Esa es la casilla vacía, y es la razón de existir de esta página.

## Notas que usan este concepto
- [[notes/papers/2025-06-25_genai-sin-guardrails-puede-danar-aprendizaje]]
- [[notes/papers/2025-10-09_cognitive-mirror-metacognicion-ia]]
- [[notes/papers/2025-12-04_reflection-satisfaction-tradeoff-hints-ia]]
- [[notes/papers/2026-06-28_brain-on-chatgpt-deuda-cognitiva]]
