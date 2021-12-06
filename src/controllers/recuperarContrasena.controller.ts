import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function recuperarContrasena(req: Request, res: Response): Promise<Response | void> {
    let validRegister = false;
    try {
        var id = req.body.correo;
        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('call recuperarContrasena(?)', [id]);
            validRegister = true;
            console.log(validRegister);
            
            return res.send(validRegister);

       
    } catch (e) {
        console.log(e);
        return res.send(validRegister);

        
    }
}