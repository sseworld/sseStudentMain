const express = require("express");
const router = express.Router();
const {
  createNewAdmin,
  getAdminDetails,
  updateAdmin,
  deleteAdmin,
} = require("../controller/adminController");

router.route("/").post(createNewAdmin);
router
  .route("/:username")
  .get(getAdminDetails)
  .patch(updateAdmin)
  .delete(deleteAdmin);

module.exports = router;
