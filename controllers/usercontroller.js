const message = require("../models/message");
const user = require("../models/user");
const review = require("../models/review");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.postSignUp = async (req, res, next) => {
  try {
    let { name, age, email, username, password, gender } = req.body;
    if (
      name.length > 0 &&
      age != null &&
      gender != null &&
      email != "" &&
      username != "" &&
      password != ""
    ) {
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        let created = await user.create({
          name: name,
          age: age,
          email: email,
          username: username,
          password: hash,
          gender: gender,
        });
        await created.save();
        req.flash("msg", "Sign up successful. Please login now!");
        res.redirect("/user/auth/login");
      });
    } else {
      req.flash("msg", "Fields not correctly specified!");
      res.redirect("/user/auth/signup");
    }
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
module.exports.logout = function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/user/auth/login");
  });
};
module.exports.postsignout = async (req, res, next) => {
  let { username, password } = req.body;
  try {
    if (username == req.user.username) {
      bcrypt.compare(password, req.user.password, async function (err, result) {
        if (result) {
          await review.deleteMany({ userid: req.user._id });
          await user.deleteOne({ _id: req.user._id });
          await message.deleteMany({ userid: req.user._id });
          res.json(true);
        }
      });
    } else {
      res.redirect("/user/dash/profile");
    }
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
module.exports.error = (req, res) => {
  // how to manage errors?
  res.redirect("/user/dash/profile");
};
