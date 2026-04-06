import { z } from "zod";

export const createTestAlertSchema = z.object({
  treasuryId: z.string().min(1, "treasuryId is required"),
  treasuryName: z.string().min(1, "treasuryName is required"),
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid wallet address"),
  type: z.string().min(1, "type is required"),
  severity: z.enum(["LOW", "MEDIUM", "HIGH", "CRITICAL"]),
  message: z.string().min(1, "message is required"),
  metadata: z.record(z.string(), z.unknown()).optional(),
});
