import {Router} from "express";
const router = Router();

import * as index from "../controllers/infocomprador.controller"
router.route("/infocomprador")
    .post(index.getComprador)

    
export default router;