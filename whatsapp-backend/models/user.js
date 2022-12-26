import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	chats: { type: Array, default: [] },
});

UserSchema.statics.signup = async function (email, password, name) {
	const emailExists = await this.findOne({ email });

	if (emailExists) throw Error("This email exists already");

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await this.create({ email, password: hashedPassword, name });

	return user;
};

const User = mongoose.model("User", UserSchema);

export default User;
