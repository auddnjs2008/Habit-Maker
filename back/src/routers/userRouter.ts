import express from "express";
import {
  postKakaoToken,
  postNaverToken,
  getSession,
  postJoin,
  postLogin,
  kakaoLogout,
  logOut,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/session", getSession);
userRouter.post("/signup", postJoin);
userRouter.post("/login", postLogin);
userRouter.get("/logout", logOut);
userRouter.post("/kakao/finish", postKakaoToken);
userRouter.post("/kakao/logout", kakaoLogout);

userRouter.post("/naver/finish", postNaverToken);
//userRouter.get("/:id(\\d+)", handleUserInfo);
// userRouter.get("/:id(\\d+)/edit");
// userRouter.get("/:id(\\d+)/delete");

export default userRouter;
