import mongoose from "mongoose";
import dotenv from "dotenv";
import { dburl } from "../config/datakey";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dburl, {
      connectTimeoutMS: 20000, // Increase connection timeout to 20 seconds
      serverSelectionTimeoutMS: 20000, // Increase server selection timeout to 20 seconds
    });
    console.log("Database is connected");
    return connection;
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

export default connectDB;
