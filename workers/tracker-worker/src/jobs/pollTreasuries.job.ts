import { findAllTreasuries } from "../repositories/treasury.repository";
import { getNativeBalance } from "../services/balance.service";

export async function pollTreasuries(): Promise<void> {
  const treasuries = await findAllTreasuries();

  console.log(`Found ${treasuries.length} treasuries to track`);

  for (const treasury of treasuries) {
    console.log(`Tracking treasury: ${treasury.name} (${treasury.organizationName})`);

    for (const walletAddress of treasury.walletAddresses) {
      try {
        const balance = await getNativeBalance(walletAddress);

        console.log(
          `[TREASURY=${treasury.name}] wallet=${walletAddress} nativeBalance=${balance} ETH`
        );
      } catch (error) {
        console.error(
          `[TREASURY=${treasury.name}] Failed to fetch balance for ${walletAddress}:`,
          error
        );
      }
    }
  }
}
