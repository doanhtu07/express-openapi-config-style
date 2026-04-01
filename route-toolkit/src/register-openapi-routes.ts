import type { ApiConfigCollection } from './api-config.js';
import { openapiRegistry } from './openapi-registry.js';

function toOpenApiPath(endpoint: string): string {
  return endpoint.replaceAll(/:([a-zA-Z_]+)/g, '{$1}');
}

export function registerOpenApiRoutes(routes: ApiConfigCollection): void {
  for (const route of routes) {
    const { endpoint, method, bodySchema, paramsSchema, querySchema, resultSchema, operationId } =
      route;

    openapiRegistry.registerPath({
      method: method.toLowerCase() as Lowercase<typeof method>,
      path: toOpenApiPath(endpoint),

      ...(bodySchema && {
        request: {
          body: {
            content: {
              'application/json': { schema: bodySchema },
            },
          },
        },
      }),

      ...(paramsSchema && { request: { params: paramsSchema } }),
      ...(querySchema && { request: { query: querySchema } }),

      responses: {
        200: {
          description: 'OK',
          ...(resultSchema && {
            content: {
              'application/json': { schema: resultSchema },
            },
          }),
        },
      },

      operationId,
    });
  }
}
