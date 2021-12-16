import express from "express";
import bcrypt from "bcrypt";
import User from "../model/user";

export const handleUserInfo = (req: express.Request, res: express.Response) => {
  return res.send(`This is userInformation${req.params}`);
};

export const postJoin = async (req: express.Request, res: express.Response) => {
  const { username, email, password, passwordConfirm, name, profileImage } =
    req.body;
  const exists = await User.exists({ $or: [{ username }, { email }] });

  if (password !== passwordConfirm) {
    return res
      .status(404)
      .send("errorMessage: password Confirmation does not match");
  }

  if (exists) {
    return res
      .status(404)
      .send("errorMessage: This username/email is already taken");
  }

  try {
    await User.create({
      username,
      email,
      password,
      name,
      profileImage,
    });
  } catch (e) {
    return res.status(404).send(`${e}발생`);
  }
  return res.send(req.body);
};

export const postLogin = async (
  req: express.Request,
  res: express.Response
) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res
      .status(400)
      .send("errorMessage: An account with this username does not exist");
  }

  //check if password가 맞는지

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).send("errorMessage: wrong Password");
  }
  (req.session as any).loggedIn = true;
  (req.session as any).user = user;
  return res.send(`${user}`);
};

// 세션 => 백엔드와 브라우저 간에 어떤활동을 했는지 기억하는것
// 즉 memory, history 같은 것이다.
// 이게 작동할ㄹ면 백엔드와 브라우저가 서로 정보를 가지고 있어야 한다.

export const getSession = (req: express.Request, res: express.Response) => {
  if ((req.session as any).loggedIn) {
    return res.send((req.session as any).user);
  } else {
    return res.status(404).send("errorMessage: You should login");
  }
};
