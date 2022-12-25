import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
	name: { type: String, required: true },
	messages: { type: Array, default: [] },
});

const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;
