import {Router} from "express";
const router = Router();

import * as index from "../controllers/boletos_novendidos.controller"
router.route("/BoletosNoVendidos")
    .post(index.getBoletosNoVendidos)

    
export default router;