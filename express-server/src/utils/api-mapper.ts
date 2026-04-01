import type { Request, Response } from 'express';
import type { HttpMethod } from './api-config.js';

export type MappedRequest = {
  data?: unknown;
  params?: Record<string, string>;
  query?: Record<string, string>;
};

export type RequestMapper = (req: Request, res: Response) => MappedRequest;
export type ResponseMapper = (req: Request, res: Response, data: unknown) => unknown;

export function mapperKey(method: HttpMethod, remoteEndpoint: string): string {
  return `${method}|${remoteEndpoint}`;
}
