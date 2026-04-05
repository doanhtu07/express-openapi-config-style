import type z from 'zod';
import type {
  DemoGetGreetingRemoteResultSchema,
  DemoGetGreetingResultSchema,
  DemoPutUpdateGreetingResultSchema,
} from '../schemas.js';
import { mapperKey, type ResponseMapper } from 'route-toolkit';
import { DemoRemoteEndpoints } from '../endpoints.js';

export const responseMappers: Record<string, ResponseMapper> = {
  [mapperKey('GET', DemoRemoteEndpoints.greeting)]: (
    req,
    res,
    data,
  ): z.infer<typeof DemoGetGreetingResultSchema> => {
    // You can check for other subcases using things like endpoint, ...
    // const { endpoint } = res.locals.routeConfig;

    const d = data as z.infer<typeof DemoGetGreetingRemoteResultSchema>;
    return { message: d.greeting };
  },
  [mapperKey('PUT', DemoRemoteEndpoints.greeting)]: (
    req,
    res,
    data,
  ): z.infer<typeof DemoPutUpdateGreetingResultSchema> => {
    const d = data as z.infer<typeof DemoPutUpdateGreetingResultSchema>;
    return d;
  },
};
