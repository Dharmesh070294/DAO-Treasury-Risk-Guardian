import { AlertModel } from "../models/alert.model";

export interface AlertRecord {
  id: string;
  treasuryId: string;
  treasuryName: string;
  walletAddress: string;
  type: string;
  severity: string;
  message: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}

export async function createAlertRecord(input: {
  treasuryId: string;
  treasuryName: string;
  walletAddress: string;
  type: string;
  severity: string;
  message: string;
  metadata?: Record<string, unknown>;
}): Promise<AlertRecord> {
  const alert = await AlertModel.create(input);

  return {
    id: alert._id.toString(),
    treasuryId: alert.treasuryId,
    treasuryName: alert.treasuryName,
    walletAddress: alert.walletAddress,
    type: alert.type,
    severity: alert.severity,
    message: alert.message,
    metadata: (alert.metadata ?? {}) as Record<string, unknown>,
    createdAt: alert.createdAt.toISOString(),
    updatedAt: alert.updatedAt.toISOString(),
  };
}

export async function findAllAlerts(): Promise<AlertRecord[]> {
  const alerts = await AlertModel.find().sort({ createdAt: -1 }).lean();

  return alerts.map((alert) => ({
    id: alert._id.toString(),
    treasuryId: alert.treasuryId,
    treasuryName: alert.treasuryName,
    walletAddress: alert.walletAddress,
    type: alert.type,
    severity: alert.severity,
    message: alert.message,
    metadata: (alert.metadata ?? {}) as Record<string, unknown>,
    createdAt: alert.createdAt.toISOString(),
    updatedAt: alert.updatedAt.toISOString(),
  }));
}
