import mongoose from "mongoose";

export async function connectDB(mongoUri: string): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}