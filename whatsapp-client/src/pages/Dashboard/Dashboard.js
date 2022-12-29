import useFetch from "../../hooks/useFetch";
import Messenger from "./components/Messenger/Messenger";
import Sidebar from "./components/Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
	return (
		<>
			<Sidebar />
			<Messenger />
		</>
	);
};

export default Dashboard;
