/* eslint-disable linebreak-style */
const express = require("express")
const { postModel } = require("../model/post.model")
const { auth } = require("../middleware/auth.middleware")
const { upload } = require("../middleware/multer.middleware")
const cloudinary = require("cloudinary").v2
require("dotenv").config()
const postRouter = express.Router()
postRouter.use(express.json())

// add new post
cloudinary.config({
	cloud_name: process.env.cloudinary_cloud_name,
	api_key: process.env.cloudinary_api_key,
	api_secret: process.env.cloudinary_api_secret,
})
postRouter.post("/register", auth, upload.single("image"), async (req, res) => {
	console.log("Vishnuraj kr")

	try {
		cloudinary.uploader.upload(req.file.path, async (err, result) => {
			if (err) {
				console.log(err)
				res.status(500).json({ msg: "Error" })
			}
			const post = new postModel({
				...req.body,
				image: result.secure_url, // Use the secure URL provided by Cloudinary
			})
			await post.save()
			res.status(200).json({ msg: "New post has been added" })
		})
	} catch (error) {
		res.status(400).json({ error })
	}
})

postRouter.get("/", auth, async (req, res) => {
	try {
		const posts = await postModel.find()
		res.status(200).json({ posts })
	} catch (error) {
		res.status(400).json({ error })
	}
})

module.exports = { postRouter }
