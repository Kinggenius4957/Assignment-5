const student = require("../Models/student");

const getAllStudent = async (req, res) => {
  const student = await student.find();
  res.status(200).json({ student });
};

const getStudent = async (req, res) => {
  res.send("Single Student");
};
const createStudent = async (req, res) => {
  const name = req.body.name;
  const indexNumber = req.body.indexNumber;

  const student = await Student.create({ name, indexNumber });
  res.status(201).json({ student });
};
const updateStudent = async (req, res) => {
  res.send("Update Student");
};
const deleteStudent = async (req, res) => {
  res.send("Delete Student");
};

module.exports = {
  getAllStudent,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
