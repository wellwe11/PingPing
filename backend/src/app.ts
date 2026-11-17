import express from 'express';

import { errorHandler } from '@/middleware/errorHandler.ts';

import { rootRoutes, healthRoutes } from '@/routes/index.ts';

const app = express();

app.use(express.json());

app.use('/api', rootRoutes);
app.use('/api/health', healthRoutes);

app.use(errorHandler);

export default app;
