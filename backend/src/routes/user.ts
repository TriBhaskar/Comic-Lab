import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World from user");
});

router.post("/register", (req, res) => {
  res.send("Register");
});

router.post("/login", (req, res) => {
  res.send("Login");
});

router.post("/logout", (req, res) => {
  res.send("Logout");
});

export default router;
