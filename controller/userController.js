import { Unauthenticated } from "../Error/customError.js";
import { StatusCodes } from "http-status-codes";
import { userModelAction } from "../model/userModel.js";
import { comparePassword, hashPassword } from "../utils/hashPassword.js";
export const user = {
  login: async (req, res) => {
    const user = await userModelAction.getUser(req);
    if (!user) {
      throw new NotFound("Not Found");
    } else {
      const isMatch = await comparePassword(req.body.password, user.password);
      if (!isMatch) throw new Unauthenticated("Wrong Email or Password");
    }
    res.status(200).json({ msg: `logged in ${user}` });
  },
  register: async (req, res) => {
    const user = await userModelAction.createUser(req);
    res.status(StatusCodes.OK).json(`Register Successfully: ${user}`);
  },
};
