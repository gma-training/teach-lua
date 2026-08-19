# Teaching notes

## Learner profile
- Fluent in **Python, Ruby, shell**. Real programmer — do NOT teach programming fundamentals (variables, loops, functions as concepts). Teach *Lua's* versions of them, by contrast.
- Also **familiar with JavaScript** and uses it frequently, but is **not** expert-level in JS
  types/data structures the way they are in Python/Ruby. So: don't lean on JS for precise/subtle
  type behaviour, but DO call out — as a secondary anchor — the places where **Lua resembles JS
  more than Python/Ruby**. These build the right mental model:
  - **Numbers**: JS has one number type (double). That's exactly **Lua 5.1** ("everything is a
    float"). Good anchor for the 5.1 side; 5.4's integer/float split is the departure.
  - **Forgiving reads**: `obj.missing` → `undefined` in JS, never an error — matches Lua's
    `nil`-on-missing (Python raises `KeyError`/`AttributeError`; Ruby only for hashes).
  - **Global-by-default**: sloppy-mode JS assignment without `var`/`let` leaks a global — same
    trap as Lua's bare name (though JS strict mode errors instead of silently doing it).
  - **First-class functions / closures everywhere**: config idioms lean on this the JS way.
  - JS is a truthiness **mismatch** like Python (`0`, `""` falsy) — so keep Ruby as the truthiness
    anchor, and flag JS alongside Python as the cautionary contrast, not the model.
- Best anchors:
  - **Ruby** for truthiness (only `nil`/`false` are falsy — identical to Lua) and for `nil`.
  - **Python** (and **JavaScript**) as the *contrast* case for truthiness (both treat `0`/`""` as falsy; Lua does NOT).
  - **Python dict + list fused** for the Lua table (JS object ≈ the string-keyed half).
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

## Lesson roadmap (agreed)
- L01 ✓ Values, `local`, `nil`, truthiness
- L02 ✓ Numbers (first 5.1/5.4 divergence)
- L03 ✓ Tables — the only data structure
- L04 ✓ Control flow & iteration (`if`/`for`, `pairs` vs `ipairs`)
- L05 ✓ Strings & the `:` method call
- L06 ✓ Functions, closures & multiple returns
- (Later, from divergence backlog: `goto`, bitwise; possible full lesson on Lua patterns (`match`/`gsub`) if the mission needs it)

## Version-divergence backlog (5.1 vs 5.4) — teach explicitly when reached
- Numbers: 5.1 all doubles; 5.4 has integer/float subtypes, `math.type`.
- `//` floor division: 5.4 only.
- Bitwise `& | ~ << >>`: 5.4 native; 5.1 uses LuaJIT `bit` library.
- `goto`/labels: 5.2+ (LuaJIT 2.1 also has it); not stock 5.1.
- `unpack` (5.1 global) vs `table.unpack` (5.2+). — *covered L03*
- Integer `for` loop behaviour and `#` on tables with holes. — `#`-with-holes *covered L03*; integer `for` *covered L04*.
- `utf8` library (5.3+) vs none on 5.1; `#s` is bytes. — *covered L05*
- `string.format("%d", float)`: 5.4 errors on non-integer, 5.1 truncates. — *covered L05*
- `table.pack` (5.2+) vs none on 5.1 for varargs count; `select("#", ...)` portable. — *covered L06*
