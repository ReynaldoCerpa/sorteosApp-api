import {Request, Response} from "express";
import { connect } from '../database'
const path = require("path");

export async function getColaboradores(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        const colaborades = await conn.query("call getColaboradorInfo()");
        return res.json(colaborades[0]);
    }
    catch (e) {
        console.log(e)
    }
}