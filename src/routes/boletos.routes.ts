import {Router} from "express";
const router = Router();

import * as index from "../controllers/boletos.controller"
router.route("/boletos")
    .post(index.getBoleto)

router.route("/AllBoletos")
    .post(index.getAllBoletos)

    
export default router;