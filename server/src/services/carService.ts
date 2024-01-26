import * as carRepository from "../database/repository.js"
import { CreateCarInput, UpdateCarInput } from "../inputs/schemas.js"

export function create(dto: CreateCarInput["body"]) {
    return carRepository.create(dto)
}

export function update(id: string, dto: UpdateCarInput["body"]) {
    return carRepository.update(id, dto)
}

export function deleteCar(id: string) {
    return carRepository.deleteCar(id)
}

export function getAll() {
    return carRepository.getAll()
}

export function getById(id: string) {
    return carRepository.getById(id)
}