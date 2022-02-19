const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
