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
  PORT: Number(getEnv("PORT", false) || 4000),
  JWT_SECRET: getEnv("JWT_SECRET"),
  MONGO_URI: getEnv("MONGO_URI"),
};