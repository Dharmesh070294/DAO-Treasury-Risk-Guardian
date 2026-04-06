import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/app-error";
import { verifyToken } from "../utils/jwt";
import { findUserById } from "../repositories/user.repository";

export interface AuthenticatedRequest extends Request {
  user?: {
    userId: string;
    email: string;
    role: "owner" | "analyst" | "viewer";
  };
}

export async function requireAuth(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    next(new AppError("Authorization token is required", 401));
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    const user = await findUserById(decoded.userId);

    if (!user) {
      next(new AppError("User no longer exists", 401));
      return;
    }

    if (user.email !== decoded.email) {
      next(new AppError("Token identity mismatch", 401));
      return;
    }

    req.user = {
      userId: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch {
    next(new AppError("Invalid or expired token", 401));
  }
}
