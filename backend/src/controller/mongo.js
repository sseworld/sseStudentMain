// const mongoose = require("mongoose");
// const { StatusCodes } = require("http-status-codes");
// const { ConflictError, BadRequestError } = require("../errors/errors");

// // Connect to MongoDB (replace with your MongoDB connection string)
// mongoose
//   .connect("mongodb://localhost:27017/yourDatabaseName", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("MongoDB connection error:", err));

// // Define the Student schema
// const studentSchema = new mongoose.Schema({
//   nic: { type: String, required: true, unique: true }, // Enforce uniqueness for NIC
//   // Add other student fields here (e.g., name, email, etc.)
// });

// const Student = mongoose.model("Student", studentSchema);

// const createNewStudent = async (req, res) => {
//   try {
//     const existingStudent = await Student.findOne({ nic: req.body.nic });
//     if (existingStudent) {
//       throw new ConflictError("Student already exists in the database");
//     }

//     const newStudent = new Student(req.body);
//     const createdStudent = await newStudent.save();
//     res.status(StatusCodes.CREATED).json(createdStudent);
//   } catch (error) {
//     console.error(error);
//     res.status(error.statusCode || 500).json({ message: error.message });
//   }
// };

// const getStudentDetails = async (req, res) => {
//   const { nic } = req.params;

//   try {
//     const student = await Student.findOne({ nic });
//     if (!student) {
//       throw new BadRequestError("Student not found");
//     }

//     res.status(StatusCodes.OK).json(student);
//   } catch (error) {
//     console.error(error);
//     res.status(error.statusCode || 500).json({ message: error.message });
//   }
// };

// const updateStudent = async (req, res) => {
//   const { nic } = req.params;

//   try {
//     const updatedStudent = await Student.findOneAndUpdate({ nic }, req.body, {
//       new: true,
//     });
//     if (!updatedStudent) {
//       throw new BadRequestError("Student not found");
//     }

//     res.status(StatusCodes.OK).json(updatedStudent);
//   } catch (error) {
//     console.error(error);
//     res.status(error.statusCode || 500).json({ message: error.message });
//   }
// };

// const deleteStudent = async (req, res) => {
//   const { nic } = req.params;

//   try {
//     const deletedStudent = await Student.findOneAndDelete({ nic });
//     if (!deletedStudent) {
//       throw new BadRequestError("Student not found");
//     }

//     res.status(StatusCodes.NO_CONTENT).json({});
//   } catch (error) {
//     console.error(error);
//     res.status(error.statusCode || 500).json({ message: error.message });
//   }
// };

// module.exports = {
//   createNewStudent,
//   getStudentDetails,
//   updateStudent,
//   deleteStudent,
// };

const { db } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { ConflictError, BadRequestError } = require("../errors/errors");

const Student = db.Student; // Access the Mongoose model

const createNewStudent = async (req, res) => {
  try {
    const existingStudent = await Student.findOne({ nic: req.body.nic });
    if (existingStudent) {
      throw new ConflictError("Student already exists in the database");
    }

    const createdStudent = await new Student(req.body).save();
    res.status(StatusCodes.CREATED).json(createdStudent);
  } catch (error) {
    console.error(error);
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
