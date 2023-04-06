import { HealthMetrics } from './health-metrics.model';
import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
  deleted: boolean;
  userHealthMetrics?: HealthMetrics;
}

// for client requests
export interface IUserModel extends IUser, Document {}

// sets up the structure of the user object
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
// creates the user object and makes it available for use in other parts of the program.
export default mongoose.model<IUserModel>('User', UserSchema);
