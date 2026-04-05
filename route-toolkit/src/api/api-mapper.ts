import type { Request, Response } from 'express';
import type { HttpMethod } from './api-config.js';

export interface ParamsDictionary {
  [key: string]: string | string[];
  [key: number]: string;
}

export interface ParsedQs {
  [key: string]: undefined | string | ParsedQs | (string | ParsedQs)[];
}

export type MappedRequest = {
  data?: unknown;
  params?: ParamsDictionary;
  query?: ParsedQs;
};

export type RequestMapper = (req: Request, res: Response) => MappedRequest;
export type ResponseMapper = (req: Request, res: Response, data: unknown) => unknown;

export function mapperKey(method: HttpMethod, remoteEndpoint: string): string {
  return `${method}|${remoteEndpoint}`;
}

export function mapRequest(input: {
  req: Request;
  res: Response;
  requestMappers: Record<string, RequestMapper>;
}): MappedRequest | undefined {
  const { req, res, requestMappers } = input;

  const { method, remoteEndpoint } = res.locals.routeConfig;
  const mapper = remoteEndpoint ? requestMappers[mapperKey(method, remoteEndpoint)] : undefined;

  return (
    mapper?.(req, res) || {
      data: req.body,
      params: req.params,
      query: req.query,
    }
  );
}

export function mapResponse(input: {
  req: Request;
  res: Response;
  data: unknown;
  responseMappers: Record<string, ResponseMapper>;
}): unknown {
  const { req, res, data, responseMappers } = input;
  const { method, remoteEndpoint } = res.locals.routeConfig;
  const mapper = remoteEndpoint ? responseMappers[mapperKey(method, remoteEndpoint)] : undefined;
  return mapper?.(req, res, data) || data;
}
