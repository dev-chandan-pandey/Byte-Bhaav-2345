
/* eslint-disable linebreak-style */
const jwt = require("jsonwebtoken")
const { blacklist } = require("../blacklist")

const auth = (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1]
	if (token) {
		if (blacklist.includes(token)) {
			res.status(200).json({ msg: "Do login again and pass new token" })
		} else {
			jwt.verify(token, "masai", (err, decoded) => {
				if (decoded) {
					// console.log("ppppppppppppppppppp", decoded)
					req.body.userID = decoded.userID
					next()
				}
			})
		}
	} else {
		res.json({ msg: "You are not Authorised" })
	}
}

module.exports = {

	auth
}

