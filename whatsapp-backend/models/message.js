import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
	sender: { type: String, required: true },
	recipient: { type: String, required: true },
	content: { type: String, required: true },
	chatId: { type: String, required: true },
});

const Message = mongoose.model("Message", MessageSchema);

export default Message;
