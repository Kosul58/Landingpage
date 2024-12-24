const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  weight: { type: Number, required: true },
  date: { type: String, required: false },
});

const Uw = mongoose.model("UserWeight", FoodSchema);

module.exports = Uw;
