import type { RequestHandler } from 'express';
import type { ApiConfig } from '../api/api-config.js';

export function injectRouteContext(config: ApiConfig): RequestHandler {
  return (_req, res, next) => {
    res.locals.routeConfig = config;
    next();
  };
}
