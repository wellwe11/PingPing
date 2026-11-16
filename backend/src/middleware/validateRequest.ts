import type { Request, Response, NextFunction } from 'express';

import { type z as typeZ, z } from 'zod';

export const validateRequest = (schema: typeZ.ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        responseTime: 0,
        error: z.flattenError(result.error).fieldErrors,
      });
    }

    req.body = result.data;
    next();
  };
};
