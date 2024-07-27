import mongoose from "mongoose";
import Classify from "./datafilter.js";
import UFood from "./userfood.cjs";
import DFood from "./food.cjs";
import express from "express";
import cors from "cors";

const bmr = 2330;

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
      if (foodcategory !== "0") {
        if (ftype === "veg" && ftype === food.food_type) {
          await UFood.findOneAndUpdate(
            { user_id: userid },
            { $push: { foods: newdata } },
            { upsert: true, new: true }
          );
        } else if (ftype === "nonveg") {
          await UFood.findOneAndUpdate(
            { user_id: userid },
            { $push: { foods: newdata } },
            { upsert: true, new: true }
          );
        }
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

const closeconnection = async () => {
  await connectDB();
  try {
    await classifyresult(bmr, "kosul", "veg");
  } catch (error) {
    console.error("MongoDB connection close error:", error.message);
  } finally {
    try {
      await mongoose.connection.close();
      console.log("MongoDB connection closed");
    } catch (error) {
      console.error("MongoDB connection close error:", error.message);
    }
  }
};

closeconnection();

export default connectDB;
