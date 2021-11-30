import {Router} from "express";
const router = Router();

import * as register from "../controllers/register.controller"
router.route("/register")
    .post(register.registerUser)

export default router;