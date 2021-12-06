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

export async function insertarCarteras(req: Request, res: Response){
    try{
        const numColaborador = req.body.numColaborador;
        const numCarteras = req.body.numCarteras;
        const numPromotor = req.body.numPromotor;
        console.log("Params: ", req.body);
        const conn = await connect();
        const posts = await conn.query("call crearCarteras(?,?,?)",[numColaborador, numPromotor, numCarteras]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}

export async function abonoCartera(req: Request, res: Response){
    try{
        const numCartera = req.body.numCartera;
        const numColaborador = req.body.numColaborador;
        const cantidadAbono = req.body.cantidadAbono;
        console.log("Params: ", req.body);
        const conn = await connect();
        const posts = await conn.query("call abonoCarteras(?,?,?)",[numCartera, numColaborador, cantidadAbono]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}

export async function devolverCartera(req: Request, res: Response){
    try{
        const numCartera = req.body.numCartera;
        
        console.log("Params: ", req.body);
        const conn = await connect();
        const posts = await conn.query("call devolverCartera(?)",[numCartera]); 

        return res.json(posts[0]);
    } catch (e) {
        console.log(e);
    }
}