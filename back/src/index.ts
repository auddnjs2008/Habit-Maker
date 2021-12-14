import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import dotenv from "dotenv";
import globalRouter from "./routers/globalRouter";
import habitRouter from "./routers/habitRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;
dotenv.config();

const app = express();
const loggerMiddleware = morgan("dev");
app.use(loggerMiddleware);

const mongoURI: string = process.env.MONGO_URI!;

mongoose.connect(mongoURI);

const db = mongoose.connection;

app.use("/habits", habitRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

db.on("error", (e) => console.log(e));
db.once("open", () => console.log("db가 연결되었습니다."));
