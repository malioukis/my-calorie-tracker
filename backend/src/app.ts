import express, { NextFunction, Request, Response } from 'express';

import cors from 'cors';
import IndexRoutes from './routes/index.routes';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middlewares/error-handler';

const app = express();

/*libs*/
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms')
);
// Add the error handler middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler(err, req, res, next);
});

/*Api Routes*/
app.use('/api', IndexRoutes);

/*Log HTTP*/

export { app };
