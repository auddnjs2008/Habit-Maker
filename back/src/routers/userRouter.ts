import express from "express";
import { handleUserInfo } from "src/controllers/userController";

const userRouter = express.Router();

//userRouter.get("/:id(\\d+)", handleUserInfo);
// userRouter.get("/:id(\\d+)/edit");
// userRouter.get("/:id(\\d+)/delete");

export default userRouter;
