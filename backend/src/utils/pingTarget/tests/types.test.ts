import { describe, vi, it, expect } from 'vitest';
import { pingTarget } from '../pingTarget.ts';

describe('pingTarget types', () => {
  it('returns correct types on success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      status: 200,
      ok: true,
    } as Response);

    const result = await pingTarget('https://google.come');

    expect(typeof result.success).toBe('boolean');
    expect(typeof result.status).toBe('number');
    expect(typeof result.responseTime).toBe('number');
  });

  it('returns correct types on failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      status: 500,
      ok: false,
    } as Response);

    const result = await pingTarget('https://api.example.com/error');

    expect(typeof result.success).toBe('boolean');
    expect(typeof result.status).toBe('number');
    expect(typeof result.responseTime).toBe('number');
  });

  it('returns correct types on network failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValueOnce(
      new Error('Network error')
    );

    const result = await pingTarget(
      'https://api.nonexistentdomain12345.internal'
    );

    expect(typeof result.responseTime).toBe('number');
    expect(typeof result.success).toBe('boolean');
    expect(typeof result.err).toBe('string');
  });
});
