import express from "express";
import morgan from "morgan";

import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const port = process.env.PORT || 5100;

app.get("/", (req, res) => {
  res.status(404).json({ msg: "Welcome User" });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
