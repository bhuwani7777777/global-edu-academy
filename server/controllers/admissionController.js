const Admission = require("../models/Admission");

exports.createAdmission = async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.json(admission);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAdmissions = async (req, res) => {
  try {
    const data = await Admission.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};