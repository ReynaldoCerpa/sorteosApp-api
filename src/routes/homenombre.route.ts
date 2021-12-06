import {Router} from "express";
const router = Router();

import * as index from "../controllers/homenombre.controller"
router.route("/nombrehome")
    .post(index.getnombre)

    
export default router;