import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getAsignarBoleto(req: Request, res: Response){
    try{
        let validRegister = false;
        var idComprador= req.body.idComprador;
        var numBoleto= req.body.numBoleto;
        console.log("Params: ",req.body);
        
        const conn = await connect();
        
        const posts = await conn.query('update boleto set fechaVenta = date(now()), idComprador = ? where numBoleto = ?',[idComprador, numBoleto]); 
        validRegister = true; 
        return res.send(validRegister);
    } catch (e) {
        console.log(e);
        return res.send("Something went wrong...")
    }
}

export function currUser(req: Request, res: Response){
    console.log("CurrUser:",req.body);
    
    return res.send(req.body)
}