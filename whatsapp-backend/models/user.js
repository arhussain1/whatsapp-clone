import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	profileImageUrlS3: { type: String, required: true },
	chats: { type: Array, default: [] },
});

// signup helper method
UserSchema.statics.signup = async function (
	email,
	password,
	name,
	profileImageUrlS3
) {
	if (!email || !password || !name) throw Error("All fields must be filled");

	const isEmailValid = validator.isEmail(email);
	if (!isEmailValid) {
		throw Error("Email must be valid");
	}

	const isPasswordStrong = validator.isStrongPassword(password);
	if (!isPasswordStrong) {
		throw Error("Password is not strong enough");
	}

	const emailExists = await this.findOne({ email });

	if (emailExists) throw Error("This email exists already");

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await this.create({
		email,
		password: hashedPassword,
		name,
		profileImageUrlS3,
	});

	return user;
};

// login helper method
UserSchema.statics.login = async function (email, password) {
	if (!email || !password) throw Error("Please provide an email and password");

	const user = await this.findOne({ email });

	if (!user) throw Error("Incorrect email");

	const passwordsMatch = await bcrypt.compare(password, user.password);

	if (!passwordsMatch) throw Error("Incorrect password");

	return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
