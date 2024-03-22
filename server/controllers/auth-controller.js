const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


const home = async (req , res)=>{
    try{
        res.status(200).send("welcome to the server");
    }catch(error){
        res.status(400).send({msg:"page not found"})
    }
}

//Register API

const register = async (req , res)=>{
    try{
        console.log(req.body);
        const {username , email , phone , password} = req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({message :"user already exist"})
        }


        const userCreated = await User.create({username , email , phone , password});

        res.status(200).json({msg:"Registration sucessfully done" , token: await userCreated.generateToken() , userId: userCreated._id.toString(),});
    }catch(error){
        res.status(400).json({msg:"internal server error"})
    }
}

//Login API

const login = async (req , res) =>{
    try {

        const {email , password} = req.body;

        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message : "Invalid Credentials"})
        }

        //const user = await bcrypt.compare(password , userExist.password);

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({msg:"LogIn sucessfull" , 
            token: await userExist.generateToken() , 
            userId: userExist._id.toString(),})
        }else{
            res.status(401).json({message : "Invalid Email or Password"})
        }

        
    } catch (error) {
        next(error);
    }
}

// to send user data - User Login

const user = async (req , res)=>{
    try {
         const userData = req.user;
         console.log(userData);
         return res.status(200).json({userData})
    } catch (error) {
        console.log(`error from the user route ${error}`)
        
    }
}

module.exports = {home , register , login , user};