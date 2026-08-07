# Prior knowledge: fluent in Python, Ruby, and shell

The learner is a fluent programmer (Python, Ruby, shell), not a beginner. This
sets a high floor: skip programming fundamentals entirely and teach Lua by
contrast with these languages. Zone of proximal development starts at "what is
*different* about Lua," not "what is a variable."

Two anchors established for future sessions:
- **Ruby** is the match for Lua truthiness (`nil`/`false` falsy, everything else truthy) and for `nil` semantics.
- **Python** is the mismatch (falsy `0`/`""`/`[]`) — use it as the cautionary contrast.

Mission scope was sharpened during setup: the learner wants **the Lua language
itself**, explicitly NOT the Neovim/Hyprland config APIs. The two targets pin the
relevant Lua versions: **5.1 (Neovim/LuaJIT)** and **5.4 (Hyprland 0.55+)**. The
5.1-vs-5.4 divergence is a deliberate through-line of the course.
