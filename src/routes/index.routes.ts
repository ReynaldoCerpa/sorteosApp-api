import {Router} from "express";
const router = Router();

import * as index from "../controllers/index.controller"
router.route("/")
    .get(index.getPromotores)

export default router;