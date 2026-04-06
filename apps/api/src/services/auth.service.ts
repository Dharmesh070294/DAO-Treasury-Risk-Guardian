import bcrypt from "bcrypt";
import { AppError } from "../utils/app-error";
import {
  createUserRecord,
  findUserByEmail,
  UserRecord,
} from "../repositories/user.repository";

const SALT_ROUNDS = 10;

export async function registerUser(input: {
  email: string;
  password: string;
}): Promise<UserRecord> {
  const existingUser = await findUserByEmail(input.email);

  if (existingUser) {
    throw new AppError("User already exists", 409);
  }

  const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);

  const newUser = await createUserRecord({
    email: input.email,
    password: hashedPassword,
    role: "owner",
  });

  return newUser;
}

export async function loginUser(input: {
  email: string;
  password: string;
}): Promise<Omit<UserRecord, "password">> {
  const user = await findUserByEmail(input.email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isPasswordValid = await bcrypt.compare(input.password, user.password);

  if (!isPasswordValid) {
    throw new AppError("Invalid email or password", 401);
  }

  const { password, ...safeUser } = user;
  return safeUser;
}
