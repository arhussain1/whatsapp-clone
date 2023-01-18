import express from "express";
import MediaController from "../controllers/media.js";
import multer from "multer";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import multerS3 from "multer-s3";

dotenv.config();

const router = express.Router();

// upload file to the servers file system using multer
const localUpload = multer({ dest: "uploads/" });

// get access to s3
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const S3 = new AWS.S3({
	region,
	accessKeyId,
	secretAccessKey,
});

const uploadImage = multer({
	storage: multerS3({
		s3: S3,
		bucket: bucketName,
		metadata: (req, file, callback) => {
			callback(null, { owner: "Abdul" });
		},
		key: (req, file, callback) => {
			callback(
				null,
				"images/" + new Date().toISOString() + "-" + file.originalname
			);
		},
	}),
});

router.get("/", MediaController.Index);
router.post("/", uploadImage.single("image"), MediaController.UploadImage);

export default router;
