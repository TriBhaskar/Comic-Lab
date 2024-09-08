import dotenv from "dotenv";

dotenv.config();

const dburl = process.env.MONGODB_URI || "mongodb://localhost:27017/test";
const JWT_SECRET = process.env.JWT_SECRET || "secret";

const JWT_LIFETIME = process.env.JWT_LIFETIME || "1500";

export { dburl, JWT_SECRET, JWT_LIFETIME };
