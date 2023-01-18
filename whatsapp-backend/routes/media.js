import express from "express";
import MediaController from "../controllers/media.js";
import multer from "multer";

const router = express.Router();

// upload file to the servers file system using multer
const localUpload = multer({ dest: "uploads/" });

router.get("/", MediaController.Index);
router.post("/", localUpload.single("image"), MediaController.Create);

export default router;
