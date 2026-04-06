import { TreasurySnapshotModel } from "../models/treasurySnapshot.model";

export async function findLatestSnapshot(
  treasuryId: string,
  walletAddress: string
) {
  return TreasurySnapshotModel.findOne({ treasuryId, walletAddress })
    .sort({ createdAt: -1 })
    .lean();
}

export async function createSnapshot(input: {
  treasuryId: string;
  treasuryName: string;
  walletAddress: string;
  nativeBalance: string;
}) {
  return TreasurySnapshotModel.create(input);
}
