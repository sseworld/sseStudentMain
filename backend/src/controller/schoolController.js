const { db } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { ConflictError, BadRequestError } = require("../errors/errors");

const School = db.school; // Access the Mongoose Model

const createNewSchool = async (req, res) => {
  try {
    const existingSchool = await School.findOne({
      schoolCode: req.body.schoolCode,
    });
    if (existingSchool) {
      throw new ConflictError("School already exists in the database");
    }
    const createdSchool = await new School(req.body).save();
    res.status(StatusCodes.CREATED).json(createdSchool);
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getSchoolDetails = async (req, res) => {
  try {
    const school = await School.findOne({ schoolCode: req.params.schoolCode });
    if (school) {
      res.status(StatusCodes.OK).json(school);
    } else {
      throw new BadRequestError("School doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateSchool = async (req, res) => {
  try {
    const school = await School.findOneAndUpdate(
      { schoolCode: req.params.schoolCode },
      req.body,
      { new: true }
    );
    if (school) {
      res.status(StatusCodes.OK).json(school);
    } else {
      throw new BadRequestError("School doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteSchool = async (req, res) => {
  try {
    const deletedSchool = await School.findOneAndDelete({
      schoolCode: req.params.schoolCode,
    });
    if (deletedSchool) {
      res.status(StatusCodes.NO_CONTENT).json({});
    } else {
      throw new BadRequestError("School doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  createNewSchool,
  getSchoolDetails,
  updateSchool,
  deleteSchool,
};
