import { Schema, model } from 'mongoose';

export interface IUser {
  name: string;
  age: number;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<IUser>('User', userSchema);
