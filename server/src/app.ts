import { Express } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { CarsRouter } from "./routes/routesV1.js";

export function generateApp (app: Express) {
    app.use(cors({ credentials: true }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use((req, res, next) => { res.setTimeout(5000); next() });

    const carRouter = new CarsRouter()
    app.use('/', carRouter.getRouter());
}