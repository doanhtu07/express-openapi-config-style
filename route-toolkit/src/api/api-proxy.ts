import axios, { type RawAxiosRequestHeaders } from 'axios';
import type { MappedRequest, ParamsDictionary } from './api-mapper.js';
import type { HttpMethod } from './api-config.js';

function interpolateParams(endpoint: string, params?: ParamsDictionary): string {
  if (!params) return endpoint;

  return Object.entries(params).reduce((url, [key, value]) => {
    // Absorb the array type
    // - In case of params /path/:id/:something, each param slot only receives one meaningful value anyway
    const resolved = Array.isArray(value) ? value[0] || '' : value;
    return url.replace(`:${key}`, encodeURIComponent(resolved));
  }, endpoint);
}

export async function proxyRequest<T>(input: {
  baseUrl: string;
  remoteEndpoint: string;
  method: HttpMethod;
  mappedRequest?: MappedRequest;
  headers?: RawAxiosRequestHeaders;
}): Promise<T> {
  const { baseUrl, remoteEndpoint, method, mappedRequest, headers } = input;

  const remotePath = interpolateParams(remoteEndpoint, mappedRequest?.params);

  const response = await axios(`${baseUrl}${remotePath}`, {
    method,
    headers: { 'Content-Type': 'application/json', ...headers },
    params: mappedRequest?.query,
    data: mappedRequest?.data,
  });

  return response.data;
}
