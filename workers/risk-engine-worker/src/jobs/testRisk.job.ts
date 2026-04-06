import { processWalletSnapshot } from "../services/riskEngine.service";

export async function runTestRiskJob(): Promise<void> {
  await processWalletSnapshot({
    treasuryId: "demo-treasury-1",
    treasuryName: "Demo Treasury",
    walletAddress: "0x4444444444444444444444444444444444444444",
    nativeBalance: "10",
  });

  await processWalletSnapshot({
    treasuryId: "demo-treasury-1",
    treasuryName: "Demo Treasury",
    walletAddress: "0x4444444444444444444444444444444444444444",
    nativeBalance: "7",
  });

  console.log("Risk job test completed");
}
