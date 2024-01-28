import { Arguments } from "yargs"
import { RequestService } from "./requests.js"


const options = {
    id: { describe: 'id', type: 'string', demandOption: true },
    brand: { describe: 'Car brand', type: 'string', alias: 'b'},
    name: { describe: 'Car name', type: 'string', alias: 'n' },
    price: { describe: 'Car price', type: 'number', alias: 'p' },
    manufacturedYear: { describe: 'Car manufactured year', type: 'number', alias: 'y' },

    user: { describe: 'User', type: 'string', demandOption: true, alias: 'u' },
    password: { describe: 'Password', type: 'string', demandOption: true, alias: 'q'}//if two or more letters suffix is double dash
}

export class Routes {
    //it may be full controller layer here but I don't want to overcomplicate this task
    constructor(private readonly requests: RequestService) {}

    cretate = {
        command: 'create',
        describe: 'Create a new car',
        builder: (yargs: any) => {
            return yargs
                .option('brand', { ...options.brand, demandOption: true })
                .option('name', { ...options.name, demandOption: true })
                .option('price', { ...options.price, demandOption: true})
                .option('manufacturedYear', { ...options.manufacturedYear, demandOption: true})
                .option('user', options.user)
                .option('password', options.password)
        },
        handler: (argv: Arguments) => this.requests.create(
            {
                brand: argv.brand as string, 
                name: argv.name as string,
                price: argv.price as string,
                manufacturedYear: argv.manufacturedYear as string
            }, 
            { 
                user: argv.user as string, 
                password: argv.password as string
            }
        ),
    }

    update = {
        command: 'update',
        describe: 'Update Car',
        builder: (yargs: any) => {
            return yargs
                .option('id', options.id)
                .option('brand', options.brand)
                .option('name', options.name)
                .option('price', options.price)
                .option('manufacturedYear', options.manufacturedYear)
                .option('user', options.user)
                .option('password', options.password)
        },
        handler: (argv: Arguments) => this.requests.update(
            argv.id as string,
            {
                brand: argv.brand as string, 
                name: argv.name as string,
                price: argv.price as string,
                manufacturedYear: argv.manufacturedYear as string
            }, 
            { 
                user: argv.user as string, 
                password: argv.password as string
            }
        )
    }

    delete = {
        command: 'delete',
        describe: 'Delete Car',
        builder: (yargs: any) => {
            return yargs
                .option('id', options.id)
                .option('user', options.user)
                .option('password', options.password)
        },
        handler: (argv: Arguments) => this.requests.delete(
            argv.id as string, 
            { 
                user: argv.user as string, 
                password: argv.password as string
            }
        )
    }

    getById = {
        command: 'byId',
        describe: 'Get Car',
        builder: (yargs: any) => {
            return yargs
                .option('id', options.id)
                .option('user', options.user)
                .option('password', options.password)
        },
        handler: (argv: Arguments) => this.requests.getById(
            argv.id as string, 
            { 
                user: argv.user as string, 
                password: argv.password as string 
            }
        )
    }

    getAll = {
        command: 'all',
        describe: 'Get Cars',
        builder: (yargs: any) => {
            return yargs
                .option('brand', options.brand)
                .option('name', options.name)
                .option('price', options.price)
                .option('manufacturedYear', options.manufacturedYear)
                .option('user', options.user)
                .option('password', options.password)
        },
        handler: (argv: Arguments) => this.requests.getAll(
            {
                brand: argv.brand as string,
                name: argv.name as string,
                price: argv.price as string,
                manufacturedYear: argv.manufacturedYear as string
            }, 
            { 
                user: argv.user as string, 
                password: argv.password as string
            }
        ),
        example: [
            'hui'
        ]
    }
}