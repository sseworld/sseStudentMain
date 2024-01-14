const { db } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { ConflictError, BadRequestError } = require("../errors/errors");

const Student = db.student; // Access the Mongoose Model

const createNewStudent = async (req, res) => {
  try {
    const existingStudent = await Student.findOne({ nic: req.body.nic });
    if (existingStudent) {
      throw new ConflictError("Student already exists in the database");
    }
    const createdStudent = await new Student(req.body).save();
    res.status(StatusCodes.CREATED).json(createdStudent);
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getStudentDetails = async (req, res) => {
  try {
    const student = await Student.findOne({ nic: req.params.nic });
    if (student) {
      res.status(StatusCodes.OK).json(student);
    } else {
      throw new BadRequestError("Student doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndUpdate(
      { nic: req.params.nic },
      req.body,
      { new: true }
    );
    if (student) {
      res.status(StatusCodes.OK).json(student);
    } else {
      throw new BadRequestError("Student doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await Student.findOneAndDelete({
      nic: req.params.nic,
    });
    if (deletedStudent) {
      res.status(StatusCodes.NO_CONTENT).json({});
    } else {
      throw new BadRequestError("Student doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  createNewStudent,
  getStudentDetails,
  updateStudent,
  deleteStudent,
};
