import { Router } from "express";
import userRouter from "./user";

const router = Router();

router.use("/comiclab/api/v1/user", userRouter);

export default router;
