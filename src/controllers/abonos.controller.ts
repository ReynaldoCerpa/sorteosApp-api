import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getAbonos(req: Request, res: Response): Promise<Response | void> {
    try {
        var id = req.body.numBoleto;
        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('select concat(day(fecha), "/", month(fecha), "/", year(fecha)) as fecha, cantidad from abono where numBoleto = ?', [id]);
    
            return res.json(posts[0]);

       
    } catch (e) {
        console.log(e);
    }
}