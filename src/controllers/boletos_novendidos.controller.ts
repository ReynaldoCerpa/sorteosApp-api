import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoletosNoVendidos(req: Request, res: Response){
    try{

        var id = req.body.idColaborador;
        console.log(req.body.numBoleto);
        
        console.log("Params: ", req.body);
        
        const conn = await connect();
        const posts = await conn.query('select idCartera, numBoleto from boleto where idComprador IS NULL and idColaborador = ?',[id]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}