const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontroller");
router.post("/signup", usercontroller.postSignUp);

module.exports = router;
