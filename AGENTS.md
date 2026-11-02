# Codex repo instructions for Game Art Director

You are editing the open-source Game Art Director toolchain, not producing assets for a specific game by default.

- Read `README.zh-CN.md`, `docs/ROADMAP.md`, and the target source files before changing behavior.
- The reusable Skill lives in `.agents/skills/game-art-director/`.
- Workspace templates and production rules live under `.agents/skills/game-art-director/template/`.
- Do not claim missing image generation, segmentation, animation, or Cocos exporter functionality exists. Implement it with tests before documenting it as ready.
- Do not add model/API credentials to the repository, to logs, or to examples.
- Never download or use paid image models without explicit authorization. Use mocked providers for automated tests.
- Preserve user-owned workspace files and approved art revisions; changes must be incremental and reversible.
- For any modified JS file, run `npm test` and review output. Keep Node.js >=20 compatible.
- Make small, reviewable changes on branches and summarize files changed, behavior, tests, and blockers.
- This repo is a 2D-only project. Do not implement 3D features without a new requirement.
