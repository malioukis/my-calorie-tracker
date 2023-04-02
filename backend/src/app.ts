import express, { Application, Request, Response } from 'express';
import usersRoute from './routes/users.route';
import cors from 'cors';

const app: Application = express();

// app.use(cors());

app.use('/api/user', usersRoute);

export default app;
