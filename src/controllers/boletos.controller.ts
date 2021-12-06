import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoleto(req: Request, res: Response): Promise<Response | void> {
    try {
        var id = req.body.idCartera;
        console.log("Params: ", req.body);
            console.log("Hola");

            const conn = await connect();
            const posts = await conn.query('SELECT b.numBoleto, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre FROM boleto b left join comprador c on c.idComprador = b.idComprador inner join cartera ca on ca.idCartera = b.idCartera where ca.idCartera = ?',[id]);
    
            return res.json(posts[0]);

       
    } catch (e) {
        console.log(e);
    }
}

export async function getAllBoletos(req: Request, res: Response): Promise<Response | void> {
    try {
        var id = req.body.idCartera;
        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('call carteraBoletos(?)',[id]);
    
            return res.json(posts[0]);

       
    } catch (e) {
        console.log(e);
    }
}




/*import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoleto(req: Request, res: Response): Promise<Response | void> {
    try {
        //const idPromotor = req.body.idPromotor;
        const conn = await connect();
        //const posts = await conn.query('SELECT * FROM cartera where idColaborador = ?',[idPromotor]);
        const posts = await conn.query('SELECT b.numBoleto, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre FROM boleto b inner join comprador c on c.idComprador = b.idComprador');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
} */