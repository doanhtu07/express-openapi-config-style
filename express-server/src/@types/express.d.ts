import type { ApiConfig } from 'route-toolkit';

declare global {
  namespace Express {
    interface Locals {
      routeConfig: ApiConfig;
    }
  }
}
