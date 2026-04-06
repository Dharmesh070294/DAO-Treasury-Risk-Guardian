import mongoose, { Schema, InferSchemaType } from "mongoose";

const auditLogSchema = new Schema(
  {
    action: {
      type: String,
      required: true,
      trim: true,
    },
    actorUserId: {
      type: String,
      required: false,
    },
    actorEmail: {
      type: String,
      required: false,
      trim: true,
      lowercase: true,
    },
    resourceType: {
      type: String,
      required: true,
      trim: true,
    },
    resourceId: {
      type: String,
      required: false,
    },
    metadata: {
      type: Schema.Types.Mixed,
      required: false,
      default: {},
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export type AuditLogDocument = InferSchemaType<typeof auditLogSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
};

export const AuditLogModel = mongoose.model("AuditLog", auditLogSchema);
