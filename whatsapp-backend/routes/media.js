import express from "express";
import MediaController from "../controllers/media.js";
import { uploadFile } from "../s3.js";

const router = express.Router();

router.get("/", MediaController.Index);
router.post(
	"/",
	uploadFile("images", { owner: "Abdul" }).single("image"),
	MediaController.UploadImage
);

export default router;
