import { generateOpenApiSpec } from 'route-toolkit';
import { appRoutes } from '../src/app-routes.js';

generateOpenApiSpec(appRoutes);
