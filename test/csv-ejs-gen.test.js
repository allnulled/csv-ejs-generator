const { expect } = require("chai");
const CsvEjsGenerator = require(__dirname + "/../src/csv-ejs-gen.js");
const exec = require("execute-command-sync");

describe("CsvEjsGenerator API", function() {
	this.timeout(5000);
	
	it("can execute without parameters", function() {
		CsvEjsGenerator.execution();
	});



});

describe("CsvEjsGenerator CLI", function() {
	this.timeout(5000);
	
	it("can execute without parameters", function() {
		exec("ceg");
	});

	it("can execute with extra parameters", function() {
		exec("ceg --parameter-something data1");
	});

	

});