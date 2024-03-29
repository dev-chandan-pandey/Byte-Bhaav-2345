/* eslint-disable linebreak-style */
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const recipeSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
		},
		req_membership: {
			type: String,
			enum: ["regular", "silver", "premium"],
			default: "regular",
		},
		description: {
			type: String,
			required: true,
		},
		instructions: {
			type: String,
			required: true,
		},
		ingredients: [
			{
				name: String,
				quantity: String,
			},
		],
		cookingTime: {
			type: Number,
			required: true,
		},
		calorie: {
			type: Number,
			required: true,
		},
		fat: {
			type: Number,
			required: true,
		},
		rating: {
			type: Number,
			default: 0,
		},
		type: {
			type: String,
			required: true,
		},

		createdAt: {
			type: Date,
			default: Date.now,
		},
		userID: {
			type: String,
		},
	},
	{
		versionKey: false,
	}
)

const RecipeModel = mongoose.model("recipes", recipeSchema)

module.exports = { RecipeModel }
