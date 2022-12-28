import { useEffect, useState } from "react";
import "./Signup.css";

const Signup = ({}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="signup__container">
			<div className="signup__center-square">
				<h2>Signup page</h2>
				<form>
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
						<button className="signup__button" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
