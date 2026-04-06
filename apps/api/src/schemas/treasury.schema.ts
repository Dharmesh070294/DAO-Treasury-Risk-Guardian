import { z } from "zod";

export const createTreasurySchema = z.object({
  name: z.string().min(1, "Name is required"),
  organizationName: z.string().min(1, "Organization name is required"),
  chainId: z.number().int().positive("Chain ID must be a positive integer"),
  walletAddresses: z
    .array(z.string().regex(/^0x[a-fA-F0-9]{40}$/, "Invalid wallet address"))
    .min(1, "At least one wallet address is required"),
  telegramChatId: z.string().min(1, "Telegram chat ID is required"),
});

export type CreateTreasuryInput = z.infer<typeof createTreasurySchema>;
