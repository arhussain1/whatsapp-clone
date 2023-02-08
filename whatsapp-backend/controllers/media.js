import { getFileStream } from "../s3.js";

const MediaController = {
	GetFile: async (req, res) => {
		const key = req.params.key;

		const readStream = getFileStream(key);
		readStream.pipe(res);
	},
	UploadImage: async (req, res) => {
		console.log("file", req.file);
		res.send("You called Media Create");
	},
};

export default MediaController;
