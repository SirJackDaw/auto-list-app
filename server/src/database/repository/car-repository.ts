import mongoose from "mongoose";
import CarModel from "../model/car.model.js";
import { CreateCarInput, UpdateCarInput } from "../../inputs/schemas.js";

export class CarRepository {
    constructor() {}

    create(dto: CreateCarInput["body"]) {
        const id = new mongoose.Types.ObjectId();
        return CarModel.create({_id: id, ...dto})
    }
    update(id: string, dto: UpdateCarInput["body"]) {
        const objId = new mongoose.Types.ObjectId(id);
        return CarModel.findByIdAndUpdate({_id: objId}, {...dto}, {lean: true})
    }
    deleteCar(id: string) {
        const objId = new mongoose.Types.ObjectId(id);
        return CarModel.deleteOne({_id: objId})
    }
    getAll() {
        return CarModel.find({})
    }
    getById(id: string) {
        const objId = new mongoose.Types.ObjectId(id);
        return CarModel.findById({_id: objId})
    }
}

// export function create(dto: CreateCarInput["body"]) {
//     const id = new mongoose.Types.ObjectId();
//     return CarModel.create({_id: id, ...dto})
// }
// export function update(id: string, dto: UpdateCarInput["body"]) {
//     const objId = new mongoose.Types.ObjectId(id);
//     return CarModel.findByIdAndUpdate({_id: objId}, {...dto}, {lean: true})
// }
// export function deleteCar(id: string) {
//     const objId = new mongoose.Types.ObjectId(id);
//     return CarModel.deleteOne({_id: objId})
// }

// export async function getAll() {
//     return CarModel.find({})
// }

// export async function getById(id: string) {
//     const objId = new mongoose.Types.ObjectId(id);
//     return CarModel.findById({_id: objId})
// }

// export const carRepository = {
//     create,
//     update,
//     deleteCar,
//     getAll,
//     getById
// }