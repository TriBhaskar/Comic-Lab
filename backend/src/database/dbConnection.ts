import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dburl = process.env.MONGODB_URI || "mongodb://localhost:27017/test";

const connectDB = async () => {
  try {
    const connection = await mongoose.createConnection(dburl).asPromise();
    console.log("Database is connected");
    try {
      if (connection.db) {
        const collections = await connection.db.listCollections().toArray();
        if (collections) {
          console.log(
            "Collections:",
            collections.map((c) => c.name)
          );
        } else {
          console.log("No collections found in the database.");
        }
      } else {
        console.log("Database connected, but db object is not available.");
      }
    } catch (listError) {
      console.error("Error listing collections:", listError);
    }

    return connection;
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

export default connectDB;
