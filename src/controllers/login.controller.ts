import {Request, Response} from "express";
import { connect } from "../database";
const path = require("path");

export async function loginPage(req: Request, res: Response){
    try{
        const username = req.body.username;
        const password = req.body.password;
        console.log("Params: ",req.body);
        
        const conn = await connect();
        const accounts = await conn.query("select idPromotor from promotor where usuario = ? and contrasena = ?",
        [username, password]);
        
        if (accounts[0].toString().length > 0){
            return res.send("true")
        } else {
            return res.send("false")   
        }
    } catch (e) {
        console.log(e);
    }
}