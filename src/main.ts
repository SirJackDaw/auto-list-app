#!/usr/bin/env node
import yargs from "yargs";

const print5Moves = async (pockemonName: string) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pockemonName}`);
    const pockemon: any = await response.json();
    const moves = pockemon.moves.map(({ move } : any) => move.name).slice(0, 6);
    console.log(moves)
}

const argv = await yargs(process.argv).argv;
const pockemon: string = argv.pockemon as string;
console.log(pockemon)

print5Moves(pockemon)