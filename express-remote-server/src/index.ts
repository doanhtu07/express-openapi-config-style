import express from 'express';
import dotenv from 'dotenv';
import { registerRoutes } from './utils/register-routes.js';
import { demoRoutes } from './demo/routes.js';

dotenv.config();

const PORT = process.env.PORT;

const app = express();

registerRoutes(app, demoRoutes);

app
  .listen(PORT, () => {
    console.info('Server running at PORT:', PORT);
  })
  .on('error', (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
