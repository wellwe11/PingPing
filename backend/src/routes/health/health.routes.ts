/**
 * A health route designed to ping essential endpoints and provide the return as feedback
 */

import { Router } from 'express';
import { handlePing } from '../../controllers/handlePing/handlePing.ts';

const router = Router();

// router.get('/', (req, res) => {
//   res.status(200).json({
//     success:
//     message:
//   });
// });

router.post('/ping', handlePing);

export default router;
