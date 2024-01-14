const express = require("express");
const router = express.Router();
const {
  createNewAdmin,
  getAdminDetails,
  updateAdmin,
  deleteAdmin,
  adminLogin,
} = require("../controller/adminController");

router.route("/").post(createNewAdmin);
router
  .route("/:username")
  .get(getAdminDetails)
  .patch(updateAdmin)
  .delete(deleteAdmin);

router.route("/login").post(adminLogin);

module.exports = router;
