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
				return (
					<div className="messenger__message messenger__message-sent">
						<span className="messenger__message-owner">{message.owner}</span>
						<span>{message.text}</span>
						<span className="messenger__message-timestamp">
							{message.createdAt.toDateString()}
						</span>
					</div>
				);
			}
			return (
				<div className="messenger__message">
					<span className="messenger__message-owner">{message.owner}</span>
					<span>{message.text}</span>
					<span className="messenger__message-timestamp">
						{message.createdAt.toDateString()}
					</span>
				</div>
			);
		});
	};

	const generatedMessages = generateChatMessages(fakeMessages);

	return <div className="MessageInterface__container">{generatedMessages}</div>;
};

export default MessageInterface;
