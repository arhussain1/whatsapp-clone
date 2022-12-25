import Chat from "../models/chat.js";
import Message from "../models/message.js";

const MessagesController = {
	FindByIds: async (req, res) => {
		const messageIds = req.messageIds;

		const pipeline = messageIds ? { $in: messageIds } : {};

		const result = await Message.find({ id: pipeline });

		res.json(result);
	},
	Create: async (req, res) => {
		const { sender, recipient, content, chatId } = req.body;

		const createdMessage = await Message.create({
			sender,
			recipient,
			content,
			chatId,
		});

		const messageId = createdMessage._id.toString();

		const updateChatResult = await Chat.findByIdAndUpdate(chatId, {
			$push: { messages: messageId },
		});

		if (!createdMessage) res.status(409).send("Failed to create message");
		if (!updateChatResult)
			res.status(409).send("Failed to add message id to chat");

		res.status(201).json(createdMessage);
	},
};

export default MessagesController;
