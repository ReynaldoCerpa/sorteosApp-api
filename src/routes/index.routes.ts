import {Router} from "express";
const router = Router();

import * as index from "../controllers/index.controller"
router.route("/")
    .get(index.getPromotores)


router.route("/testSayuri")
    .get(index.test)

export default router;