import app from './app';
import mongoose from 'mongoose';
import { config } from './config/config';
import express from 'express';
import logger from './utils/logger';
const router = express();

// Connect to MongoDB
mongoose
  .connect(config.mongo.url, {
    retryWrites: true,
    writeConcern: { w: 'majority' },
    authSource: 'admin',
  })
  .then(() => {
    // TODO BETTER ERROR LOGGING
    logger.info('CONNECTED TO DB');
  })
  .catch((error) => {
    logger.error(error);
  });
