import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({}) => {
	const navigate = useNavigate();

	const handleSignup = () => {
		const signupPath = "/signup";

		navigate(signupPath);
	};

	return (
		<div className="home__container">
			<div className="home__welcome-section">
				<h2>Welcome to my WhatsApp Clone</h2>
				<div className="home__button-container ">
					<button className="home__button--green">Login</button>
					<button className="home__button--white" onClick={handleSignup}>
						Signup
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
