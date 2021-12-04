import {Router} from "express";
const router = Router();

import * as index from "../controllers/boletosVendidos.controller"
router.route("/boletosvendidos")
    .post(index.getboletosVendidos)

    
export default router;