import { Router } from "express";
import { user } from "../controller/userController.js";
import userValidation from "../middleware/validationMiddleware.js";
import { authorizedEditUser } from "../MiddleWare/authMiddleware.js";

const router = Router();

router.post("/login", userValidation.loginValidation, user.login);
router.post("/register", userValidation.loginValidation, user.register);
router.get("/user",authorizedEditUser,user.current_user);

export default router;
