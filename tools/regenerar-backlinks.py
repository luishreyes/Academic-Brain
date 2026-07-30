#!/usr/bin/env python3
"""
regenerar-backlinks.py — deriva la sección "Notas que usan este concepto"
desde el frontmatter de las notas, que es la única fuente de verdad.

Hasta ahora esa lista se mantenía a mano (vía /ingest) en paralelo al campo
`keywords:` de cada nota. Dos fuentes para el mismo hecho siempre derivan: la
primera corrida del lint encontró 39 backlinks faltantes y 1 obsoleto.

Aquí la lista deja de ser un dato y pasa a ser un derivado.

El diff se mantiene mínimo a propósito: los enlaces que ya están conservan su
orden, los obsoletos se quitan y los nuevos se agregan al final. Reordenar las
212 páginas produciría un diff ilegible sin arreglar nada.

Uso:
    python3 tools/regenerar-backlinks.py            # escribe los cambios
    python3 tools/regenerar-backlinks.py --check    # no escribe; exit 1 si hay deriva
"""
from __future__ import annotations

import re
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HEADER = "## Notas que usan este concepto"


def frontmatter(text: str) -> str:
    """Bloque de frontmatter en crudo. El delimitador se ancla a inicio de
    línea: hay URLs con '---' adentro (ps573---artificial-intelligence)."""
    if not text.startswith("---"):
        return ""
    end = text.find("\n---", 3)
    return text[3:end] if end != -1 else ""


def keywords_of(fm: str) -> list[str]:
    """Lee `keywords:` en formato inline `[a, b]` o en bloque `- a`.
    Ambos están en uso en el vault; leer solo uno se salta notas reales."""
    m = re.search(r"^keywords:[ \t]*(.*)$", fm, re.M)
    if not m:
        return []
    inline = m.group(1).strip()
    if inline.startswith("["):
        inner = inline[1:-1] if inline.endswith("]") else inline[1:]
        return [v.strip().strip('"').strip("'") for v in inner.split(",") if v.strip()]
    if inline:
        return [inline.strip('"').strip("'")]
    items = []
    for line in fm[m.end():].splitlines()[1:]:
        if re.match(r"^\s*-\s+", line):
            items.append(re.sub(r"^\s*-\s+", "", line).strip().strip('"').strip("'"))
        elif line.strip():
            break
    return items


def split_page(text: str) -> tuple[str, list[str]]:
    """Separa la página en (prosa, backlinks-existentes-en-orden).

    Maneja el caso de `epistemologia.md`, donde la lista existe pero le falta
    el encabezado: si el archivo termina en un bloque de `- [[notes/...]]` sin
    encabezado, ese bloque es la lista y el encabezado se repone.
    """
    idx = text.find(HEADER)
    if idx != -1:
        prose = text[:idx].rstrip("\n")
        tail = text[idx + len(HEADER):]
        links = re.findall(r"^-\s*\[\[([^\]]+)\]\]\s*$", tail, re.M)
        return prose, links

    lines = text.rstrip("\n").splitlines()
    orphan: list[str] = []
    while lines:
        m = re.match(r"^-\s*\[\[(notes/[^\]]+)\]\]\s*$", lines[-1])
        if not m:
            break
        orphan.insert(0, m.group(1))
        lines.pop()
    return "\n".join(lines).rstrip("\n"), orphan


def main() -> int:
    check = "--check" in sys.argv

    # --- uso real de cada keyword, desde el frontmatter de las notas -------
    used: dict[str, list[str]] = defaultdict(list)
    for p in sorted((ROOT / "notes").rglob("*.md")):
        if p.name in ("_index.md", "README.md"):
            continue
        text = p.read_text(encoding="utf-8", errors="replace")
        note_id = p.relative_to(ROOT).with_suffix("").as_posix()
        for kw in keywords_of(frontmatter(text)):
            used[kw].append(note_id)

    changed: list[tuple[str, int, int, bool]] = []  # (keyword, +, -, encabezado repuesto)

    for page in sorted((ROOT / "concepts").glob("*.md")):
        if page.name == "_index.md":
            continue
        text = page.read_text(encoding="utf-8")
        fm = frontmatter(text)
        kw = (re.search(r"^keyword:[ \t]*(.*)$", fm, re.M) or [None, page.stem])[1]
        kw = kw.strip().strip('"').strip("'") if isinstance(kw, str) else page.stem

        prose, existing = split_page(text)
        had_header = HEADER in text
        real = used.get(kw, [])

        kept = [l for l in existing if l in real]           # conserva el orden
        added = [l for l in real if l not in kept]          # nuevos al final
        removed = [l for l in existing if l not in real]
        final = kept + added

        if not added and not removed and had_header:
            continue

        body = "\n".join(f"- [[{l}]]" for l in final)
        new_text = f"{prose}\n\n{HEADER}\n{body}\n" if final else f"{prose}\n\n{HEADER}\n"

        changed.append((kw, len(added), len(removed), not had_header))
        if not check:
            page.write_text(new_text, encoding="utf-8")

    # --- reporte ----------------------------------------------------------
    verbo = "derivarían" if check else "actualizadas"
    print(f"regenerar-backlinks: {len(changed)} páginas {verbo}")
    for kw, plus, minus, header in changed:
        marks = []
        if plus:
            marks.append(f"+{plus}")
        if minus:
            marks.append(f"-{minus}")
        if header:
            marks.append("encabezado repuesto")
        print(f"  concepts/{kw}.md  ({', '.join(marks)})")

    if check and changed:
        print("\n  Los backlinks no están derivados del frontmatter. "
              "Correr: python3 tools/regenerar-backlinks.py")
        return 1
    if not changed:
        print("  Todo derivado.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
