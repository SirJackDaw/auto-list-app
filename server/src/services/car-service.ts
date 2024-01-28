import { ICar } from "../database/model/car.model.js";
import { CreateCarInput, ReadAllCarsInput, UpdateCarInput } from "../inputs/schemas.js";
import { ICarRepository } from "../interfaces/CarRepository.js";

export class CarService {
    constructor(private readonly carRepository: ICarRepository) {}

    create(dto: CreateCarInput): Promise<ICar> {
        return this.carRepository.create(dto)
    }
    
    update(id: string, dto: UpdateCarInput) {
        return this.carRepository.update(id, dto)
    }
    
    deleteCar(id: string): void {
        return this.carRepository.deleteCar(id)
    }
    
    getAll(query: ReadAllCarsInput) {
        return this.carRepository.getAll(query)
    }
    
    getById(id: string) {
        return this.carRepository.getById(id)
    }
}