const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  nic: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Trim whitespace for consistency
    // validate(value) {
    //   if (!value.match(/^\d{9}[Vv]$/)) {
    //     throw new Error("Invalid student nic number");
    //   }
    // },
  },
  name: {
    type: String,
    required: true,
    trim: true,
    // validate(value) {
    //   if (!value.match(/^[A-Za-z][A-Za-z ]+$/)) {
    //     throw new Error("Invalid student name");
    //   }
    // },
  },
  address: {
    type: String,
    required: true,
    trim: true,
    // validate(value) {
    //   if (!value.match(/[A-Za-z\d][A-Za-z\d-|/# ,.:;\\]+$/)) {
    //     throw new Error("Invalid student address");
    //   }
    // },
  },
  contact: {
    type: String,
    required: true,
    trim: true,
    // validate(value) {
    //   if (!value.match(/^\d{3}-\d{7}$/)) {
    //     throw new Error("Invalid student contact number");
    //   }
    // },
  },
});

module.exports = mongoose.model("Student", studentSchema);
