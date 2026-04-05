import express, { type Application } from 'express';
import type { ApiConfigCollection } from '../api/api-config.js';
import { injectRouteContext } from './route-context.js';
import { registerOpenApiRoutes } from '../openapi/register-openapi-routes.js';

export function registerRoutes(app: Application, routes: ApiConfigCollection): void {
  for (const route of routes) {
    const { endpoint, method, middlewares = [], handler } = route;

    app[method.toLowerCase() as Lowercase<typeof method>](
      endpoint,
      injectRouteContext(route),
      express.json(),
      ...middlewares,
      handler,
    );

    console.info(`[router] ${method} ${endpoint}`);
  }

  registerOpenApiRoutes(routes);
}
