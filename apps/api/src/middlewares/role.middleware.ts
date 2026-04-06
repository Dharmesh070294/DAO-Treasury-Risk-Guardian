import { NextFunction, Response } from "express";
import { AppError } from "../utils/app-error";
import { AuthenticatedRequest } from "./auth.middleware";

export function requireRole(...allowedRoles: Array<"owner" | "analyst" | "viewer">) {
  return (req: AuthenticatedRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      next(new AppError("Unauthorized", 401));
      return;
    }

    if (!allowedRoles.includes(req.user.role)) {
      next(new AppError("Forbidden: insufficient permissions", 403));
      return;
    }

    next();
  };
}
