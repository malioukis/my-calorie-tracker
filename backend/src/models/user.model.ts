import { HealthMetrics } from './health-metrics.model';

export interface User {
  firstName: string;
  lastName: string;
  active: boolean;
  creationDate?: Date;
  inactiveDate?: Date;
  email: string;
  userHealthMetrics: HealthMetrics;
}
