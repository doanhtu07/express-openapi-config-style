import type { Application } from 'express';
import type { ApiConfigCollection } from './api-config.js';
import { injectRouteContext } from './route-context.js';
import { registerOpenApiRoutes } from './register-openapi-routes.js';

export function registerRoutes(app: Application, routes: ApiConfigCollection): void {
  for (const route of routes) {
    const { endpoint, method, middlewares = [], handler } = route;

    // 1. Mount on Express
    app[method.toLowerCase() as Lowercase<typeof method>](
      endpoint,
      injectRouteContext(route),
      ...middlewares,
      handler,
    );

    console.info(`[router] ${method} ${endpoint}`);
  }

  registerOpenApiRoutes(routes);
}
