"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameReader_1 = require("./GameReader");
const CsvFileReader_1 = require("./CsvFileReader");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
const WinsAnalysis_1 = require("./analysers/WinsAnalysis");
const Summary_1 = require("./Summary");
const HtmlReport_1 = require("./reportTargets/HtmlReport");
const csvFileReader = new CsvFileReader_1.CsvFileReader('basketball.csv');
const gameReader = new GameReader_1.GameReader(csvFileReader);
gameReader.load();
const summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Heat'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(gameReader.games);
const summary2 = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Heat'), new HtmlReport_1.HtmlReport());
summary2.buildAndPrintReport(gameReader.games);
