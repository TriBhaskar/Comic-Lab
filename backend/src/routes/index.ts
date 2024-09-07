import { Router } from "express";
import userRouter from "./user";
import adminRouter from "./admin";

const router = Router();

router.use("/comiclab/api/v1/user", userRouter);
router.use("/comiclab/api/v1/admin", adminRouter);

export default router;
