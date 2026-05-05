const mongoose = require("mongoose");

const admissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  classApplied: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Admission", admissionSchema);