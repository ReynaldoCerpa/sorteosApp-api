import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

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

export async function getAllCarteras(req: Request, res: Response){
    try{
        
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM cartera'); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}

export async function getAdeudosCarteras(req: Request, res: Response){
    try{
        
        const conn = await connect();
        const posts = await conn.query("call adeudoCarteras()"); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}