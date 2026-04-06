import dotenv from "dotenv";

dotenv.config();

function getEnv(name: string, required = true): string {
  const value = process.env[name];
  if (!value && required) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value || "";
}

export const env = {
  NODE_ENV: getEnv("NODE_ENV", false) || "development",
  MONGO_URI: getEnv("MONGO_URI"),
  RPC_URL: getEnv("RPC_URL"),
  POLL_INTERVAL_MS: Number(getEnv("POLL_INTERVAL_MS", false) || 15000),
};
