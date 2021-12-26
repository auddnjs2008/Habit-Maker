import express from "express";
import {
  makeHabit,
  getHabit,
  deleteHabit,
} from "../controllers/habitController";

const habitRouter = express.Router();

habitRouter.post("/make", makeHabit);
habitRouter.post("/get", getHabit);
habitRouter.delete("/delete", deleteHabit);

export default habitRouter;
