import express from "express";
import Habit from "../model/habit";

export const makeHabit = async (
  req: express.Request,
  res: express.Response
) => {
  const { title, color, cycle, cycleValue, memo, alarm, username } = req.body;

  const exists = await Habit.exists({ title, color });
  if (exists) {
    return res.send(
      "errorMessage: This Habit's title and color are already taken"
    );
  }

  try {
    await Habit.create({
      title,
      color,
      cycle,
      cycleValue,
      memo,
      alarm,
      username,
    });
  } catch (e) {
    return res.send(`${e}발생`);
  }
  return res.send("");
};

export const getHabit = async (req: express.Request, res: express.Response) => {
  const { username } = req.body;
  try {
    const habits = await Habit.find({ username });

    res.send(habits);
  } catch (e) {
    res.send(`errorMessage: ${e}발생`);
  }
};

export const deleteHabit = async (
  req: express.Request,
  res: express.Response
) => {
  const { _id, username, title } = req.body;
  try {
    _id
      ? await Habit.deleteOne({ _id })
      : await Habit.deleteOne({ username, title });
    res.end();
  } catch (e) {
    res.send(`errorMessage: ${e}`);
  }
};
