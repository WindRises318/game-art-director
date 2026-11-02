# Codex Cloud: GitHub-first development

This repository is the **toolchain/source repo**, not a single game's art workspace. For each real game, use a separate repository or an explicitly authorized sibling directory.

## Initial setup

1. Connect this GitHub repository in Codex Cloud and create a cloud environment.
2. Configure Node.js (>=20). No API keys are required to run the repository's smoke tests.
3. Publish the cloud environment after verifying repository access.
4. Use branches and pull requests for improvements. Cloud tasks do not automatically share uncommitted files.

## Suggested first cloud task

```text
Read AGENTS.md, README.zh-CN.md, docs/ROADMAP.md, and
.agents/skills/game-art-director/SKILL.md.
Run npm test. If dependencies or template files are missing, restore them
and make CI pass before implementing new features.
Then define provider-neutral image.generate/image.edit TypeScript contracts,
mock adapters, capability detection and tests. Do not trigger paid model requests.
Submit a small PR with actual test results and no secrets.
```

## Boundaries

- The environment can only read granted repositories and resources, not GDD files from the user's local Windows laptop.
- Never commit user-owned game content, API keys, reference artwork or unpublished assets into this public source repository.
- Keep the source repo and each game's art workspace separate.
- Store large binary art separately or use Git LFS when appropriate.

Official reference: https://help.openai.com/en/articles/20001545-using-codex-cloud
