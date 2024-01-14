const express = require("express");
const router = express.Router();
const {
  createNewSchool,
  getSchoolDetails,
  updateSchool,
  deleteSchool,
} = require("../controller/schoolController");

router.route("/").post(createNewSchool);
router
  .route("/:schoolCode")
  .get(getSchoolDetails)
  .patch(updateSchool)
  .delete(deleteSchool);

module.exports = router;
