import { NextFunction, Request, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import { config } from '../config/config';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  // get the second item from the split string to array by space character eg. "Bearer tokenIsHere"
  const token = req.headers.authorization?.split(' ')[1];

  // decode and verify token
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  /*
   * using a try-catch block, the code can immediately catch and handle the error if it occurs.
   * If we handle the error inside the jwt.verify callback function,
   * the error would occur asynchronously, and it would be difficult to know when and where the error occurs.
   * */
  try {
    res.locals.jwt = jwt.verify(token, config.token.secret);
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Unauthorized: Invalid token',
      error: error instanceof JsonWebTokenError,
    });
  }
};
