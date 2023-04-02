import { Request, Response, NextFunction } from 'express';
import UserModel, { IUserModel } from '../models/user.model';
import mongoose from 'mongoose';
import logger from '../utils/logger';

const createUser = (req: Request, res: Response, next: NextFunction) => {
  const newUser: IUserModel = new UserModel(req.body);
  newUser
    .save()
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => res.status(500).json({ error }));
};

const getUser = (req: Request, res: Response) => {
  UserModel.findById(req.params.id)
    .then((user) =>
      user
        ? res.status(201).json({ author: user, message: 'Deleted!' })
        : res.status(404).json({ message: 'not found' })
    )
    .catch((error) => res.status(500).json({ error }));
};

const updateUser = (req: Request, res: Response, next: NextFunction) => {};
const deleteUser = (req: Request, res: Response, next: NextFunction) => {
  const newUser: IUserModel = new UserModel(req.body);
  newUser
    .save()
    .then((user) => {
      res.status(201).json({ user });
    })
    .catch((error) => res.status(500).json({ error }));
};

export default { createUser, getUser };
