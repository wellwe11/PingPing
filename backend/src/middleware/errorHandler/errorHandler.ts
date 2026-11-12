import type { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);

  return res.status(500).json({
    success: false,
    error: 'Internal server error',
  });
};

/**
import express from 'express';
import { errorHandler } from './middleware/errorHandler.ts';

const app = express();
app.use(express.json());

// Routes
...


// errorHandler
app.use(errorHandler);

export default app;
 */
