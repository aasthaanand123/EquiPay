const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    messageid: {
      type: Schema.Types.ObjectId,
      ref: "message",
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    userid: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("comment", commentSchema);
