import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  userName: string;
  password: string;
  email: string;
}

const userSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model<IUser>("User", userSchema);

export default User;
