import { AuditLogModel } from "../models/audit.model";

export interface AuditLogRecord {
  id: string;
  action: string;
  actorUserId?: string;
  actorEmail?: string;
  resourceType: string;
  resourceId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}

export async function createAuditLogRecord(
  input: Omit<AuditLogRecord, "id" | "createdAt">
): Promise<AuditLogRecord> {
  const record = await AuditLogModel.create({
    action: input.action,
    actorUserId: input.actorUserId,
    actorEmail: input.actorEmail,
    resourceType: input.resourceType,
    resourceId: input.resourceId,
    metadata: input.metadata ?? {},
  });

  return {
    id: record._id.toString(),
    action: record.action,
    actorUserId: record.actorUserId,
    actorEmail: record.actorEmail,
    resourceType: record.resourceType,
    resourceId: record.resourceId,
    metadata: record.metadata as Record<string, unknown>,
    createdAt: record.createdAt.toISOString(),
  };
}

export async function findAllAuditLogs(): Promise<AuditLogRecord[]> {
  const records = await AuditLogModel.find().sort({ createdAt: -1 }).lean();

  return records.map((record) => ({
    id: record._id.toString(),
    action: record.action,
    actorUserId: record.actorUserId,
    actorEmail: record.actorEmail,
    resourceType: record.resourceType,
    resourceId: record.resourceId,
    metadata: record.metadata as Record<string, unknown>,
    createdAt: record.createdAt.toISOString(),
  }));
}
