const { db } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { ConflictError, BadRequestError } = require("../errors/errors");

const Teacher = db.teacher; // Access the Mongoose Model

const createNewTeacher = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};
