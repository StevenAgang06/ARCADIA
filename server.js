// App important imports
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";

// Cloud
import { v2 as cloudinary } from "cloudinary";

// Components
import userRoutes from "./routes/userRoutes.js ";

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
app.use("/arcadia", userRoutes);
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

try {
  await mongoose.connect(process.env.CONNECTION);
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit;
}
