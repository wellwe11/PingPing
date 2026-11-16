import express from 'express';
import { errorHandler } from './middleware/errorHandler.ts';

import rootRoutes from './routes/root/root.routes.ts';
import healthRoutes from './routes/health/health.routes.ts';

const app = express();

app.use(express.json());

app.use('/', rootRoutes);
app.use('/api/health', healthRoutes);

app.use(errorHandler);

export default app;
