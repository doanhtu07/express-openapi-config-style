import type { RequestHandler } from 'express';
import type { ZodObject } from 'zod';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';

export type ApiConfig = {
  endpoint: string;
  remoteEndpoint?: string;

  method: HttpMethod;
  middlewares?: RequestHandler[]; // auth, cache, validation, etc.

  handler: RequestHandler;
  bodySchema?: ZodObject;
  paramsSchema?: ZodObject;
  querySchema?: ZodObject;
  resultSchema?: ZodObject;
};

export type ApiConfigCollection = ApiConfig[];
