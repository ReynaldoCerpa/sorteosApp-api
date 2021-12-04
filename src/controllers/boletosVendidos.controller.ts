import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getboletosVendidos(req: Request, res: Response): Promise<Response | void> {
    try {
        var id = req.body.idColaborador;
        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('SELECT b.numBoleto, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre FROM boleto b inner join comprador c on c.idComprador = b.idComprador where b.fechaVenta is not null and b.idColaborador = ?', [id]);
    
            return res.json(posts[0]);

       
    } catch (e) {
        console.log(e);
    }
}