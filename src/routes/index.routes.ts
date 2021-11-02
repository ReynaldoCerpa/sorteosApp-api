import {Router} from "express";
const router = Router();

import * as index from "../controllers/index.controller"
router.route("/")
    .get(index.indexPage)

export default router;