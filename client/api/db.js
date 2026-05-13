import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI missing in environment variables");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  try {
    cached.conn = await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected");
    return cached.conn;
  } catch (err) {
    console.error("MongoDB Error:", err);
    throw err;
  }
}