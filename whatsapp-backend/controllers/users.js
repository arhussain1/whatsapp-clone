import User from "../models/user.js";

const UsersController = {
	Signup: async (req, res) => {
		const { email, password, name } = req.body;

		try {
			const user = User.signup(email, password, name);

			res.status(200).json(user);
		} catch (error) {
			res.status(400).json({ error: error });
		}
	},
};

export default UsersController;
