/* eslint-disable linebreak-style */
const express = require("express")
const { RecipeModel } = require("../model/recipes.model")
const { auth } = require("../middleware/auth.middleware")
const { access } = require("../middleware/access.middleware")

const RecipeRouter = express.Router()
RecipeRouter.use(express.json())
RecipeRouter.post("/register", auth, access("admin"), async (req, res) => {
	const {
		title,
		image,
		description,
		instructions,
		ingredients,
		cookingTime,
		calorie,
		fat,
		rating,
		type,
		userID,
	} = req.body
	try {
		const recipe = new RecipeModel({
			title,
			image,
			description,
			instructions,
			ingredients,
			cookingTime,
			calorie,
			fat,
			rating,
			type,
			userID,
		})
		await recipe.save()
		res.status(200).json({ msg: "New recipe has been added" })
	} catch (error) {
		res.status(400).json({ error })
	}
})

// get different recipes based filtering  and pagination 

module.exports = { RecipeRouter }
