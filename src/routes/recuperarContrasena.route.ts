import {Router} from "express";
const router = Router();

import * as login from "../controllers/recuperarContrasena.controller"
router.route("/recuperarContrasena")
    .post(login.recuperarContrasena)

export default router;