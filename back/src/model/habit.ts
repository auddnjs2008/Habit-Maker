import mongoose from "mongoose";

const habitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  cycle: {
    type: String,
    required: true,
  },
  cycleValue: {
    type: Number,
    required: true,
  },
  memo: {
    type: String,
  },
  alarm: {
    type: Boolean,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

const Habit = mongoose.model("Habit", habitSchema);

export default Habit;
