import { Unauthenticated, NotFound } from "../Error/customError.js";
import { StatusCodes } from "http-status-codes";
import { userModelAction } from "../model/userModel.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
import { createJWT, verifyJWT } from "../Utils/tokenUtils.js";
export const user = {
  login: async (req, res) => {
    const user = await userModelAction.getUser(req);
    if (!user) {
      throw new NotFound("Wrong Email or Password");
    } else {
      const isMatch = await comparePassword(req.body.password, user.password);
      if (!isMatch) throw new Unauthenticated("Wrong Email or Password");
    }
    const token = createJWT({
      userId: user.id,
      role: user.role,
    });
    const oneDay = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + oneDay),
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ msg: `logged in ${user}` });
  },
  register: async (req, res) => {
    const user = await userModelAction.createUser(req);
    res.status(StatusCodes.OK).json(`Register Successfully: ${user}`);
  },
  current_user: async (req, res) => {
    const { cookies } = req;
    console.log(cookies);
    const user = verifyJWT(cookies);
    console.log(user);
    res.status(200).json("OK");
  },
};
