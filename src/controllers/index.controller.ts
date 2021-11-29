import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getPromotores(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM promotor');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
    }
}

export async function testConnection(req: Request, res: Response): Promise<Response | void> {
    try {
        return res.send("Connected to api")
    }
    catch (e) {
        console.log(e)
    }
}