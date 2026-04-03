import type { Request, Response } from 'express';
import { mapperKey, type MappedRequest, type RequestMapper } from 'route-toolkit';
import { DemoRemoteEndpoints } from '../endpoints.js';
import type z from 'zod';
import type { DemoPutUpdateGreetingBodySchema } from '../schemas.js';

const requestMappers: Record<string, RequestMapper> = {
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

export function mapRequest(req: Request, res: Response): MappedRequest | undefined {
  const { method, remoteEndpoint } = res.locals.routeConfig;
  const mapper = remoteEndpoint ? requestMappers[mapperKey(method, remoteEndpoint)] : undefined;
  return mapper?.(req, res);
}
