import { Router } from "express";
import * as messageController from "./controller/message.controller.js"
import { asyncHandler } from "../../Services/errorHandling.js";
import auth from "../../Middleware/auth.js";
const router = Router();
router.get("/getmessages",auth,asyncHandler(messageController.getMessages))
router.post("/sendmessage/:receiverId",asyncHandler(messageController.sendMessage))
router.delete("/deletemessage/:messageId",auth,asyncHandler(messageController.deleteMessage))
export default router;