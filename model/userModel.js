import mongoose from "mongoose";
import { role } from "../utils/constant.js";
import { hashPassword } from "../utils/hashPassword.js";

const userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    role: {
      type: String,
      enum: Object.values(role),
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export const userModel = mongoose.model("users", userSchema);

export const userModelAction = {
  getUser: async (req, res) => {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    console.log(user);
    return user;
  },
  createUser: async (req, res) => {
    const isFirstAccount = (await userModel.countDocuments()) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";
    const hashedassword = await hashPassword(req.body.password);
    req.body.password = hashedassword;
    const user = await userModel.create(req.body);
    return user;
  },
};
