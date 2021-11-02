import {Router} from "express";
const router = Router();

import * as login from "../controllers/login.controller"
router.route("/login")
    .get(login.loginPage)

export default router;