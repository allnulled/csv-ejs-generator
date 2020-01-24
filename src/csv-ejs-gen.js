const csvParse = require("csv-parse");
const ejs = require("ejs");
const fs = require("fs");

/**
 * 
 * 
 * 
 */
const Utilities = {

	/**
	 * 
	 * 
	 * 
	 */
	generateParameters(parameters = {}) {
		const parameters2 = {};
		Object.keys(parameters).forEach(key => {
			if(key.startsWith("parameter")) {
				const base = key.replace(/^parameter/g, "");
				const key2 = base.substr(0,1).toLowerCase() + base.substr(1);
				parameters2[key2] = parameters[key];
			} else {
				parameters2[key] = parameters[key];
			}
		});
		return Object.assign({
			csv: [],
			csvScopes: [],
			json: [],
			jsonScopes: [],
			ejs: [],
			ejsOutputs: [],
			js: []
		}, parameters);
	},

	/**
	 * 
	 * 
	 * 
	 */
	parseCSV(file) {
		// @TODO:
	},

	/**
	 * 
	 * 
	 * 
	 */
	parseAllCSVs(csv, csvScopes, data) {
		// @TODO:
	}
	
	/**
	 * 
	 * 
	 * 
	 */
	parseJSON(file) {
		// @TODO:
	},

	/**
	 * 
	 * 
	 * 
	 */
	parseAllJSONs(json, jsonScopes, data) {
		// @TODO:
	},
	
	/**
	 * 
	 * 
	 * 
	 */
	renderEJS(file, parameters = {}, options = {}) {
		// @TODO:
	},

	/**
	 * 
	 * 
	 * 
	 */
	renderAllEJSs(ejs, ejsOutputs, data, parameters, tool) {
		// @TODO:
	},

	/**
	 * 
	 * 
	 * 
	 */
	runAllJSs(js, data, parameters, tool) {
		// @TODO:
	}

};

/**
 * 
 * 
 * 
 */
class CsvEjsGen {

	/**
	 * 
	 * 
	 * 
	 */
	static execution(passedParameters = {}) {
		const parameters = Utilities.generateParameters(passedParameters);
		const data = {};
		Utilities.parseAllCSVs(parameters.csv, parameters.csvScopes, data);
		Utilities.parseAllJSONs(parameters.json, parameters.jsonScopes, data);
		Utilities.renderAllEJSs(parameters.ejs, parameters.ejsOutputs, data, parameters, this);
		Utilities.runAllJSs(parameters.js, data, parameters, this);
		return { parameters, data };
	}

}

module.exports = CsvEjsGen;