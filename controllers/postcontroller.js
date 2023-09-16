const user = require("../models/user");
const review = require("../models/review");
module.exports.postaddReview = async (req, res, next) => {
  let { company, salary, description, rating } = req.body;
  let userid = req.user._id;
  try {
    let created = await review.create({
      userid: userid,
      company: company,
      salary: salary,
      description: description,
      rating: rating,
    });
    req.user.reviews.push(created._id);
    await req.user.save();
    res.redirect("/user/dash/reviews");
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
