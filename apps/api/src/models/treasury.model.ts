import mongoose, { Schema, InferSchemaType } from "mongoose";

const treasurySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
    chainId: {
      type: Number,
      required: true,
    },
    walletAddresses: {
      type: [String],
      required: true,
      default: [],
    },
    telegramChatId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type TreasuryDocument = InferSchemaType<typeof treasurySchema> & {
  _id: mongoose.Types.ObjectId;
};

export const TreasuryModel = mongoose.model("Treasury", treasurySchema);
