const express = require("express");
const router = express.Router();

// @route  Get api/Profile
// @desc   Test routes
// @access Public
router.get("/", (req, res) => res.send("Profile route"));

module.exports = router;