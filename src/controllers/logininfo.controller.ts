import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getinfoLogin(req: Request, res: Response): Promise<Response | void> {
    try {
        var id = req.body.username;
        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('select nombre, idColaborador from colaborador where nombreusuario = ?', [id]);

            console.log(posts[0]);
            
            return res.json(posts[0]);

       
    } catch (e) {
        console.log(e);
    }
}