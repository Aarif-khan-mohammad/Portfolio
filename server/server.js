require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require('./router/auth-router');
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const cors = require("cors");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

//Handling the CORS policy
const corsOptions = {
    origin: "http://localhost:5173",
    method : "GET , POST , PUT , DELETE , PATCH , HAD",
    credentials :true
}

app.use(cors(corsOptions))

app.use(express.json());

app.use("/api/auth" , authRoute);

app.use("/api/form" ,contactRoute)

app.use("/api/data" ,serviceRoute)

app.use(errorMiddleware);


const PORT = 5000;
connectDB().then(()=>{
    app.listen(PORT , ()=>{
        console.log("server running successfully")
    })
})
