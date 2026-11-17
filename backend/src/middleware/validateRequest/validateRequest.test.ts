import { describe, expect, it, vi } from 'vitest';
import z from 'zod';
import type { Request, Response } from 'express';

import { validateRequest } from './validateRequest.ts';

describe('validateRequest', () => {
  it('calls next when the request body is valid', () => {
    const schema = z.object({
      name: z.string(),
    });

    const req = { body: { name: 'PingPing' } } as Request;
    const res = {} as Response;
    const next = vi.fn();

    validateRequest(schema)(req, res, next);

    expect(next).toHaveBeenCalledOnce();
  });

  it('replaces req.body with the parsed data', () => {
    const schema = z.object({
      count: z.coerce.number(),
    });

    const req = { body: { count: 5 } } as Request;
    const res = {} as Response;
    const next = vi.fn();

    validateRequest(schema)(req, res, next);

    expect(req.body).toEqual({ count: 5 });
    expect(next).toHaveBeenCalledOnce();
  });

  it('returns 400 when the request body is invalid', () => {
    const schema = z.object({
      name: z.string(),
    });

    const req = { body: { name: 123 } } as Request;
    const json = vi.fn();
    const status = vi.fn().mockReturnValue({ json });
    const res = { status } as unknown as Response;
    const next = vi.fn();

    validateRequest(schema)(req, res, next);

    expect(status).toHaveBeenCalledWith(400);
    expect(json).toHaveBeenCalledWith({
      success: false,
      responseTime: 0,
      error: {
        name: expect.any(Array),
      },
    });

    expect(next).not.toHaveBeenCalled();
  });
});
