import {Router} from "express";
const router = Router();

import * as index from "../controllers/boletos_novendidos.controller"
router.route("/boletosNoVendidos")
    .post(index.getBoletosNoVendidos)

    
export default router;