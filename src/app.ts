import express, {Application} from "express";
import path from "path";
import cookieParser from "cookie-parser"
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression"
import bodyParser from "body-parser";
import cors from "cors";

//Routes
import loginRoute from "./routes/login.routes"
import indexRoute from "./routes/index.routes"
import registerRoute from "./routes/register.routes"
import boletoEspecificoRoute from "./routes/boleto_especifico.routes"
import boletosRoute from "./routes/boletos.routes"
import carterasRout from "./routes/carteras.routes"
import boletos_novendidosRoute from "./routes/boletos_novendidos.routes"
import registerCompradorRoute from "./routes/registerComprador.route"
import compradoresRoute from "./routes/compradores.route"
import infocompradorRoute from "./routes/infoComprador.route"
import asignarBoletoRoute from "./routes/asignarBoletoComprador.route"
import boletosvendidosRoute from "./routes/boletosVendidos.route"
import totalabonoRoute from "./routes/totalabono.routes"
import abonosRoute from "./routes/abonos.route"







export class App{
    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cookieParser());
        this.app.use(bodyParser.json())
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(cors())
    }

    routes(){
        this.app.use(loginRoute);
        this.app.use(indexRoute);
        this.app.use(registerRoute);
        this.app.use(boletos_novendidosRoute);
        this.app.use(boletoEspecificoRoute);
        this.app.use(boletosRoute);
        this.app.use(carterasRout);
        this.app.use(registerCompradorRoute);
        this.app.use(compradoresRoute);
        this.app.use(infocompradorRoute);
        this.app.use(asignarBoletoRoute);
        this.app.use(boletosvendidosRoute);
        this.app.use(totalabonoRoute);
        this.app.use(abonosRoute);

    }

    settings(){
        this.app.set("port", this.port || process.env.PORT || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Server running on port", this.app.get("port"));
    }
}