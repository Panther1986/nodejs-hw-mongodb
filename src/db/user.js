import { model, Schema } from 'mongoose';
import { ROLE } from '../constans/index.js';

const usersShema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: ROLE.USER,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
usersShema.method.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};
export const UsersCollection = model('users', usersShema);
