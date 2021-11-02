import {Request, Response} from "express";
const path = require("path");

export function loginPage(req: Request, res: Response){
    return res.json({msg:"Welcome to login page!"})
}