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
    active: true,
    deleted: false,
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
router.get('/:id', UserController.getUser);

// Create One
router.post('/new', UserController.createUser);

// Update One

// Delete One

export default router;
