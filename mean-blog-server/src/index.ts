import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route";
import authRoute from "./routes/auth.route";

dotenv.config();

mongoose
  .connect(
    process.env.MONGODB_URL as string,
  )
  .then(() => console.log("Mongodb is connected!!"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is running!!"));

app.use("/api/user", userRoute)

app.use("/api/auth", authRoute)