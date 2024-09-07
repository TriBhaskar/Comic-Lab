import dotenv from "dotenv";

dotenv.config();

const dburl = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

export { dburl, JWT_SECRET };
