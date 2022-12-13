import MessageInterface from "./components/MessageInterface/MessageInterface";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="app__body">
				<Sidebar />
				<MessageInterface />
			</div>
		</div>
	);
}

export default App;
