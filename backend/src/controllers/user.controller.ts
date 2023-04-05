import { NextFunction, Request, Response } from 'express';
import UserModel, { IUserModel } from '../models/user.model';
import bcryptjs from 'bcryptjs';

const registerUser = (req: Request, res: Response, next: NextFunction) => {
  // const newUser: { email: string; password: string } = new UserModel(req.body);
  const { email, password } = req.body;
  bcryptjs.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ message: err.message, error: err });
    }
    //wip:write
    // add user to db
  });
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
