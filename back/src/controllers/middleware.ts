import express from "express";

export const localsMiddleware = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log((req.session as any).loggedIn);
  next();
};
