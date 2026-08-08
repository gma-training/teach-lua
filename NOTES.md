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
- Do NOT edit real configs in this project. All practice stays inside lessons.

## Naming the versions (IMPORTANT — user preference)
- In lessons/reference cards, refer to the versions as **"Lua 5.1"** and **"Lua 5.4"** only.
  **Do NOT say "Neovim" or "Hyprland"** — the user already knows which is which and finds the
  repetition noisy. Applies from Lesson 02 onward; Lesson 01 is left as-is by request.
- Use the version-named tag styles `.tag-51` / `.tag-54` (NOT the legacy `.tag-nvim` / `.tag-hypr`,
  which remain only for Lesson 01).
- Naming the *runtime* (e.g. "LuaJIT") is fine when strictly needed for accuracy — LuaJIT is a Lua
  implementation, not one of the two apps. Keep even that minimal.
- Meta docs (MISSION.md, RESOURCES.md) may still reference Neovim/Hyprland to explain *why* 5.1 and
  5.4 are the target versions — that's rationale, not lesson content.

## Link presentation
- When giving the user clickable links to lessons/reference/assets, prefix with
  **`file:///home/graham/Code/learning/teach-lua/`** (their real path), NOT the
  container's `/workspace/`. E.g. `file:///home/graham/Code/learning/teach-lua/lessons/0001-values-nil-and-truthiness.html`.

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
