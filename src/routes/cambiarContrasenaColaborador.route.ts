import {Router} from "express";
const router = Router();

import * as index from "../controllers/cambiarContrasenaColaborador.controller"
router.route("/cambiarContraColaborador")
    .post(index.cambiarContrasena)

    
export default router;