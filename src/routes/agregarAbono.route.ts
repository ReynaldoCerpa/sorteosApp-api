import {Router} from "express";
const router = Router();

import * as index from "../controllers/agregarAbono.controller"
router.route("/agregarAbono")
    .post(index.agregarAbono)

    
export default router;