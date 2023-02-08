import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = ({}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signup, isLoading, error] = useSignup();

	const { user } = useAuthContext();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await signup(name, email, password);
	};

	useEffect(() => {
		if (user?.token) {
			navigate("/dashboard");
		}
	}, [user]);

	return (
		<div className="signup__container">
			<div className="signup__center-square">
				<h2>Signup page</h2>
				<form>
					{isLoading && (
						<div>
							<h3>Creating Account</h3>
						</div>
					)}
					{user && (
						<div>
							<h5>Account created: {user.email}</h5>
						</div>
					)}
					<div className="signup__input-container">
						<label>Name</label>
						<input
							type="text"
							required
							onChange={(e) => {
								setName(e.target.value);
							}}
							value={name}
						/>
					</div>
					<div className="signup__input-container">
						<label>Email Address</label>
						<input
							type="email"
							required
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							value={email}
						/>
					</div>
					<div className="signup__input-container">
						<label>Password</label>
						<input
							type="password"
							required
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							value={password}
						/>
					</div>
					<div className="signup__button-container">
						<button
							className="signup__button"
							type="submit"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
					{error && (
						<div className="signup__error">
							<h4>Error</h4>
							<p>{error}</p>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Signup;
