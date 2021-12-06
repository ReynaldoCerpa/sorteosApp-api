import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getnombre(req: Request, res: Response){
    try{

        var id = req.body.idColaborador;
        console.log(req.body.idColaborador);
        
        console.log("Params: ", req.body);
        
        const conn = await connect();
        const posts = await conn.query('select concat(nombre, " ", apellido1) from colaborador where idColaborador = ?',[id]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}