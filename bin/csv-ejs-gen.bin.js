#!/usr/bin/env node

const CsvEjsGen = require(__dirname + "/../src/csv-ejs-gen.js");
const args = require("yargs")
	.usage("Usage: $0 [opts]")
	.version(require(__dirname + "/../package.json").version)
	.option("csv", {
		type: "array",
		default: [],
		describe: "CSV files as data.",
	})
	.option("csv-scopes", {
		type: "array",
		default: [],
		describe: "Scopes of the CSV files.",
	})
	.option("json", {
		type: "array",
		default: [],
		describe: "JSON files as data.",
	})
	.option("json-scopes", {
		type: "array",
		default: [],
		describe: "Scopes of the JSON files.",
	})
	.option("ejs", {
		type: "array",
		default: [],
		describe: "EJS files as generators.",
	})
	.option("ejs-outputs", {
		type: "array",
		default: [],
		describe: "Output files of EJS generators.",
	})
	.option("js", {
		type: "array",
		default: [],
		describe: "JS files as generators or callbacks.",
	})
	.epilogue("Use --parameter-{key} {string-value} to add new keys to data from command line.")
	.argv;
CsvEjsGen.execution(args);