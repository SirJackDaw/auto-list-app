#!/usr/bin/env node
import yargs from "yargs";
import { RequestService } from "./requests.js";
import { Routes } from "./routes.js";

const requests = new RequestService();
const routes = new Routes(requests);

let argv = await yargs(process.argv.slice(2))
.command(routes.cretate)
.command(routes.update)
.command(routes.delete)
.command(routes.getById)
.command(routes.getAll)
.parseAsync();
