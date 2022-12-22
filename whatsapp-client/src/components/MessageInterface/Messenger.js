import MessengerBody from "./components/MessengerBody/MessengerBody";
import MessengerNavbar from "./components/MessengerNavbar/MessengerNavbar";
import "./Messenger.css";

const Messenger = (messages) => {
	return (
		<div className="MessageInterface__container">
			<MessengerNavbar />
			<MessengerBody messages={messages} />
		</div>
	);
};

export default Messenger;
