import mongoose from "mongoose";
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

const addwtindb = async (data) => {
  await connectDB();
  try {
    const query = { userid: data.userid, date: data.date };
    const update = { weight: data.weight };
    const options = { new: true, upsert: true };
    const userreg = await Uw.findOneAndUpdate(query, { $set: update }, options);

    console.log("Updated or created user entry:", userreg);
    return 1;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return 0;
  } finally {
    await closeConn();
  }
};
export default addwtindb;
