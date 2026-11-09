import { describe, it, vi, expect } from 'vitest';
import { pingTarget } from '../pingTarget.ts';

describe('pingTarget status codes', () => {
  it('returns status code code on success', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      status: 200,
      ok: true,
    } as Response);

    const result = await pingTarget('https://google.come');

    expect(result.status).toBe(200);
    expect(result.success).toBe(true);
    expect(result.responseTime).toBeGreaterThanOrEqual(0);
  });

  it('returns status code 500 on failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      status: 500,
      ok: false,
    } as Response);

    const result = await pingTarget('https://api.example.com/error');

    expect(result.status).toBe(500);
    expect(result.success).toBe(false);
    expect(result.responseTime).toBeGreaterThanOrEqual(0);
  });

  it('handles 404 Not Found as failure', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce({
      status: 404,
      ok: false,
    } as Response);

    const result = await pingTarget('https://api.example.com/health');

    expect(result.success).toBe(false);
    expect(result.status).toBe(404);
    expect(result.responseTime).toBeGreaterThanOrEqual(0);
  });
});
