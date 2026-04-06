import mongoose, { Schema } from "mongoose";

const treasurySchema = new Schema(
  {
    name: { type: String, required: true },
    organizationName: { type: String, required: true },
    chainId: { type: Number, required: true },
    walletAddresses: { type: [String], required: true, default: [] },
    telegramChatId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const TreasuryModel = mongoose.model("Treasury", treasurySchema);
