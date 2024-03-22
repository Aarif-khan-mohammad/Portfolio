const {z} = require("zod");

const loginSchema = z.object({
    email : z
    .string({required_error : "Email is Required"})
    .trim()
    .email({message : "Invalid Email Address"})
    .min(3 , {message : "Email must atleast 3 char"})
    .max(255 , {message : "Email not more than 255 char"}) , 

    password : z
    .string({required_error : "Password is Required"})
    .trim()
    .min(7 , {message : "password must atleast 7 char"})
    .max(1024 , {message : "password not more than 1024 char"}) ,

})

const signupSchema = loginSchema.extend({
    username : z
    .string({required_error : "Name Required"})
    .trim()
    .min(3 , {message : "Name must atleast 3 char"})
    .max(255 , {message : "Name not more than 255 char"}) , 

    
    phone : z
    .string({required_error : "Phone Number is Required"})
    .trim()
    .min(10 , {message : "phone Number must atleast 10 char"})
    .max(20 , {message : "phone Number not more than 20 char"}) , 

     
})


module.exports = {signupSchema , loginSchema};