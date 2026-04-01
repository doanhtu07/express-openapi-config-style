import express from 'express';
import dotenv from 'dotenv';
import { appRoutes } from './app-routes.js';
import { registerRoutes } from 'route-toolkit';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

registerRoutes(app, appRoutes);

app
  .listen(PORT, () => {
    console.info('Server running at PORT:', PORT);
  })
  .on('error', (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
