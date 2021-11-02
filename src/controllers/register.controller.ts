import {Request, Response} from "express";
const path = require("path");

export function registerPage(req: Request, res: Response){
    return res.json({msg:"Welcome to login page!"})
}

export function currUser(req: Request, res: Response){
    console.log("CurrUser:",req.body);
    
    return res.send(req.body)
}