import { Router } from "express";
import * as authController from "./controller/auth.controller.js"
import { asyncHandler } from "../../Services/errorHandling.js";
import validation from "../../Middleware/validation.middleware.js";
import * as validators from "./auth.validation.js";
const router = Router();
router.post("/register",validation(validators.registerSchema),asyncHandler(authController.register))
router.post("/login",validation(validators.logInSchema),asyncHandler(authController.logIn))
router.get("/confirmemail/:token",authController.confirmEmail)
export default router;
