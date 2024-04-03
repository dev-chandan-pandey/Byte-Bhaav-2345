/* eslint-disable linebreak-style */
const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
	{
		title: String,
		description: String,
		type: String,
		image: String,
		ingredients: [
			{
				name: String,
				quantity: String,
			},
		],
		cookingTime: String,
		like: {
			type: Number,
			default: 0,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
		userID: String,
	},
	{
		versionKey: false,
	}
)

const postModel = mongoose.model("posts", postSchema)

module.exports = { postModel }
