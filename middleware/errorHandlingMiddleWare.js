import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  const status = err.StatusCodes || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something Went Wrong Please try again later.";
  return res.status(status).json({ message: msg });
};

export default errorHandlerMiddleware;
