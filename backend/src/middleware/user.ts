import { NextFunction, Request, Response } from "express";
import { IRequest } from "../interface/authRequest";

function userMiddleware(req: IRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization;
  console.log(req.headers);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}
