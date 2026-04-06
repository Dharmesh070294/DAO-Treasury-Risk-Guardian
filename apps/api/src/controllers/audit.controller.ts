import { Request, Response, NextFunction } from "express";
import { fetchAuditLogs } from "../services/audit.service";

export async function getAuditLogs(
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const logs = await fetchAuditLogs();

    res.status(200).json({
      success: true,
      data: logs,
      message: "Audit logs fetched successfully",
    });
  } catch (error) {
    next(error);
  }
}
