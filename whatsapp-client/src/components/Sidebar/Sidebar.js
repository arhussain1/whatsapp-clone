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
				<Chat />
			))}
		</div>
	);
};

export default Sidebar;
