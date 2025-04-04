import { Router } from "express";
import { eventsController } from "../controller/eventsController.js";
import { authenticateUser, authorizedEventUser } from "../MiddleWare/authMiddleware.js";

const router = Router();

router.get('/all',authorizedEventUser,eventsController.allEvents);

export default router;