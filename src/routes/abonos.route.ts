import {Router} from "express";
const router = Router();

import * as index from "../controllers/abonos.controller"
router.route("/abonos")
    .post(index.getAbonos)

    
export default router;