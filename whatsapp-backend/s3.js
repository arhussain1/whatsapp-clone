import multer from "multer";
import AWS from "aws-sdk";
import dotenv from "dotenv";
import multerS3 from "multer-s3";

dotenv.config();

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const S3 = new AWS.S3({
	region,
	accessKeyId,
	secretAccessKey,
});

export const uploadFile = (s3FolderName, metaData) => {
	return multer({
		storage: multerS3({
			s3: S3,
			bucket: bucketName,
			metadata: (req, file, callback) => {
				callback(null, { ...metaData });
			},
			key: (req, file, callback) => {
				callback(
					null,
					`${s3FolderName}/${new Date().toISOString()}-${file.originalname}`
				);
			},
		}),
	});
};
