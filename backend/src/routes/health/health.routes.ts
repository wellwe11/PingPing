/**
 * A health route designed to ping essential endpoints and provide the return as feedback
 */

import { Router } from 'express';
import { handlePing } from '../../controllers/handlePing/handlePing.ts';
import { validateRequest } from '../../middleware/validateRequest.ts';
import { pingSchema } from '../../schemas/health.schema.ts';

const router = Router();

// router.get('/', (req, res) => {
//   res.status(200).json({
//     success:
//     message:
//   });
// });

router.post('/ping', validateRequest(pingSchema), handlePing);

export default router;
