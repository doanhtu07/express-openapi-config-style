import type { ApiConfig } from '../utils/api-config.ts';

declare global {
  namespace Express {
    interface Locals {
      routeConfig: ApiConfig;
    }
  }
}
