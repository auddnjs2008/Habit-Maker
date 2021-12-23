import express from "express";
import { makeHabit, getHabit } from "../controllers/habitController";

const habitRouter = express.Router();

habitRouter.post("/make", makeHabit);
habitRouter.post("/get", getHabit);

export default habitRouter;
