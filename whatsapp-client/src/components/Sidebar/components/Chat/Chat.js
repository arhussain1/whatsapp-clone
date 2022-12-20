import "./Chat.css";

const Chat = ({ profileImageUrl, chatTitle, lastMessage }) => {
	return (
		<div className="chat">
			<div className="profile-picture-container">
				<img src={profileImageUrl} className="profile-picture" />
			</div>
			<div className="chat-description">
				<h3>{chatTitle}</h3>
				<p>{lastMessage}</p>
			</div>
		</div>
	);
};

export default Chat;
