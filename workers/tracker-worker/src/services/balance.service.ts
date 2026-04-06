import { formatEther } from "ethers";
import { provider } from "./rpc.service";

export async function getNativeBalance(walletAddress: string): Promise<string> {
  const balance = await provider.getBalance(walletAddress);
  return formatEther(balance);
}
