import express from "express";
import { postJoin, postLogin } from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);
//userRouter.get("/:id(\\d+)", handleUserInfo);
// userRouter.get("/:id(\\d+)/edit");
// userRouter.get("/:id(\\d+)/delete");

export default userRouter;
