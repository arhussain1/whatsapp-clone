import "./Home.css";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect } from "react";

const Home = ({}) => {
	const { user } = useAuthContext();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user]);
	const handleRedirect = (path) => {
		navigate(path);
	};

	return (
		<div className="home__container">
			<div className="home__welcome-section">
				<h2>Welcome to my WhatsApp Clone</h2>
				<div className="home__button-container ">
					<button
						className="home__button--green"
						onClick={() => handleRedirect("/login")}
					>
						Login
					</button>
					<button
						className="home__button--white"
						onClick={() => handleRedirect("/signup")}
					>
						Signup
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
