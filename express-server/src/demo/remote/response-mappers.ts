import type { Request, Response } from 'express';
import type z from 'zod';
import type { GreetingRemoteResultSchema, GreetingResultSchema } from '../schemas.js';
import { mapperKey, type ResponseMapper } from 'route-toolkit';

const responseMappers: Record<string, ResponseMapper> = {
  [mapperKey('GET', '/greeting')]: (req, res, data): z.infer<typeof GreetingResultSchema> => {
    // You can check for other subcases using things like endpoint, ...
    // const { endpoint } = res.locals.routeConfig;

    const d = data as z.infer<typeof GreetingRemoteResultSchema>;
    return { message: d.greeting };
  },
};

export function mapResponse(req: Request, res: Response, data: unknown): unknown {
  const { method, remoteEndpoint } = res.locals.routeConfig;
  const mapper = remoteEndpoint ? responseMappers[mapperKey(method, remoteEndpoint)] : undefined;
  return mapper?.(req, res, data) || data;
}
