const MediaController = {
	Index: async (req, res) => {
		res.send("You called Media Index");
	},
	UploadImage: async (req, res) => {
		console.log("file", req.file);
		res.send("You called Media Create");
	},
};

export default MediaController;
