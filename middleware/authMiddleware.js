import {
  Unauthenticated,
  Unauthorized,
  BadRequest,
} from "../Error/customError.js";
import { verifyJWT } from "../Utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new Unauthenticated("Authentication Failed");
  try {
    const { userId, userName ,role } = verifyJWT(token);
    req.user = { userId,role };
    next();
  } catch (error) {
    throw new Unauthenticated("Authentication Failed");
  }
};

export const authorizedEventUser = async (req,res,next) => {
  const { token } = req.cookies;
  if (!token) throw new Unauthenticated("Authentication Failed");
  try {
    const { userId,role } = verifyJWT(token);
    if(role !== "admin" && role !== "event_staff"){
      throw new Unauthorized("Not authorized");
    }
    req.user = { userId,role };
    next();
  } catch (error) {
    throw new Unauthenticated("Authentication Failed");
  }
}
export const authorizedEditUser = async (req,res,next) => {
  const { token } = req.cookies;
  if (!token) throw new Unauthenticated("Authentication Failed");
  try {
    const { userId,role } = verifyJWT(token);
    console.log(role);
    if(role !== "admin" && role !== "user_editor"){
      throw new Unauthorized("Not authorized");
    }
    req.user = { userId,role };
    next();
  } catch (error) {
    console.log(error);
  }
}
