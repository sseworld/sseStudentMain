const studentModel = require("./studentModel");
const adminModel = require("./adminModel");
const schoolModel = require("./schoolModel");

const db = {
  student: studentModel,
  admin: adminModel,
  school: schoolModel,
};

module.exports = { db };
