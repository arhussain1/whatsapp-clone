import Chat from "./components/Chat/Chat";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import "./Sidebar.css";

const Sidebar = () => {
	const chats = ["chat1", "chat2", "chat3"];

	return (
		<div className="sidebar__container">
			<Navbar />
			<Search />
			{chats.map(() => (
				<Chat
					profileImageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
					chatTitle="Chat Title"
					lastMessage="last message"
				/>
			))}
		</div>
	);
};

export default Sidebar;
