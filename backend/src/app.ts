import express from 'express';

const app = express();

app.use(express.json());

// TODO:
// app.use('api/health', healthRoutes);
// app.use(errorHandler)

export default app;
