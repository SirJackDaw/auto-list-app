import * as schemas from './../inputs/schemas.js';
import { Express, Router } from 'express';
// import { createCarHandler, deleteCarHandler, getAllCarsHandler, getCarByIdHandler, updateCarHandler } from '../controllers/carController.js';
import * as carController from '../controllers/carController.js';
import { isAuth } from '../middlewares/authUser.js';
import { validator } from '../middlewares/validation.js';

const router = Router();

export function registerRoutes(): Router {
    router.post("/v1/cars", isAuth, validator(schemas.createCarSchema),carController.createCarHandler);
    router.get("/v1/cars", isAuth, carController.getAllCarsHandler);
    router.get("/v1/cars/:id", isAuth, carController.getCarByIdHandler);
    router.patch("/v1/cars/:id", isAuth, validator(schemas.updateCarSchema), carController.updateCarHandler);
    router.delete("/v1/cars/:id", isAuth, carController.deleteCarHandler);

    return router;
}

// export function registerRoutes(app: Express) {
//     app.post("/v1/cars", isAuth, carController.createCarHandler);
//     app.get("/v1/cars", isAuth, carController.getAllCarsHandler);
//     app.get("/v1/cars:id", isAuth, carController.getCarByIdHandler);
//     app.patch("/v1/cars:id", isAuth, carController.updateCarHandler);
//     app.delete("/v1/cars:id", isAuth, carController.deleteCarHandler);
// }