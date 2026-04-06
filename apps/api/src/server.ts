import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

async function startServer(): Promise<void> {
  await connectDB(env.MONGO_URI);

  app.listen(env.PORT, () => {
    console.log(`API server running on http://localhost:${env.PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});