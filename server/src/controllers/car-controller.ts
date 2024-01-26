import { Request, Response } from "express";
import { CreateCarInput } from "../inputs/schemas.js";
import { CarService } from "../services/car-service.js";

export class CarController {
    private carService: CarService;
    constructor() {
        this.carService = new CarService();
    }

    async createCarHandler(req: Request<{}, {}, CreateCarInput["body"]>, res: Response) {
        try {
            const body = req.body;
    
            const car = await this.carService.create(body);
            return res.status(201).json(car);
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
    
    async getAllCarsHandler(req: Request, res: Response) {
        try {
            const cars = await this.carService.getAll();
        
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
            return res.status(204)
        } catch (error) {
            console.log(error)
            return res.status(400).json({ message: "Something went wrong" })
        }
    }
}