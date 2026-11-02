# Game Art Director

**Open-source 2D game art production standards and a Codex Skill.**

[简体中文](README.zh-CN.md)

> **Early prototype (v0.1)**. This repository includes the reusable Codex Skill, workspace templates, art production rules and deterministic asset checks. It **does not** bundle an image-generation model, a production-grade art editor or a Cocos prefab generator. It cannot guarantee complete game art on its own.

## What it does today

- Discovers a game GDD and initializes a reusable `game-art/` workspace without overwriting existing project files.
- Provides specifications for 2D UI, characters, scenes, props and animation assets.
- Defines design approval checkpoints and asset metadata conventions.
- Validates file paths, image format basics, manifests and resource coverage.
- Provides a conversational Codex workflow with `$game-art-director`.

## Repository layout

```text
.agents/skills/game-art-director/
  SKILL.md
  scripts/init-workspace.mjs
  template/{docs,assets,designs,catalog,tools,...}
docs/{CODEX_CLOUD.md,ROADMAP.md}
scripts/smoke-test.mjs
.github/workflows/ci.yml
AGENTS.md
```

## Install as a Codex plugin (preview)

This repository now provides a **skills-only Plugin** with a portable manifest and a GitHub marketplace. It is not yet published in the universal Plugins Directory, and does not bundle image model tools.

```bash
codex plugin marketplace add WindRises318/game-art-director
```

Open `/plugins` in a supported Codex client, choose **game-art-director** from the newly added marketplace, and install. See [Plugin installation guide](docs/PLUGIN_INSTALL.md) for the latest instructions. The plugin package lives in `plugins/game-art-director/`; `.agents/skills/game-art-director/` remains available for direct repository use.

## Quick start in Codex

1. Open this repo in Codex or a Codex Cloud environment, and make the repository available in the task workspace.
2. Put your GDD inside a game project directory. It can be a different repository if the environment grants access to that path.
3. Invoke `$game-art-director` with a task describing the project or ask Codex to read `.agents/skills/game-art-director/SKILL.md` explicitly.
4. Review the initial visual style and sample before authorizing costly bulk generation.

The Skill can initialize a game workspace with:

```bash
node .agents/skills/game-art-director/scripts/init-workspace.mjs --target /path/to/project/game-art --gdd /path/to/project/GDD.md
```

To check the new workspace:

```bash
cd /path/to/project/game-art
npm run validate
npm run coverage
```

## Tests

```bash
npm test
```

## Development plan

See [Roadmap](docs/ROADMAP.md) and [Codex Cloud guide](docs/CODEX_CLOUD.md).

## License

[MIT](LICENSE). Third-party image model APIs, artwork, fonts, and resources remain subject to their own terms and licenses.
