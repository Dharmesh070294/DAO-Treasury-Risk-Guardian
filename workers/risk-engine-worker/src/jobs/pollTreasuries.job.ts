import { findAllTreasuries } from "../repositories/treasury.repository";
import { getNativeBalance } from "../services/balance.service";
import { processWalletRisk } from "../services/risk.service";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

        await processWalletRisk({
          treasuryId: treasury.id,
          treasuryName: treasury.name,
          walletAddress,
          nativeBalance: balance,
        });

        await sleep(500);
      } catch (error) {
        console.error(
          `[TREASURY=${treasury.name}] Failed to fetch/process ${walletAddress}:`,
          error
        );
      }
    }
  }
}
