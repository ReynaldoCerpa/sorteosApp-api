import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

/*
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



    const hasValue = JSON.stringify(accounts);        
        
        const validation = (hasValue.indexOf("idPromotor") == 5) ? "true" : "false";
        return res.send(validation);
}*/

export async function getCarteras(req: Request, res: Response){
    try{

        var id = req.body.idColaborador;
        console.log(req.body.idColaborador);
        
        console.log("Params: ", req.body);
        
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM cartera where idColaborador = ?',[id]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}