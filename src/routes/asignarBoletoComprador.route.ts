import {Router} from "express";
const router = Router();

import * as index from "../controllers/asignarBoletoComprador.controller"
router.route("/asignarBoleto")
    .post(index.getAsignarBoleto)

    
export default router;