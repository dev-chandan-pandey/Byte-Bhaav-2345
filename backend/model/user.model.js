
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
		membership:{
			type:String,
			enum:["regular","silver","premium"],
			default:"regular"
		}
	},
	{
		versionKey: false,
	}
)


const UserModel = mongoose.model("user", userSchema)

module.exports = {
	UserModel,
}

