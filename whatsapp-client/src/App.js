import Sidebar from "./components/Sidebar/Sidebar";
import Messenger from "./components/MessageInterface/Messenger";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<Messenger />
			</div>
		</div>
	);
}

export default App;
