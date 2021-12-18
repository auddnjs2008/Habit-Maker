import express from "express";
import {
  postKakaoToken,
  getSession,
  postJoin,
  postLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/session", getSession);
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);
userRouter.post("/kakao/finish", postKakaoToken);
//userRouter.get("/:id(\\d+)", handleUserInfo);
// userRouter.get("/:id(\\d+)/edit");
// userRouter.get("/:id(\\d+)/delete");

export default userRouter;
