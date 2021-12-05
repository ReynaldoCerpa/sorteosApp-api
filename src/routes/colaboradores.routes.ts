import {Router} from "express";
const router = Router();

import * as colaboradores from "../controllers/colaboradores.controller"
router.route("/getColaboradores")
    .get(colaboradores.getColaboradores)

export default router;