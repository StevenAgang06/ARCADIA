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
    const { userId, role } = verifyJWT(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new Unauthenticated("Authentication Failed");
  }
};
