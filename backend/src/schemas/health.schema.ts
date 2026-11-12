import { z } from 'zod';

export const pingSchema = z.object({
  url: z.url(),
});
