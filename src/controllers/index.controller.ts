import {Request, Response} from "express";
const path = require("path");

export function indexPage(req: Request, res: Response){
    return res.json({msg:"Api working"});
} 