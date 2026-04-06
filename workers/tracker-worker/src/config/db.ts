import mongoose from "mongoose";

export async function connectDB(mongoUri: string): Promise<void> {
  try {
    await mongoose.connect(mongoUri);
    console.log("Tracker worker connected to MongoDB");
  } catch (error) {
    console.error("Tracker worker MongoDB connection failed:", error);
    process.exit(1);
  }
}
