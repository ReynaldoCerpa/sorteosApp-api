
import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoleto(req, res ) {   
     try {
        var id = req.body.idCartera;
        var filtro = req.body.filtro;
        console.log("Params: ", req.body);
            console.log("Hola");
            const conn = await connect();
            const posts = await conn.query('call filtrosBoletos(?, ?)',[id, filtro]);
            console.log(posts[0]);
            return res.json(posts[0][0]);
            
    } catch (e) {
        console.log(e);
    }
}
