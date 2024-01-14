const { Schema, model } = require("mongoose");

// const qualifiction = new Schema({
//   Secondary: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   SrSecondary: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   _id: false,
// });

const teacherSchema = new Schema({
  TeacherName: {
    type: String,
    required: true,
    trim: true,
  },
  FatherName: {
    type: String,
    required: true,
    trim: true,
  },
  Address: {
    type: String,
    required: true,
    trim: true,
  },
  ContactNo: {
    type: String,
    required: true,
    trim: true,
  },
  Mobile: {
    type: String,
    required: true,
    trim: true,
  },
  Email: {
    type: String,
    required: true,
    trim: true,
  },
  DOB: {
    type: String,
    required: true,
    trim: true,
  },
  Post: {
    type: String,
    required: true,
    trim: true,
  },
  Subject: {
    type: String,
    required: true,
    trim: true,
  },
  schoolCode: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("Teacher", teacherSchema);
