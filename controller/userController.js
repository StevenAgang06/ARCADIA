import ErrorsHandler from "../errors/customError.js";
import { StatusCodes } from "http-status-codes";
import { userModelAction } from "../model/userModel.js";
export const user = {
  login: async (req, res) => {
    const user = await userModelAction.getAdmin(req);
    if (!user) {
      throw new ErrorsHandler.NotFound("Not Found");
    }
    res.status(200).json({ msg: user });
  },
  register: async (req, res) => {
    await userModelAction.createAdmin(req);
    res.status(StatusCodes.OK).json("Register Successfully");
  },
};
