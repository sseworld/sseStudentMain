const { db } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { ConflictError, BadRequestError } = require("../errors/errors");

const Admin = db.admin;

const createNewAdmin = async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ username: req.body.username });
    if (existingAdmin) {
      throw new ConflictError("Admin already exists in the database");
    }

    const createdAdmin = await new Admin(req.body).save();
    res.status(StatusCodes.CREATED).json(createdAdmin);
  } catch (error) {
    console.log(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getAdminDetails = async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.params.username });
    if (admin) {
      res.status(StatusCodes.OK).json(admin);
    } else {
      throw new BadRequestError("Admin doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const updateAdmin = async (req, res) => {
  try {
    const admin = await Admin.findOneAndUpdate(
      { username: req.params.username },
      req.body,
      { new: true }
    );
    if (admin) {
      res.status(StatusCodes.OK).json(admin);
    } else {
      throw new BadRequestError("School doesn't exist");
    }
  } catch (error) {
    console.error(error);
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await Admin.findOneAndDelete({
      username: req.params.username,
    });
    if (deletedAdmin) {
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
  createNewAdmin,
  getAdminDetails,
  updateAdmin,
  deleteAdmin,
};
