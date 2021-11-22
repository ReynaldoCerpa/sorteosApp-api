import express, {Application} from "express";
import path from "path";
import cookieParser from "cookie-parser"
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression"
import bodyParser from "body-parser";

//Routes
import loginRoute from "./routes/login.routes"
import indexRoute from "./routes/index.routes"
import registerRoute from "./routes/register.routes"
import carterasRoute from "./routes/carteras.routes"
import boletosRoute from "./routes/boletos.routes"

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
    }

    routes(){
        this.app.use(loginRoute);
        this.app.use(indexRoute);
        this.app.use(registerRoute);
        this.app.use(carterasRoute);
        this.app.use(boletosRoute);
    }

    settings(){
        this.app.set("port", this.port || process.env.PORT || 3000);
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("Server running on port", this.app.get("port"));
    }
}