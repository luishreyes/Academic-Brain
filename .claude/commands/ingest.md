---
description: Procesa un paper o artículo y lo agrega al vault con resumen, metadatos y keywords. Lee los PDFs de la carpeta Brain en Google Drive.
---

Procesa el paper o artículo proporcionado y agrégalo al vault.

**Entrada:** $ARGUMENTS (URL, texto pegado, PDF subido al chat, o vacío para
revisar `Brain/biblioteca` en Drive)

> **Los PDFs viven en Google Drive, no en el repo.** El repo guarda la
> referencia (`pdf_ref` + `sha256`), no el binario. Ver `decisions/0002` en el
> hub `agentic-os`.
>
> Carpeta: `Brain/biblioteca` — ID `1oH8Gux01JgenFMID2QYj1HUc1dN8Z_Qm`
>
> Es **una sola carpeta**: recibe lo nuevo y guarda lo ya procesado. No se mueven
> archivos entre carpetas — el conector MCP de Drive no puede mover, y de todas
> formas el registro de qué está ingerido no es la ubicación del archivo sino la
> existencia de una nota que lo referencie.

---

## 1. Determinar qué falta por ingerir

**Si no hay argumento, o es vago** ("los pdfs nuevos", "organiza", "revisa Drive"):

1. Listar la carpeta de Drive con `mcp__Google_Drive__search_files`, acotado a
   `parentId = '1oH8Gux01JgenFMID2QYj1HUc1dN8Z_Qm'`.

   **Nunca hacer una búsqueda abierta en Drive.** El conector alcanza todo el
   Drive, incluidas carpetas compartidas por terceros con trabajo de estudiantes.
   Ese material no puede entrar a un vault que publica a GitHub Pages.

2. Recolectar los `pdf_ref` de todas las notas:
   `grep -rh '^pdf_ref:' notes/ | sed 's/pdf_ref: *//' | sort -u`

3. Lo pendiente es la diferencia: archivos en Drive sin nota que los referencie.
   Si no hay ninguno, decirlo y parar.

**Si es una URL:** usar WebFetch.
**Si es texto pegado:** procesarlo directamente.
**Si el usuario subió un PDF al chat:** leerlo con pdfminer. El archivo tendrá
que subirse a Drive aparte — avisar que queda pendiente, no dar por hecho que se
subió.

## 2. Comprobar que no sea un duplicado — ANTES de redactar nada

Extraer el **DOI** (o la URL canónica si no hay DOI) y buscarlo en las notas
existentes:

```bash
grep -rl "10.XXXX/YYYY" notes/
```

**Si ya existe una nota con ese DOI: parar.** No crear una segunda. Informar al
usuario qué nota lo cubre y preguntar si quiere ampliarla.

Este paso existe porque el slug se deriva del título, así que dos corridas sobre
el mismo artículo producen dos notas con nombres distintos y ninguna señal de que
son la misma cosa. Así se colaron tres duplicados en el vault.

## 3. Clasificar el tipo

`paper` (publicación académica), `article` (periodístico o divulgación),
`book`, o `fiction`.

## 4. Extraer metadatos

**Papers:** title, authors (lista), year, journal, url, doi
**Artículos:** title, author, publication, date, url
**Libros/ficción:** title, authors, year, publisher, isbn

## 5. Leer la taxonomía

Leer `keywords.md` **completo**. Es la fuente de verdad del vocabulario.

## 6. Redactar el resumen

**Papers:** 2-4 párrafos — qué problema resuelve, cómo, hallazgos, impacto.
**Artículos:** 1-2 párrafos — qué reporta, contexto, relevancia.

En español. Los metadatos conservan el idioma original del documento.

## 7. Seleccionar keywords (5-12)

Preferir las que ya existen. Para cada candidata nueva:

- Buscar en `keywords.md` un quasi-duplicado (mismo concepto, otra forma). Si
  existe, usar la forma canónica.
- Si es genuinamente nueva, agregarla a `keywords.md` en su sección alfabética
  con definición corta y aliases.
- **Comprobar que ningún alias nuevo esté ya reclamado por otra keyword.** Un
  término en dos keywords deja a las notas sin nodo único al que enlazar.

**Las conexiones deben emerger solas.** Nunca asignar una keyword porque
"conecta" con el tema dominante del vault, ni estirar su significado para que un
paper encaje. Un nodo aislado es válido. Ver el principio en `CLAUDE.md`.

## 8. Crear la nota

`notes/<tipo>/YYYY-MM-DD_slug.md`, donde la fecha es la de **publicación**, no la
de captura. Slug corto (3-5 palabras), sin tildes, con guiones.

Frontmatter, con la referencia al PDF en la forma nueva:

```yaml
pdf_ref: apellido_año_slug.pdf    # solo el nombre, sin ruta
sha256: <hash del PDF>            # identidad verificable del archivo
```

**Nunca una ruta** en `pdf_ref`: la raíz la resuelve `BRAIN_SOURCES_ROOT` fuera
del repo. Si el PDF viene de Drive, el `sha256` sale de descargarlo y hashearlo;
si no se puede calcular, dejar la nota sin `pdf_ref` antes que inventarlo.

## 9. Crear las páginas de concepto que falten

Para cada keyword sin `concepts/<keyword>.md`, crear la página con su definición
y aliases, tomados de `keywords.md`.

**No editar a mano la sección "Notas que usan este concepto".** Se deriva en el
paso siguiente.

## 10. Derivar backlinks y regenerar el grafo

```bash
python3 tools/regenerar-backlinks.py
node docs/build.mjs
```

El primero deriva los backlinks del frontmatter de las notas; mantenerlos a mano
fue lo que produjo 39 backlinks faltantes y 1 obsoleto acumulados en 586 notas.

## 11. Verificar antes de commitear

```bash
python3 tools/regenerar-backlinks.py --check   # debe salir en 0
```

Y si el hub `agentic-os` está disponible, el gate de integridad completo:

```bash
python3 <ruta-al-hub>/scripts/lint_brain.py .
```

**Si el lint reporta errores, arreglarlos antes de commitear.** No commitear con
el gate en rojo ni describir el trabajo como terminado.

## 12. Confirmar y commitear

Mostrar: archivo creado, keywords asignadas, keywords nuevas en la taxonomía, y
el resultado del lint.

Commit: `ingest: [título corto] — [tipo]`, incluyendo `docs/graph-data.js`.

---

## Casos especiales

- **Varios PDFs pendientes:** procesarlos en secuencia, un commit al final.
- **Sin acceso a la URL:** pedir el PDF en la carpeta de Drive; no inventar
  contenido a partir del título.
- **PDF en Drive sin DOI ni metadatos legibles:** extraerlos del propio PDF con
  pdfminer antes de recurrir a búsqueda web.
- **Capítulos de un mismo libro:** comparten el DOI del libro y **no** son
  duplicados. El desempate es el título: si difiere, son capítulos distintos.
- **Idioma:** resumen y comentarios en español; metadatos en el idioma original;
  keywords siempre en español, para que el grafo sea coherente.
