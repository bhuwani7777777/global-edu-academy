import { connectDB } from "./db";
import bcrypt from "bcryptjs";
import User from "../models/User";

export default async function handler(req, res) {
  await connectDB();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, password, role } = req.body;

  const exists = await User.findOne({ email });

  if (exists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashed,
    role: role || "student",
  });

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
}