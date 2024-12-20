import mongoose from "mongoose";
import User from "../Database/user.cjs";

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

const searchuserregisterandsave = async (data) => {
  await connectDB();
  try {
    const user = await User.find({
      uname: data.uname,
      email: data.email,
      password: data.password,
    });
    if (user.length > 0) {
      return 0;
    } else {
      const j = {
        uname: data.uname,
        email: data.email,
        password: data.password,
        bmr: data.bmr,
        age: data.age,
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        activityLevel: data.activityLevel,
        dietaryPreferences: data.dietaryPreferences,
        usergoals: data.usergoals,
        healthIssues: data.healthIssues,
        bmi: data.bmi,
      };
      const userreg = new User(j);
      console.log(userreg);
      await userreg.save();
      return 1;
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return 0;
  } finally {
    await closeConn();
  }
};

export default searchuserregisterandsave;
