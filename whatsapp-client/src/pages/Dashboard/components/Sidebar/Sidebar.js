import Chat from "./components/Chat/Chat";
import SideBarNavbar from "./components/SideBarNavbar/SideBarNavbar";
import Search from "./components/Search/Search";
import "./Sidebar.css";
import useFetch from "../../../../hooks/useFetch";
import { useEffect } from "react";

const Sidebar = () => {
	const [fetchData, chats, isLoading, error] = useFetch();

	useEffect(() => {
		fetchData("/chats");
	}, []);

	return (
		<div className="sidebar__container">
			<SideBarNavbar />
			<Search />
			{chats &&
				chats.map((chat) => (
					<Chat
						key={chat._id}
						profileImageUrl="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
						chatTitle={chat.name}
						lastMessage="last message"
					/>
				))}
		</div>
	);
};

export default Sidebar;
