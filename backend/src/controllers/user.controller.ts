import { NextFunction, Request, Response } from 'express';
import UserModel, { IUserModel } from '../models/user.model';
import bcryptjs from 'bcryptjs';
import mongoose from 'mongoose';

const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const newUser: { email: string; password: string } = new UserModel(req.body);
    const { email, password } = req.body;

    // encrpt password
    bcryptjs.hash(password, 10, (err, hash) => {
      // create newUser obj
      const newUser: IUserModel = new UserModel({
        _id: new mongoose.Types.ObjectId(),
        email: email,
        password: hash,
        active: false,
      });

      // save user to db
      newUser.save().then((user) => {
        res.status(201).json({ user });
      });
    });
  } catch (error) {
    next(error);
  }
};

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

export default { createUser, getUser, registerUser };
