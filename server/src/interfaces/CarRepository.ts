import { ICar } from "../database/model/car.model.js";
import { CreateCarInput, ReadAllCarsInput, UpdateCarInput } from "../inputs/schemas.js";

export interface ICarRepository {
    create(dto: CreateCarInput): Promise<ICar>;
    update(id: string, dto: UpdateCarInput): Promise<any>;
    deleteCar(id: string): void;
    getAll(query: ReadAllCarsInput): Promise<any[]>;
    getById(id: string): Promise<any>;
}