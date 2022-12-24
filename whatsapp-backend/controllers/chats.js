import Chat from "../models/chat.js";

const ChatsController = {
	Index: async (req, res) => {
		const result = await Chat.find({});

		res.json(result);
	},
	Create: async (req, res) => {
		const { name } = req.body;

		const creationResult = await Chat.create({ name: name });

		if (!creationResult) res.status(409);

		res.status(201).json(creationResult);
	},
};

export default ChatsController;
