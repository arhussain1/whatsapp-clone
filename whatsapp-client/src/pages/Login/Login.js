import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";

const Login = ({}) => {
	const { user } = useAuthContext();

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user]);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [login, isLoading, error] = useLogin();

	const handleLogin = async (e) => {
		e.preventDefault();
		await login(email, password);
	};

	return (
		<div className="login__container">
			<div className="login__center-square">
				<h2>Login page</h2>
				<form>
					<div className="login__input-container">
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
					<div className="login__input-container">
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
					<div className="login__button-container">
						<button
							className="login__button"
							type="submit"
							onClick={handleLogin}
						>
							Login
						</button>
					</div>
					{error && (
						<div className="login__error">
							<h4>Error</h4>
							<p>{error}</p>
						</div>
					)}
				</form>
			</div>
		</div>
	);
};

export default Login;
