import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { writeFileSync } from 'node:fs';
import { openapiRegistry, registerOpenApiRoutes, type ApiConfigCollection } from 'route-toolkit';
import { appRoutes } from '../src/app-routes.js';

export function generateOpenApiSpec(routes: ApiConfigCollection): void {
  registerOpenApiRoutes(routes);

  const generator = new OpenApiGeneratorV31(openapiRegistry.definitions);

  const spec = generator.generateDocument({
    openapi: '3.1.0',
    info: {
      title: 'Express Server API',
      version: '1.0.0',
    },
  });

  writeFileSync('./openapi.json', JSON.stringify(spec, null, 2), 'utf-8');

  console.info('[openapi] spec written to openapi.json');
}

generateOpenApiSpec(appRoutes);
