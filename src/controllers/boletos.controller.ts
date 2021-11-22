import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoleto(req: Request, res: Response): Promise<Response | void> {
    try {
        //const idPromotor = req.body.idPromotor;
        const conn = await connect();
        //const posts = await conn.query('SELECT * FROM cartera where idColaborador = ?',[idPromotor]);
        const posts = await conn.query('SELECT * FROM boleto');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
}