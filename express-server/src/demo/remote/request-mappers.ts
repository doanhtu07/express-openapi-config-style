import { mapperKey, type RequestMapper } from 'route-toolkit';
import { DemoRemoteEndpoints } from '../endpoints.js';
import type z from 'zod';
import type { DemoPutUpdateGreetingBodySchema } from '../schemas.js';

export const requestMappers: Record<string, RequestMapper> = {
  [mapperKey('GET', DemoRemoteEndpoints.greeting)]: () => {
    return {};
  },
  [mapperKey('PUT', DemoRemoteEndpoints.greeting)]: (req) => {
    const body = req.body as z.infer<typeof DemoPutUpdateGreetingBodySchema>;

    return {
      data: body,
    };
  },
};
