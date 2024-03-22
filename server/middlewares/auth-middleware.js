const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req , res , next ) =>{
    const token = req.header("Authorization");

    if(!token){
        return res.status(400).json({message :"UnAuthorized HTTP , Token is not Provided"});
    }
    

    const jwtToken  = token.replace("Bearer" , "").trim()
    console.log(jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken , process.env.JWT_TOKEN_KEY );
        
        
        const userData = await User.findOne({email : isVerified.email}).select({password : 0}); // Getting user data except password
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userId = userData._id

        next();
    } catch (error) {
        return res.status(400).json({message :"UnAuthorized , Invalid Token"});
    }

    
}

module.exports = authMiddleware;