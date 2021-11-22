import {Router} from "express";
const router = Router();

import * as index from "../controllers/carteras.controller"
router.route("/carteras")
    .get(index.getCarteras)

    
export default router;