const router = require("express").Router();
const Student = require("../models/Student");

// ADD STUDENT (Admission Form)
router.post("/", async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

// GET ALL STUDENTS
router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

module.exports = router;