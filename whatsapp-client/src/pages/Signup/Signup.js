import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { useSignup } from "../../hooks/useSignup";

const Signup = ({}) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [profileImage, setProfileImage] = useState();
	const [profileImageUrl, setProfileImageUrl] = useState();

	const [signup, isLoading, error] = useSignup();

	const { user } = useAuthContext();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("name", name);
		formData.append("email", email);
		formData.append("password", password);
		if (profileImage) {
			formData.append("profile-image", profileImage, profileImage.name);
		}
		await signup(formData);
	};

	const handleImageUpload = (e) => {
		setProfileImage(null);
		setProfileImageUrl(null);
		const file = e.target.files[0];
		if (!file) return;
		setProfileImage(file);
		setProfileImageUrl(URL.createObjectURL(file));
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
					<div className="signup__image-upload-container">
						<div className="signup__image-uploader">
							<label>Profile Image</label>
							<input type="file" onChange={handleImageUpload} />
						</div>
						{profileImageUrl && (
							<div className="signup__image-container">
								<img src={profileImageUrl} className="signup__image" />
							</div>
						)}
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
