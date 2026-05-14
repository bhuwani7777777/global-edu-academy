const bcrypt = require("bcryptjs");

const connectDB = require("./db");

const User = require("./models/User");

module.exports = async function (req, res) {

  await connectDB();

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {

    const {
      name,
      email,
      phone,
      password,
      role,
    } = req.body;

    const exists =
      await User.findOne({ email });

    if (exists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashed =
      await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      phone,
      password: hashed,
      role: role || "student",
    });

    res.status(201).json({
      success: true,
      message:
        "Registration Successful",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};