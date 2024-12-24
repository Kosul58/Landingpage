// backend/models/Food.js
const mongoose = require("mongoose");

const FoodSchema2 = new mongoose.Schema({
  foodname: { type: String, required: true },
  cal: { type: Number, required: true },
  fat: { type: Number, required: true },
  carbs: { type: Number, required: true },
  protein: { type: Number, required: true },
  mealtype: { type: String, required: true },
  date: { type: String, required: false },
  userid: { type: String, required: true },
  salt: { type: Number, required: true },
  sugars: { type: Number, required: true },
});

const UDBFood = mongoose.model("UDBFood", FoodSchema2);

module.exports = UDBFood;
