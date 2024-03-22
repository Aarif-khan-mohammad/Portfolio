const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type : Boolean,
        default : false,
    },
})

//Define collection name

userSchema.pre("save" , async function(next){
    const user = this;
    
    if(!user.isModified("password")){
        next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password , saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error);
        
    }
})


userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin, 
        } , 
        process.env.JWT_TOKEN_KEY, 
        {
            expiresIn : "30d" 
        })
    } catch (error) {
        console.error(error)
        
    }
}

userSchema.methods.comparePassword = async function(password){
    return bcrypt.compare(password , this.password);
}

const User = new mongoose.model("User" , userSchema);

module.exports = User;