import { body } from "express-validator";

export const validateSignup = [
  body("firstName").trim().notEmpty().withMessage("First name is required"),
  body("lastName").trim().notEmpty().withMessage("Last name is required"),
  body("userName").trim().notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
  body("mobile").isMobilePhone("any").withMessage("Invalid mobile number"),
  body("dob").isISO8601().toDate().withMessage("Invalid date of birth"),
];

export const validateSignin = [
  body("email").isEmail().withMessage("Invalid email address"),
  body("password").notEmpty().withMessage("Password is required"),
];
