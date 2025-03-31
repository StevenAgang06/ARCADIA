import { Router } from "express";
import { user } from "../controller/userController.js";
import userValidation from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/login", userValidation.loginValidation, user.login);
router.post("/register", userValidation.loginValidation, user.register);

export default router;
