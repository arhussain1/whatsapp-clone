import express from "express";
import UsersController from "../controllers/users.js";

const router = express.Router();

router.post("/signup", UsersController.Signup);
router.post("/login", UsersController.Login);

export default router;
