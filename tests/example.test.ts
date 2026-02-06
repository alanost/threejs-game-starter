import { describe, it, expect } from 'vitest';
import type { GameState, FrameInfo } from '@/types';

describe('types', () => {
  it('GameState accepts valid states', () => {
    const states: GameState[] = ['menu', 'playing', 'paused', 'gameover'];
    expect(states).toHaveLength(4);
  });

  it('FrameInfo holds timing data', () => {
    const info: FrameInfo = { delta: 0.016, elapsed: 1.5 };
    expect(info.delta).toBeCloseTo(0.016);
    expect(info.elapsed).toBe(1.5);
  });
});
