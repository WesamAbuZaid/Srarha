import { Router } from "express";
import auth from "../../Middleware/auth.js"
import * as userController from "./controller/user.controller.js"
import { asyncHandler } from "../../Services/errorHandling.js";
import uploadFile, { HME } from "../../Services/multer.js";
const router = Router();
router.patch("/profilepic",auth,uploadFile().single('image'),HME,asyncHandler(userController.profilePic))
export default router;