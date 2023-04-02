import mongoose, { mongo } from 'mongoose';
import { config } from './config/config';
import express from 'express';
import logger from './utils/logger';
import http from 'http';
import cors from 'cors';
import IndexRoutes from './routes/index.routes';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();

/*libs*/
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);

/*Api Routes*/
app.use('/api', IndexRoutes);

/*Log HTTP*/

// Connect to MongoDB
mongoose
  .connect(config.mongo.url, {
    retryWrites: true,
    writeConcern: { w: 'majority' },
    authSource: 'admin',
    dbName: config.mongo.database,
  })
  .then(() => {
    logger.info('CONNECTED TO DB');
    //start server after connecting to db
    startServer();
  })
  .catch((error) => {
    logger.error(error);
  });

const startServer = () => {
  http
    .createServer(app)
    .listen(config.server.port, () =>
      logger.info(`Server is running on port ${config.server.port}`)
    );
};
