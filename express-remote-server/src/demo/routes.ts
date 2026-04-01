import type z from 'zod';
import type { ApiConfigCollection } from '../utils/api-config.js';
import { GreetingResultSchema } from './schemas.js';

export const demoRoutes: ApiConfigCollection = [
  {
    endpoint: '/greeting',
    method: 'GET',
    handler: (req, res) => {
      res.json({
        greeting: 'Hello from the remote server!',
      } as z.infer<typeof GreetingResultSchema>);
    },
    resultSchema: GreetingResultSchema,
  },
];
