const user = require("../models/user");
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
