
import { Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getBoleto(req: Request, res: Response): Promise<Response | void> {
    try {
        var id = req.body.idCartera;
        var filtro = req.body.filtro;
        console.log("Params: ", req.body);
            console.log("Hola");

            if (filtro === '0')
            {
            const conn = await connect();
            const posts = await conn.query('SELECT b.numBoleto, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre FROM boleto b left join comprador c on c.idComprador = b.idComprador inner join cartera ca on ca.idCartera = b.idCartera where ca.idCartera = ?',[id]);
            return res.json(posts[0]);

            }
            else if (filtro === '1'){
                const conn = await connect();
            const posts = await conn.query('SELECT b.numBoleto, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre FROM boleto b left join comprador c on c.idComprador = b.idComprador inner join cartera ca on ca.idCartera = b.idCartera where ca.idCartera = ? and b.fechaVenta is not null',[id]);
            return res.json(posts[0]);
            }
            else{
                const conn = await connect();
            const posts = await conn.query('SELECT b.numBoleto, concat(c.nombre," ", c.apellido1," ", c.apellido2) as nombre FROM boleto b left join comprador c on c.idComprador = b.idComprador inner join cartera ca on ca.idCartera = b.idCartera where ca.idCartera = ? and b.fechaVenta is null',[id]);
            return res.json(posts[0]);
            }

            

       
    } catch (e) {
        console.log(e);
    }
}
