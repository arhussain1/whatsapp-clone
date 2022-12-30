import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./Signup.css";

const Signup = ({}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [fetchData, data, isLoading, error] = useFetch();
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await fetchData("/users/signup", "POST", {
			name,
			email,
			password,
		});
	};

	useEffect(() => {
		if (data) {
			localStorage.setItem("user", JSON.stringify(data));
			dispatch({ type: "LOGIN", payload: data });
			navigate("/dashboard");
		}
	}, [data]);

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
					{data && (
						<div>
							<h5>Account created: {data.email}</h5>
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
