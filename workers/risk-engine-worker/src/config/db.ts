import mongoose from "mongoose";

export async function connectDB(mongoUri: string): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    console.log("Risk engine connected to MongoDB");
  } catch (error) {
    console.error("Risk engine MongoDB connection failed:", error);
    process.exit(1);
  }
}
