import express, { NextFunction, Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
