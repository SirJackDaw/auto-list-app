// import { Request, Response } from "express";
// import { CreateCarInput } from "../inputs/schemas.js";
// import { carService } from "../services/carService.js";

// async function createCarHandler(req: Request<{}, {}, CreateCarInput["body"]>, res: Response) {
//     try {
//         const body = req.body;

//         const car = await carService.create(body);
//         return res.status(201).json(car);
//     } catch (error) {
//         console.log(error)
//         return res.status(400).json({ message: "Something went wrong" })
//     }
// }

// async function getAllCarsHandler(req: Request, res: Response) {
//     try {
//         const cars = await carService.getAll();
    
//         return res.status(200).json(cars);
    
//     } catch (error) {
//         console.log(error)
//         return res.status(400).json({ message: "Something went wrong" })
//     }
// }

// async function getCarByIdHandler(req: Request, res: Response) {
//     try {
//         const id = req.params.id;
//         const car = await carService.getById(id);
    
//         return res.status(200).json(car);
    
//     } catch (error) {
//         console.log(error)
//         return res.status(400).json({ message: "Something went wrong" })
//     }
// }

// async function updateCarHandler(req: Request, res: Response) {
//     try {
//         const id = req.params.id;
//         const body = req.body;
    
//         const car = await carService.update(id, body);
    
//         return res.status(200).json(car)
//     } catch (error) {
//         console.log(error)
//         return res.status(400).json({ message: "Something went wrong" })
//     }
// }

// function deleteCarHandler(req: Request, res: Response) {
//     try {
//         const id = req.params.id;
//         carService.deleteCar(id);
//         return res.status(204)
//     } catch (error) {
//         console.log(error)
//         return res.status(400).json({ message: "Something went wrong" })
//     }
// }

// export const carController = {
//     createCarHandler,
//     getAllCarsHandler,
//     getCarByIdHandler,
//     updateCarHandler,
//     deleteCarHandler
// }