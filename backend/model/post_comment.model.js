/* eslint-disable linebreak-style */
const mongoose = require("mongoose")

const postcommentSchema = mongoose.Schema(
	{
		postID: String,
		comment: {
			type: String,
		},
		userID: String,
	},
	{
		versionKey: false,
	}
)

const postcommentModel = mongoose.model("post_comments", postcommentSchema)

module.exports = { postcommentModel }
