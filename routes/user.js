const express = require("express");
const router = express.Router();
const passport = require("../auth/passport");
const usercontroller = require("../controllers/usercontroller");
router.post("/signup", usercontroller.postSignUp);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/user/auth/login",
    failureFlash: "Invalid username or password",
  }),

  function (req, res) {
    res.redirect("/user/dash/profile");
  }
);
router.post("/logout", usercontroller.logout);
router.use(usercontroller.error);
module.exports = router;
