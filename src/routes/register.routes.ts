import {Router} from "express";
const router = Router();

import * as register from "../controllers/register.controller"
router.route("/register")
    .get(register.registerPage)
    .post(register.currUser)

export default router;