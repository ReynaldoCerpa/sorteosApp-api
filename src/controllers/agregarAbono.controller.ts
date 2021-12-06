import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function agregarAbono(req: Request, res: Response): Promise<Response | void> {
    let validRegister = false;
    try {
        var id = req.body.idColaborador;
        var numBoleto = req.body.numBoleto;
        var cantidad = req.body.cantidad;

        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('call agregarAbono(?, ?, ?)', [id, numBoleto, cantidad]);
            validRegister = true;
            console.log(validRegister);
            
            return res.send(validRegister);

       
    } catch (e) {
        return res.send(validRegister);

        console.log(e);
    }
}