import mongoose from 'mongoose';
import { config } from './config/config';
import logger from './utils/logger';
import http from 'http';
import { app } from './app';

// Connect to MongoDB and then start server

const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongo.url, {
      retryWrites: true,
      writeConcern: { w: 'majority' },
      authSource: 'admin',
      dbName: config.mongo.database,
    });
    logger.info('CONNECTED TO DB');
    startServer();
  } catch (error) {
    logger.error(error);
  }
};

const startServer = () => {
  http
    .createServer(app)
    .listen(config.server.port, () =>
      logger.info(`Server is running on port ${config.server.port}`)
    );
};

connectToDatabase();
