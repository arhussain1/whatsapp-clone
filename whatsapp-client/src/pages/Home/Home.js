import "./Home.css";

const Home = ({}) => {
	return (
		<div className="home__container">
			<div className="home__welcome-section">
				<h2>Welcome to my WhatsApp Clone</h2>
				<div className="home__button-container ">
					<button className="home__button--green">Login</button>
					<button className="home__button--white">Signup</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
