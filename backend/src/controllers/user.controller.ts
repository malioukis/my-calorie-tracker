import { Request, Response, NextFunction } from 'express';
import UserModel from '../models/user.model';
import mongoose from 'mongoose';
const createUser = (req: Request, res: Response, next: NextFunction) => {
  const { firstName } = req.body;

  const user = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    firstName,
  });
  return user
    .save()
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => res.status(500).json({ error }));
};
const getUser = (req: Request, res: Response, next: NextFunction) => {};
const getAllUsers = (req: Request, res: Response, next: NextFunction) => {};
const updateUser = (req: Request, res: Response, next: NextFunction) => {};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {};

export default { createUser };
