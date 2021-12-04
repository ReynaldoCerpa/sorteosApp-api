import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getComprador(req: Request, res: Response){
    try{

        var id = req.body.idComprador;
        var numBoleto = req.body.numBoleto;
        console.log(req.body.idColaborador);
        
        console.log("Params: ", req.body);
        
        const conn = await connect();
        const posts = await conn.query(' SELECT concat(nombre," ", apellido1," ", apellido2) as nombre, concat(calle, " #", numInt, "-", numExt, " ", colonia, ", ", ciudad, ", CP.",codigoPostal) as direccion, correo, telefono FROM comprador where idComprador= ?',[id]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}