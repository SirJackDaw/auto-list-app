import mongoose, { FilterQuery, ObjectId } from "mongoose";
import CarModel, { ICar } from "../model/car.model.js";
import { CreateCarInput, ReadAllCarsInput, UpdateCarInput } from "../../inputs/schemas.js";
import { ICarRepository } from "../../interfaces/CarRepository.js";

export class CarRepository implements ICarRepository{
    constructor() {}

    create(dto: CreateCarInput): Promise<ICar> {
        const id = new mongoose.Types.ObjectId();
        return CarModel.create({_id: id, ...dto})
    }

    update(id: string, dto: UpdateCarInput) {
        const objId = new mongoose.Types.ObjectId(id);
        return CarModel.findByIdAndUpdate({_id: objId}, {...dto}, {new: true})
    }

    deleteCar(id: string) {
        const objId = new mongoose.Types.ObjectId(id);
        console.log(objId)
        return CarModel.findByIdAndDelete(objId).exec()
    }

    getAll(query: ReadAllCarsInput): Promise<ICar[]>{
        let filterOptions: FilterQuery<ICar> = {}
        if (typeof query.brand != "undefined") { filterOptions.brand = new RegExp(query.brand, 'i')}
        if (typeof query.name != "undefined") { filterOptions.name = new RegExp(query.name, 'i') }
        if (typeof query.price != "undefined") { filterOptions.price = query.price }
        return CarModel.find(filterOptions)
    }

    getById(id: string) {
        const objId = new mongoose.Types.ObjectId(id);
        return CarModel.findById({_id: objId}).exec()
    }
}