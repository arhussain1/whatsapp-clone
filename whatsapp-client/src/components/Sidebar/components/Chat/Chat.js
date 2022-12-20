import "./Chat.css";

const Chat = () => {
	return (
		<div className="chat">
			<div className="profile-picture-container">
				<img
					src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
					className="profile-picture"
				/>
			</div>
			<div className="chat-description">
				<h3>chat title goes here</h3>
				<p>last message goes here</p>
			</div>
		</div>
	);
};

export default Chat;
