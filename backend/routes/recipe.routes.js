/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
const express = require("express");
const { RecipeModel } = require("../model/recipes.model");
const { auth } = require("../middleware/auth.middleware");
const { access } = require("../middleware/access.middleware");
const { UserModel } = require("../model/user.model");
// const cloudinary = require("cloudinary").v2
const RecipeRouter = express.Router();
RecipeRouter.use(express.json());
// cloudinary.config({
// 	cloud_name: "your_cloud_name",
// 	api_key: "your_api_key",
// 	api_secret: "your_api_secret"
// });
// user having admin role can add new recipes
RecipeRouter.post("/register", auth, access("admin"), async (req, res) => {
	const {
		title,
		image,
		req_membership,
		description,
		instructions,
		ingredients,
		cookingTime,
		calorie,
		fat,
		rating,
		type,
		userID,
	} = req.body;
	try {
		const recipe = new RecipeModel({
			title,
			image,
			req_membership,
			description,
			instructions,
			ingredients,
			cookingTime,
			calorie,
			fat,
			rating,
			type,
			userID,
		});
		await recipe.save();
		res.status(200).json({ msg: "New recipe has been added" });
	} catch (error) {
		res.status(400).json({ error });
	}
});

// get different recipes based filtering  and pagination
RecipeRouter.get("/", auth, async (req, res) => {
	const { search } = req.query;
	const { page } = req.query;
	const skipvalue = (page - 1) * 10;
	const limitvalue = page * 10;
	try {
		if (search && page) {
			const recipes = await RecipeModel.find({
				title: { $regex: new RegExp(search, "i") },
			})
				.skip(skipvalue)
				.limit(limitvalue);
			res.status(200).json({ recipes, aa: "search and paginated recipes" });
		} else if (search) {
			const recipes = await RecipeModel.find({
				title: { $regex: new RegExp(search, "i") },
			});
			res.status(200).json({ recipes, aa: "search recipes" });
		} else if (page) {
			const recipes = await RecipeModel.find()
				.skip(skipvalue)
				.limit(limitvalue);
			res.status(200).json({ recipes, aa: "paginated recipes" });
		} else {
			const recipes = await RecipeModel.find();
			res.status(200).json({ recipes, aa: "all recipes" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

RecipeRouter.get("/filter", auth, async (req, res) => {
	const { type } = req.query;
	const { page } = req.query;
	const skipvalue = (page - 1) * 10;
	const limitvalue = page * 10;
	try {
		const recipes = await RecipeModel.find({ type: `${type}` })
			.skip(skipvalue)
			.limit(limitvalue);
		res.status(200).json({ recipes });
	} catch (error) {
		res.status(400).json({ error });
	}
});

//update the recipe if role == admin and if that recipe is created by him
RecipeRouter.patch("/:recipeID", auth, access("admin"), async (req, res) => {
	const { recipeID } = req.params;
	const {
		title,
		image,
		req_membership,
		description,
		instructions,
		ingredients,
		cookingTime,
		calorie,
		fat,
		rating,
		type,
		userID,
	} = req.body;

	const user = await UserModel.findOne({ _id: userID });
	const recipe = await RecipeModel.findOne({ _id: recipeID });
	try {
		if (user._id == recipe.userID) {
			await RecipeModel.findByIdAndUpdate(recipeID, {
				title,
				image,
				req_membership,
				description,
				instructions,
				ingredients,
				cookingTime,
				calorie,
				fat,
				rating,
				type,
				userID,
			});
			res.status(200).json({ msg: "Recipe has been updated!" });
		} else {
			res
				.status(200)
				.json({ msg: "You don't have access to update this recipe" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

// delete recipe
RecipeRouter.delete("/:recipeID", auth, access("admin"), async (req, res) => {
	const { recipeID } = req.params;
	const { userID } = req.body;

	const user = await UserModel.findOne({ _id: userID });
	const recipe = await RecipeModel.findOne({ _id: recipeID });
	try {
		if (user._id == recipe.userID) {
			await RecipeModel.findByIdAndDelete(recipeID);
			res.status(200).json({ msg: "Recipe has been updated!" });
		} else {
			res
				.status(200)
				.json({ msg: "You don't have access to delete this recipe" });
		}
	} catch (error) {
		res.status(400).json({ error });
	}
});

module.exports = { RecipeRouter };
