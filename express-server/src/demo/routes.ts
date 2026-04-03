import { validateBody, type ApiConfigCollection } from 'route-toolkit';
import { demoRemoteResolver } from './remote/resolver.js';
import {
  DemoGetGreetingResultSchema,
  DemoPutUpdateGreetingBodySchema,
  DemoPutUpdateGreetingResultSchema,
} from './schemas.js';
import { DemoLocalEndpoints, DemoRemoteEndpoints } from './endpoints.js';
import { IdRepository } from './id-repository.js';

export const demoRoutes: ApiConfigCollection = [
  {
    endpoint: DemoLocalEndpoints.getGreeting,
    remoteEndpoint: DemoRemoteEndpoints.greeting,
    method: 'GET',
    handler: demoRemoteResolver,
    resultSchema: DemoGetGreetingResultSchema,
    operationId: IdRepository.operationIds.getGreeting,
  },
  {
    endpoint: DemoLocalEndpoints.updateGreeting,
    remoteEndpoint: DemoRemoteEndpoints.greeting,
    method: 'PUT',
    middlewares: [validateBody()],
    handler: demoRemoteResolver,
    bodySchema: DemoPutUpdateGreetingBodySchema,
    resultSchema: DemoPutUpdateGreetingResultSchema,
    operationId: IdRepository.operationIds.updateGreeting,
  },
];
