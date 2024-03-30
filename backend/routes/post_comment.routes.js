/* eslint-disable linebreak-style */
const express = require("express")
const { postcommentModel } = require("../model/post_comment.model")
const { auth } = require("../middleware/auth.middleware")

const postCommentRouter = express.Router()
postCommentRouter.use(express.json())
// post new comment
postCommentRouter.post("/register/:postID",auth,async(req,res) => {
	const {postID} = req.params 
	req.body.postID = postID 
	const payload = req.body 
	try {
		const comment = new postcommentModel(payload)
		await comment.save()
		res.status(200).json({msg:"New comment has been posted!"})
	} catch (error) {
		res.status(400).json({error})
	}
})

module.exports = {postCommentRouter}
