import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  lastLogin: {
    type: Date,
  },
  mobile: {
    type: Number,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "regular_user"],
    default: "regular_user",
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
