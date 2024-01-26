import mongoose from "mongoose";
import CarModel from "./car.model.js";
import { CreateCarInput, UpdateCarInput } from "../inputs/schemas.js";

export function create(dto: CreateCarInput["body"]) {
    const id = new mongoose.Types.ObjectId();
    return CarModel.create({_id: id, ...dto})
}
export function update(id: string, dto: UpdateCarInput["body"]) {
    const objId = new mongoose.Types.ObjectId(id);
    return CarModel.findByIdAndUpdate({_id: objId}, {...dto}, {lean: true})
}
export function deleteCar(id: string) {
    const objId = new mongoose.Types.ObjectId(id);
    CarModel.deleteOne({_id: objId})
}

export function getAll() {
    CarModel.find({})
}

export function getById(id: string) {
    const objId = new mongoose.Types.ObjectId(id);
    CarModel.deleteOne({_id: objId})
}

// export class CarRepository {
//     carModel;
//     constructor() {
//         this.carModel = CarModel;
//     }
//     create() {
//         this.carModel.create({})
//     }
//     update(id: string) {
//         const objId = new mongoose.Types.ObjectId(id);
//         this.carModel.updateOne({_id: objId}, {})
//     }
//     delete(id: string) {
//         const objId = new mongoose.Types.ObjectId(id);
//         this.carModel.deleteOne({_id: objId})
//     }
//     getAll() {
//     }

//     getById(id: string) {
//         const objId = new mongoose.Types.ObjectId(id);
//         this.carModel.deleteOne({_id: objId})
//     }
// }