export function checkBalanceDrop(params: {
  previousBalance: number;
  currentBalance: number;
  thresholdPercent: number;
}): { triggered: boolean; dropPercent: number } {
  const { previousBalance, currentBalance, thresholdPercent } = params;

  if (previousBalance <= 0) {
    return { triggered: false, dropPercent: 0 };
  }

  const dropPercent = ((previousBalance - currentBalance) / previousBalance) * 100;

  return {
    triggered: dropPercent >= thresholdPercent,
    dropPercent,
  };
}
