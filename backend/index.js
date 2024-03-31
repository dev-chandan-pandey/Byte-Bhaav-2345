/* eslint-disable linebreak-style */
const express = require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
const { auth } = require("./middleware/auth.middleware")
const { RecipeRouter } = require("./routes/recipe.routes")
const { postRouter } = require("./routes/post.routes")
const { postCommentRouter } = require("./routes/post_comment.routes")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/users", userRouter)

app.use("/recipes", RecipeRouter)
app.use("/posts", postRouter)
app.use("/postcomments", postCommentRouter)
//Use auth middleware for restricted routes

app.get("/", auth, (req, res) => {
	res.send({ msg: "This is the home route" })
})

//Use auth middleware for restricted routes

app.listen(process.env.port, async () => {
	try {
		await connection
		console.log("connected to the DB")
		console.log(`Server is running at port ${process.env.port}`)
	} catch (err) {
		console.log(err)
	}
})
