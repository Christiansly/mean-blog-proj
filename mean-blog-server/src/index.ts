import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log("Mongodb is connected!!"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is running!!"));

app.use("/api/user", userRoute);

app.use("/api/auth", authRoute);

app.use(
  (
    err: { statusCode: number; message: string },
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const message = err.message || "Something went wrong";
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  }
);
