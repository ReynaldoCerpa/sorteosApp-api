import {Request, Response} from "express";
import { connect } from "../database";
const path = require("path");

export async function registerUser(req: Request, res: Response){
    try{
        let validRegister = false;
        const nombre = req.body.nombre;
        const apellido1 = req.body.apellido1;
        const apellido2 = req.body.apellido2;
        const calle = req.body.calle;
        const  numint= req.body.numint;
        const numext = req.body.numext;
        const  colonia= req.body.colonia;
        const  codigoPostal= req.body.codigoPostal;
        const ciudad = req.body.ciudad;
        const correo = req.body.correo;
        const telefono = req.body.telefono;
        const numBoleto = req.body.boleto;
        console.log("Params: ",req.body);
        
        //"call validate_login(?,?,?,?,?,?)",[nombre, direccion, telefono, email, usuario, contrasena]

        const conn = await connect();
        
        await conn.query("call crearComprador(?,?,?,?,?,?,?,?,?,?,?,?)",[nombre, apellido1, apellido2, calle, numint, numext, colonia, codigoPostal, ciudad, correo, telefono, numBoleto]);
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