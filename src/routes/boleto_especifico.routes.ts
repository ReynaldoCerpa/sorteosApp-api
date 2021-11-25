import {Router} from "express";
const router = Router();

import * as index from "../controllers/boleto_especifico.controller"
router.route("/boletoespecifico")
    .post(index.getBoletoEspecifico)

    
export default router;