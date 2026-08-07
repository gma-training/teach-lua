Claude Devcontainer Template
============================

Use this repository (gma/claude-devcontainer-template) as a template when creating a new repository on GitHub, to get my preferred setup for a [Claude Code] project.

It provides the configuration files required to run Claude inside a [devcontainer], which you can [launch within VS Code].

It includes Anthropic's egress firewall script, which will prevent Claude from accessing servers that it's unlikely need to during the course of a typical project. You can modify this list of servers by editing the `.devcontainer/init-firewall.sh` script.

Also see [Anthropic's reference container], which contains a lot more than just the devcontainer configuration. You may or may not want all that stuff in your project...

[Claude Code]: https://claude.ai
[devcontainer]: https://containers.dev/
[launch within VS Code]: https://code.visualstudio.com/docs/devcontainers/containers
[Anthropic's reference container]: https://code.claude.com/docs/en/devcontainer#try-the-reference-container

Initial setup
-------------

First, create a new repository from the template. You can do it [in the browser] on GitHub, or at the command line with the `gh` command that's included with the [GitHub CLI].

```sh
# Create the new repository on GitHub
gh repo create --template gma/claude-devcontainer-template --public <name>

# Clone the new repository locally
gh repo clone <name>
```

You can substitute the `--private` switch for `--public` if you don't want to publish your new repository.

[in the browser]: https://github.com/new?template_name=claude-devcontainer-template&template_owner=gma
[GitHub CLI]: https://cli.github.com/

Now that you've got a local repository with the config files in, you just need to set the name of the devcontainer.

1. Open `.devcontainer/devcontainer.json` in an editor
2. Find the `"name":` property at the top
3. Change the value to reflect the name of your project

Do this **before** you open the project in VS Code and build the containers!

Now you can open the project in VS Code, make sure you've got the [devcontainers extension] installed, and then run the "Re-open in container" command. VS Code should build the containers for you, and (if it all goes smoothly) drop you in a terminal running inside the container.

**Check that you're actually inside the container by running the `whoami` command into the VS Code terminal. It should tell you that your username is "node".**

```sh
whoami
```

If it doesn't say "node", you haven't managed to open the project inside a container. See the [VS Code docs][launch within VS Code].

If you are in the container, launch your Claude session by typing:

```sh
claude
```

[devcontainers extension]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
