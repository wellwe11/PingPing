import type { NextFunction, Request, Response } from 'express';
import { pingSchema } from '../../schemas/health.schema.ts';
import { pingTarget } from '../../utils/index.ts';
import z from 'zod';

export interface PingReponse {
  success: boolean;
  responseTime: number;
  error: unknown;

  status?: number | unknown;
}

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
    const result = pingSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        responseTime: 0,
        error: z.flattenError(result.error).fieldErrors,
      });
    }

    const { url } = result.data;
    const pingResponse = await pingTarget(url);

    return res.status(200).json({
      success: pingResponse.success,
      responseTime: pingResponse.responseTime,
      status: pingResponse.status,
      error: pingResponse.error,
    });
  } catch (err) {
    next(err);
  }
};
