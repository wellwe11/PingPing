import express from 'express';

const app = express();

app.use(express.json());

// app.use('api/health', healthRoutes);

export default app;
