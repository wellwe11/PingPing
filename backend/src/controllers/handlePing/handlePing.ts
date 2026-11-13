import type { NextFunction, Request, Response } from 'express';
import { pingSchema } from '../../schemas/health.schema.ts';
import { pingTarget } from '../../utils/index.ts';
import z from 'zod';

export interface PingReponse {
  success: boolean;
  responseTime?: number;

  status?: number | unknown;
  error?: unknown;
}

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
    });
  } catch (err) {
    next(err);
  }
};
