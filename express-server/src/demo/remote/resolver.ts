import type { RequestHandler } from 'express';
import { mapRequest, mapResponse, proxyRequest } from 'route-toolkit';
import { requestMappers } from './request-mappers.js';
import { responseMappers } from './response-mappers.js';

export const demoRemoteResolver: RequestHandler = async (req, res, next) => {
  try {
    const { remoteEndpoint, method } = res.locals.routeConfig;

    if (!remoteEndpoint) {
      res.status(501).json({ error: 'No remoteEndpoint configured' });
      return;
    }

    const mappedInput = mapRequest({ req, res, requestMappers });

    const remoteBaseUrl = 'http://localhost:4000';
    const remoteData = await proxyRequest({
      baseUrl: remoteBaseUrl,
      remoteEndpoint,
      method,
      mappedRequest: mappedInput,
    });

    const mappedOutput = mapResponse({ req, res, data: remoteData, responseMappers });

    res.status(200).json(mappedOutput);
  } catch (err) {
    next(err);
  }
};
