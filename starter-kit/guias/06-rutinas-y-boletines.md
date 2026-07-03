# 06 · Rutinas y boletines

Aquí está lo que suele enamorar a la gente: una **rutina programada** que cada
semana vigila la literatura nueva, la **cruza contra su segundo cerebro** y le
escribe un boletín narrado, con memoria de lo que ya venían siguiendo. No es una
alerta de Google Scholar. Es un corresponsal que recuerda las conversaciones
anteriores.

## Las dos piezas

1. **La Routine de Claude Code** — el motor. Corre sola, en la nube, en el
   horario que usted fije, con acceso a sus conectores de fuentes.
2. **El lector web** (`docs/noticias.html`) — la vitrina. Muestra todos los
   boletines publicados, organizados por tema, seleccionables por fecha.

## Montar la Routine

1. En la web de Claude Code, vaya a **Routines → New**.
2. En **Instructions**, pegue `templates/rutina-boletin.md` y reemplace los
   `[CORCHETES]` (su tema, sus fuentes, su carpeta de boletines, su estilo).
3. Conecte el repo del vault y sus **conectores de fuentes** (los MCP que tenga:
   PubMed, un buscador académico, etc.). La rutina cruza lo que encuentran contra
   su second brain.
4. Ponga un **disparador** (ej: lunes 6:30 a.m.).
5. Guarde.

## Cómo piensa la rutina (por qué es distinta)

El corazón está en el **PASO 0** y el **PASO 2** de la plantilla:

- **PASO 0 — Memoria.** Antes de buscar nada, lee *todo* el histórico de
  boletines (no solo el último) y su second brain. Junta los hilos que quedaron
  abiertos en semanas anteriores y los retoma. Así la rutina se encadena consigo
  misma.
- **PASO 2 — Cruce.** Antes de redactar, contrasta lo nuevo contra sus notas
  viejas y señala las conexiones que emergen: un paper de esta semana que conversa
  con una nota de hace meses, una tensión que se abre, una línea que se refuerza.

El resultado se siente como la continuación de una conversación, no como un
reporte aislado. Cada boletín cierra con un **"Hilo abierto para la próxima"**,
que es lo que el PASO 0 de la semana siguiente usa para saber por dónde seguir.
Si se omite ese cierre, la cadena se rompe.

## Cómo se guarda y se publica

El PASO 4 de la plantilla guarda el boletín como `AAAA-MM-DD-boletin.md` en su
carpeta de boletines (ej: `Boletines/`), regenera los datos del lector y hace
push a `main`:

```bash
node docs/build-noticias.mjs   # regenera docs/noticias-data.js
```

Para que el lector muestre la carpeta, debe estar declarada en `COLLECTIONS`,
dentro de `docs/build-noticias.mjs`:

```js
const COLLECTIONS = [
  { dir: "Boletines", label: "Boletín semanal" },
  // { dir: "Boletines-TemaB", label: "Otro tema" },   // añada las que quiera
];
```

Puede tener **una sola colección o varias** (por ejemplo, un boletín por línea de
investigación). Cada una es una carpeta en la raíz del repo con sus `.md`.

## El lector (`docs/noticias.html`)

- Menú lateral tipo drawer (hamburguesa) que organiza los boletines por
  colección y fecha; no ocupa espacio de lectura cuando está cerrado.
- Convierte el Markdown a HTML con un parser mínimo propio (encabezados, negrita,
  listas, citas, enlaces, referencias). Los enlaces entre boletines de la misma
  colección funcionan como navegación interna.
- Se enlaza con el grafo (botón "← Volver al grafo").

## Dos advertencias de operación

- **La Routine puede crear su propia rama de sesión** al correr, aunque la
  instrucción diga "push a main". Si nota que un boletín quedó en otra rama,
  fusiónelo a `main` a mano (o revise en la configuración de la Routine si hay una
  rama destino). Sin llegar a `main`, el boletín no aparece en el lector publicado.
- **Formato consistente.** Mantenga la estructura de los boletines (título,
  párrafo inicial en cursiva, secciones `##`, referencias al cierre, hilo
  abierto): el parser del lector y la memoria de la rutina dependen de ella.
