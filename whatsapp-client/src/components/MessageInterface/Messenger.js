import MessengerBody from "./components/MessengerBody/MessengerBody";
import MessengerNavbar from "./components/MessengerNavbar/MessengerNavbar";
import "./Messenger.css";

const Messenger = (messages) => {
	return (
		<div className="MessageInterface__container">
			<MessengerNavbar />
			<MessengerBody messages={messages} />
			<div className="messenger__footer">
				<form>
					<input placeholder="type a message" type="text" />
					<button type="submit">send</button>
				</form>
			</div>
		</div>
	);
};

export default Messenger;
