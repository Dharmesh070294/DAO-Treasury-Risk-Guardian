import { TreasuryModel } from "../models/treasury.model";

export interface TreasuryRecord {
  id: string;
  name: string;
  organizationName: string;
  chainId: number;
  walletAddresses: string[];
  telegramChatId: string;
}

export async function findAllTreasuries(): Promise<TreasuryRecord[]> {
  const treasuries = await TreasuryModel.find().lean();

  return treasuries.map((treasury) => ({
    id: treasury._id.toString(),
    name: treasury.name,
    organizationName: treasury.organizationName,
    chainId: treasury.chainId,
    walletAddresses: treasury.walletAddresses,
    telegramChatId: treasury.telegramChatId,
  }));
}

export async function createTreasuryRecord(
  input: Omit<TreasuryRecord, "id">
): Promise<TreasuryRecord> {
  const treasury = await TreasuryModel.create({
    name: input.name,
    organizationName: input.organizationName,
    chainId: input.chainId,
    walletAddresses: input.walletAddresses,
    telegramChatId: input.telegramChatId,
  });

  return {
    id: treasury._id.toString(),
    name: treasury.name,
    organizationName: treasury.organizationName,
    chainId: treasury.chainId,
    walletAddresses: treasury.walletAddresses,
    telegramChatId: treasury.telegramChatId,
  };
}
