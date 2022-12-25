import Chat from "../models/chat.js";
import Message from "../models/message.js";

const MessagesController = {
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
