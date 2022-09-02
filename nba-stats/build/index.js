"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameReader_1 = require("./GameReader");
const CsvFileReader_1 = require("./CsvFileReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader('basketball.csv');
const gameReader = new GameReader_1.GameReader(csvFileReader);
gameReader.load();
