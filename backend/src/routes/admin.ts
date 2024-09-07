import { Router } from "express";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import { User } from "../database/model";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/datakey";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World from admin");
});

router.post("/signup", async (req: Request, res: Response) => {
  //check from userschema.ts and fetch the data from the request
  const { firstName, lastName, userName, email, password, mobile, dob } =
    req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    //check if email and username already exists in single query
    // const existingUser = await User.findOne({ $or: [{ email }, { userName }] });
    const existingUserName = await User.findOne({ userName });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists with email" });
    }
    if (existingUserName) {
      return res
        .status(400)
        .json({ message: "User already exists with username" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      mobile,
      dob,
    });

    // Save user to database
    await newUser.save();

    //dummy request body for postman testin

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error signing up:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Sign-In Route
router.post("/signin", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    console.log("JWT secret ", JWT_SECRET);
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ token, message: "User logged in successfully", result: true });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
});

router.post("/signout", (req, res) => {
  res.send("signout");
});

export default router;
