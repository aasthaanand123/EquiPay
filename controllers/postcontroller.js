const user = require("../models/user");
const review = require("../models/review");
const comment = require("../models/comment");
const company = require("../models/company");
const message = require("../models/message");

module.exports.postaddReview = async (req, res, next) => {
  let { companyname, salary, description, rating } = req.body;
  let userid = req.user._id;
  try {
    let companydetails = await company.findOne({ name: companyname });
    if (companydetails) {
      companydetails.reviews.push(created._id);
      companydetails.save();
      let created = await review.create({
        userid: userid,
        company: companyname,
        salary: salary,
        description: description,
        rating: rating,
      });
      req.user.reviews.push(created._id);
      await req.user.save();
      res.json(created);
    } else {
      res.json(false);
    }
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
  let { messageid, commentdetails } = req.body;
  let userid = req.user._id;
  try {
    let created = await comment.create({
      messageid: messageid,
      comment: commentdetails,
      userid: userid,
    });
    await created.save();
    res.json(created);
  } catch (err) {
    req.flash("info", `${err}`);
    next();
  }
};
module.exports.postdisplayMessages = async (req, res) => {
  try {
    let messages = await message.find({});
    res.json(messages);
  } catch {
    req.flash("info", `${err}`);
    next();
  }
};
// module.exports.displayReview=async (req, res) => {
//   try {
//     let {reviewid}=
//     let reviewdetails = await review.find({});
//     res.json(reviewdetails);
//   } catch {
//     req.flash("info", `${err}`);
//     next();
//   }
// };
