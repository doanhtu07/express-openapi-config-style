import type { RequestHandler } from 'express';
import { proxyRequest } from '../../utils/proxy.js';
import { mapRequest } from './request-mappers.js';
import { mapResponse } from './response-mappers.js';

export const demoRemoteResolver: RequestHandler = async (req, res, next) => {
  try {
    const { remoteEndpoint, method } = res.locals.routeConfig;

    if (!remoteEndpoint) {
      res.status(501).json({ error: 'No remoteEndpoint configured' });
      return;
    }

    const remoteBaseUrl = 'http://localhost:4000';
    const mappedInput = mapRequest(req, res);
    const remoteData = await proxyRequest(remoteBaseUrl, remoteEndpoint, method, mappedInput);
    const mappedOutput = mapResponse(req, res, remoteData);

    res.status(200).json(mappedOutput);
  } catch (err) {
    next(err);
  }
};
