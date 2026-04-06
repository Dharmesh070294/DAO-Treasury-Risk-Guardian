import {
  createTreasuryRecord,
  findAllTreasuries,
  TreasuryRecord,
} from "../repositories/treasury.repository";

export interface Treasury {
  id: string;
  name: string;
  organizationName: string;
  chainId: number;
  walletAddresses: string[];
  telegramChatId: string;
}

export async function fetchTreasuries(): Promise<Treasury[]> {
  const treasuries: TreasuryRecord[] = await findAllTreasuries();
  return treasuries;
}

export async function addTreasury(input: Omit<Treasury, "id">): Promise<Treasury> {
  const treasury = await createTreasuryRecord(input);
  return treasury;
}
