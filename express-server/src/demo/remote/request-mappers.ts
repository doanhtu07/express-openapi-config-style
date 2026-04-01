import type { Request, Response } from 'express';
import { mapperKey, type MappedRequest, type RequestMapper } from '../../utils/api-mapper.js';

const requestMappers: Record<string, RequestMapper> = {
  [mapperKey('GET', '/greeting')]: () => {
    return {};
  },
};

export function mapRequest(req: Request, res: Response): MappedRequest | undefined {
  const { method, remoteEndpoint } = res.locals.routeConfig;
  const mapper = remoteEndpoint ? requestMappers[mapperKey(method, remoteEndpoint)] : undefined;
  return mapper?.(req, res);
}
