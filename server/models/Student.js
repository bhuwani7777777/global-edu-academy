const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  className: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Student", studentSchema);