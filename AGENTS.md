## design

This project uses an editorial/magazine aesthetic for the Mongolian Ornithological Society.

**MOS Brand Palette** (defined in `app/globals.css` via `@theme`):
- `mos-navy` (`#001f6e`) — primary title, buttons, hero overlays
- `mos-blue` (`#1a368d`) — secondary accent, numbers
- `mos-accent` (`#4a1800`) — burnt umber for section labels
- `mos-surface` (`#faf8ff`) — warm off-white page background
- `mos-section` (`#f4f2fb`) — alternate section background
- `mos-periwinkle` (`#dce1ff`) — decorative blur orbs

**Typography**: Newsreader (serif) for headings, Manrope (sans-serif) for body.

**Patterns**:
- `py-24 md:py-28` — generous vertical rhythm
- Blur orbs (`rounded-full blur-3xl opacity-[0.05]`) for depth
- Alternating `bg-mos-surface` / `bg-mos-section` between sections
- `rounded-2xl` cards with `border-mos-border/30` and subtle shadows
- `tracking-widest text-xs uppercase font-bold` for section eybrows
- Fixed nav with `bg-black/20 backdrop-blur-sm` — mobile has a slide-in panel from the right with `w-80 max-w-[85vw]`

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
