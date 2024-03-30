
/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-spaces-and-tabs */
const { UserModel } = require("../model/user.model")

/* eslint-disable linebreak-style */
const access= (...permittedRoles)=>{
	
	return async(req,res,next)=>{
		const {userID} = req.body 
	    const user = await UserModel.findOne({_id:userID})
		if(permittedRoles.includes(user.role)){
			
			next()
		} else {
			res.json({msg:"You have no access"})
		}
	}
}
  
module.exports={
	access
}

