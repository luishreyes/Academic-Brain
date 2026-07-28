# Formato revista de los boletines

Cómo se escribe un boletín para que el lector de `docs/noticias.html` lo componga
como una revista y no como un documento. La referencia visual es el sistema
"Comunicaciones Luis H": cartel de exposición y hoja de sala, papel hueso, tinta
densa, un pigmento plano por colección, mucha regla y mucho aire.

El archivo sigue siendo markdown legible. Todo lo que se describe abajo es
opcional y retrocompatible: un boletín escrito como los de junio se sigue
renderizando, solo que sin cifras, sin gráficos y sin figuras.

Después de escribir el archivo hay que ejecutar `node docs/build-noticias.mjs`
y commitear `docs/noticias-data.js` junto al boletín.

---

## 1. Cabecera del archivo

```yaml
---
edicion: 7
kicker: Cuaderno de campo
portada: El tutor que claudica
bajada: Entradilla de dos o tres frases que sintetiza el pulso de la semana.
pigmento: vermellon
etiquetas: [tutoría con IA, evaluación, transferencia]
---
```

| Clave | Para qué sirve | Si falta |
|---|---|---|
| `edicion` | numeral de portada y del sumario | se cuenta por orden de fecha |
| `kicker` | rótulo en versalitas sobre el título | el de la colección |
| `portada` | **titular del número**, la línea que se lee en la portada | se toma el primer `##` con contenido real |
| `bajada` | entradilla bajo el titular | el primer párrafo antes de la primera sección |
| `pigmento` | `vermellon`, `ultramar`, `azufre`, `pino`, `arcilla` | el de la colección |
| `etiquetas` | fichas monoespaciadas al pie de portada | no se muestran |

**`portada` es la clave que más importa.** Un titular repetido número tras número
mata la portada. Debe ser concreto, con una imagen adentro, en caja baja tipo
oración, sin dos puntos explicativos ni numeral de listículo. "El tutor que nunca
dice «no sé»", no "IA en educación: 5 aprendizajes".

Un solo pigmento por número. El azufre solo como resaltado y una vez por documento.

---

## 2. Estructura del cuerpo

```markdown
# Boletín de investigación, 3 de agosto de 2026

## Memoria del vault y estado del hilo
...

## La misma grieta, ahora en el quirófano
...

## Hilo abierto para mañana
...
```

El `# H1` va a la cabecera y no se repite en el cuerpo. Cada `##` se numera solo
(01, 02, 03) y se compone como rótulo en versalitas con su regla. La sección que
empieza por "Hilo abierto" recibe la regla en pigmento: es el colofón del número.

Las secciones alimentan el índice lateral pegajoso, así que conviene que sus
títulos digan algo. Entre seis y diez secciones es el rango cómodo.

---

## 3. Bloques editoriales

Son bloques cercados de markdown. En GitHub y en Obsidian se ven como código;
en el lector se componen como piezas de revista.

### Cifras

Una a cuatro cifras en una fila, separadas por línea en blanco. Cada una son tres
líneas: valor, rótulo, nota. **Toda cifra publicada lleva su fuente y su tamaño de
muestra.** Una cifra sin nota no se publica.

````markdown
```cifras
86,8 %
Aciertos de ChatGPT-5 en glaucoma
n=189 · Gobira 2026

62,9 %
Aciertos de los residentes
mismo examen, seis residentes
```
````

### Cita destacada

Primer bloque, la cita. Tras línea en blanco, la atribución. Máximo catorce
palabras: es un cartel, no un párrafo.

````markdown
```cita
La confianza declarada subió; la capacidad de justificar, no.

Boletín IV · 13 de julio de 2026
```
````

### Nota metodológica

Primera línea, el rótulo. El resto, el cuerpo. Se compone con bloque de imprenta
en el pigmento del número. Sirve para declarar el límite del dato, que es
obligatorio cuando se cita un preprint o una muestra pequeña.

````markdown
```nota
Preprint sin revisión por pares
Ciento cincuenta y seis mil expedientes es una muestra enorme, pero mide notas,
no aprendizaje. Trátelo como termómetro administrativo.
```
````

### Gráfico de datos

El caballo de batalla visual del boletín: se dibuja en SVG, en el lenguaje de la
marca, con los números que el propio paper reporta. No necesita red ni librerías.

`tipo: barras` (por defecto) para comparar categorías. Con `series:` y varios
valores por fila separados por `|`, dibuja barras pareadas.

````markdown
```datos
tipo: barras
titulo: Aciertos por tipo de ítem de física
unidad: " %"
nota: n=300 · Bralin 2026
- Solo texto: 96
- Con figura: 79
```
````

````markdown
```datos
tipo: barras
titulo: Máquina contra residente
series: ChatGPT-5 | Residentes
unidad: " %"
nota: Gobira 2026 (glaucoma) y Baycı 2026 (cirugía cardiovascular)
- Glaucoma: 86,8 | 62,9
- Cirugía cardiovascular: 81,3 | 58,1
```
````

`tipo: serie` para una tendencia con un valor por rótulo.

````markdown
```datos
tipo: serie
titulo: Retención a los 45 días
unidad: " %"
nota: Barcaui 2026
- Día 0: 68,5
- Día 15: 63,1
- Día 45: 57,5
```
````

Claves admitidas: `tipo`, `titulo`, `nota`, `unidad`, `series`, `max`, `min`.

### Figura

````markdown
```figura
src: figuras/2026-08-03-spra-fig02.png
indice: Fig. 02
pie: Arquitectura del entrenamiento SPRA contra colapso del andamiaje
fuente: arXiv:2607.19371 · CC BY 4.0
ratio: 16/9
tratamiento: gris
```
````

Sin `src`, o si el archivo no existe en `docs/`, cae al marco de semitono con la
leyenda "Figura pendiente". **Eso es correcto y preferible a inventar una imagen.**
El hueco declarado es parte del sistema; una imagen genérica de stock nunca lo es.

`tratamiento` acepta `gris` (por defecto), `calido` y `color`. Las figuras de
paper llegan en colores de software y compiten con el pigmento del número, así
que se desaturan salvo que el color sea el dato.

---

## 4. De dónde salen las imágenes

Tres caminos, en orden de lo que de verdad funciona hoy.

**Primero, el gráfico generado.** Casi todo lo que un boletín necesita mostrar es
una comparación de cifras que el paper ya reporta. El bloque `datos` la dibuja en
el estilo de la casa, sin red, sin licencias de por medio y con el pigmento del
número. Este es el camino principal: úselo siempre que haya dos números que
comparar.

**Segundo, la figura extraída de un PDF del vault.** Si el paper está en
`sources/pdfs/` o llegó por `sources/inbox/`, se puede sacar la figura del propio
archivo:

```bash
python3 tools/extraer-figuras.py sources/pdfs/kestin2025.pdf --listar
python3 tools/extraer-figuras.py sources/pdfs/kestin2025.pdf \
    --pagina 4 --recorte 8,22,92,58 --prefijo 2026-08-03-kestin-fig01 \
    --fuente "arXiv:2607.19371 · CC BY 4.0"
```

El script imprime el bloque ```` ```figura ```` listo para pegar. Antes de
publicar hay que mirar la licencia: preprints de arXiv y bioRxiv suelen ir con
CC BY, los artículos de editorial cerrada no. El sitio es público, así que la
regla práctica es figura de fuente abierta con crédito y licencia en el pie, y en
cualquier otro caso el marco de semitono.

**Tercero, descargar la figura del sitio del paper: hoy no es posible.** La
política de red del entorno responde 403 a `arxiv.org`, `biorxiv.org`,
`chemrxiv.org`, `ncbi.nlm.nih.gov` y `api.crossref.org`, tanto por `curl` como
por `WebFetch`. Mientras eso no cambie en la configuración del entorno, no hay
forma de traer una figura desde la web dentro de la rutina.

---

## 5. Reglas de estilo que el formato no puede verificar solo

- Español de Colombia, registro usted, comillas angulares («no sé»).
- **Sin rayas ni guiones para incisos.** Comas, punto y seguido, dos puntos, o
  reestructurar la frase. Esto contradice al sistema de diseño original, que sí
  admitía la raya; manda MYVOICE, que es la norma del vault.
- Evitar "de X a Y", "tanto X como Y", "no solo X sino también Y".
- Títulos en caja baja tipo oración. Las mayúsculas se reservan para los rótulos.
- Fechas en ISO dentro de las notas de cifra (`n=184 · 2025-II`).
- Sin emoji, en ningún contexto.
- Cada paper cierra con su referencia mínima: autores, año, revista, enlace. El
  lector la compone en monoespaciada con filete en pigmento.
- Se cierra con una tesis o con lo que queda abierto. Nunca con un resumen en
  viñetas de lo ya dicho.
