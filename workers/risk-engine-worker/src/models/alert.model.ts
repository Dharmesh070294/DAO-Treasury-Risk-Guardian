import mongoose, { Schema } from "mongoose";

const alertSchema = new Schema(
  {
    treasuryId: { type: String, required: true, index: true },
    treasuryName: { type: String, required: true },
    walletAddress: { type: String, required: true },
    type: { type: String, required: true },
    severity: { type: String, required: true },
    message: { type: String, required: true },
    metadata: { type: Schema.Types.Mixed, default: {} },
  },
  {
    timestamps: true,
  }
);

export const AlertModel = mongoose.model("Alert", alertSchema);
