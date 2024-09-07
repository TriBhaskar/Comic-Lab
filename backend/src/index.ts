import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import router from "./routes";
import connectDB from "./database/dbConnection";

const app = express();

async function startServer() {
  try {
    try {
      const connection = await connectDB();
    } catch (err) {
      console.error("Error connecting to the database:", err);
      process.exit(1);
    }

    app.use(bodyParser.json());
    app.use(router);

    app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.send("Hello World");
    });

    // Start the server
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Failed to start the server:", err);
    process.exit(1);
  }
}

// Call the async function to start the server
startServer();
