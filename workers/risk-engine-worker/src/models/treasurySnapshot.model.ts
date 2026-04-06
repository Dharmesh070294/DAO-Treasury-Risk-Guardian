import mongoose, { Schema } from "mongoose";

const treasurySnapshotSchema = new Schema(
  {
    treasuryId: { type: String, required: true, index: true },
    treasuryName: { type: String, required: true },
    walletAddress: { type: String, required: true, index: true },
    nativeBalance: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const TreasurySnapshotModel = mongoose.model(
  "TreasurySnapshot",
  treasurySnapshotSchema
);
