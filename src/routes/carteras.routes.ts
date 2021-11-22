import {Router} from "express";
const router = Router();

import * as index from "../controllers/carteras.controller"
router.route("/carteras")
    .post(index.getCarteras)

    
export default router;