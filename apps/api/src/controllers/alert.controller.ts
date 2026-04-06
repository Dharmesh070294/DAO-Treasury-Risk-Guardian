import { Response, NextFunction } from "express";
import { fetchAlerts, addTestAlert } from "../services/alert.service";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

export async function getAlerts(
  _req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const alerts = await fetchAlerts();

    res.status(200).json({
      success: true,
      data: alerts,
      message: "Alerts fetched successfully",
    });
  } catch (error) {
    next(error);
  }
}

export async function createTestAlert(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const alert = await addTestAlert(req.body);

    res.status(201).json({
      success: true,
      data: alert,
      message: "Test alert created successfully",
    });
  } catch (error) {
    next(error);
  }
}
