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

const searchuserandlogin = async (data) => {
  await connectDB();
  try {
    const user = await User.find({
      uname: data.uname,
      password: data.password,
    });
    if (user.length > 0) {
      return user;
    } else {
      return 0;
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return 0;
  } finally {
    await closeConn();
  }
};

export default searchuserandlogin;
