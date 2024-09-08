import { Router, Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { User } from "../database/model";
import { JWT_LIFETIME, JWT_SECRET } from "../config/datakey";
import {
  validateSignup,
  validateSignin,
} from "../middleware/validationMiddleware";
import { handleErrors } from "../middleware/error-handler";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Hello World from admin");
});

router.post(
  "/signup",
  validateSignup,
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, userName, email, password, mobile, dob } =
      req.body;

    try {
      const existingUser = await User.findOne({
        $or: [{ email }, { userName }],
      });

      if (existingUser) {
        return res.status(400).json({
          message:
            existingUser.email === email
              ? "User already exists with this email"
              : "Username is already taken",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        firstName,
        lastName,
        userName,
        email,
        password: hashedPassword,
        mobile,
        dob,
      });

      await newUser.save();

      res.status(201).json({ message: "User created successfully" });
    } catch (err) {
      next(err);
    }
  }
);

router.post(
  "/signin",
  validateSignin,
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: JWT_LIFETIME,
      });

      // Update last login
      user.lastsignin = new Date();
      await user.save();

      res
        .status(200)
        .json({ token, message: "User logged in successfully", result: true });
    } catch (err) {
      next(err);
    }
  }
);

router.post("/signout", (req: Request, res: Response) => {
  res.status(200).json({ message: "User logged out successfully" });
});

router.use(handleErrors);

export default router;
