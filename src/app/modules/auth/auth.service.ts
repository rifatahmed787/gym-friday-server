import bcrypt from "bcrypt";
import { IRegisterUser } from "./auth.interface";
import User from "./auth.model";

const registerUser = async (
  user: IRegisterUser
): Promise<IRegisterUser | null> => {
  const { userName, password, email } = user;

  // Check if the required fields are provided
  if (!userName || !password || !email) {
    throw new Error("Username, password, and email are required.");
  }

  // Check if the user already exists
  const existingUser = await User.findOne({ userName });
  if (existingUser) {
    throw new Error("Username already exists.");
  }

  // Hash the password
  const hash = bcrypt.hashSync(password, 5);

  // Create a new user
  const newUser = new User({
    userName,
    password: hash,
    email,
  });

  // Save the user to the database
  await newUser.save();

  return newUser;
};

export const AuthService = {
  registerUser,
};
