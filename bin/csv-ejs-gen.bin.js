#!/usr/bin/env node

const yargs = require("yargs");
const CsvEjsGen = require(__dirname + "/../src/csv-ejs-gen.js");
const args = yargs.argv;
CsvEjsGen.execution(args);