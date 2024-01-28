import { Config } from "./config.js";
import { ConsoleOutput } from "./consoleOutput.js";
import { generateQuery } from "./helpers/api.js";
import { Car, User } from "./types.js";

export class RequestService {
    config: Config;
    output: ConsoleOutput;
    constructor() {
        this.config = Config.getInstance()
        this.output = new ConsoleOutput();
    }

    async create(dto: any, user: User) {
        const response = await fetch(`${this.config.get('SERVER_URL')}/v1/cars`, {
            method: 'POST', 
            body: JSON.stringify(dto), 
            headers: {
                "Content-Type": "application/json",
                ...user
            }
        });
        const car: any = await response.json();
        this.output.show(car)
    }

    async update(id: string, dto: any, user: User) {
        for (const key in dto) {
            if (dto[key] === undefined) delete dto[key]
        }
        const response = await fetch(`${this.config.get('SERVER_URL')}/v1/cars/${id}`, {
            method: 'PATCH', 
            body: JSON.stringify(dto), 
            headers: {
                "Content-Type": "application/json",
                ...user
            }
        });
        const car: any = await response.json();
        this.output.show(car)
    }

    async delete(id: string, user: User) {
        const response = await fetch(`${this.config.get('SERVER_URL')}/v1/cars/${id}`, {
            method: 'DELETE', headers: user
        });
        if (response.status === 204) console.log('deleted')
    }

    async getAll(dto: Partial<Car>, user: User) {
        const response = await fetch(`${this.config.get('SERVER_URL')}/v1/cars?${generateQuery(dto)}`, {
            method: 'GET', headers: user
        });
        const car: any = await response.json();
        this.output.show(car)
    }

    async getById(id: string, user: User) {
        const response = await fetch(`${this.config.get('SERVER_URL')}/v1/cars/${id}`, {
            method: 'GET', headers: user
        });
        const car: any = await response.json();
        this.output.show(car)
    }
}