const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    name: String,
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("review", reviewSchema);
