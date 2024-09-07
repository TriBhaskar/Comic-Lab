import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World from user");
});

router.post("/signup", (req, res) => {
  res.send("signup");
});

router.post("/signin", (req, res) => {
  res.send("signin");
});

router.post("/signout", (req, res) => {
  res.send("signout");
});

export default router;
