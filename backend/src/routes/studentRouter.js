const express = require("express");
const router = express.Router();
const {
  createNewStudent,
  getStudentDetails,
  updateStudent,
  deleteStudent,
} = require("../controller/studentControllerMy");

router.route("/").post(createNewStudent);
router
  .route("/:nic")
  .get(getStudentDetails)
  .patch(updateStudent)
  .delete(deleteStudent);

module.exports = router;
