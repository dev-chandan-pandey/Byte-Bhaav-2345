/* eslint-disable linebreak-style */
const express = require("express")
const { postModel } = require("../model/post.model")
const { auth } = require("../middleware/auth.middleware")

const postRouter = express.Router()
postRouter.use(express.json())
// add new post
postRouter.post("/register", auth, async (req, res) => {
	const payload = req.body
	try {
		const post = new postModel(payload)
		await post.save()
		res.status(200).json({ msg: "New post has been added" })
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
