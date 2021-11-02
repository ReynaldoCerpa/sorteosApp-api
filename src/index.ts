import {App} from "./app"
async function main(){
    const app = new App();
    await app.listen();
}

main();


/*
import { Request, Response } from "express"
require("express-async-errors")

const winston = require("winston")
const config = require("config")
const login = require("./routes/login")
const auth = require("./middleware/auth")
const mongoose = require("mongoose")
const express = require("express");
const register = require("./routes/register")
const client = require("./routes/client")
const cookieParser = require("cookie-parser");
const error = require("./middleware/error")
const app = express();

winston.add(winston.transports.File, {filename: "logfile.log"})

if(!config.get("jwtPrivateKey")){
    console.error("FATAL ERROR! jwtPrivateKey not defined");
    process.exit(1);
}

mongoose.connect("mongodb://localhost/loanAppDB",{useNewUrlParser: true, useUnifiedTopology: true} )
.then(()=> console.log("Connected to MongoDB"))
.catch((err:Error) => console.error("could not connect to mongodb..."+err))

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser());
app.use(express.static("./public"))

app.use("/register",register)
app.use("/login",login)
app.use("/client",client)

app.get("/",(req:Request ,res:Response)=>{
    res.render("index")
})

app.get("*",(req: Request,res: Response)=>{
    res.status(404).render("error")
})

//always at the bottom 
app.use(error)

*/