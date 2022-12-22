import ChatMessage from "./components/ChatMessage/ChatMessage";
import "./MessageInterface.css";

const MessageInterface = (messages) => {
	const owner = "Joker";

	const tenMinsAgo = new Date(new Date().getTime() + -10 * 60000);
	const fakeMessages = [
		{
			text: "Hey how are you",
			owner: "Joker",
			createdAt: tenMinsAgo,
		},
		{
			text: "I'm good you",
			owner: "Batman",
			createdAt: new Date(),
		},
	];

	const generateChatMessages = (chatMessages) => {
		return chatMessages.map((message) => {
			if (message.owner === owner) {
				return <ChatMessage isSentMessage message={message} />;
			}
			return <ChatMessage message={message} />;
		});
	};

	const generatedMessages = generateChatMessages(fakeMessages);

	return <div className="MessageInterface__container">{generatedMessages}</div>;
};

export default MessageInterface;
