import express from "express";
import {
  postKakaoToken,
  getSession,
  postJoin,
  postLogin,
  kakaoLogout,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/session", getSession);
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);
userRouter.post("/kakao/finish", postKakaoToken);
userRouter.post("/kakao/logout", kakaoLogout);
//userRouter.get("/:id(\\d+)", handleUserInfo);
// userRouter.get("/:id(\\d+)/edit");
// userRouter.get("/:id(\\d+)/delete");

export default userRouter;
