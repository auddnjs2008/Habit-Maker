import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import habitRouter from "./routers/habitRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./controllers/middleware";

const PORT = 4000;
dotenv.config();

const app = express();
const loggerMiddleware = morgan("dev");
app.use(loggerMiddleware);
app.use(express.json());

const mongoURI: string = process.env.MONGO_URI!;

mongoose.connect(mongoURI);

const db = mongoose.connection;

app.use(
  session({
    secret: "Hello!",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoURI }),
  })
);

app.use(cors());
app.use(localsMiddleware);

app.use("/api/habits", habitRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

db.on("error", (e) => console.log(e));
db.once("open", () => console.log("db가 연결되었습니다."));
