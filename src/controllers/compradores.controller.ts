import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getCompradores(req: Request, res: Response){
    try{

        var id = req.body.idColaborador;
        var numBoleto = req.body.numBoleto;
        console.log(req.body.idColaborador);
        
        console.log("Params: ", req.body);
        
        const conn = await connect();
        const posts = await conn.query('SELECT distinct c.idComprador, concat(c.nombre, " ", c.apellido1) as nombre FROM comprador c inner join boleto b on c.idComprador = b.idComprador where b.idColaborador = ?',[id]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}