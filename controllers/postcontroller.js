const user = require("../models/user");
const review = require("../models/review");
const comment = require("../models/comment");
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
    res.json(created);
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
module.exports.postaddMessage = async (req, res, next) => {
  let { message } = req.body;
  let userid = req.user._id;
  try {
    let created = await message.create({
      userid: userid,
      message: message,
    });

    await created.save();
    res.json(created);
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
module.exports.postaddComment = async (req, res, next) => {
  let { messageid, comment } = req.body;
  let userid = req.user._id;
  try {
    let created = await comment.create({
      messageid: messageid,
      comment: comment,
      userid: userid,
    });
    await created.save();
    res.json(created);
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
