# Install Game Art Director as a Codex plugin

This repository provides a **development preview** skills-only plugin (v0.1). It is not yet a public-directory listing and it does not supply an image-generation MCP server.

## Install on a supported Codex client

1. Add the GitHub marketplace: `codex plugin marketplace add WindRises318/game-art-director`.
2. Open the Codex plugin browser with `/plugins` (or open the Plugins Directory in the supported desktop app).
3. Select the `game-art-director-marketplace` source and install `game-art-director`.
4. Start a new conversation and ask the agent to use the `game-art-director` skill.

## Developer test

The plugin manifest is at `plugins/game-art-director/plugin.json`. Skill instructions and workspace templates are bundled under `plugins/game-art-director/skills/game-art-director/`. A GitHub-sourced repo marketplace lives at `.agents/plugins/marketplace.json`.

## Limitations

This plugin is **skills-only**. Image generation, inpainting, background removal, sprite packing, Cocos prefab assembly, and vision QA are not provided by this package. Configure suitable tools separately and confirm their actual availability. The current templates are a foundation and the roadmap is still in progress.
