import { Router, Request, Response } from 'express';
import { User } from '../models/user.model';

const router = Router();
// Get One
router.get('/', (req: Request, res: Response<User>) => {
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
// Create One

// Update One

// Delete One

export default router;
