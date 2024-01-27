import { Express } from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import compression from 'compression';
import { CarController } from "./controllers/car-controller.js";
import { CarRepository } from "./database/repository/car-repository.js";
import { CarService } from "./services/car-service.js";

export function generateApp (app: Express) {
    app.use(cors({ credentials: true }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use((req, res, next) => { res.setTimeout(5000); next() });

    const carService = new CarService(new CarRepository())
    const carController = new CarController(carService)
    app.use('/', carController.getRoutes());
}