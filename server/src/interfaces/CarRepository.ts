import { CreateCarInput, ReadAllCarsInput, UpdateCarInput } from "../inputs/schemas.js";

export interface ICarRepository {
    create(dto: CreateCarInput): Promise<any>;
    update(id: string, dto: UpdateCarInput): Promise<any>;
    deleteCar(id: string): void;
    getAll(query: ReadAllCarsInput): Promise<any/* ReadAllCarsOutput */>;
    getById(id: string): Promise<any/* ReadCarOutput */>;
}