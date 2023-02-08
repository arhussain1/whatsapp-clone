import { getFileStream } from "../s3.js";

const MediaController = {
	GetFile: async (req, res) => {
		const key = req.params.key;

		const readStream = getFileStream(key);
		readStream.pipe(res);
	},
	SendFile: async (req, res) => {
		// send the file path to mongo to be stored

		res.send("You called Media Create");
	},
};

export default MediaController;
