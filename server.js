// App important imports
import "express-async-errors";
import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./MiddleWare/errorHandlingMiddleWare.js";
import cookieParser from "cookie-parser";

// Cloud
import { v2 as cloudinary } from "cloudinary";

// Components
import userRoutes from "./routes/userRoutes.js ";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const port = process.env.PORT || 5100;

app.get("/arcadia/sample", (req, res) => {
  res.status(200).json("Working");
});
``;
app.get("/", (req, res) => {
  res.status(404).json({ msg: "Welcome User" });
});
app.use("/arcadia", userRoutes);
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});
app.use(errorHandlerMiddleware);
try {
  await mongoose.connect(process.env.CONNECTION);
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
} catch (error) {
  console.log("yes");
  console.log(error);
  process.exit(1);
}
