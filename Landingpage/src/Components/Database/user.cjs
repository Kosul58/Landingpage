const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bmr: { type: Number, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  activityLevel: { type: String, required: true },
  dietaryPreferences: { type: String, required: true },
  usergoals: { type: String, required: true },
  healthIssues: { type: String, required: true },
  bmi: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  admin: { type: String, required: false },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
