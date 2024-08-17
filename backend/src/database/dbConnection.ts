import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dburl = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

const connectDB = async () => {
  try {
    await mongoose.connect(dburl, {});
    console.log("Database is connected");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

export default connectDB;
