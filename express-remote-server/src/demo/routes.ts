import type z from 'zod';
import { GreetingResultSchema } from './schemas.js';
import type { ApiConfigCollection } from 'route-toolkit';

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
    operationId: 'getGreeting',
  },
];
