import { HealthMetrics } from './health-metrics.model';
import mongoose, { Document, Schema } from 'mongoose';
export interface IUser {
  firstName: string;
  lastName: string;
  active: boolean;
  creationDate?: Date;
  inactiveDate?: Date;
  email: string;
  userHealthMetrics: HealthMetrics;
}
// for client requests
export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
});

export default mongoose.model<IUserModel>('User', UserSchema);
