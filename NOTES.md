# Teaching notes

## Learner profile
- Fluent in **Python, Ruby, shell**. Real programmer — do NOT teach programming fundamentals (variables, loops, functions as concepts). Teach *Lua's* versions of them, by contrast.
- Best anchors:
  - **Ruby** for truthiness (only `nil`/`false` are falsy — identical to Lua) and for `nil`.
  - **Python** as the *contrast* case for truthiness (Python treats `0`/`""`/`[]` as falsy; Lua does NOT).
  - **Python dict + list fused** for the Lua table.
  - **Shell** for the global-by-default variable gotcha (shell vars are global too — familiar pain).

## Hard scope
- Teach **the Lua language only**. Neovim `vim.*` and Hyprland `hl.*` APIs are OUT OF SCOPE.
- APIs appear only to pin the version: **Neovim = LuaJIT / Lua 5.1**, **Hyprland 0.55+ = Lua 5.4**.
- Do NOT edit real configs in this project. All practice stays inside lessons.

## Teaching style
- Fast, contrast-driven. Lead with the gotcha, not the happy path.
- Every lesson flags **5.1 vs 5.4 divergence** where it exists (this is a mission through-line).
- Tight feedback loops: "predict the output" beats "read the fact".
- Quiz answers must be uniform length/format (no formatting tells).

## Version-divergence backlog (5.1 vs 5.4) — teach explicitly when reached
- Numbers: 5.1 all doubles; 5.4 has integer/float subtypes, `math.type`.
- `//` floor division: 5.4 only.
- Bitwise `& | ~ << >>`: 5.4 native; 5.1 uses LuaJIT `bit` library.
- `goto`/labels: 5.2+ (LuaJIT 2.1 also has it); not stock 5.1.
- `unpack` (5.1 global) vs `table.unpack` (5.2+).
- Integer `for` loop behaviour and `#` on tables with holes.
