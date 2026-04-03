import type { Request, Response } from 'express';
import type z from 'zod';
import type {
  DemoGetGreetingRemoteResultSchema,
  DemoGetGreetingResultSchema,
  DemoPutUpdateGreetingResultSchema,
} from '../schemas.js';
import { mapperKey, type ResponseMapper } from 'route-toolkit';
import { DemoRemoteEndpoints } from '../endpoints.js';

const responseMappers: Record<string, ResponseMapper> = {
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

export function mapResponse(req: Request, res: Response, data: unknown): unknown {
  const { method, remoteEndpoint } = res.locals.routeConfig;
  const mapper = remoteEndpoint ? responseMappers[mapperKey(method, remoteEndpoint)] : undefined;
  return mapper?.(req, res, data) || data;
}
