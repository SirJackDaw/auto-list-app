import { Router } from 'express';
import { isAuth } from '../middlewares/authUser.js';
import { validator } from '../middlewares/validation.js';
import { schemas } from '../inputs/schemas.js';
import { CarController } from '../controllers/car-controller.js';

//очень хотелось разбить по классам
export class CarsRouter{
    private router: Router;
    private carController: CarController;
    constructor() {
        this.carController = new CarController();
        this.router = this.initRouter()
    }

    private initRouter(): Router {
        const router = Router();

        router.post("/v1/cars", isAuth, validator(schemas.createCarSchema), async (req, res) => await this.carController.createCarHandler(req, res));
        router.get("/v1/cars", isAuth, async (req, res) => await this.carController.getAllCarsHandler(req, res));
        router.get("/v1/cars/:id", isAuth, async (req, res) => this.carController.getCarByIdHandler(req, res));
        router.patch("/v1/cars/:id", isAuth, validator(schemas.updateCarSchema), async (req, res) => await this.carController.updateCarHandler(req, res));
        router.delete("/v1/cars/:id", isAuth, async (req, res) => await this.carController.deleteCarHandler(req, res));

        return router
    }

    getRouter(): Router {
        return this.router;
    }
}


// export function registerRoutes(): Router {
//     const carController = new CarController();

//     router.post("/v1/cars", isAuth, validator(schemas.createCarSchema), () => carController.createCarHandler);
//     router.get("/v1/cars", isAuth, () => carController.getAllCarsHandler);
//     router.get("/v1/cars/:id", isAuth, () => carController.getCarByIdHandler);
//     router.patch("/v1/cars/:id", isAuth, validator(schemas.updateCarSchema), () => carController.updateCarHandler);
//     router.delete("/v1/cars/:id", isAuth, () => carController.deleteCarHandler);

//     return router;
// }

// export function registerRoutes(app: Express) {
//     app.post("/v1/cars", isAuth, carController.createCarHandler);
//     app.get("/v1/cars", isAuth, carController.getAllCarsHandler);
//     app.get("/v1/cars:id", isAuth, carController.getCarByIdHandler);
//     app.patch("/v1/cars:id", isAuth, carController.updateCarHandler);
//     app.delete("/v1/cars:id", isAuth, carController.deleteCarHandler);
// }