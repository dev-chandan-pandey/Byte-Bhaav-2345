/* eslint-disable linebreak-style */
const express = require("express")
const { connection } = require("./config/db")
const { userRouter } = require("./routes/user.routes")
const { auth } = require("./middleware/auth.middleware")
const { RecipeRouter } = require("./routes/recipe.routes")

const app = express()
app.use(express.json())
app.use("/users", userRouter)
app.use("/recipes",RecipeRouter)
//Use auth middleware for restricted routes

app.get("/", auth, (req, res) => {
	res.send({ msg: "This is the home route" })
})

app.listen(process.env.port, async () => {
	try {
		await connection
		console.log("connected to the DB")
		console.log(`Server is running at port ${process.env.port}`)
	} catch (err) {
		console.log(err)
	}
})
