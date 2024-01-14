const { Schema, model } = require("mongoose");

const schoolSchema = new Schema({
  schoolCode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  schoolName: {
    type: String,
    required: true,
    trim: true,
  },
  schoolPlace: {
    type: String,
    required: true,
    trim: true,
  },
  schoolEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  schoolContact: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("School", schoolSchema);
