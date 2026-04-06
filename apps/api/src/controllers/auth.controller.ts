import { Request, Response, NextFunction } from "express";
import { loginUser, registerUser } from "../services/auth.service";
import { signToken } from "../utils/jwt";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password } = req.body;

    const user = await registerUser({ email, password });

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    res.status(201).json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        token,
      },
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function login(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { email, password } = req.body;

    const user = await loginUser({ email, password });

    const token = signToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    res.status(200).json({
      success: true,
      data: {
        ...user,
        token,
      },
      message: "Login successful",
    });
  } catch (error) {
    next(error);
  }
}
