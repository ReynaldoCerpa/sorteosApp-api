import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getCarteras(req: Request, res: Response): Promise<Response | void> {
    try {
        //const idPromotor = req.body.idPromotor;
        const conn = await connect();
        //const posts = await conn.query('SELECT * FROM cartera where idColaborador = ?',[idPromotor]);
        const posts = await conn.query('SELECT * FROM cartera');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
}