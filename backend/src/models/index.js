const studentModel = require("./studentModel");
const adminModel = require("./adminModel");
const schoolModel = require("./schoolModel");
const teacherModel = require("./teacherModel");

const db = {
  student: studentModel,
  admin: adminModel,
  school: schoolModel,
  teacher: teacherModel,
};

module.exports = { db };
