import User from "../models/user.js";
import JsonWebToken from "jsonwebtoken";

const DEFAULT_PROFILE_IMAGE_PATH = "default-avatar.png";

const createToken = (userId) => {
	return JsonWebToken.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "2d",
	});
};

const UsersController = {
	Signup: async (req, res) => {
		const { email, password, name } = req.body;
		const profileImageUrlS3 = req.file
			? req.file.key
			: DEFAULT_PROFILE_IMAGE_PATH;

		try {
			const user = await User.signup(email, password, name, profileImageUrlS3);
			const jwtToken = createToken(user.id);

			res.status(200).json({ token: jwtToken, user: user });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},
	Login: async (req, res) => {
		const { email, password } = req.body;

		try {
			const user = await User.login(email, password);
			const jwtToken = createToken(user.Id);
			res.status(200).json({ token: jwtToken, user: user });
		} catch (error) {
			res.status(400).json({ error: error.message });
		}
	},
};

export default UsersController;
