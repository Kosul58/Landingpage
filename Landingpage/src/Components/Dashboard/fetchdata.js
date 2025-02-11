import mongoose from "mongoose";
import UDBFood from "../Database/foodaddindatabase.cjs";
import Uw from "../Database/userweight.cjs";

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

const fetchdata = async (data, date) => {
  console.log(typeof date);
  await connectDB();
  try {
    let user = await UDBFood.find({ userid: data });
    user = user.filter((x) => {
      if (x.date === date) {
        return x;
      }
    });
    const user2 = await Uw.find({ userid: data, date: date });
    return [user, user2];
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return 0;
  } finally {
    await closeConn();
  }
};

export default fetchdata;
