import { AlertModel } from "../models/alert.model";

export async function createAlert(input: {
  treasuryId: string;
  treasuryName: string;
  walletAddress: string;
  type: string;
  severity: string;
  message: string;
  metadata?: Record<string, unknown>;
}) {
  return AlertModel.create(input);
}
