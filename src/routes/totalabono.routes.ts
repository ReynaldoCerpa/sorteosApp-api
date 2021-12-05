import {Router} from "express";
const router = Router();

import * as index from "../controllers/totalabono.controller"
router.route("/totalabono")
    .post(index.getTotalAbono)

    
export default router;