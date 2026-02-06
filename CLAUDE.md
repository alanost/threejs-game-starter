# CLAUDE.md

## Overview

Three.js game starter template. Vite + TypeScript (strict) + Vitest + ESLint + Prettier — ready to build any browser game.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server with HMR (port 3000)
npm run build        # Type-check + production build to dist/
npm run preview      # Preview production build locally
npm run format       # Format code with Prettier
npm run format:check # Check formatting (CI)
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run test         # Run Vitest (single run)
npm run test:watch   # Run Vitest in watch mode
npm run typecheck    # Type-check without emitting
```

## Architecture

```
src/
  main.ts        — Entry point: scene setup, game loop, rendering
  types.ts       — Shared types, interfaces, enums
tests/
  *.test.ts      — Unit tests (Vitest)
index.html       — Vite entry point (minimal, just loads main.ts)
```

Add modules as the game grows (e.g. `input.ts`, `player.ts`, `world.ts`, `ui.ts`, `audio.ts`). Keep each file focused on one responsibility.

**Key principle:** Separate pure logic from rendering. Math, stats, state transitions, and game rules should live in modules with zero DOM/Three.js dependencies — this makes them fully testable with Vitest.

## Conventions

- `import * as THREE from 'three'` — Three.js via npm
- `import { ... } from 'three/addons/...'` — Three.js addons
- `@/` path alias resolves to `src/`
- TypeScript strict mode — no `any`
- `prefer-const`, `eqeqeq`, no `var`
- Cap `requestAnimationFrame` delta: `Math.min(delta, 0.05)`

## Three.js Skills

Included skills from [cloudai-x/threejs-skills](https://github.com/cloudai-x/threejs-skills). Load the relevant skills before writing Three.js code:

| Skill | Use for |
|-------|---------|
| `threejs-fundamentals` | Scene, camera, renderer, transforms |
| `threejs-geometry` | Shapes, BufferGeometry, instancing |
| `threejs-materials` | PBR, toon shading, material config |
| `threejs-lighting` | Lights, shadows, environment lighting |
| `threejs-textures` | Texture loading, UV mapping, env maps |
| `threejs-animation` | Keyframe, skeletal, morph targets |
| `threejs-interaction` | Raycasting, controls, mouse/touch |
| `threejs-loaders` | GLTF models, textures, assets |
| `threejs-shaders` | Custom GLSL, ShaderMaterial |
| `threejs-postprocessing` | Bloom, DOF, EffectComposer |

## Testing

- Tests in `tests/`, files end with `.test.ts`
- All pure game logic must have test coverage
- Mock Three.js renderer and DOM calls in tests
- Bug fix workflow: write a failing test first, then fix

## Debugging Workflow

1. `npm run typecheck` — catch type errors
2. `npm run lint` — catch code quality issues
3. `npm run test` — run tests, locate failures
4. `npm run dev` — check browser console for runtime errors

## Gotchas

- Three.js addon imports need `.js` extension even in TypeScript
- Dispose geometries, materials, and textures when removing objects (memory leaks)
- Web Audio API requires a user gesture before `AudioContext` can start
