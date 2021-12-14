import express from "express";
import User from "src/model/user";

export const handleUserInfo = (req: express.Request, res: express.Response) => {
  return res.send(`This is userInformation${req.params}`);
};

export const handleCreate = async (
  req: express.Request,
  res: express.Request
) => {
  User.create();
};
