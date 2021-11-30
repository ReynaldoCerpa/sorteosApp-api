import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoletosNoVendidos(req: Request, res: Response){
    try{

        var id = req.body.numBoleto;
        console.log(req.body.numBoleto);
        
        console.log("Params: ", req.body);
        
        const conn = await connect();
        const posts = await conn.query('SELECT concat(day(b.fechaVenta), "/", month(b.fechaVenta), "/", year(b.fechaVenta)) as fecha, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre, concat(c.calle, " #", c.numInt, "-", c.numExt, " ", c.colonia, ", ", c.ciudad, ", CP.",c.codigoPostal) as direccion, c.correo as correo, c.telefono as telefono FROM boleto b left join comprador c on c.idComprador = b.idComprador where b.numBoleto =?',[id]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}