const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bmr = 2330;
const Classify = require("./datafilter.js");

const UFood = require("./userfood.cjs");
const DFood = require("./food.cjs");

const app = express();
app.use(express.json());
app.use(cors());

const mongoURI =
  "mongodb+srv://kosul:kosul@cluster0.jn30nsv.mongodb.net/?retryWrites=true&w=majority&appName=nutriTrack";

// Connect to MongoDB
const connectDB = async () => {
  try {
    console.log("MongoDB URI:", mongoURI);

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

connectDB();
// fetchAndLogData();
const classifyresult = async (bmr, userid, ftype) => {
  try {
    const foods = await DFood.find(); // Fetch all documents from the collection

    const generateRandomString = (length) => {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
      }
      return result;
    };

    for (const food of foods) {
      const foodcategory = Classify(bmr, food.nf_calories);

      console.log(foodcategory);
      const newdata = {
        user_id: userid,
        food_name: food.food_name,
        food_id: generateRandomString(10),
        food_category: foodcategory,
        food_type: food.food_type,
        nf_calories: food.nf_calories,
        nf_total_fat: food.nf_total_fat,
        nf_sodium: food.nf_sodium,
        nf_total_carbohydrate: food.nf_total_carbohydrate,
        nf_sugars: food.nf_sugars,
        nf_protein: food.nf_protein,
        food_rating: food.food_rating,
      };
      if (foodcategory !== "0" && ftype === food.food_type) {
        const newFood = new UFood(newdata);
        newFood.save();
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

classifyresult(bmr, "kosul", "veg");
