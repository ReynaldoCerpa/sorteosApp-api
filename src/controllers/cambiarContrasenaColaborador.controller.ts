import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function cambiarContrasena(req: Request, res: Response): Promise<Response | void> {
    let validRegister = false;
    try {
        var id = req.body.idColaborador;
        var antigua = req.body.vieja;
        var nueva = req.body.nueva;
        var nueva2 = req.body.nueva2;

        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('call cambiarContrasenaColaborador(?, ?, ?, ?)', [id, antigua, nueva, nueva2]);
            validRegister = true;
            console.log(validRegister);
            
            return res.send(validRegister);

       
    } catch (e) {
        console.log(e);
        return res.send(validRegister);

        
    }
}