import { Router, Request, Response } from 'express';
import { IUser } from '../models/user.model';
import UserController from '../controllers/user.controller';

const router = Router();
// test
router.get('/test', (req: Request, res: Response<IUser>) => {
  res.json({
    email: 'admin@admin.com',
    firstName: 'admin',
    lastName: 'adminakis',
    creationDate: undefined,
    inactiveDate: undefined,
    active: true,
    userHealthMetrics: {
      weightKg: 22,
      heightCm: 180,
      activityLevel: 1,
    },
  });
});

// Get All
// router.get('/', UserController.findOne());

// Get One
// router.get('/', UserController.findOne());

// Create One
router.post('/new', UserController.createUser);

// Update One

// Delete One

export default router;
