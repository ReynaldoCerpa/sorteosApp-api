import {json, Request, Response} from "express";
import { connect } from "../database";
const path = require("path");

export async function loginPage(req: Request, res: Response){
    try{
        const username = req.body.username;
        const password = req.body.password;
        console.log("Params: ",req.body);
        
        const conn = await connect();
        const accounts = await conn.query("call validate_login(?,?)",[username, password]);
        const hasValue = JSON.stringify(accounts);  
        const validation = (hasValue.indexOf("idColaborador") == 5) ? "true" : "false";
        return res.send(validation);
    } catch (e) {
        console.log(e);
    }
}