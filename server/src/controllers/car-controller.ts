import { Request, Response, Router } from "express";
import { CreateCarInput, ReadAllCarsInput, schemas } from "../inputs/schemas.js";
import { CarService } from "../services/car-service.js";
import { isAuth } from "../middlewares/authUser.js";
import { validator } from "../middlewares/validation.js";

export class CarController {
    //I decide not to make interface here due to the time economy
    constructor(private readonly carService: CarService) {}

    async createCarHandler(req: Request<{}, {}, CreateCarInput>, res: Response) {
        try {
            const body = req.body;

            const car = await this.carService.create(body);
            console.log(car)
            return res.status(201).json(car);
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    
    async getAllCarsHandler(req: Request<{}, {}, {}, ReadAllCarsInput>, res: Response) {
        try {
            const query = req.query;

            const cars = await this.carService.getAll(query);
            console.log(cars)
        
            return res.status(200).json(cars);
        
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    
    async getCarByIdHandler(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const car = await this.carService.getById(id);

            console.log(car)
        
            return res.status(200).json(car);
        
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    
    async updateCarHandler(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const body = req.body;
        
            const car = await this.carService.update(id, body);
            console.log(car)
        
            return res.status(200).json(car)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    
    async deleteCarHandler(req: Request, res: Response) {
        try {
            const id = req.params.id;
            this.carService.deleteCar(id);
            return res.status(204).json({})
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }

    //decided to have this logic in controller, because i believe routes it's a same level of API
    getRoutes(): Router {
        const router = Router();

        router.post("/v1/cars", isAuth, validator(schemas.createCarSchema), async (req, res) => await this.createCarHandler(req, res));
        router.get("/v1/cars", isAuth, async (req, res) => await this.getAllCarsHandler(req, res));
        router.get("/v1/cars/:id", isAuth, async (req, res) => this.getCarByIdHandler(req, res));
        router.patch("/v1/cars/:id", isAuth, validator(schemas.updateCarSchema), async (req, res) => await this.updateCarHandler(req, res));
        router.delete("/v1/cars/:id", isAuth, async (req, res) => await this.deleteCarHandler(req, res));

        return router
    }
}