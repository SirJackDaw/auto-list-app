#!/usr/bin/env node
import yargs from "yargs";

const print5Moves = async (pockemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`);
    const pockemon: any = await response.json();
    const moves = pockemon.moves.map(({ move } : any) => move.name).slice(0, 6);
    console.log(moves)
}

const argv = await yargs(process.argv.slice(2)).options({
    user: { type: 'string', demandOption: true, alias: 'u' },
    pass: { type: 'string', demandOption: true, alias: 'p' },
    create: { type: 'boolean', demandOption: false, alias: 'c' },
    get: { type: 'boolean', demandOption: false, alias: 'g' },
    update: { type: 'boolean', demandOption: false, alias: 'u' },
    delete: { type: 'boolean', demandOption: false, alias: 'd' },
    pockemon: { type: 'string', demandOption: true, alias: 'pok' },
}).parseSync();
const pockemon: string = argv.pokemon as string;
console.log(pockemon)

print5Moves(pockemon)