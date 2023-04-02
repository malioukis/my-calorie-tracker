import { HealthMetrics } from './health-metrics.model';
import mongoose, { Document, Schema } from 'mongoose';
export interface IUser {
  firstName: string;
  lastName: string;
  active: boolean;
  deleted: boolean;
  email: string;
  userHealthMetrics?: HealthMetrics;
}
// for client requests
export interface IUserModel extends IUser, Document {}

const UserSchema: Schema = new Schema<IUserModel>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model<IUserModel>('User', UserSchema);
