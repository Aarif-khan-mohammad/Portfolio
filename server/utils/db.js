const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const URI = process.env.MONGODB_URI;

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("DB connected succesfully");
        
    } catch (error) {
        console.log("data base connection error");
        process.exit(0);
    }
}



module.exports = connectDB;