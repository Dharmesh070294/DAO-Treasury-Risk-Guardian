import { createAlert } from "../repositories/alert.repository";
import { createSnapshot, findLatestSnapshot } from "../repositories/snapshot.repository";
import { checkBalanceDrop } from "../rules/balanceDrop.rule";

const BALANCE_DROP_THRESHOLD_PERCENT = 20;

export async function processWalletRisk(input: {
  treasuryId: string;
  treasuryName: string;
  walletAddress: string;
  nativeBalance: string;
}): Promise<void> {
  const previous = await findLatestSnapshot(input.treasuryId, input.walletAddress);

  const previousBalance = previous ? Number(previous.nativeBalance) : 0;
  const currentBalance = Number(input.nativeBalance);

  const result = checkBalanceDrop({
    previousBalance,
    currentBalance,
    thresholdPercent: BALANCE_DROP_THRESHOLD_PERCENT,
  });

  if (result.triggered) {
    await createAlert({
      treasuryId: input.treasuryId,
      treasuryName: input.treasuryName,
      walletAddress: input.walletAddress,
      type: "BALANCE_DROP",
      severity: "HIGH",
      message: `Wallet balance dropped by ${result.dropPercent.toFixed(2)}%`,
      metadata: {
        previousBalance,
        currentBalance,
        dropPercent: result.dropPercent,
      },
    });

    console.log(
      `[ALERT] ${input.treasuryName} wallet=${input.walletAddress} dropped ${result.dropPercent.toFixed(2)}%`
    );
  }

  await createSnapshot(input);
}
