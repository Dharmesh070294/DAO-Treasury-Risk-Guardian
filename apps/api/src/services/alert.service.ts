import {
  findAllAlerts,
  AlertRecord,
  createAlertRecord,
} from "../repositories/alert.repository";

export async function fetchAlerts(): Promise<AlertRecord[]> {
  return findAllAlerts();
}

export async function addTestAlert(input: {
  treasuryId: string;
  treasuryName: string;
  walletAddress: string;
  type: string;
  severity: string;
  message: string;
  metadata?: Record<string, unknown>;
}): Promise<AlertRecord> {
  return createAlertRecord(input);
}
