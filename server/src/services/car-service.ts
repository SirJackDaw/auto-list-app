import { CarRepository } from "../database/repository/car-repository.js";
import { CreateCarInput, UpdateCarInput } from "../inputs/schemas.js";

export class CarService {
    private carRepository: CarRepository;
    constructor() {
        this.carRepository = new CarRepository();
    }

    create(dto: CreateCarInput["body"]) {
        return this.carRepository.create(dto)
    }
    
    update(id: string, dto: UpdateCarInput["body"]) {
        return this.carRepository.update(id, dto)
    }
    
    deleteCar(id: string) {
        return this.carRepository.deleteCar(id)
    }
    
    getAll() {
        return this.carRepository.getAll()
    }
    
    getById(id: string) {
        return this.carRepository.getById(id)
    }
}