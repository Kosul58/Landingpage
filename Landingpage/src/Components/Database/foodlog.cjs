// backend/models/Food.js
const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  food_name: { type: String, required: true },
  serving_qty: { type: Number, required: true },
  serving_unit: { type: String, required: true },
  serving_weight_grams: { type: Number, required: true },
  nf_calories: { type: Number, required: true },
  nf_total_fat: { type: Number, required: true },
  nf_sodium: { type: Number, required: true },
  nf_total_carbohydrate: { type: Number, required: true },
  nf_sugars: { type: Number, required: true },
  nf_protein: { type: Number, required: true },
  nf_iron: { type: Number, required: false },
  date: { type: String, required: false },
});

const Foodlog = mongoose.model("Food", FoodSchema);

module.exports = Foodlog;
