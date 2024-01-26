import mongoose from "mongoose";
import CarModel from "./car.model.js";
import { CreateCarDto } from "../dto/createCar.dto.js";
import { UpdateCarDto } from "../dto/updateCar.dto.js";

export function create(dto: CreateCarDto) {
    const id = new mongoose.Types.ObjectId();
    CarModel.create({_id: id, ...dto})
}
export function update(id: string, dto: UpdateCarDto) {
    const objId = new mongoose.Types.ObjectId(id);
    CarModel.updateOne({_id: objId}, {})
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