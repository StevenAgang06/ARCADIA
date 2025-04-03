import { body, param, validationResult } from "express-validator";
import { Unauthorized, BadRequest, NotFound } from "../Error/customError.js";
import mongoose from "mongoose";

const validationErrors = (validateValue) => {
  return [
    validateValue,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((error) => error.msg);
        if (errorMessage[0].startsWith("Not authorized")) {
          throw new Unauthorized("Not authorized to access this routes");
        }
        if (errorMessage) {
          throw next(new BadRequest(errorMessage));
        }
      }
      next();
    },
  ];
};

const userValidation = {
  loginValidation: validationErrors([
    body("email")
      .notEmpty()
      .withMessage("Email is Required")
      .isEmail()
      .withMessage("Email is Invalid"),
    body("password")
      .notEmpty()
      .withMessage("Password is Required")
      .isLength({ min: 8 })
      .withMessage("Password must be 8 characters long"),
  ]),
  paramValidation: validationErrors([
    param("id").custom(async (value, { req }) => {
      const isValidId = mongoose.Types.ObjectId.isValid(value);
      if (isValidId) {
        throw new BadRequest("Id is not valid");
      }
      
    }),
  ]),
};

export default userValidation;
