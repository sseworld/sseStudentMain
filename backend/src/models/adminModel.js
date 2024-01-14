const { Schema, model } = require("mongoose");

const adminSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Trim whitespace for consistency
  },
  password: {
    type: String,
    required: true,
    trim: true, // Trim whitespace for consistency
  },
  schoolCode: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Trim whitespace for consistency
  },
  contact: {
    type: String,
    required: true,
    trim: true, // Trim whitespace for consistency
  },
  email: {
    type: String,
    required: true,
    trim: true, // Trim whitespace for consistency
  },
});

module.exports = model("Admin", adminSchema);
