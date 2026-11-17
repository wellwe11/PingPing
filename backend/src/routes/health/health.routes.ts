/**
 * A health route designed to ping essential endpoints and provide the return as feedback
 */

import { Router } from 'express';

import { handlePing } from '@/controllers/index.ts';
import { pingSchema } from '@/schemas/index.ts';
import { validateRequest } from '@/middleware/index.ts';

const router = Router();

// router.get('/', (req, res) => {
//   res.status(200).json({
//     success:
//     message:
//   });
// });

router.post('/ping', validateRequest(pingSchema), handlePing);

export default router;
