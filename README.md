# Academic Brain

Vault de Obsidian para construir un cerebro académico personal. Conecta papers y artículos a través de conceptos compartidos.

## Estructura

```
Academic-Brain/
├── notes/
│   ├── papers/      ← papers académicos procesados
│   └── articles/    ← artículos periodísticos procesados
├── concepts/        ← una página por keyword (construye el grafo en Obsidian)
├── inbox/           ← drop aquí archivos para procesar
├── keywords.md      ← taxonomía canónica de keywords (revisada en GitHub)
└── CLAUDE.md        ← instrucciones para el sistema de IA
```

## Cómo usar

### Agregar un paper o artículo

En Claude Code (claude.ai/code):

```
/ingest https://url-del-paper.com
```

O si tienes un PDF, súbelo a `inbox/` y luego:

```
/ingest inbox/nombre-del-paper.pdf
```

Claude creará automáticamente:
- La nota con resumen, metadatos y keywords
- La página de concepto para cada keyword
- Actualizará `keywords.md` si hay keywords nuevas

### Ver el grafo de conocimiento

Abre esta carpeta en Obsidian y usa la vista de **Graph View** para ver cómo se conectan los papers y artículos a través de los conceptos.

### Revisar keywords

Las keywords se gestionan en `keywords.md` y se almacenan en GitHub. Cada vez que Claude agrega una keyword nueva, aparece como un commit visible para revisión. Esto evita que proliferen quasi-duplicados (ej: "aprendizaje automático" vs "machine learning").

## Tecnología

- **Obsidian**: visualización del grafo y edición de notas
- **Claude Code**: procesamiento de papers/artículos e IA
- **GitHub**: almacenamiento, historial y revisión de keywords
