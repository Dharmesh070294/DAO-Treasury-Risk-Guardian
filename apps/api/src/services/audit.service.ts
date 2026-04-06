import {
  createAuditLogRecord,
  findAllAuditLogs,
  AuditLogRecord,
} from "../repositories/audit.repository";

export async function logAuditEvent(input: {
  action: string;
  actorUserId?: string;
  actorEmail?: string;
  resourceType: string;
  resourceId?: string;
  metadata?: Record<string, unknown>;
}): Promise<AuditLogRecord> {
  return createAuditLogRecord(input);
}

export async function fetchAuditLogs(): Promise<AuditLogRecord[]> {
  return findAllAuditLogs();
}
