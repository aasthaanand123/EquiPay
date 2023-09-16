const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  name: { type: String, required: true },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "review",
    },
  ],
});
module.exports = mongoose.model("company", companySchema);
