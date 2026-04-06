import { connectDB } from "./config/db";
import { env } from "./config/env";
import { runTestRiskJob } from "./jobs/testRisk.job";

async function startWorker(): Promise<void> {
  await connectDB(env.MONGO_URI);

  console.log("Risk engine worker started");

  await runTestRiskJob();
}

startWorker().catch((error) => {
  console.error("Failed to start risk engine worker:", error);
  process.exit(1);
});
