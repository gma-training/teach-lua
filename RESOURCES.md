# Lua (the language) Resources

Scope reminder: we care about **the Lua language**, at versions **5.1 (LuaJIT, Neovim)**
and **5.4 (Hyprland)**. Resources about the Neovim/Hyprland *APIs* are deliberately excluded.

## Knowledge

- [Lua 5.4 Reference Manual](https://www.lua.org/manual/5.4/)
  The authoritative spec for the Hyprland side. Terse but complete. Use for: exact semantics, the standard library, operator behaviour.
- [Lua 5.1 Reference Manual](https://www.lua.org/manual/5.1/)
  The authoritative spec for the Neovim/LuaJIT side. Use for: checking whether a feature exists in 5.1 before you rely on it.
- [Programming in Lua (PiL), 1st ed — free online](https://www.lua.org/pil/contents.html)
  Written by Lua's chief architect (Roberto Ierusalimschy). The 1st edition targets Lua 5.0/5.1 and is free. Use for: deep, well-explained coverage of tables, metatables, closures, coroutines.
- ["Learn Lua in Y minutes"](https://learnxinyminutes.com/docs/lua/)
  A single annotated script covering the whole language fast. Use for: a rapid orientation when you already program, and as a syntax refresher.
- [lua-users wiki](http://lua-users.org/wiki/)
  Community knowledge base. Use for: idioms, gotchas, and "how do I do X" patterns. Quality varies — cross-check against the manual.
- [LuaJIT extensions / differences](https://luajit.org/extensions.html)
  What LuaJIT (Neovim) adds to and changes from stock Lua 5.1 (e.g. the `bit` library, partial 5.2 features). Use for: resolving "does this work in Neovim?" questions.

## Wisdom (Communities)

- [r/lua](https://reddit.com/r/lua)
  General Lua language questions. Use for: idiom checks, "is this the Lua way?" feedback.
- [Lua mailing list](https://www.lua.org/lua-l.html)
  The core community, including language authors. High signal, low traffic. Use for: deep or subtle language questions.
- [Stack Overflow `[lua]` tag](https://stackoverflow.com/questions/tagged/lua)
  Use for: specific "why does this error" questions with searchable prior answers.

## Gaps
- No single resource cleanly tabulates the **5.1 vs 5.4** language differences for a config-writer's needs. We are building our own reference for this (see `reference/`).
