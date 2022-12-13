import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import "./Sidebar.css";

const Sidebar = () => {
	return (
		<div className="sidebar__container">
			<Navbar />
			<Search />
		</div>
	);
};

export default Sidebar;
