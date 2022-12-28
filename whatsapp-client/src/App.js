import Sidebar from "./components/Sidebar/Sidebar";
import Messenger from "./components/MessageInterface/Messenger";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<div className="app__body">
					{/* <Sidebar />
					<Messenger /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
