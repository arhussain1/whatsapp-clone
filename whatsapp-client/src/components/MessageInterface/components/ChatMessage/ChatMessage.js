import "./ChatMessage.css";

const ChatMessage = ({ isSentMessage, message }) => {
	return (
		<div className={isSentMessage ? "message message--sent" : "message"}>
			<span className="message-owner">{message.owner}</span>
			<span>{message.text}</span>
			<span className="message-timestamp">
				{message.createdAt.toDateString()}
			</span>
		</div>
	);
};

export default ChatMessage;
