import express, { NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import router from "./routes";
import connectDB from "./database/dbConnection";

const app = express();
app.use(bodyParser.json());
app.use(router);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  connectDB();
  res.send("Hello World");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
