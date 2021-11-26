import {Request, Response} from "express";
import { connect } from "../database";
const path = require("path");

export async function registerUser(req: Request, res: Response){
    try{
        let validRegister = false;
        const nombre = req.body.nombreCompleto;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const email = req.body.email;
        const usuario = req.body.usuario;
        const contrasena = req.body.password;
        console.log("Params: ",req.body);
        
        //"call validate_login(?,?,?,?,?,?)",[nombre, direccion, telefono, email, usuario, contrasena]

        const conn = await connect();
        const data = await conn.query("select * from promotor where usuario = ?",usuario);
        if(data[0].toString() == ""){
            validRegister = true;
            await conn.query("insert into promotor values (?,?,?,?,?,?)",[nombre, direccion, telefono, email, usuario, contrasena]);
        }

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