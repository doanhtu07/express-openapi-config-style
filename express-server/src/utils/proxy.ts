import axios from 'axios';
import type { MappedRequest } from './api-mapper.js';

function interpolateParams(endpoint: string, params?: Record<string, string>): string {
  if (!params) return endpoint;

  return Object.entries(params).reduce(
    (url, [key, value]) => url.replace(`:${key}`, encodeURIComponent(value)),
    endpoint,
  );
}

export async function proxyRequest<T>(
  baseUrl: string,
  remoteEndpoint: string,
  method: string,
  mapped?: MappedRequest,
): Promise<T> {
  const url = interpolateParams(remoteEndpoint, mapped?.params);

  const response = await axios(`${baseUrl}${url}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    params: mapped?.query,
    data: mapped?.data,
  });

  return response.data;
}
