import express from "express";
import userController from "../controllers/user.controller.js";
import validateTokenHandler from "../helpers/validateTokenHandler.js";

const router = express.Router()

router.route('/register').post(userController.registerUser)
router.route('/login').post(userController.loginUser)
router.get("/current", validateTokenHandler.validateToken, userController.currentUser);
export default router;