import { CreateCarDto } from "../dto/createCar.dto.js"
import * as carRepository from "../database/repository.js"
import { UpdateCarDto } from "../dto/updateCar.dto.js"

export function create(dto: CreateCarDto) {
    return carRepository.create(dto)
}

export function update(id: string, dto: UpdateCarDto) {
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