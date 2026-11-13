import express from 'express';
import { errorHandler } from './middleware/errorHandler/errorHandler.ts';

const app = express();

app.use(express.json());

// TODO:
// app.use('api/health', healthRoutes);

app.use(errorHandler);

export default app;
