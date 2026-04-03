import type z from 'zod';
import {
  GetGreetingResultSchema,
  PutGreetingBodySchema,
  PutGreetingResultSchema,
} from './schemas.js';
import type { ApiConfigCollection } from 'route-toolkit';
import { DemoLocalEndpoints } from './endpoints.js';
import { DemoContract } from './contract.js';

export const demoRoutes: ApiConfigCollection = [
  {
    endpoint: DemoLocalEndpoints.greeting,
    method: 'GET',
    handler: (req, res) => {
      res.json({
        greeting: 'Hello from the remote server!',
      } as z.infer<typeof GetGreetingResultSchema>);
    },
    resultSchema: GetGreetingResultSchema,
    operationId: DemoContract.operationIds.getGreeting,
  },
  {
    endpoint: DemoLocalEndpoints.greeting,
    method: 'PUT',
    handler: (req, res) => {
      const { newGreeting } = req.body as z.infer<typeof PutGreetingBodySchema>;

      res.json({
        greeting: `Updated greeting to: ${newGreeting}`,
      } as z.infer<typeof PutGreetingResultSchema>);
    },
    bodySchema: PutGreetingBodySchema,
    resultSchema: PutGreetingResultSchema,
    operationId: DemoContract.operationIds.putGreeting,
  },
];
