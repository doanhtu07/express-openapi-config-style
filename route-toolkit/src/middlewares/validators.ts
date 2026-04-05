import type { RequestHandler } from 'express';
import type { ApiConfig } from '../api/api-config.js';

export function validateBody(): RequestHandler {
  return (req, res, next) => {
    const config = res.locals.routeConfig as ApiConfig;

    if (!config.bodySchema) return next();

    const result = config.bodySchema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid request body',
        issues: result.error.issues,
      });

      return;
    }

    next();
  };
}

export function validateParams(): RequestHandler {
  return (req, res, next) => {
    const config = res.locals.routeConfig as ApiConfig;

    if (!config.paramsSchema) return next();

    const result = config.paramsSchema.safeParse(req.params);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid URL parameters',
        issues: result.error.issues,
      });

      return;
    }

    next();
  };
}

export function validateQuery(): RequestHandler {
  return (req, res, next) => {
    const config = res.locals.routeConfig as ApiConfig;

    if (!config.querySchema) return next();

    const result = config.querySchema.safeParse(req.query);

    if (!result.success) {
      res.status(400).json({
        error: 'Invalid query parameters',
        issues: result.error.issues,
      });

      return;
    }

    next();
  };
}
