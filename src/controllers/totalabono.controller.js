import { json, Request, Response } from "express";
import { connect } from '../database'
const path = require("path");

export async function getTotalAbono(req, res ) {
    try {
        var id = req.body.numBoleto;
        console.log("Params: ", req.body);

            const conn = await connect();
            const posts = await conn.query('select sum(cantidad) as cantidad from abono where numBoleto = ?', [id]);
          
            console.log(posts[0]);
            return res.json(posts[0]);

    } catch (e) {
        console.log(e);
    }
}