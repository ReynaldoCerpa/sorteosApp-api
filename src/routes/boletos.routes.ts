import {Router} from "express";
const router = Router();

import * as index from "../controllers/boletos.controller"
router.route("/boletos")
    .get(index.getBoleto)

    
export default router;