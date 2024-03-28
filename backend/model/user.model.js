/* eslint-disable linebreak-style */
const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
	{
		username: String,
		email: String,
		pass: String,
		role: {
			type: String,
			enum: ["customer", "admin"],
			default: "customer",
		},
	},
	{
		versionKey: false,
	}
)

const UserModel = mongoose.model("user", userSchema)

module.exports = {
	UserModel,
}
