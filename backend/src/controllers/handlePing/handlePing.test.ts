import { describe, expect, it, vi, beforeEach } from 'vitest';
import type { Response, Request, NextFunction } from 'express';

import { handlePing } from './handlePing.ts';
import { pingTarget } from '../../utils/index.ts';

vi.mock('../../utils/index.ts', () => ({
  pingTarget: vi.fn(),
}));

const mockPingTarget = vi.mocked(pingTarget);

const createMocks = (body: unknown) => {
  const req = {
    body,
  } as Request;

  const res = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn().mockReturnThis(),
  } as unknown as Response;

  const next = vi.fn() as NextFunction;

  return { req, res, next };
};

describe('handlePing', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns 200 when the ping succeeds', async () => {
    mockPingTarget.mockResolvedValueOnce({
      success: true,
      responseTime: 42,
      status: 200,
    });

    const { req, res, next } = createMocks({
      url: 'https://example.com',
    });

    await handlePing(req, res, next);

    expect(mockPingTarget).toHaveBeenCalledWith('https://example.com');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      responseTime: 42,
      status: 200,
    });
    expect(next).not.toHaveBeenCalled();
  });
});
