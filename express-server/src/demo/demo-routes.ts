import type { ApiConfigCollection } from '../utils/api-config.js';
import { demoRemoteResolver } from './remote/resolver.js';
import { GreetingResultSchema } from './schemas.js';

export const demoRoutes: ApiConfigCollection = [
  {
    endpoint: '/test-remote',
    remoteEndpoint: '/greeting',
    method: 'GET',
    handler: demoRemoteResolver,
    resultSchema: GreetingResultSchema,
  },
];
