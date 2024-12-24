import mongoose from "mongoose";
import UDBFood from "../Database/foodaddindatabase.cjs";

const mongoURI =
  "mongodb+srv://kosul:kosul@cluster0.jn30nsv.mongodb.net/?retryWrites=true&w=majority&appName=nutriTrack";

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process on failure
  }
};

const closeConn = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("MongoDB connection close error:", error.message);
  }
};

const addfoodindb = async (data) => {
  await connectDB();
  try {
    const j = {
      foodname: data.foodName,
      cal: data.calories,
      protein: data.protein,
      carbs: data.carbohydrates,
      fat: data.fat,
      salt: data.salt,
      sugars: data.sugars,
      mealtype: data.mealType,
      date: data.date,
      userid: data.userid,
    };
    const userreg = new UDBFood(j);
    console.log(userreg);
    await userreg.save();
    return 1;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return 0;
  } finally {
    await closeConn();
  }
};

export default addfoodindb;
