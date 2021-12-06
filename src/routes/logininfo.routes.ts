import {Router} from "express";
const router = Router();

import * as login from "../controllers/logininfo.controller"
router.route("/logininfo")
    .post(login.getinfoLogin)

export default router;