import type { NextFunction, Request, Response } from 'express';
import { pingTarget } from '@/utils/index.ts';

export interface PingReponse {
  success: boolean;
  responseTime: number;

  error?: unknown;
  status?: number | unknown;
}

/**
 *
 * @param req - Express request for target URL in its body.
 * @param res - Express response used to return ping result.
 * @param next - Express next function for unexptected errors.
 * @returns a JSON response containing a ping result.
 */

// Express 5 handles errors automatically.
// Whole try/catch could technically be replaced with:
// const result = await someOperation();
// return res.json(result);
// And Express will automatically handle response
// TODO: Refactor
export const handlePing = async (
  req: Request,
  res: Response<PingReponse>,
  next: NextFunction
) => {
  try {
    const { url } = req.body;
    const pingResponse = await pingTarget(url);

    return res.status(200).json(pingResponse);
  } catch (err) {
    next(err);
  }
};
