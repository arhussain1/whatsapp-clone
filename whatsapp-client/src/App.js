import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoutes from "./routes/PrivateRoutes/PrivateRoutes";

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
						<Route path="/login" element={<Login />} />
						<Route element={<PrivateRoutes />}>
							<Route path="/dashboard" element={<Dashboard />} />
						</Route>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
