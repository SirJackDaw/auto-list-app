import { UpdateCarDto } from "./updateCar.dto.js";

export interface CreateCarDto extends UpdateCarDto {
    createdBy: string;
}