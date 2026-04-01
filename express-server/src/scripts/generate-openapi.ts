import { OpenApiGeneratorV31 } from '@asteasolutions/zod-to-openapi';
import { writeFileSync } from 'node:fs';
import { openapiRegistry } from '../utils/openapi-registry.js';
import { demoRoutes } from '../demo/routes.js';
import { registerOpenApiRoutes } from '../utils/register-openapi-routes.js';

registerOpenApiRoutes(demoRoutes);

export function generateOpenApiSpec(): void {
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

generateOpenApiSpec();
