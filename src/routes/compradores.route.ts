import {Router} from "express";
const router = Router();

import * as index from "../controllers/compradores.controller"
router.route("/compradores")
    .post(index.getCompradores)

    
export default router;