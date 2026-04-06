import { UserModel } from "../models/user.model";

export interface UserRecord {
  id: string;
  email: string;
  password: string;
  role: "owner" | "analyst" | "viewer";
}

export async function findUserByEmail(email: string): Promise<UserRecord | undefined> {
  const user = await UserModel.findOne({ email: email.toLowerCase() }).lean();

  if (!user) return undefined;

  return {
    id: user._id.toString(),
    email: user.email,
    password: user.password,
    role: user.role,
  };
}

export async function createUserRecord(
  input: Omit<UserRecord, "id">
): Promise<UserRecord> {
  const user = await UserModel.create({
    email: input.email.toLowerCase(),
    password: input.password,
    role: input.role,
  });

  return {
    id: user._id.toString(),
    email: user.email,
    password: user.password,
    role: user.role,
  };
}

export async function findUserById(id: string): Promise<UserRecord | undefined> {
  const user = await UserModel.findById(id).lean();

  if (!user) return undefined;

  return {
    id: user._id.toString(),
    email: user.email,
    password: user.password,
    role: user.role,
  };
}
