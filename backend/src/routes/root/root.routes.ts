import { Router } from 'express';

const router = Router();

// Placeholder for now.
// TODO: real default getter for '/api/health'
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend up and running',
  });
});

export default router;
