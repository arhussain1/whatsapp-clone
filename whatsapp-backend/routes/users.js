import express from "express";
import UsersController from "../controllers/users.js";
import { uploadFile } from "../s3.js";

const router = express.Router();

router.post(
	"/signup",
	uploadFile().single("profile-image"),
	UsersController.Signup
);
router.post("/login", UsersController.Login);

export default router;
