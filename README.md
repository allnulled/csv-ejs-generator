# csv-ejs-gen

![](https://img.shields.io/badge/version-1.0.0-green.svg) ![](https://img.shields.io/badge/tests-passing-green.svg) ![](https://img.shields.io/badge/coverage-no-red.svg) 

Generate files from `ejs`/`js` templates and `csv`/`json` files, via **CLI** or **API**.

[![NPM](https://nodei.co/npm/progene.png?stars&downloads)](https://www.npmjs.com/package/progene)

## Introduction

This package can help you to create files from `csv`/`json` data and `ejs` templates or `js` files, effortlessly.

This package can be used as API or CLI.

Both, API and CLI share options.

## Installation

`~$ npm install -g csv-ejs-gen`

## Options

The following options are available.

The **data options** refer to the input of the process.

The **generator options** refer to the output of the process.

*Data options:*

- `--csv`. *(Optional)*.
   - It accepts multiple `*.csv` files.
- `--csv-scopes`. *(Optional)*.
   - It accepts multiple strings.
   - They are the name of the variables in which each `csv` file data are scoped.
   - It uses the same order of the `--csv` parameters.
   - By default, the scope of each file is the same name of the file.
- `--json`. *(Optional)*.
   - It accepts multiple `*.json` files.
- `--json-scopes`. *(Optional)*.
   - It accepts multiple strings.
   - They are the name of the variables in which each `json` file data are scoped.
   - It uses the same order of the `--json` parameters.
   - By default, the scope of each file is the same name of the file.
- `--parameter-*`. *(Optional)*. *(Multiple times)*.
   - It accepts multiple strings.
   - It accepts its usage multiple times.
   - The `*` means that you can provide your own name for each variable.
   - The name of the `*` variable will be the key.
   - The values passed will be the values of that same key.

*Generator options:*

- `--ejs`. *(Optional)*.
   - It accepts multiple `*.ejs` files.
- `--js`. *(Optional)*.
   - It accepts multiple `*.js` files.
   - These files must `export` a function which will receive:
      - **data**: the parsed data from `csv`, `json` and the rest of the command line parameters.
      - **parameters**: the parsed parameters.
      - **tool**: the framework itself.
- `--output`. *(Optional)*.
   - It accepts multiple files.
   - They are the output files of the `*.ejs` files passed to the `--ejs` parameter.
   - It uses the same order of the `--ejs` parameters.
   - When an `*.ejs` file has no output specified, the output will be the same `*.ejs.txt`.

## CLI

To see the help:

`~$ ceg --help`

The accepted parameters are the ones listed in the previous point.

## API

To use the API, you can use the method:

```js
const CsvEjsGenerator = require("csv-ejs-generator");
CsvEjsGenerator.execution({...});
```

The parameters accepted by this method are the same parameters of the options, but instead of:

`--json-scopes`

...you have to provide...:

`{ jsonScopes : [...] }`

The API does the same as the CLI.



