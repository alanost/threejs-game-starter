/**
 * Shared types for the game.
 * Add your interfaces, type aliases, and enums here.
 */

/** Possible game states */
export type GameState = 'menu' | 'playing' | 'paused' | 'gameover';

/** Core game configuration */
export interface GameConfig {
  width: number;
  height: number;
  pixelRatio: number;
  debug: boolean;
}

/** Per-frame timing info passed to update functions */
export interface FrameInfo {
  delta: number;
  elapsed: number;
}
