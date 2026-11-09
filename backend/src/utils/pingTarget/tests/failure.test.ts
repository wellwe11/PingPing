import { describe, vi, it, expect } from 'vitest';
import { pingTarget } from '../pingTarget.ts';

describe('pingTarget failure', () => {
  it('handles network failures gracefully', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(
      new Error('Network error')
    );

    const result = await pingTarget(
      'https://api.nonexistentdomain12345.internal'
    );

    expect(result.success).toBe(false);
  });
});
