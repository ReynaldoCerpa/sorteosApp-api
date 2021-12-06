import {Router} from "express";
const router = Router();

import * as index from "../controllers/carteras.controller"
router.route("/carteras")
    .post(index.getCarteras)

router.route("/allCarteras")
    .get(index.getAllCarteras)

router.route("/adeudoCarteras")
    .get(index.getAdeudosCarteras)

router.route("/insertarCarteras")
    .post(index.insertarCarteras)

router.route("/abonoCartera")
    .post(index.abonoCartera)

router.route("/devolverCartera")
    .post(index.devolverCartera)
    
export default router;