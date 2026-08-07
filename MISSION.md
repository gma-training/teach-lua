# Mission: Learn the Lua language

## Why
I hand-edit my Neovim and Hyprland configs, which are now both written in Lua
(Neovim = LuaJIT/Lua 5.1; Hyprland 0.55+ = Lua 5.4). I want to read and write
those configs with genuine confidence in the *language* — knowing exactly what
each line does and why — instead of pattern-matching other people's dotfiles.

## Success looks like
- I can read any line of a Neovim or Hyprland Lua config and explain what it does.
- I can write new config logic (conditionals, loops, functions, tables) from scratch, correctly, first time.
- I know where Lua 5.1 (Neovim) and Lua 5.4 (Hyprland) diverge, and I never write something in one that silently misbehaves the way the other taught me to expect.
- I can debug a Lua error message and fix the cause.

## Constraints
- Fluent in Python, Ruby, and shell — teach Lua *by contrast* with these, fast.
- No abstract theory for its own sake; every concept must earn its place against the mission.
- Learning happens here, in lessons. I do NOT want to edit real configs inside this project.

## Out of scope
- The Neovim API (`vim.*`) and the Hyprland API (`hl.*`). These are libraries, not the language. They matter only insofar as they pin the Lua *version*.
- Writing full plugins or large programs. The target is config-scale Lua.
- Lua tooling/build systems (luarocks, etc.) unless a specific need arises.
