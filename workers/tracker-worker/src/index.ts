import { connectDB } from "./config/db";
import { env } from "./config/env";
import { pollTreasuries } from "./jobs/pollTreasuries.job";

async function startWorker(): Promise<void> {
  await connectDB(env.MONGO_URI);

  console.log("Tracker worker started");

  await pollTreasuries();

  setInterval(async () => {
    try {
      await pollTreasuries();
    } catch (error) {
      console.error("Polling cycle failed:", error);
    }
  }, env.POLL_INTERVAL_MS);
}

startWorker().catch((error) => {
  console.error("Failed to start tracker worker:", error);
  process.exit(1);
});
