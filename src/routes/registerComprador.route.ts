import {Router} from "express";
const router = Router();

import * as register from "../controllers/registerComprador.controller"
router.route("/registerComprador")
    .post(register.registerUser)

export default router;